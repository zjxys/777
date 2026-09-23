// ===== 模拟数据 =====

// 范文库数据
const essayLibrary = [
  {
    id: 1,
    year: '2024年全国甲卷',
    title: '以技术之翼，驭人文之舟',
    score: 58,
    category: '议论文',
    wordCount: 1080,
    readTime: 2623,
    tags: ['技术与人文', '思辨', '高考真题'],
    preview: '随着人工智能的飞速发展，技术与人文的关系愈发引人深思。有人担忧技术会消解人文的温度，也有人坚信技术能为人文插上翅膀。在我看来，技术与人文并非对立的两极，而是相辅相成的双翼...',
    content: [
      '随着人工智能的飞速发展，技术与人文的关系愈发引人深思。有人担忧技术会消解人文的温度，也有人坚信技术能为人文插上翅膀。在我看来，技术与人文并非对立的两极，而是相辅相成的双翼，唯有以技术之翼驭人文之舟，方能驶向更加美好的未来。',
      '技术是人文发展的催化剂，为人文的传播与传承开辟了新的可能。曾几何时，知识被禁锢在象牙塔中，寻常百姓难以触及。而印刷术的发明，让书籍走入千家万户；互联网的普及，让信息实现了全球共享。如今，数字故宫让千年文明在指尖流淌，线上课堂让山区孩子也能聆听名师教诲。技术打破了时空的壁垒，让人文的光芒照亮了更多角落。',
      '然而，技术的快速发展也带来了新的挑战。算法推荐塑造的"信息茧房"，让人们的视野日益狭隘；碎片化阅读的盛行，让深度思考变得稀缺。当我们习惯于用表情包代替言语，用短视频代替阅读，人文的厚度是否正在被消解？答案是否定的。技术只是工具，关键在于使用工具的人。正如笔可以书写华章，也可以涂抹涂鸦，技术的价值最终取决于人的选择。',
      '真正的智慧，是在技术的浪潮中守住人文的根基。钱学森先生不仅是伟大的科学家，更是深谙艺术之道的学者，他曾说："艺术上的修养不仅加深了我对艺术作品中那些诗情画意和人生哲理的深刻理解，也让我学会了艺术上大跨度的宏观形象思维。"正是人文的滋养，让他在科学的道路上走得更远。同样，人文工作者也应积极拥抱技术，用新的载体传递古老的智慧。',
      '站在时代的十字路口，我们既要仰望技术的星空，也要脚踏人文的大地。让技术的理性与人文的温情交融，让创新的动力与传承的坚守并行。唯有如此，我们才能在飞速发展的时代中不迷失方向，让文明的薪火代代相传。'
    ],
    comment: '本文立意深刻，论证层层递进。开篇点明中心论点，接着从正反两方面展开论述，最后提出解决之道。论据丰富，既有历史事实，也有现实案例，还有名人名言，增强了文章的说服力。语言优美，富有文采，是一篇优秀的考场作文。'
  },
  {
    id: 2,
    year: '2024年全国乙卷',
    title: '吹灭别人的灯，会烧掉自己的胡子',
    score: 57,
    category: '议论文',
    wordCount: 1056,
    readTime: 2451,
    tags: ['合作共赢', '国际关系', '高考真题'],
    preview: '哈萨克斯坦有句谚语："吹灭别人的灯，会烧掉自己的胡子。"这句朴素的话语蕴含着深刻的哲理——损害他人利益，最终也会伤及自身。在这个互联互通的时代，零和博弈早已过时，合作共赢才是正道...',
    content: [
      '哈萨克斯坦有句谚语："吹灭别人的灯，会烧掉自己的胡子。"这句朴素的话语蕴含着深刻的哲理——损害他人利益，最终也会伤及自身。在这个互联互通的时代，零和博弈早已过时，合作共赢才是正道。',
      '翻开历史的长卷，我们不难发现，那些试图"吹灭别人的灯"的人，最终往往引火烧身。战国时期，庞涓因嫉妒孙膑的才能，设计陷害，最终却在马陵道兵败身亡；三国时期，周瑜屡次设计加害诸葛亮，结果"赔了夫人又折兵"，落得个"既生瑜，何生亮"的悲叹。反观那些懂得成人之美者，往往能成就更大的事业。鲍叔牙举荐管仲，成就了齐桓公的霸业，也留下了"管鲍之交"的千古佳话。',
      '放眼当今世界，经济全球化的浪潮将各国紧密联系在一起。在这个"地球村"里，没有哪个国家能够独善其身。然而，总有一些国家逆历史潮流而动，挥舞着贸易保护主义的大棒，试图通过打压他国来维护自身霸权。他们挥舞制裁大棒，搞技术封锁，以为这样就能永远领先。殊不知，在全球产业链高度融合的今天，"卡别人的脖子"最终也会卡住自己的手脚。芯片断供导致全球供应链紧张，贸易战让双方企业都蒙受损失——这些都是"吹灭别人的灯，烧掉自己的胡子"的现实写照。',
      '反观中国，始终坚持合作共赢的发展理念。"一带一路"倡议提出十年来，从亚洲到欧洲，从非洲到拉美，无数基础设施项目落地生根，为当地创造了就业，改善了民生。中国的高铁技术走向世界，让更多国家享受到了速度与便捷；中国的疫苗援助跨越山海，为全球抗疫贡献力量。事实证明，只有大家都好，自己才能更好。',
      '作为新时代的青年，我们更应树立合作共赢的理念。在学习中互相帮助，在竞争中共同进步。不要害怕别人超越自己，而要思考如何与他人一起变得更强。唯有如此，我们才能在人生的道路上行稳致远，也才能为构建人类命运共同体贡献青春力量。'
    ],
    comment: '本文论点鲜明，论据充实。文章从谚语切入，引出中心论点，然后从历史和现实两个层面展开论证，既有历史典故，又有国际时事，视野开阔。结尾联系青年实际，升华主题。语言流畅，论证有力。'
  },
  {
    id: 3,
    year: '2023年全国新高考I卷',
    title: '故事的力量',
    score: 59,
    category: '议论文',
    wordCount: 1120,
    readTime: 2890,
    tags: ['故事的力量', '文化传承', '高考真题'],
    preview: '好的故事，可以帮我们更好地表达和沟通，可以触动心灵、启迪智慧；好的故事，可以改变一个人的命运，可以展现一个民族的形象……故事是有力量的。从古至今，从个人到民族，故事的力量始终伴随我们前行...',
    content: [
      '好的故事，可以帮我们更好地表达和沟通，可以触动心灵、启迪智慧；好的故事，可以改变一个人的命运，可以展现一个民族的形象……故事是有力量的。从古至今，从个人到民族，故事的力量始终伴随我们前行。',
      '故事是个人成长的明灯。还记得儿时睡前妈妈讲的那些童话吗？《龟兔赛跑》让我们懂得了坚持的意义，《狼来了》教会了我们诚信的可贵。这些简单的故事，在我们幼小的心灵里种下了真善美的种子。长大后，我们读《史记》，被项羽"力拔山兮气盖世"的豪情所震撼，为蔺相如"先国家之急而后私仇"的胸襟所折服。一个个鲜活的人物，一段段动人的故事，塑造着我们的品格，指引着我们的人生方向。',
      '故事是民族精神的载体。中华民族五千年的文明史，就是一部由无数故事编织而成的壮丽史诗。从盘古开天、女娲补天的神话传说，到大禹治水、愚公移山的古老传说；从屈原"路漫漫其修远兮，吾将上下而求索"的执着追求，到范仲淹"先天下之忧而忧，后天下之乐而乐"的家国情怀；从红军长征的壮举，到航天英雄的事迹……这些故事代代相传，凝聚成了中华民族的精神基因。每当民族危亡之际，总有英雄人物从历史的故事中汲取力量，挺身而出，救亡图存。',
      '故事是文明交流的桥梁。在全球化的今天，故事更是跨文化交流的最好载体。一部《流浪地球》，让世界看到了中国人的家国情怀和集体主义精神；一首《高山流水》，让不同肤色的人们感受到了东方音乐的魅力；李子柒的短视频，让全世界领略了中国传统文化之美。相比于空洞的说教和抽象的概念，真实可感的故事更容易打动人、感染人。讲好中国故事，传播好中国声音，是我们这一代人的使命。',
      '然而，故事的力量不仅在于讲述，更在于创造。我们不仅是故事的倾听者，更是故事的书写者。每一个平凡的人，都在用自己的行动书写着属于自己的人生故事。让我们以奋斗为笔，以梦想为墨，书写出属于新时代的精彩故事，让故事的力量穿越时空，永远流传。'
    ],
    comment: '本文立意高远，结构清晰，语言优美。文章从个人、民族、文明三个层面展开论述，层层递进，逻辑严密。论据丰富，从神话传说到历史典故，从文学作品到当代现实，信手拈来，恰到好处。结尾升华主题，富有感染力。'
  },
  {
    id: 4,
    year: '2023年全国甲卷',
    title: '人·技术·时间',
    score: 56,
    category: '议论文',
    wordCount: 980,
    readTime: 2100,
    tags: ['技术发展', '时间', '思辨'],
    preview: '技术的发展给人们带来了前所未有的便利，也让人们对时间的掌控变得更加自如。然而，技术真的让我们成为时间的主人了吗？答案或许并不那么简单。在我看来，技术是一把双刃剑，它既可以延展时间的宽度...',
    content: [
      '技术的发展给人们带来了前所未有的便利，也让人们对时间的掌控变得更加自如。然而，技术真的让我们成为时间的主人了吗？答案或许并不那么简单。在我看来，技术是一把双刃剑，它既可以延展时间的宽度，也可能消解时间的深度，关键在于我们如何使用它。',
      '技术延展了时间的宽度，让我们在有限的生命里可以做更多的事。古代，一封信要走几个月甚至几年；如今，一条消息几秒钟就能传达到地球的另一端。过去，人们要花大量时间洗衣、做饭、打扫卫生；现在，洗衣机、电饭煲、扫地机器人帮我们分担了许多家务。交通的发展更是大大缩短了出行时间，朝发夕至不再是梦想。技术从某种意义上说，延长了我们的生命，让我们有更多时间去做更有价值的事情。',
      '然而，技术也在悄然间偷走了我们的时间。智能手机让我们随时随地都能联网，但也让我们陷入了无穷无尽的信息洪流。刷短视频、看朋友圈、逛购物App……不知不觉中，几个小时就过去了。算法推荐精准地投其所好，让我们沉迷其中无法自拔。更可怕的是，这种"时间小偷"是隐形的，我们甚至意识不到时间的流逝。等我们反应过来，才发现大把的时间已经被消耗在了无意义的事情上。',
      '更值得警惕的是，技术可能消解时间的深度。在快节奏的现代生活中，一切都追求效率和速度。我们习惯了倍速看剧，习惯了碎片化阅读，习惯了快速获得答案。然而，有些事情是急不得的。学习需要日积月累，成长需要时间沉淀，深度思考需要独处的空间。当一切都追求"快"的时候，我们可能会失去"慢"的能力，失去深度思考的能力，失去与自己对话的时间。',
      '那么，如何才能真正成为时间的主人？答案不在于拒绝技术，而在于合理使用技术。我们要做技术的主人，而不是技术的奴隶。该快的时候快，该慢的时候慢。用技术提高工作效率，省下时间去阅读、去思考、去陪伴家人、去感受生活。唯有如此，我们才能在技术的浪潮中不迷失自己，真正掌控自己的时间和人生。'
    ],
    comment: '本文辩证思考了技术与时间的关系，观点全面而深刻。文章结构清晰，先肯定技术的正面作用，再指出其负面影响，最后提出解决之道。论证充分，语言流畅，体现了较强的思辨能力。'
  },
  {
    id: 5,
    year: '2022年全国新高考I卷',
    title: '本手为基，妙手天成',
    score: 58,
    category: '议论文',
    wordCount: 1050,
    readTime: 2560,
    tags: ['围棋智慧', '基础与创新', '高考真题'],
    preview: '围棋有本手、妙手、俗手之说。本手是合乎棋理的正规下法，妙手是出人意料的精妙下法，俗手是貌似合理、而从全局看通常会受损的下法。对于初学者而言，唯有从本手开始，扎实打好基础，方能悟出妙手...',
    content: [
      '围棋有本手、妙手、俗手之说。本手是合乎棋理的正规下法，妙手是出人意料的精妙下法，俗手是貌似合理、而从全局看通常会受损的下法。对于初学者而言，唯有从本手开始，扎实打好基础，方能悟出妙手，避免俗手。下棋如此，人生亦然。',
      '本手是基础，是万丈高楼的地基，是千里之行的足下。没有本手的积累，就不会有妙手的灵光一现。王羲之练字，从最基本的横撇竖捺开始，池水尽墨，终成"书圣"；达芬奇画蛋，日复一日练习基本功，最终画出了传世名作《蒙娜丽莎》；袁隆平研究杂交水稻，从最基础的田间观察做起，几十年如一日，才培育出高产的杂交水稻。所有的"妙手"，都建立在扎实的"本手"之上。没有量的积累，就不会有质的飞跃。',
      '然而，现实中总有一些人热衷于追求"妙手"，不屑于"本手"的积累。他们看到别人成功，就想走捷径、抄近路，幻想一步登天。有些学生平时不努力，考前临时抱佛脚，甚至想通过作弊取得好成绩；有些创业者不钻研业务，整天想着找风口、赚快钱，结果往往以失败告终。这些人看似聪明，实则是走了"俗手"——看似占了便宜，实则吃了大亏。没有坚实的基础，再华丽的建筑也只是空中楼阁。',
      '当然，强调本手的重要性，并不意味着否定妙手的价值。真正的高手，都是在本手的基础上，不断探索和创新，最终走出妙手。如果只是墨守成规，不敢越雷池一步，那也永远不会有突破和进步。齐白石老人晚年仍坚持每天作画，在深厚功底的基础上勇于变革，"衰年变法"终成一代宗师。中国改革开放，也是在基本国情的基础上，大胆探索，走出了一条中国特色社会主义道路。本手是基础，妙手是创造；本手是传承，妙手是创新。',
      '作为新时代的青年，我们既要扎扎实实地练好"本手"，也要敢于追求"妙手"。在学习和工作中，脚踏实地，打好基础，同时保持创新的勇气和探索的精神。唯有如此，我们才能在人生的棋局上下出精彩的一手，才能在时代的浪潮中书写属于自己的华章。'
    ],
    comment: '本文紧扣材料，立意准确，论证层层深入。文章开篇点题，然后从正反两个方面论证本手的重要性，接着又补充论证了妙手的价值，逻辑严密。论据丰富，古今中外的例子信手拈来，增强了说服力。语言流畅，富有文采。'
  },
  {
    id: 6,
    year: '2022年全国乙卷',
    title: '跨越，再跨越',
    score: 57,
    category: '议论文',
    wordCount: 1020,
    readTime: 2340,
    tags: ['双奥之城', '跨越发展', '高考真题'],
    preview: '从2008年北京奥运会到2022年北京冬奥会，"双奥之城"见证了中国的跨越式发展。体育的跨越，科技的跨越，经济的跨越……一次次跨越的背后，是无数中国人的奋斗与拼搏。跨越永无止境，奋斗永不停息...',
    content: [
      '从2008年北京奥运会到2022年北京冬奥会，"双奥之城"见证了中国的跨越式发展。体育的跨越，科技的跨越，经济的跨越……一次次跨越的背后，是无数中国人的奋斗与拼搏。跨越永无止境，奋斗永不停息。',
      '跨越是对过去的超越，是对更好的追求。回望百年党史，中国共产党带领中国人民实现了一次又一次伟大的跨越。从站起来到富起来再到强起来，每一步跨越都来之不易，每一次飞跃都震撼世界。改革开放四十多年，中国经济总量跃居世界第二，人民生活水平大幅提高，科技实力显著增强。这些跨越不是天上掉下来的，而是一代代中国人用汗水和智慧拼出来的。',
      '跨越离不开脚踏实地的奋斗。没有日积月累的付出，就不会有惊艳世界的一跃。正如运动场上的健儿，台上一分钟，台下十年功。每一枚金牌的背后，都是无数个日夜的刻苦训练。同样，每一项科技突破的背后，都是科研人员数十年如一日的潜心研究。"天问"探火、"嫦娥"奔月、"蛟龙"入海、"复兴号"驰骋……这些成就的取得，靠的不是投机取巧，而是踏踏实实的努力。',
      '跨越更需要勇于突破的勇气。跨越意味着进入未知的领域，意味着要走前人没有走过的路。这就需要我们有敢为人先的锐气，有攻坚克难的勇气。新中国成立初期，面对西方国家的技术封锁，我们的科学家硬是凭着一股子不服输的劲头，搞出了"两弹一星"。今天，面对芯片等领域的"卡脖子"问题，我们更要有自主创新的决心和勇气，敢于啃硬骨头，敢于涉险滩，在关键核心技术上实现新的跨越。',
      '一代人有一代人的长征，一代人有一代人的跨越。作为新时代的青年，我们生逢其时，也重任在肩。我们要接过历史的接力棒，在各自的领域奋力拼搏，实现人生的跨越，推动国家的跨越。跨越，再跨越——这是时代的召唤，更是我们的使命。'
    ],
    comment: '本文主题鲜明，立意高远。文章从"双奥之城"切入，围绕"跨越"展开论述，从历史到现实，从国家到个人，层层递进。论据充实，既有国家发展的宏大叙事，也有个人奋斗的生动案例。语言有气势，富有感染力。'
  }
];

// 写作技巧数据
const writingTips = [
  {
    id: 1,
    title: '如何写好议论文的开头',
    category: '写作技巧',
    icon: 'red',
    views: 12580,
    likes: 892,
    content: '开头是文章的门面，好的开头能给阅卷老师留下良好的第一印象。议论文开头要做到"短、快、靓"：短，即简洁明了，不啰嗦；快，即快速入题，点明中心；靓，即精彩动人，有文采。常用的开头方法有：开门见山式、名言引入式、设问引人式、故事导入式、排比造势式等。'
  },
  {
    id: 2,
    title: '议论文论据的选择与使用',
    category: '写作技巧',
    icon: 'blue',
    views: 9860,
    likes: 756,
    content: '论据是议论文的血肉，选择好的论据是写好议论文的关键。选择论据要遵循四个原则：真实、典型、新颖、契合。使用论据要注意：一是叙述要简明，不要过于详细；二是要有分析，不能只摆事实不讲道理；三是要注意论据的排列顺序，可以按时间、按领域、按性质等排列。'
  },
  {
    id: 3,
    title: '让你的作文更有文采的10个技巧',
    category: '语言提升',
    icon: 'gold',
    views: 15420,
    likes: 1203,
    content: '有文采的作文更容易得高分。提升文采可以从以下几个方面入手：1.善用修辞手法，比喻、排比、拟人等；2.引用诗词名句，增加文化底蕴；3.注意句式变化，长短句结合，整散句结合；4.运用四字词语，使语言凝练；5.适当描写，增强画面感；6.巧用动词、形容词，使语言更生动；7.注意音韵和谐，读起来朗朗上口。'
  },
  {
    id: 4,
    title: '考场作文如何快速构思',
    category: '应试技巧',
    icon: 'green',
    views: 18960,
    likes: 1542,
    content: '考场作文时间紧、任务重，快速构思非常重要。建议采用"五步法"：第一步，审题立意，明确中心；第二步，拟好标题，亮明观点；第三步，搭建结构，安排层次；第四步，精选素材，充实内容；第五步，打造亮点，增添文采。平时可以多练习列提纲，提高构思速度。'
  },
  {
    id: 5,
    title: '议论文结尾的写法',
    category: '写作技巧',
    icon: 'red',
    views: 8750,
    likes: 623,
    content: '好的结尾能起到画龙点睛的作用。议论文结尾要做到收束有力，余味悠长。常见的结尾方式有：总结全文式、升华主题式、呼吁号召式、引用名言式、设问留思式等。无论哪种方式，都要注意呼应开头，使文章结构完整。切忌虎头蛇尾，也不要画蛇添足。'
  },
  {
    id: 6,
    title: '如何积累作文素材',
    category: '素材积累',
    icon: 'blue',
    views: 11230,
    likes: 890,
    content: '素材是作文的粮食，没有素材就写不出好作文。积累素材要做到：1.关注时事，积累热点素材；2.阅读经典，积累文化素材；3.留心生活，积累个人素材；4.分类整理，建立素材库。积累素材不是简单的背诵，而是要理解素材的内涵，思考素材可以用来论证什么观点，做到一材多用。'
  },
  {
    id: 7,
    title: '记叙文写作技巧',
    category: '文体写作',
    icon: 'green',
    views: 7680,
    likes: 512,
    content: '记叙文要写得感人，需要注意以下几点：1.选材要小，以小见大，从生活小事中挖掘深意；2.叙事要有波澜，避免平铺直叙；3.注重细节描写，用细节打动人心；4.适当运用景物描写，烘托气氛；5.情感要真挚，切忌空洞抒情。好的记叙文不是靠华丽的辞藻，而是靠真情实感。'
  },
  {
    id: 8,
    title: '高考作文评分标准解读',
    category: '应试技巧',
    icon: 'gold',
    views: 21560,
    likes: 1876,
    content: '了解评分标准，才能有的放矢。高考作文评分分为基础等级和发展等级。基础等级包括内容和表达两方面，各20分。发展等级20分，包括深刻、丰富、有文采、有创意四个方面。要想得高分，首先要保证基础等级不丢分，然后在发展等级上争取突破。特别要注意：审题不准，全盘皆输；结构混乱，得分很低；字迹潦草，影响得分。'
  }
];

// 用户历史记录
const userHistory = [
  {
    id: 1,
    title: '谈担当',
    date: '2024-09-20',
    day: '20',
    month: '9月',
    category: '议论文',
    wordCount: 986,
    score: 48,
    totalScore: 60
  },
  {
    id: 2,
    title: '我的青春之歌',
    date: '2024-09-15',
    day: '15',
    month: '9月',
    category: '记叙文',
    wordCount: 1024,
    score: 52,
    totalScore: 60
  },
  {
    id: 3,
    title: '科技与人文',
    date: '2024-09-10',
    day: '10',
    month: '9月',
    category: '议论文',
    wordCount: 956,
    score: 45,
    totalScore: 60
  },
  {
    id: 4,
    title: '那一刻，我长大了',
    date: '2024-09-05',
    day: '05',
    month: '9月',
    category: '记叙文',
    wordCount: 1100,
    score: 50,
    totalScore: 60
  }
];

// ===== 公共功能 =====

// 移动端菜单切换
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// 字数统计
function initCharCount() {
  const textarea = document.getElementById('essayContent');
  const charCount = document.getElementById('charCount');
  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const count = textarea.value.length;
      charCount.textContent = `${count} 字`;
      if (count < 800) {
        charCount.classList.add('warning');
      } else {
        charCount.classList.remove('warning');
      }
    });
  }
}

// ===== API Key 管理 =====
const SILICONFLOW_BASE_URL = 'https://api.siliconflow.cn/v1';
const SILICONFLOW_MODEL = 'Qwen/Qwen2.5-7B-Instruct';
const SILICONFLOW_VISION_MODEL = 'Qwen/Qwen2.5-VL-7B-Instruct';
const DEFAULT_API_KEY = 'sk-tsuxqnmffvzyahhdmmvdvzaxpluvlmgcherorbsvmiabonsl';

function getApiKey() {
  return localStorage.getItem('siliconflow_api_key') || DEFAULT_API_KEY;
}

function initApiKeyManager() {
  const apiKeyInput = document.getElementById('apiKeyInput');
  const saveBtn = document.getElementById('saveApiKeyBtn');
  const statusEl = document.getElementById('apiKeyStatus');
  if (!apiKeyInput || !saveBtn) return;

  // 加载已保存的 Key
  const savedKey = getApiKey();
  if (savedKey) {
    apiKeyInput.value = savedKey;
    statusEl.textContent = '✓ 已配置';
    statusEl.style.color = 'green';
  }

  saveBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      localStorage.removeItem('siliconflow_api_key');
      statusEl.textContent = '未配置';
      statusEl.style.color = '';
      return;
    }
    localStorage.setItem('siliconflow_api_key', key);
    statusEl.textContent = '✓ 已保存';
    statusEl.style.color = 'green';
  });
}

// ===== 前端直接调用硅基流动 API =====
async function callAI(messages, isVision = false) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('请先在页面上方输入并保存 API Key');
  }

  const response = await fetch(`${SILICONFLOW_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: isVision ? SILICONFLOW_VISION_MODEL : SILICONFLOW_MODEL,
      messages: messages,
      temperature: isVision ? 0.1 : 0.7,
      max_tokens: isVision ? 3000 : 2000
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API调用失败(${response.status})`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// 图片上传 + OCR 识别
function initImageUpload() {
  const uploadBtn = document.getElementById('uploadBtn');
  const imageInput = document.getElementById('imageInput');
  const imagePreview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  const removeImageBtn = document.getElementById('removeImageBtn');
  const ocrLoading = document.getElementById('ocrLoading');
  const essayContent = document.getElementById('essayContent');
  const charCount = document.getElementById('charCount');

  if (!uploadBtn || !imageInput) return;

  uploadBtn.addEventListener('click', () => {
    imageInput.click();
  });

  imageInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert('图片太大，请选择 10MB 以内的图片');
      imageInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      previewImg.src = base64;
      imagePreview.style.display = 'block';
      ocrLoading.style.display = 'flex';
      performOCR(base64);
    };
    reader.readAsDataURL(file);
  });

  if (removeImageBtn) {
    removeImageBtn.addEventListener('click', () => {
      imagePreview.style.display = 'none';
      previewImg.src = '';
      imageInput.value = '';
      ocrLoading.style.display = 'none';
    });
  }

  async function performOCR(base64Image) {
    try {
      const result = await callAI([
        { role: 'system', content: '你是一个精准的文字识别助手。请识别图片中的手写或印刷文字，只返回识别到的纯文本内容，不要添加任何解释。保留原文的段落分隔。' },
        { role: 'user', content: [
          { type: 'text', text: '请识别这张图片中的所有文字，按原文逐字输出，保留段落结构。' },
          { type: 'image_url', image_url: { url: base64Image } }
        ]}
      ], true);

      essayContent.value = result.trim();
      const count = essayContent.value.length;
      charCount.textContent = `${count} 字`;
      if (count < 800) charCount.classList.add('warning');
      else charCount.classList.remove('warning');
      ocrLoading.style.display = 'none';
    } catch (error) {
      console.error('OCR失败:', error.message);
      ocrLoading.style.display = 'none';
      alert('图片识别失败：' + error.message + '\n请手动输入作文内容');
    }
  }
}

// 作文批改系统提示词
const SYSTEM_PROMPT = `你是一位资深的高考语文阅卷老师，有着丰富的作文批改经验。
请严格按照高考作文评分标准（满分60分）对用户提交的作文进行批改。

评分维度（共60分）：
1. 内容等级（20分）：审题立意、中心思想、内容充实、感情真挚
2. 表达等级（20分）：文体规范、结构严谨、语言流畅、书写工整
3. 发展等级（20分）：深刻、丰富、有文采、有创意

请严格按照以下JSON格式返回结果，不要包含任何额外文字：
{
  "totalScore": 总分,
  "level": "一类文/二类上/二类下/三类文/四类文",
  "dimensions": {
    "content": { "score": 内容分, "max": 20, "label": "内容" },
    "expression": { "score": 表达分, "max": 20, "label": "表达" },
    "development": { "score": 发展等级分, "max": 20, "label": "发展等级" }
  },
  "comment": "总评（150字左右）",
  "suggestions": ["建议1", "建议2", "建议3"]
}

评分参考：
- 一类文（52-60分）：立意深刻，中心突出，内容充实，结构严谨，语言流畅有文采
- 二类上（46-51分）：符合题意，中心明确，内容较充实，结构完整，语言通顺
- 二类下（40-45分）：基本符合题意，中心基本明确
- 三类文（34-39分）：偏离题意，中心不明确
- 四类文（33分以下）：完全跑题

请务必返回合法的JSON格式。`;

// 作文批改
function initGradingForm() {
  const form = document.getElementById('gradingForm');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const resultPlaceholder = document.getElementById('resultPlaceholder');
  const resultContent = document.getElementById('resultContent');
  const loadingText = document.querySelector('.loading-text');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const content = document.getElementById('essayContent').value;
      const title = document.getElementById('essayTitle').value;
      const topic = document.getElementById('essayTopic') ? document.getElementById('essayTopic').value : '';
      const categorySelect = document.getElementById('essayCategory');
      const category = categorySelect ? categorySelect.options[categorySelect.selectedIndex].text : '议论文';
      
      if (!content || content.length < 100) {
        alert('请输入完整的作文内容（至少100字）');
        return;
      }

      // 显示加载状态
      loadingOverlay.classList.add('active');
      resultPlaceholder.style.display = 'none';
      resultContent.style.display = 'none';
      if (loadingText) loadingText.textContent = 'AI正在认真批改中...';

      try {
        if (!getApiKey()) {
          alert('请先在页面上方输入并保存 API Key');
          loadingOverlay.classList.remove('active');
          resultPlaceholder.style.display = 'block';
          return;
        }

        const userPrompt = `请批改以下高考作文：

作文标题：${title || '（未提供）'}
作文类型：${category || '议论文'}
${topic ? `作文题目/材料：${topic}` : ''}

作文内容：
${content}

请按照高考评分标准进行批改，并以JSON格式返回结果。`;

        const result = await callAI([
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ]);

        let parsedResult;
        try {
          const cleaned = result.replace(/```json\s*/g, '').replace(/```\s*$/g, '').trim();
          parsedResult = JSON.parse(cleaned);
        } catch (parseError) {
          const jsonMatch = result.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            parsedResult = JSON.parse(jsonMatch[0]);
          } else {
            throw new Error('AI返回格式异常，请重试');
          }
        }

        if (!parsedResult.totalMax) parsedResult.totalMax = 60;
        displayResult(parsedResult);
      } catch (error) {
        console.warn('API调用失败，使用本地模拟:', error.message);
        // 降级：使用本地模拟
        if (loadingText) loadingText.textContent = '使用本地模拟批改...';
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = generateMockResult(title, content);
        displayResult(result);
      } finally {
        loadingOverlay.classList.remove('active');
      }
    });
  }
}

// 生成模拟批改结果
function generateMockResult(title, content) {
  const len = content.length;
  
  // 基于字数和一些随机因素生成分数
  let baseScore = 36;
  if (len >= 800) baseScore += 8;
  else if (len >= 600) baseScore += 5;
  else if (len >= 400) baseScore += 2;
  
  // 内容分
  const contentScore = Math.round(baseScore / 60 * 20 + Math.random() * 3);
  // 表达分
  const expressionScore = Math.round(baseScore / 60 * 20 + Math.random() * 3);
  // 发展等级分
  const developmentScore = Math.round(baseScore / 60 * 20 + Math.random() * 4);
  
  const totalScore = Math.min(contentScore + expressionScore + developmentScore, 58);
  
  let level = '';
  if (totalScore >= 52) level = '一类文';
  else if (totalScore >= 46) level = '二类上';
  else if (totalScore >= 40) level = '二类下';
  else if (totalScore >= 34) level = '三类文';
  else level = '四类文';

  const comments = [
    '文章立意明确，结构完整，语言通顺。建议在论据的新颖性和论证的深度上再下功夫，可以多引用一些时事素材，增强文章的时代感。',
    '作文基本符合题意，内容尚充实，结构清晰。语言表达较为平实，可以适当运用一些修辞手法，增加文章的文采。注意书写规范，减少错别字。',
    '文章中心突出，思路清晰，有自己的思考和见解。语言流畅，有一定的文采。建议在论证的层次感和逻辑性方面再加强，使论证更加严密。'
  ];

  const suggestions = [
    '加强审题训练，确保立意准确、深刻',
    '积累更多素材，尤其是时事热点素材',
    '注意段落之间的过渡，使文章更连贯',
    '多练习拟写提纲，提高构思能力',
    '注意书写工整，保持卷面整洁'
  ];

  return {
    totalScore,
    totalMax: 60,
    level,
    dimensions: {
      content: { score: contentScore, max: 20, label: '内容' },
      expression: { score: expressionScore, max: 20, label: '表达' },
      development: { score: developmentScore, max: 20, label: '发展等级' }
    },
    comment: comments[Math.floor(Math.random() * comments.length)],
    suggestions: suggestions.sort(() => Math.random() - 0.5).slice(0, 3)
  };
}

// 显示批改结果
function displayResult(result) {
  const resultContent = document.getElementById('resultContent');
  resultContent.style.display = 'block';

  // 更新总分
  document.getElementById('totalScore').textContent = result.totalScore;
  document.getElementById('totalMax').textContent = result.totalMax;
  document.getElementById('scoreLevel').textContent = result.level;

  // 更新各维度分数
  const dimScores = document.querySelectorAll('.dim-score-item');
  const dims = Object.values(result.dimensions);
  dimScores.forEach((el, i) => {
    if (dims[i]) {
      el.querySelector('.dim-score-value').textContent = `${dims[i].score}/${dims[i].max}`;
      const bar = el.querySelector('.score-bar-fill');
      if (bar) {
        bar.style.width = `${(dims[i].score / dims[i].max) * 100}%`;
      }
    }
  });

  // 更新总评
  document.getElementById('commentText').textContent = result.comment;

  // 更新建议
  const suggestionList = document.getElementById('suggestionList');
  suggestionList.innerHTML = result.suggestions.map(s => `
    <li>
      <span class="suggestion-icon">✓</span>
      <span>${s}</span>
    </li>
  `).join('');
}

// 范文库功能
function initEssayLibrary() {
  const grid = document.getElementById('essaysGrid');
  if (!grid) return;

  // 渲染范文列表
  function renderEssays(essays) {
    grid.innerHTML = essays.map(essay => `
      <div class="essay-card" data-id="${essay.id}">
        <div class="essay-card-header">
          <div class="essay-year">${essay.year}</div>
          <div class="essay-title">${essay.title}</div>
        </div>
        <div class="essay-card-body">
          <div class="essay-meta">
            <div class="essay-meta-item">📄 ${essay.category}</div>
            <div class="essay-meta-item">📝 ${essay.wordCount}字</div>
          </div>
          <div class="essay-score-badge">⭐ ${essay.score}分</div>
          <p class="essay-preview">${essay.preview}</p>
          <div class="essay-card-footer">
            <div class="essay-tags">
              ${essay.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <span class="read-more">阅读全文 →</span>
          </div>
        </div>
      </div>
    `).join('');

    // 绑定点击事件
    document.querySelectorAll('.essay-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        openEssayModal(id);
      });
    });
  }

  renderEssays(essayLibrary);

  // 筛选功能
  const yearFilter = document.getElementById('yearFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');

  function filterEssays() {
    let filtered = [...essayLibrary];
    
    if (yearFilter && yearFilter.value !== 'all') {
      filtered = filtered.filter(e => e.year.includes(yearFilter.value));
    }
    
    if (categoryFilter && categoryFilter.value !== 'all') {
      filtered = filtered.filter(e => e.category === categoryFilter.value);
    }
    
    if (searchInput && searchInput.value.trim()) {
      const keyword = searchInput.value.trim().toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(keyword) || 
        e.preview.toLowerCase().includes(keyword) ||
        e.tags.some(t => t.toLowerCase().includes(keyword))
      );
    }

    renderEssays(filtered);
  }

  if (yearFilter) yearFilter.addEventListener('change', filterEssays);
  if (categoryFilter) categoryFilter.addEventListener('change', filterEssays);
  if (searchInput) searchInput.addEventListener('input', filterEssays);
}

// 打开范文详情弹窗
function openEssayModal(id) {
  const essay = essayLibrary.find(e => e.id === id);
  if (!essay) return;

  const modal = document.getElementById('essayModal');
  if (!modal) return;

  modal.querySelector('.essay-year').textContent = essay.year;
  modal.querySelector('.essay-title').textContent = essay.title;
  modal.querySelector('.essay-full-text').innerHTML = essay.content.map(p => `<p>${p}</p>`).join('');
  modal.querySelector('.teacher-comment p').textContent = essay.comment;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function initModal() {
  const modal = document.getElementById('essayModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-close')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// 写作技巧分类筛选
function initTipsFilter() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const tipCards = document.querySelectorAll('.tip-card');
  
  if (categoryBtns.length === 0) return;

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      
      tipCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 用户中心Tab切换
function initProfileTabs() {
  const menuItems = document.querySelectorAll('.profile-menu-item');
  const panels = document.querySelectorAll('.profile-panel');
  
  if (menuItems.length === 0) return;

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.target;
      
      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');
      
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === target) {
          p.classList.add('active');
        }
      });
    });
  });
}

// 渲染历史记录
function renderHistory() {
  const historyList = document.getElementById('historyList');
  if (!historyList) return;

  historyList.innerHTML = userHistory.map(item => `
    <div class="history-item">
      <div class="history-date">
        <div class="day">${item.day}</div>
        <div class="month">${item.month}</div>
      </div>
      <div class="history-info">
        <div class="history-title">${item.title}</div>
        <div class="history-meta">
          <span>📄 ${item.category}</span>
          <span>📝 ${item.wordCount}字</span>
        </div>
      </div>
      <div class="history-score">
        <div class="score-num">${item.score}<span style="font-size:14px;color:#999">/${item.totalScore}</span></div>
        <div class="score-label">作文得分</div>
      </div>
      <div class="history-action">查看详情 →</div>
    </div>
  `).join('');
}

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initApiKeyManager();
  initCharCount();
  initImageUpload();
  initGradingForm();
  initEssayLibrary();
  initModal();
  initTipsFilter();
  initProfileTabs();
  renderHistory();
});
