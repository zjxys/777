// Vercel Serverless Function - 图片转文字（OCR）接口
// 对应路径：/api/ocr
// 使用硅基流动视觉大模型识别手写作文

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: '只支持 POST 请求' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ success: false, error: '请提供图片数据' });
    }

    const apiKey = process.env.SILICONFLOW_API_KEY;
    const baseUrl = process.env.SILICONFLOW_BASE_URL || 'https://api.siliconflow.cn/v1';
    const visionModel = process.env.SILICONFLOW_VISION_MODEL || 'Qwen/Qwen2.5-VL-7B-Instruct';

    if (!apiKey) {
      return res.status(500).json({ success: false, error: 'API Key 未配置' });
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: visionModel,
        messages: [
          {
            role: 'system',
            content: '你是一个精准的文字识别助手。请识别图片中的手写或印刷文字，只返回识别到的纯文本内容，不要添加任何解释、标注或格式化文字。保留原文的段落分隔。'
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: '请识别这张图片中的所有文字，按原文逐字输出，保留段落结构。' },
              { type: 'image_url', image_url: { url: image } }
            ]
          }
        ],
        temperature: 0.1,
        max_tokens: 3000
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(500).json({
        success: false,
        error: `识别失败: ${response.status}`
      });
    }

    const data = await response.json();
    const text = data.choices[0].message.content.trim();

    res.status(200).json({ success: true, text });
  } catch (error) {
    console.error('OCR失败:', error.message);
    res.status(500).json({
      success: false,
      error: error.message || '文字识别服务暂时不可用'
    });
  }
}
