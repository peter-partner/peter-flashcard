// HSK1 + TOEIC flashcard data, typed.

export type FlashcardExample = {
  zh: string;
  py: string;
  th: string;
  en: string;
};

export type FlashcardTip = {
  en: string;
  th: string;
};

export type Flashcard = {
  zh: string;
  py: string;
  th: string;
  en: string;
  pos: string;
  /** Frequency 1-5 (★ rating). */
  freq: 1 | 2 | 3 | 4 | 5;
  /** Tone marks per syllable, dot-separated. */
  tones: string;
  /** Category label, "TH · EN". */
  cat: string;
  ex: FlashcardExample;
  tip: FlashcardTip | null;
};

export const HSK1: Flashcard[] = [
  { zh: "你好", py: "Nǐ hǎo", th: "สวัสดี", en: "Hello / Hi", pos: "Interjection", freq: 5, tones: "3 · 3", cat: "ทักทาย · Greetings",
    ex: { zh: "你好,我叫彼得。", py: "Nǐ hǎo, wǒ jiào Bǐdé.", th: "สวัสดี ฉันชื่อปีเตอร์", en: "Hello, my name is Peter." },
    tip: { en: "你好 is more casual than 您好 (nín hǎo). Use 您好 when speaking to elders, teachers, or in business contexts.",
           th: "ใช้ 您好 เมื่อพูดกับผู้ใหญ่ ครู หรือในบริบททางธุรกิจ" } },

  { zh: "谢谢", py: "Xièxie", th: "ขอบคุณ", en: "Thank you", pos: "Verb", freq: 5, tones: "4 · ·", cat: "ทักทาย · Greetings",
    ex: { zh: "谢谢你的帮助。", py: "Xièxie nǐ de bāngzhù.", th: "ขอบคุณสำหรับความช่วยเหลือ", en: "Thank you for your help." },
    tip: { en: "Respond with 不客气 (bú kèqi, “you’re welcome”) or 不用谢 (bú yòng xiè, “no need to thank”).",
           th: "ตอบกลับด้วย 不客气 หรือ 不用谢" } },

  { zh: "再见", py: "Zàijiàn", th: "ลาก่อน", en: "Goodbye", pos: "Interjection", freq: 5, tones: "4 · 4", cat: "ทักทาย · Greetings",
    ex: { zh: "明天见,再见!", py: "Míngtiān jiàn, zàijiàn!", th: "เจอกันพรุ่งนี้ ลาก่อน!", en: "See you tomorrow, goodbye!" },
    tip: { en: "Literally “again-see.” Casual alternatives: 拜拜 (bāibāi) from English “bye-bye.”",
           th: "แปลตรง ๆ ว่า “เจอใหม่” ไม่เป็นทางการใช้ 拜拜 ก็ได้" } },

  { zh: "对不起", py: "Duìbuqǐ", th: "ขอโทษ", en: "Sorry", pos: "Verb", freq: 5, tones: "4 · 3", cat: "ทักทาย · Greetings",
    ex: { zh: "对不起,我迟到了。", py: "Duìbuqǐ, wǒ chídào le.", th: "ขอโทษ ฉันมาสาย", en: "Sorry, I’m late." },
    tip: { en: "Reply with 没关系 (méi guānxi, “it doesn’t matter / no problem”).",
           th: "ตอบกลับด้วย 没关系 (ไม่เป็นไร)" } },

  { zh: "请", py: "Qǐng", th: "เชิญ / กรุณา", en: "Please / Invite", pos: "Verb", freq: 5, tones: "3 · ·", cat: "ทักทาย · Greetings",
    ex: { zh: "请喝茶。", py: "Qǐng hē chá.", th: "เชิญดื่มชา", en: "Please have some tea." },
    tip: { en: "Place 请 at the start of a request to soften it, like English “please.”",
           th: "วาง 请 ไว้ต้นประโยคเพื่อทำให้คำขอสุภาพขึ้น" } },

  { zh: "我", py: "Wǒ", th: "ฉัน / ผม", en: "I / me", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "สรรพนาม · Pronouns",
    ex: { zh: "我是泰国人。", py: "Wǒ shì Tàiguó rén.", th: "ฉันเป็นคนไทย", en: "I am Thai." },
    tip: { en: "Chinese pronouns don’t change for subject/object — 我 means both “I” and “me.”",
           th: "สรรพนามจีนไม่เปลี่ยนรูปตามประธาน/กรรม" } },

  { zh: "你", py: "Nǐ", th: "คุณ", en: "You", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "สรรพนาม · Pronouns",
    ex: { zh: "你叫什么名字?", py: "Nǐ jiào shénme míngzi?", th: "คุณชื่ออะไร", en: "What’s your name?" },
    tip: { en: "您 (nín) is the polite form — use it for elders, customers, or in business.",
           th: "您 เป็นรูปสุภาพ ใช้กับผู้ใหญ่ ลูกค้า หรือธุรกิจ" } },

  { zh: "他", py: "Tā", th: "เขา (ชาย)", en: "He / him", pos: "Pronoun", freq: 5, tones: "1 · ·", cat: "สรรพนาม · Pronouns",
    ex: { zh: "他是我的老师。", py: "Tā shì wǒ de lǎoshī.", th: "เขาเป็นครูของฉัน", en: "He is my teacher." }, tip: null },

  { zh: "她", py: "Tā", th: "เธอ (หญิง)", en: "She / her", pos: "Pronoun", freq: 5, tones: "1 · ·", cat: "สรรพนาม · Pronouns",
    ex: { zh: "她很漂亮。", py: "Tā hěn piàoliang.", th: "เธอสวยมาก", en: "She is very pretty." },
    tip: { en: "他 and 她 sound identical (tā) — only the written form distinguishes male/female.",
           th: "他 และ 她 ออกเสียงเหมือนกัน ต่างแค่ตัวเขียน" } },

  { zh: "我们", py: "Wǒmen", th: "พวกเรา", en: "We / us", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "สรรพนาม · Pronouns",
    ex: { zh: "我们一起去吧。", py: "Wǒmen yīqǐ qù ba.", th: "พวกเราไปด้วยกันเถอะ", en: "Let’s go together." },
    tip: { en: "Adding 们 (men) makes a pronoun plural: 你们 (you all), 他们 (they).",
           th: "เติม 们 ทำให้สรรพนามเป็นพหูพจน์" } },

  { zh: "这", py: "Zhè", th: "นี่ / นี้", en: "This", pos: "Pronoun", freq: 5, tones: "4 · ·", cat: "ชี้เฉพาะ · Demonstratives",
    ex: { zh: "这是我的书。", py: "Zhè shì wǒ de shū.", th: "นี่คือหนังสือของฉัน", en: "This is my book." },
    tip: { en: "Often pronounced “zhèi” in spoken Beijing Mandarin when followed by a measure word.",
           th: "ในภาษาพูดปักกิ่งมักออกเสียงว่า zhèi เมื่อตามด้วยลักษณนาม" } },

  { zh: "那", py: "Nà", th: "นั่น / นั้น", en: "That", pos: "Pronoun", freq: 5, tones: "4 · ·", cat: "ชี้เฉพาะ · Demonstratives",
    ex: { zh: "那是什么?", py: "Nà shì shénme?", th: "นั่นคืออะไร", en: "What is that?" }, tip: null },

  { zh: "什么", py: "Shénme", th: "อะไร", en: "What", pos: "Pronoun", freq: 5, tones: "2 · ·", cat: "คำถาม · Questions",
    ex: { zh: "你想吃什么?", py: "Nǐ xiǎng chī shénme?", th: "คุณอยากกินอะไร", en: "What do you want to eat?" },
    tip: { en: "Question words stay where the answer would go — no movement like in English.",
           th: "คำถามวางที่ตำแหน่งของคำตอบ ไม่ย้ายต้นประโยค" } },

  { zh: "谁", py: "Shéi", th: "ใคร", en: "Who", pos: "Pronoun", freq: 5, tones: "2 · ·", cat: "คำถาม · Questions",
    ex: { zh: "他是谁?", py: "Tā shì shéi?", th: "เขาคือใคร", en: "Who is he?" },
    tip: { en: "Can also be pronounced “shuí” — both are correct, shéi is more common.",
           th: "ออกเสียง shuí ก็ได้ แต่ shéi พบบ่อยกว่า" } },

  { zh: "哪儿", py: "Nǎr", th: "ที่ไหน", en: "Where", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "คำถาม · Questions",
    ex: { zh: "你在哪儿?", py: "Nǐ zài nǎr?", th: "คุณอยู่ที่ไหน", en: "Where are you?" },
    tip: { en: "Northern speakers use 哪儿; southern speakers often say 哪里 (nǎlǐ).",
           th: "ภาคเหนือใช้ 哪儿 ภาคใต้นิยม 哪里" } },

  { zh: "几", py: "Jǐ", th: "กี่", en: "How many (small)", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "คำถาม · Questions",
    ex: { zh: "你有几本书?", py: "Nǐ yǒu jǐ běn shū?", th: "คุณมีหนังสือกี่เล่ม", en: "How many books do you have?" },
    tip: { en: "Use 几 for numbers under 10; use 多少 (duōshǎo) for larger or unknown quantities.",
           th: "几 ใช้กับจำนวนน้อยกว่า 10; ใช้ 多少 กับจำนวนมาก" } },

  { zh: "多少", py: "Duōshǎo", th: "เท่าไหร่", en: "How much / many", pos: "Pronoun", freq: 5, tones: "1 · 3", cat: "คำถาม · Questions",
    ex: { zh: "这个多少钱?", py: "Zhège duōshǎo qián?", th: "อันนี้ราคาเท่าไหร่", en: "How much is this?" }, tip: null },

  { zh: "怎么", py: "Zěnme", th: "อย่างไร", en: "How", pos: "Pronoun", freq: 5, tones: "3 · ·", cat: "คำถาม · Questions",
    ex: { zh: "这个字怎么读?", py: "Zhège zì zěnme dú?", th: "ตัวอักษรนี้อ่านอย่างไร", en: "How do you read this character?" }, tip: null },

  { zh: "怎么样", py: "Zěnmeyàng", th: "เป็นอย่างไรบ้าง", en: "How about / How is", pos: "Pronoun", freq: 5, tones: "3 · 4", cat: "คำถาม · Questions",
    ex: { zh: "你最近怎么样?", py: "Nǐ zuìjìn zěnmeyàng?", th: "ช่วงนี้คุณเป็นอย่างไรบ้าง", en: "How have you been lately?" },
    tip: { en: "A versatile opener — equivalent to “How’s it going?” or “What do you think?”",
           th: "วลีอเนกประสงค์ เทียบเท่ากับ “เป็นไงบ้าง”" } },

  { zh: "是", py: "Shì", th: "เป็น / คือ", en: "To be / am / is", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我是学生。", py: "Wǒ shì xuésheng.", th: "ฉันเป็นนักเรียน", en: "I am a student." },
    tip: { en: "Only links nouns to nouns — never use 是 before an adjective (use 很 instead).",
           th: "ใช้เชื่อมคำนามเท่านั้น ห้ามใช้กับคำคุณศัพท์ (ใช้ 很)" } },

  { zh: "有", py: "Yǒu", th: "มี", en: "To have / there is", pos: "Verb", freq: 5, tones: "3 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我有一只猫。", py: "Wǒ yǒu yī zhī māo.", th: "ฉันมีแมวหนึ่งตัว", en: "I have a cat." },
    tip: { en: "Negate with 没 (méi), not 不: 没有 (méiyǒu, “don’t have”).",
           th: "ปฏิเสธด้วย 没 ไม่ใช่ 不: 没有 = ไม่มี" } },

  { zh: "不", py: "Bù", th: "ไม่", en: "Not / no", pos: "Adverb", freq: 5, tones: "4 · ·", cat: "ปฏิเสธ · Negation",
    ex: { zh: "我不喝咖啡。", py: "Wǒ bù hē kāfēi.", th: "ฉันไม่ดื่มกาแฟ", en: "I don’t drink coffee." },
    tip: { en: "Tone shift: 不 becomes bú before a 4th-tone syllable (不要 → bú yào).",
           th: "เสียงเปลี่ยน: 不 เป็น bú เมื่ออยู่หน้าเสียง 4 (不要 → bú yào)" } },

  { zh: "没", py: "Méi", th: "ไม่ (อดีต)", en: "Not (have / did)", pos: "Adverb", freq: 5, tones: "2 · ·", cat: "ปฏิเสธ · Negation",
    ex: { zh: "我没去学校。", py: "Wǒ méi qù xuéxiào.", th: "ฉันไม่ได้ไปโรงเรียน", en: "I didn’t go to school." },
    tip: { en: "Use 没 for past actions and 有; use 不 for habits, future, and most other negations.",
           th: "没 ใช้กับอดีตและ 有; 不 ใช้กับนิสัยและอนาคต" } },

  { zh: "叫", py: "Jiào", th: "ชื่อ / เรียก", en: "To be called", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我叫李明。", py: "Wǒ jiào Lǐ Míng.", th: "ฉันชื่อหลี่หมิง", en: "My name is Li Ming." }, tip: null },

  { zh: "看", py: "Kàn", th: "ดู / มอง", en: "To look / watch / read", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我喜欢看电影。", py: "Wǒ xǐhuan kàn diànyǐng.", th: "ฉันชอบดูหนัง", en: "I like watching movies." },
    tip: { en: "Covers “look,” “watch,” and “read” — context decides. 看书 = read a book.",
           th: "ครอบคลุมทั้ง ดู มอง อ่าน ขึ้นอยู่กับบริบท" } },

  { zh: "听", py: "Tīng", th: "ฟัง", en: "To listen", pos: "Verb", freq: 5, tones: "1 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我在听音乐。", py: "Wǒ zài tīng yīnyuè.", th: "ฉันกำลังฟังเพลง", en: "I am listening to music." }, tip: null },

  { zh: "说", py: "Shuō", th: "พูด", en: "To speak / say", pos: "Verb", freq: 5, tones: "1 · ·", cat: "กริยา · Verbs",
    ex: { zh: "你说汉语吗?", py: "Nǐ shuō Hànyǔ ma?", th: "คุณพูดภาษาจีนไหม", en: "Do you speak Chinese?" }, tip: null },

  { zh: "写", py: "Xiě", th: "เขียน", en: "To write", pos: "Verb", freq: 5, tones: "3 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我会写汉字。", py: "Wǒ huì xiě Hànzì.", th: "ฉันเขียนตัวอักษรจีนได้", en: "I can write Chinese characters." }, tip: null },

  { zh: "去", py: "Qù", th: "ไป", en: "To go", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我们去吃饭吧。", py: "Wǒmen qù chī fàn ba.", th: "พวกเราไปกินข้าวกันเถอะ", en: "Let’s go eat." }, tip: null },

  { zh: "来", py: "Lái", th: "มา", en: "To come", pos: "Verb", freq: 5, tones: "2 · ·", cat: "กริยา · Verbs",
    ex: { zh: "请你来我家。", py: "Qǐng nǐ lái wǒ jiā.", th: "เชิญคุณมาที่บ้านฉัน", en: "Please come to my home." }, tip: null },

  { zh: "回", py: "Huí", th: "กลับ", en: "To return", pos: "Verb", freq: 4, tones: "2 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我要回家了。", py: "Wǒ yào huí jiā le.", th: "ฉันจะกลับบ้านแล้ว", en: "I’m going home now." }, tip: null },

  { zh: "吃", py: "Chī", th: "กิน", en: "To eat", pos: "Verb", freq: 5, tones: "1 · ·", cat: "กริยา · Verbs",
    ex: { zh: "你吃饭了吗?", py: "Nǐ chī fàn le ma?", th: "คุณกินข้าวหรือยัง", en: "Have you eaten?" },
    tip: { en: "“你吃饭了吗?” is also a casual greeting in Chinese culture — like “How are you?”",
           th: "“你吃饭了吗?” ใช้ทักทายได้ คล้ายกับการถาม “สบายดีไหม”" } },

  { zh: "喝", py: "Hē", th: "ดื่ม", en: "To drink", pos: "Verb", freq: 5, tones: "1 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我喝水。", py: "Wǒ hē shuǐ.", th: "ฉันดื่มน้ำ", en: "I drink water." }, tip: null },

  { zh: "买", py: "Mǎi", th: "ซื้อ", en: "To buy", pos: "Verb", freq: 5, tones: "3 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我想买一杯咖啡。", py: "Wǒ xiǎng mǎi yī bēi kāfēi.", th: "ฉันอยากซื้อกาแฟหนึ่งแก้ว", en: "I want to buy a cup of coffee." }, tip: null },

  { zh: "做", py: "Zuò", th: "ทำ", en: "To do / make", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "你在做什么?", py: "Nǐ zài zuò shénme?", th: "คุณกำลังทำอะไร", en: "What are you doing?" }, tip: null },

  { zh: "学习", py: "Xuéxí", th: "เรียน", en: "To study", pos: "Verb", freq: 5, tones: "2 · 2", cat: "กริยา · Verbs",
    ex: { zh: "我在学习汉语。", py: "Wǒ zài xuéxí Hànyǔ.", th: "ฉันกำลังเรียนภาษาจีน", en: "I am studying Chinese." }, tip: null },

  { zh: "工作", py: "Gōngzuò", th: "ทำงาน / งาน", en: "To work / job", pos: "Verb/Noun", freq: 5, tones: "1 · 4", cat: "กริยา · Verbs",
    ex: { zh: "我在北京工作。", py: "Wǒ zài Běijīng gōngzuò.", th: "ฉันทำงานที่ปักกิ่ง", en: "I work in Beijing." }, tip: null },

  { zh: "认识", py: "Rènshi", th: "รู้จัก", en: "To know (a person)", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "认识你很高兴。", py: "Rènshi nǐ hěn gāoxìng.", th: "ยินดีที่ได้รู้จักคุณ", en: "Nice to meet you." },
    tip: { en: "Use 认识 for people/places; use 知道 (zhīdào) for facts and information.",
           th: "认识 ใช้กับคน/สถานที่; 知道 ใช้กับข้อเท็จจริง" } },

  { zh: "想", py: "Xiǎng", th: "อยาก / คิด", en: "To want / think", pos: "Verb", freq: 5, tones: "3 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我想喝茶。", py: "Wǒ xiǎng hē chá.", th: "ฉันอยากดื่มชา", en: "I want to drink tea." }, tip: null },

  { zh: "爱", py: "Ài", th: "รัก", en: "To love", pos: "Verb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我爱我的家人。", py: "Wǒ ài wǒ de jiārén.", th: "ฉันรักคนในครอบครัว", en: "I love my family." }, tip: null },

  { zh: "喜欢", py: "Xǐhuan", th: "ชอบ", en: "To like", pos: "Verb", freq: 5, tones: "3 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我喜欢中国菜。", py: "Wǒ xǐhuan Zhōngguó cài.", th: "ฉันชอบอาหารจีน", en: "I like Chinese food." }, tip: null },

  { zh: "会", py: "Huì", th: "สามารถ (ทักษะ)", en: "Can (learned skill)", pos: "Modal", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我会说汉语。", py: "Wǒ huì shuō Hànyǔ.", th: "ฉันพูดภาษาจีนได้", en: "I can speak Chinese." },
    tip: { en: "会 = learned skill. 能 (néng) = physical ability. 可以 (kěyǐ) = permission.",
           th: "会 = ทักษะที่เรียนมา; 能 = ความสามารถทางกาย; 可以 = ได้รับอนุญาต" } },

  { zh: "能", py: "Néng", th: "สามารถ (โอกาส)", en: "Can / be able to", pos: "Modal", freq: 5, tones: "2 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我今天能来。", py: "Wǒ jīntiān néng lái.", th: "วันนี้ฉันมาได้", en: "I can come today." }, tip: null },

  { zh: "在", py: "Zài", th: "อยู่ที่ / กำลัง", en: "At / be in / -ing", pos: "Verb/Adverb", freq: 5, tones: "4 · ·", cat: "กริยา · Verbs",
    ex: { zh: "我在家。", py: "Wǒ zài jiā.", th: "ฉันอยู่บ้าน", en: "I am at home." },
    tip: { en: "在 + verb marks ongoing action: 我在吃饭 = “I am eating.”",
           th: "在 + กริยา แสดงการกระทำต่อเนื่อง: 我在吃饭 = “กำลังกิน”" } },

  { zh: "爸爸", py: "Bàba", th: "พ่อ", en: "Dad", pos: "Noun", freq: 5, tones: "4 · ·", cat: "ครอบครัว · Family",
    ex: { zh: "我爸爸是医生。", py: "Wǒ bàba shì yīshēng.", th: "พ่อของฉันเป็นหมอ", en: "My dad is a doctor." }, tip: null },

  { zh: "妈妈", py: "Māma", th: "แม่", en: "Mom", pos: "Noun", freq: 5, tones: "1 · ·", cat: "ครอบครัว · Family",
    ex: { zh: "我妈妈做饭很好吃。", py: "Wǒ māma zuò fàn hěn hǎochī.", th: "อาหารแม่ทำอร่อยมาก", en: "My mom’s cooking is delicious." }, tip: null },

  { zh: "儿子", py: "Érzi", th: "ลูกชาย", en: "Son", pos: "Noun", freq: 4, tones: "2 · ·", cat: "ครอบครัว · Family",
    ex: { zh: "他们的儿子很可爱。", py: "Tāmen de érzi hěn kě’ài.", th: "ลูกชายของพวกเขาน่ารักมาก", en: "Their son is very cute." }, tip: null },

  { zh: "女儿", py: "Nǚ’ér", th: "ลูกสาว", en: "Daughter", pos: "Noun", freq: 4, tones: "3 · 2", cat: "ครอบครัว · Family",
    ex: { zh: "我女儿三岁了。", py: "Wǒ nǚ’ér sān suì le.", th: "ลูกสาวฉันอายุสามขวบแล้ว", en: "My daughter is three years old." }, tip: null },

  { zh: "朋友", py: "Péngyou", th: "เพื่อน", en: "Friend", pos: "Noun", freq: 5, tones: "2 · ·", cat: "คน · People",
    ex: { zh: "他是我的好朋友。", py: "Tā shì wǒ de hǎo péngyou.", th: "เขาเป็นเพื่อนสนิทของฉัน", en: "He is my good friend." }, tip: null },

  { zh: "老师", py: "Lǎoshī", th: "ครู / อาจารย์", en: "Teacher", pos: "Noun", freq: 5, tones: "3 · 1", cat: "คน · People",
    ex: { zh: "李老师很好。", py: "Lǐ lǎoshī hěn hǎo.", th: "อาจารย์หลี่ใจดี", en: "Teacher Li is very kind." },
    tip: { en: "Address teachers as “surname + 老师” — never by first name in Chinese culture.",
           th: "เรียกครูด้วย “นามสกุล + 老师” ไม่เรียกชื่อจริง" } },

  { zh: "学生", py: "Xuésheng", th: "นักเรียน", en: "Student", pos: "Noun", freq: 5, tones: "2 · ·", cat: "คน · People",
    ex: { zh: "我是大学生。", py: "Wǒ shì dàxuéshēng.", th: "ฉันเป็นนักศึกษา", en: "I am a university student." }, tip: null },

  { zh: "医生", py: "Yīshēng", th: "หมอ", en: "Doctor", pos: "Noun", freq: 4, tones: "1 · 1", cat: "คน · People",
    ex: { zh: "他是个好医生。", py: "Tā shì gè hǎo yīshēng.", th: "เขาเป็นหมอที่ดี", en: "He is a good doctor." }, tip: null },

  { zh: "人", py: "Rén", th: "คน", en: "Person", pos: "Noun", freq: 5, tones: "2 · ·", cat: "คน · People",
    ex: { zh: "我是泰国人。", py: "Wǒ shì Tàiguó rén.", th: "ฉันเป็นคนไทย", en: "I am Thai." },
    tip: { en: "Add 人 after a country name to mean “a person from there”: 中国人, 美国人.",
           th: "เติม 人 หลังชื่อประเทศ = คนจากประเทศนั้น" } },

  { zh: "名字", py: "Míngzi", th: "ชื่อ", en: "Name", pos: "Noun", freq: 5, tones: "2 · ·", cat: "พื้นฐาน · Basics",
    ex: { zh: "你的名字真好听。", py: "Nǐ de míngzi zhēn hǎotīng.", th: "ชื่อคุณเพราะมาก", en: "Your name sounds lovely." }, tip: null },

  { zh: "中国", py: "Zhōngguó", th: "ประเทศจีน", en: "China", pos: "Noun", freq: 5, tones: "1 · 2", cat: "สถานที่ · Places",
    ex: { zh: "我想去中国。", py: "Wǒ xiǎng qù Zhōngguó.", th: "ฉันอยากไปประเทศจีน", en: "I want to go to China." },
    tip: { en: "Literally “Middle Kingdom” — 中 (middle) + 国 (country).",
           th: "แปลตรง ๆ ว่า “อาณาจักรกลาง”: 中 (กลาง) + 国 (ประเทศ)" } },

  { zh: "北京", py: "Běijīng", th: "ปักกิ่ง", en: "Beijing", pos: "Noun", freq: 4, tones: "3 · 1", cat: "สถานที่ · Places",
    ex: { zh: "北京是中国的首都。", py: "Běijīng shì Zhōngguó de shǒudū.", th: "ปักกิ่งคือเมืองหลวงของจีน", en: "Beijing is the capital of China." }, tip: null },

  { zh: "家", py: "Jiā", th: "บ้าน / ครอบครัว", en: "Home / family", pos: "Noun", freq: 5, tones: "1 · ·", cat: "สถานที่ · Places",
    ex: { zh: "我家在曼谷。", py: "Wǒ jiā zài Mànggǔ.", th: "บ้านฉันอยู่ที่กรุงเทพ", en: "My home is in Bangkok." }, tip: null },

  { zh: "学校", py: "Xuéxiào", th: "โรงเรียน", en: "School", pos: "Noun", freq: 5, tones: "2 · 4", cat: "สถานที่ · Places",
    ex: { zh: "学校离我家很近。", py: "Xuéxiào lí wǒ jiā hěn jìn.", th: "โรงเรียนอยู่ใกล้บ้านฉัน", en: "The school is near my home." }, tip: null },

  { zh: "饭店", py: "Fàndiàn", th: "ร้านอาหาร", en: "Restaurant", pos: "Noun", freq: 4, tones: "4 · 4", cat: "สถานที่ · Places",
    ex: { zh: "这家饭店很有名。", py: "Zhè jiā fàndiàn hěn yǒumíng.", th: "ร้านอาหารร้านนี้มีชื่อเสียง", en: "This restaurant is famous." }, tip: null },

  { zh: "商店", py: "Shāngdiàn", th: "ร้านค้า", en: "Shop / store", pos: "Noun", freq: 4, tones: "1 · 4", cat: "สถานที่ · Places",
    ex: { zh: "商店里人很多。", py: "Shāngdiàn lǐ rén hěn duō.", th: "ในร้านมีคนเยอะมาก", en: "There are many people in the shop." }, tip: null },

  { zh: "医院", py: "Yīyuàn", th: "โรงพยาบาล", en: "Hospital", pos: "Noun", freq: 4, tones: "1 · 4", cat: "สถานที่ · Places",
    ex: { zh: "我去医院看医生。", py: "Wǒ qù yīyuàn kàn yīshēng.", th: "ฉันไปโรงพยาบาลหาหมอ", en: "I’m going to the hospital." }, tip: null },

  { zh: "上", py: "Shàng", th: "บน / ข้างบน", en: "Up / on", pos: "Position", freq: 5, tones: "4 · ·", cat: "ทิศทาง · Direction",
    ex: { zh: "书在桌子上。", py: "Shū zài zhuōzi shàng.", th: "หนังสืออยู่บนโต๊ะ", en: "The book is on the table." }, tip: null },

  { zh: "下", py: "Xià", th: "ล่าง / ข้างล่าง", en: "Down / below", pos: "Position", freq: 5, tones: "4 · ·", cat: "ทิศทาง · Direction",
    ex: { zh: "猫在椅子下。", py: "Māo zài yǐzi xià.", th: "แมวอยู่ใต้เก้าอี้", en: "The cat is under the chair." }, tip: null },

  { zh: "前面", py: "Qiánmiàn", th: "ข้างหน้า", en: "Front / in front", pos: "Position", freq: 4, tones: "2 · 4", cat: "ทิศทาง · Direction",
    ex: { zh: "学校在前面。", py: "Xuéxiào zài qiánmiàn.", th: "โรงเรียนอยู่ข้างหน้า", en: "The school is ahead." }, tip: null },

  { zh: "里", py: "Lǐ", th: "ใน", en: "Inside", pos: "Position", freq: 5, tones: "3 · ·", cat: "ทิศทาง · Direction",
    ex: { zh: "钱在包里。", py: "Qián zài bāo lǐ.", th: "เงินอยู่ในกระเป๋า", en: "The money is in the bag." }, tip: null },

  { zh: "一", py: "Yī", th: "หนึ่ง", en: "One", pos: "Number", freq: 5, tones: "1 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我要一杯水。", py: "Wǒ yào yī bēi shuǐ.", th: "ฉันต้องการน้ำหนึ่งแก้ว", en: "I want one cup of water." },
    tip: { en: "Tone changes: yī → yí before 4th tone, → yì before 1st/2nd/3rd. Pure form before nothing.",
           th: "การเปลี่ยนเสียง: yī → yí ก่อนเสียง 4, → yì ก่อนเสียง 1/2/3" } },

  { zh: "二", py: "Èr", th: "สอง", en: "Two", pos: "Number", freq: 5, tones: "4 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我有二十块钱。", py: "Wǒ yǒu èrshí kuài qián.", th: "ฉันมีเงินยี่สิบหยวน", en: "I have 20 yuan." },
    tip: { en: "Use 两 (liǎng), not 二, before measure words: 两个 (two of something).",
           th: "ใช้ 两 ไม่ใช่ 二 ก่อนลักษณนาม: 两个" } },

  { zh: "三", py: "Sān", th: "สาม", en: "Three", pos: "Number", freq: 5, tones: "1 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我有三个朋友。", py: "Wǒ yǒu sān gè péngyou.", th: "ฉันมีเพื่อนสามคน", en: "I have three friends." }, tip: null },

  { zh: "四", py: "Sì", th: "สี่", en: "Four", pos: "Number", freq: 5, tones: "4 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我家有四口人。", py: "Wǒ jiā yǒu sì kǒu rén.", th: "ครอบครัวฉันมีสี่คน", en: "My family has four members." },
    tip: { en: "Considered unlucky — sounds like 死 (sǐ, “death”). Hotels often skip the 4th floor.",
           th: "ถือเป็นเลขอัปมงคล เสียงคล้าย 死 (ตาย)" } },

  { zh: "五", py: "Wǔ", th: "ห้า", en: "Five", pos: "Number", freq: 5, tones: "3 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "现在五点了。", py: "Xiànzài wǔ diǎn le.", th: "ตอนนี้ห้าโมงแล้ว", en: "It’s five o’clock now." }, tip: null },

  { zh: "六", py: "Liù", th: "หก", en: "Six", pos: "Number", freq: 5, tones: "4 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "他六岁了。", py: "Tā liù suì le.", th: "เขาอายุหกขวบแล้ว", en: "He is six years old." }, tip: null },

  { zh: "七", py: "Qī", th: "เจ็ด", en: "Seven", pos: "Number", freq: 5, tones: "1 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "一个星期有七天。", py: "Yīgè xīngqī yǒu qī tiān.", th: "หนึ่งสัปดาห์มีเจ็ดวัน", en: "There are seven days in a week." }, tip: null },

  { zh: "八", py: "Bā", th: "แปด", en: "Eight", pos: "Number", freq: 5, tones: "1 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我八点上班。", py: "Wǒ bā diǎn shàngbān.", th: "ฉันเริ่มงานตอนแปดโมง", en: "I start work at 8." },
    tip: { en: "Considered lucky — 八 (bā) sounds like 发 (fā, “prosper”). Coveted in phone numbers and license plates.",
           th: "เลขมงคล 八 เสียงคล้าย 发 (เจริญรุ่งเรือง)" } },

  { zh: "九", py: "Jiǔ", th: "เก้า", en: "Nine", pos: "Number", freq: 5, tones: "3 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "现在九点半。", py: "Xiànzài jiǔ diǎn bàn.", th: "ตอนนี้เก้าโมงครึ่ง", en: "It’s 9:30 now." }, tip: null },

  { zh: "十", py: "Shí", th: "สิบ", en: "Ten", pos: "Number", freq: 5, tones: "2 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "我十二岁。", py: "Wǒ shí’èr suì.", th: "ฉันอายุสิบสองปี", en: "I am twelve years old." }, tip: null },

  { zh: "岁", py: "Suì", th: "ปี (อายุ)", en: "Years (of age)", pos: "Measure", freq: 5, tones: "4 · ·", cat: "ตัวเลข · Numbers",
    ex: { zh: "你几岁?", py: "Nǐ jǐ suì?", th: "คุณอายุเท่าไหร่", en: "How old are you?" },
    tip: { en: "Asking 几岁 is for children under 10. For adults use 你多大?",
           th: "ถาม 几岁 ใช้กับเด็กต่ำกว่า 10 ขวบ ผู้ใหญ่ใช้ 你多大?" } },

  { zh: "个", py: "Gè", th: "อัน (ลักษณนาม)", en: "General measure word", pos: "Measure", freq: 5, tones: "4 · ·", cat: "ลักษณนาม · Measures",
    ex: { zh: "我有三个苹果。", py: "Wǒ yǒu sān gè píngguǒ.", th: "ฉันมีแอปเปิ้ลสามลูก", en: "I have three apples." },
    tip: { en: "When unsure which measure word to use, 个 works for almost any noun. The default.",
           th: "เมื่อไม่แน่ใจว่าใช้ลักษณนามไหน 个 ใช้ได้เกือบทุกกรณี" } },

  { zh: "钱", py: "Qián", th: "เงิน", en: "Money", pos: "Noun", freq: 5, tones: "2 · ·", cat: "ของใช้ · Objects",
    ex: { zh: "我没有钱。", py: "Wǒ méiyǒu qián.", th: "ฉันไม่มีเงิน", en: "I have no money." }, tip: null },

  { zh: "书", py: "Shū", th: "หนังสือ", en: "Book", pos: "Noun", freq: 5, tones: "1 · ·", cat: "ของใช้ · Objects",
    ex: { zh: "这本书很好看。", py: "Zhè běn shū hěn hǎokàn.", th: "หนังสือเล่มนี้น่าอ่านมาก", en: "This book is very good." }, tip: null },

  { zh: "汉语", py: "Hànyǔ", th: "ภาษาจีน", en: "Chinese (language)", pos: "Noun", freq: 5, tones: "4 · 3", cat: "พื้นฐาน · Basics",
    ex: { zh: "汉语很有意思。", py: "Hànyǔ hěn yǒuyìsi.", th: "ภาษาจีนน่าสนใจมาก", en: "Chinese is very interesting." },
    tip: { en: "汉语 emphasizes the Han language; 中文 (Zhōngwén) is also common and includes writing.",
           th: "汉语 เน้นภาษาฮั่น; 中文 ใช้กว้างกว่า รวมการเขียน" } },

  { zh: "字", py: "Zì", th: "ตัวอักษร", en: "Character / word", pos: "Noun", freq: 5, tones: "4 · ·", cat: "พื้นฐาน · Basics",
    ex: { zh: "我会写五百个字。", py: "Wǒ huì xiě wǔbǎi gè zì.", th: "ฉันเขียนได้ห้าร้อยตัวอักษร", en: "I can write 500 characters." }, tip: null },

  { zh: "桌子", py: "Zhuōzi", th: "โต๊ะ", en: "Table", pos: "Noun", freq: 4, tones: "1 · ·", cat: "ของใช้ · Objects",
    ex: { zh: "桌子上有一本书。", py: "Zhuōzi shàng yǒu yī běn shū.", th: "บนโต๊ะมีหนังสือหนึ่งเล่ม", en: "There is a book on the table." }, tip: null },

  { zh: "水", py: "Shuǐ", th: "น้ำ", en: "Water", pos: "Noun", freq: 5, tones: "3 · ·", cat: "เครื่องดื่ม · Drinks",
    ex: { zh: "请给我一杯水。", py: "Qǐng gěi wǒ yī bēi shuǐ.", th: "ขอน้ำหนึ่งแก้ว", en: "Please give me a glass of water." }, tip: null },

  { zh: "茶", py: "Chá", th: "ชา", en: "Tea", pos: "Noun", freq: 5, tones: "2 · ·", cat: "เครื่องดื่ม · Drinks",
    ex: { zh: "中国人喜欢喝茶。", py: "Zhōngguó rén xǐhuan hē chá.", th: "คนจีนชอบดื่มชา", en: "Chinese people like drinking tea." },
    tip: { en: "Tea culture is central in China. Offering tea is a sign of respect and hospitality.",
           th: "วัฒนธรรมชาเป็นหัวใจของจีน การเสิร์ฟชาคือการแสดงความเคารพ" } },

  { zh: "米饭", py: "Mǐfàn", th: "ข้าว", en: "Cooked rice", pos: "Noun", freq: 5, tones: "3 · 4", cat: "อาหาร · Food",
    ex: { zh: "我喜欢吃米饭。", py: "Wǒ xǐhuan chī mǐfàn.", th: "ฉันชอบกินข้าว", en: "I like eating rice." }, tip: null },

  { zh: "苹果", py: "Píngguǒ", th: "แอปเปิ้ล", en: "Apple", pos: "Noun", freq: 4, tones: "2 · 3", cat: "อาหาร · Food",
    ex: { zh: "我每天吃一个苹果。", py: "Wǒ měitiān chī yī gè píngguǒ.", th: "ฉันกินแอปเปิ้ลทุกวัน", en: "I eat an apple every day." }, tip: null },

  { zh: "猫", py: "Māo", th: "แมว", en: "Cat", pos: "Noun", freq: 5, tones: "1 · ·", cat: "สัตว์ · Animals",
    ex: { zh: "我家有一只猫。", py: "Wǒ jiā yǒu yī zhī māo.", th: "ที่บ้านฉันมีแมวหนึ่งตัว", en: "There is a cat at my home." }, tip: null },

  { zh: "狗", py: "Gǒu", th: "หมา / สุนัข", en: "Dog", pos: "Noun", freq: 5, tones: "3 · ·", cat: "สัตว์ · Animals",
    ex: { zh: "他的狗很可爱。", py: "Tā de gǒu hěn kě’ài.", th: "หมาของเขาน่ารักมาก", en: "His dog is very cute." }, tip: null },

  { zh: "今天", py: "Jīntiān", th: "วันนี้", en: "Today", pos: "Noun", freq: 5, tones: "1 · 1", cat: "เวลา · Time",
    ex: { zh: "今天天气很好。", py: "Jīntiān tiānqì hěn hǎo.", th: "วันนี้อากาศดีมาก", en: "The weather is nice today." }, tip: null },

  { zh: "明天", py: "Míngtiān", th: "พรุ่งนี้", en: "Tomorrow", pos: "Noun", freq: 5, tones: "2 · 1", cat: "เวลา · Time",
    ex: { zh: "明天见!", py: "Míngtiān jiàn!", th: "เจอกันพรุ่งนี้", en: "See you tomorrow!" }, tip: null },

  { zh: "昨天", py: "Zuótiān", th: "เมื่อวาน", en: "Yesterday", pos: "Noun", freq: 5, tones: "2 · 1", cat: "เวลา · Time",
    ex: { zh: "昨天我去了北京。", py: "Zuótiān wǒ qù le Běijīng.", th: "เมื่อวานฉันไปปักกิ่ง", en: "I went to Beijing yesterday." }, tip: null },

  { zh: "现在", py: "Xiànzài", th: "ตอนนี้", en: "Now", pos: "Noun", freq: 5, tones: "4 · 4", cat: "เวลา · Time",
    ex: { zh: "现在几点?", py: "Xiànzài jǐ diǎn?", th: "ตอนนี้กี่โมงแล้ว", en: "What time is it now?" }, tip: null },

  { zh: "点", py: "Diǎn", th: "โมง", en: "O’clock", pos: "Measure", freq: 5, tones: "3 · ·", cat: "เวลา · Time",
    ex: { zh: "我七点起床。", py: "Wǒ qī diǎn qǐchuáng.", th: "ฉันตื่นเจ็ดโมง", en: "I get up at seven." }, tip: null },

  { zh: "分钟", py: "Fēnzhōng", th: "นาที", en: "Minute", pos: "Noun", freq: 4, tones: "1 · 1", cat: "เวลา · Time",
    ex: { zh: "等我五分钟。", py: "Děng wǒ wǔ fēnzhōng.", th: "รอฉันห้านาที", en: "Wait five minutes for me." }, tip: null },

  { zh: "星期", py: "Xīngqī", th: "สัปดาห์", en: "Week", pos: "Noun", freq: 5, tones: "1 · 1", cat: "เวลา · Time",
    ex: { zh: "今天星期几?", py: "Jīntiān xīngqī jǐ?", th: "วันนี้วันอะไร", en: "What day is today?" }, tip: null },

  { zh: "年", py: "Nián", th: "ปี", en: "Year", pos: "Noun", freq: 5, tones: "2 · ·", cat: "เวลา · Time",
    ex: { zh: "我学了一年汉语。", py: "Wǒ xué le yī nián Hànyǔ.", th: "ฉันเรียนจีนมาหนึ่งปี", en: "I’ve studied Chinese for a year." }, tip: null },

  { zh: "月", py: "Yuè", th: "เดือน", en: "Month / moon", pos: "Noun", freq: 5, tones: "4 · ·", cat: "เวลา · Time",
    ex: { zh: "下个月我去中国。", py: "Xià gè yuè wǒ qù Zhōngguó.", th: "เดือนหน้าฉันจะไปจีน", en: "I’m going to China next month." }, tip: null },

  { zh: "好", py: "Hǎo", th: "ดี", en: "Good / fine", pos: "Adjective", freq: 5, tones: "3 · ·", cat: "คำคุณศัพท์ · Adjectives",
    ex: { zh: "我很好,你呢?", py: "Wǒ hěn hǎo, nǐ ne?", th: "ฉันสบายดี แล้วคุณล่ะ", en: "I’m good, how about you?" },
    tip: { en: "Before adjectives, always pair with 很 (hěn). 我很好 is the default —  很 here is a connector, not “very.”",
           th: "ใช้ 很 นำหน้าคำคุณศัพท์เสมอ; ในที่นี้ 很 ไม่ได้แปลว่า “มาก”" } },

  { zh: "大", py: "Dà", th: "ใหญ่", en: "Big", pos: "Adjective", freq: 5, tones: "4 · ·", cat: "คำคุณศัพท์ · Adjectives",
    ex: { zh: "这个城市很大。", py: "Zhège chéngshì hěn dà.", th: "เมืองนี้ใหญ่มาก", en: "This city is very big." }, tip: null },

  { zh: "小", py: "Xiǎo", th: "เล็ก", en: "Small", pos: "Adjective", freq: 5, tones: "3 · ·", cat: "คำคุณศัพท์ · Adjectives",
    ex: { zh: "我的房间很小。", py: "Wǒ de fángjiān hěn xiǎo.", th: "ห้องฉันเล็กมาก", en: "My room is very small." }, tip: null },
];

/** TOEIC SKU — placeholder, ready for future content. */
export const TOEIC: Flashcard[] = [];

export type DeckId = "hsk" | "toeic";

export function getDeck(deck: DeckId): Flashcard[] {
  return deck === "hsk" ? HSK1 : TOEIC;
}

export function getCard(deck: DeckId, id: number): Flashcard | null {
  const list = getDeck(deck);
  if (id < 1 || id > list.length) return null;
  return list[id - 1] ?? null;
}
