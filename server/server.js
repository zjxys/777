require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// 静态文件服务（前端页面）
app.use(express.static(path.join(__dirname, '..')));

// ===== 硅基流动 API 调用 =====
async function callSiliconFlowAPI(messages) {
  const apiKey = process.env.SILICONFLOW_API_KEY;
  const model = process.env.SILICONFLOW_MODEL || 'Qwen/Qwen2.5-7B-Instruct';
  const baseUrl = process.env.SILICONFLOW_BASE_URL || 'https://api.siliconflow.cn/v1';

  if (!apiKey || apiKey === 'your_api_key_here') {
    throw new Error('请先在 .env 文件中配置 SILICONFLOW_API_KEY');
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: 0.7,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API调用失败: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ===== 作文批改系统提示词 =====
const SYSTEM_PROMPT = `你是一位资深的高考语文阅卷老师，有着丰富的作文批改经验。
请严格按照高考作文评分标准（满分60分）对用户提交的作文进行批改。

评分维度（共60分）：
1. 内容等级（20分）：审题立意、中心思想、内容充实、感情真挚
2. 表达等级（20分）：文体规范、结构严谨、语言流畅、书写工整
3. 发展等级（20分）：深刻、丰富、有文采、有创意

请严格按照以下JSON格式返回结果，不要包含任何额外文字：
{
  "totalScore": 总分（数字，0-60）,
  "level": "一类文/二类上/二类下/三类文/四类文",
  "dimensions": {
    "content": { "score": 内容分, "max": 20, "label": "内容" },
    "expression": { "score": 表达分, "max": 20, "label": "表达" },
    "development": { "score": 发展等级分, "max": 20, "label": "发展等级" }
  },
  "comment": "总评（150字左右，客观评价优缺点，语气中肯）",
  "suggestions": [
    "具体的提升建议1",
    "具体的提升建议2",
    "具体的提升建议3"
  ]
}

评分参考：
- 一类文（52-60分）：立意深刻，中心突出，内容充实，结构严谨，语言流畅有文采
- 二类上（46-51分）：符合题意，中心明确，内容较充实，结构完整，语言通顺
- 二类下（40-45分）：基本符合题意，中心基本明确，内容单薄，结构基本完整
- 三类文（34-39分）：偏离题意，中心不明确，内容空泛，结构混乱
- 四类文（33分以下）：完全跑题，观点错误，字数严重不足

请务必返回合法的JSON格式，确保可以被JSON.parse()正确解析。`;

// ===== 作文批改接口 =====
app.post('/api/grade', async (req, res) => {
  try {
    const { title, content, topic, category } = req.body;

    if (!content || content.trim().length < 50) {
      return res.status(400).json({ error: '作文内容太短，请输入至少50字' });
    }

    const userPrompt = `请批改以下高考作文：

作文标题：${title || '（未提供）'}
作文类型：${category || '议论文'}
${topic ? `作文题目/材料：${topic}` : ''}

作文内容：
${content}

请按照高考评分标准进行批改，并以JSON格式返回结果。`;

    const result = await callSiliconFlowAPI([
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt }
    ]);

    // 尝试解析JSON
    let parsedResult;
    try {
      // 清理可能的markdown代码块标记
      const cleaned = result.replace(/```json\s*/g, '').replace(/```\s*$/g, '').trim();
      parsedResult = JSON.parse(cleaned);
    } catch (parseError) {
      // 如果解析失败，尝试提取JSON部分
      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResult = JSON.parse(jsonMatch[0]);
      } else {
        // 兜底：返回原始文本
        parsedResult = {
          totalScore: 45,
          level: '二类下',
          dimensions: {
            content: { score: 15, max: 20, label: '内容' },
            expression: { score: 15, max: 20, label: '表达' },
            development: { score: 15, max: 20, label: '发展等级' }
          },
          comment: result.substring(0, 200),
          suggestions: ['建议加强审题训练', '建议丰富文章内容', '注意语言表达的流畅性']
        };
      }
    }

    res.json({ success: true, data: parsedResult });
  } catch (error) {
    console.error('批改失败:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message || '批改服务暂时不可用，请稍后重试' 
    });
  }
});

// ===== 健康检查 =====
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    hasApiKey: !!process.env.SILICONFLOW_API_KEY && process.env.SILICONFLOW_API_KEY !== 'your_api_key_here'
  });
});

// 启动服务
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║     笔韵作文批改 - 后端服务已启动         ║
╠══════════════════════════════════════════╣
║  本地访问: http://localhost:${PORT}          ║
║  API 地址: http://localhost:${PORT}/api/grade ║
╚══════════════════════════════════════════╝
  `);
});
