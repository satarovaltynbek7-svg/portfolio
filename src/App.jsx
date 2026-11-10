import { useEffect, useState } from 'react'
import './App.css'

const languageOptions = [
  { value: 'ky', label: '🇰🇬 Кыргызча' },
  { value: 'ru', label: '🇷🇺 Русский' },
  { value: 'en', label: '🇬🇧 English' },
]

const translations = {
  ky: {
    pageTitle: 'Асема Алтынбекова — Портфолио',
    profession: 'Веб-иштеп чыгууну жана графикалык дизайнды үйрөнүп жаткан окуучу',
    brandLabel: 'Асема Алтынбекова — башкы бет',
    navLabel: 'Негизги навигация',
    birthMonth: 'июну',
    birthYear: '2008-жыл',
    schoolDates: 'Сентябрь 2015 — Май 2026',
    portraitAlt: 'Асема Алтынбекованын портрети',
    portraitCaption: 'АСЕМА АЛТЫНБЕКОВА',
    portraitPlace: 'БИШКЕК · КЫРГЫЗСТАН',
    nav: ['Өзүм жөнүндө', 'Билим', 'Курстар', 'Көндүмдөр', 'Иштер', 'Проекти', 'Кызматтар', 'Байланыш'],
    available: 'Жаңы мүмкүнчүлүктөргө ачык',
    language: 'Тилди тандоо',
    menu: 'Меню',
    openMenu: 'Навигацияны ачуу',
    portfolio: 'Портфолио / 2025—26',
    heroIntro: 'Веб-иштеп чыгууну жана визуалдык дизайнды үйрөнүп, чыгармачылык идеяларды өздөштүрүп келем.',
    contactMe: 'Байланышуу',
    viewProjects: 'Иштеримди көрүү',
    scroll: 'Көрүү үчүн ылдый сыдырыңыз',
    marquee: 'Окууга кызыгам',
    aboutLabel: 'Мен жөнүндө',
    person: 'ЖЕКЕ МААЛЫМАТ',
    aboutTitle: <>Жаңы нерсени<br />үйрөнүүгө <em>ачыкмын.</em></>,
    aboutLead: 'Мен Асема — чыгармачылыкка жана жаңы билимдерге кызыккан окуучумун.',
    aboutText: '№2 Асан Абдраимов атындагы орто мектепти жакшы баалар менен аяктадым. Мектептеги иш-чараларга жана олимпиадаларга активдүү катыштым.',
    aboutMore: 'Веб-иштеп чыгууга, графикалык дизайнга жана кондитердик өнөргө өзгөчө кызыгам. Өз алдынча үйрөнүп, жаңы жөндөмдөрдү өнүктүрүүнү улантып келем.',
    born: 'ТУУЛГАН КҮНҮ',
    address: 'ДАРЕГИ',
    email: 'ЭЛЕКТРОНДУК ПОЧТА',
    educationLabel: 'Окуу жолум',
    educationNumber: 'БИЛИМ',
    educationTitle: <>Билимдин <em>негизи.</em></>,
    school: '№2 Асан Абдраимов',
    schoolLocation: '№2 Асан Абдраимов, Казарман.',
    schoolDescription: 'Жакшы баалар менен орто мектепти аяктады. Мектептеги иш-чараларга жана олимпиадаларга активдүү катышты.',
    coursesLabel: 'Өз алдымча үйрөнүү',
    coursesNumber: 'КУРСТАР ЖАНА КЫЗЫГУУЛАР',
    coursesTitle: <>Кызыгуу менен<br /><em>үйрөнөм.</em></>,
    course1: 'Орто жалпы билим алуу. Ошол эле учурда веб-иштеп чыгууну (HTML, CSS, JavaScript) жана программалоонун негиздерин өз алдынча үйрөнүү.',
    course2: '№2 Асан Абдраимов атындагы орто мектепти (Казарман) аяктоо. Десерттерди, токочторду жана кондитердик азыктарды жасоого кызыгам, бул тармактагы жөндөмдөрүмдү өнүктүрүп келем.',
    course3: 'Казарман айылындагы №2 Асан Абдраимов атындагы орто мектепте орто жалпы билим алуу. Визуалдык коммуникацияга жана графикалык дизайнга кызыгам. Композицияны, түстөрдү, типографияны жана Photoshop, Figma, Illustrator программаларын өз алдынча үйрөнүп, заманбап визуалдык материалдарды түзөм.',
    skillsLabel: 'Мен эмнени үйрөнүп жатам',
    skillsNumber: 'КӨНДҮМДӨР',
    skillsTitle: <>Санариптик<br /><em>негиздер.</em></>,
    skillsIntro: 'Веб-технологиялар жана чыгармачыл программалар боюнча жөндөмдөрүмдү тынымсыз өнүктүрүп келем.',
    skillsFoot: 'Ар бир күн — жаңы мүмкүнчүлүк.',
    languagesLabel: 'Тилдер',
    languagesNumber: 'ТИЛ БИЛҮҮ ДЕҢГЭЭЛИ',
    languagesTitle: <>Ар тилде<br /><em>сүйлөшөлү.</em></>,
    languageLevel: 'ДЕҢГЭЭЛ',
    editLevel: 'Англис тилинин деңгээлин өзгөртүү',
    workLabel: 'Тандалган иштер',
    workNumber: 'ТАНДАЛГАН ИШТЕР',
    workTitle: <>Илхам берген<br /><em>идеялар.</em></>,
    workIntro: <>Ар түрдүү темалардагы чыгармачыл изилдөөлөр:<br />визуалдык идеялар жана алардын деталдары.</>,
    allWork: 'Жаңы идеяңыз барбы?',
    makeReal: 'Келгиле, ишке ашыралы',
    projectsLabel: 'Жарыяланган долбоорлор',
    projectsNumber: 'ПРОЕКТИ',
    projectsTitle: <>Менин <em>долбоорлорум.</em></>,
    projectsIntro: 'Жарыяланган веб-долбоор. Сайтты толук изилдөө үчүн шилтемени ачыңыз.',
    projectVisit: 'Сайтты ачуу',
    liveProject: {
      name: 'Subtle Pastelito',
      category: 'Веб-сайт · 2026',
      description: 'HTML, CSS жана JavaScript менен жасалган жарыяланган веб-сайт. Таза дизайн, жылуу түстөр жана мобилдик колдоо бар.',
    },
    servicesLabel: 'Мен сунуштайм',
    servicesNumber: 'КЫЗМАТТАР',
    servicesTitle: <>Идеяны<br /><em>ишке ашыруу.</em></>,
    servicesIntro: 'Алгачкы ойдон акыркы деталдарга чейин биргелешип иштейбиз.',
    services: [
      ['Бренддин визуалдык стили', 'Маанилүү, эсте каларлык жана узакка кызмат кылган өзгөчө визуалдык образ.'],
      ['Санариптик тажрыйба', 'Түшүнүктүү, ыңгайлуу жана көркөм веб-сайттарды долбоорлоо.'],
      ['Көркөм багыт', 'Алгачкы идеядан акыркы кадрга чейинки чыгармачыл багыт.'],
    ],
    askService: 'Кызмат тууралуу суроо',
    contactLabel: 'Келгиле, сүйлөшөлү',
    contactNumber: 'БАЙЛАНЫШ',
    contactKicker: 'Жакшы идеяңыз барбы?',
    contactTitle: <>Келгиле, бирге<br /><em>жараталы.</em></>,
    based: 'ЖАШАГАН ЖЕРИ',
    phone: 'ТЕЛЕФОН',
    elsewhere: 'СОЦИАЛДЫК ТАРМАКТАР',
    formTitle: 'Оюңуз менен бөлүшүңүз.',
    name: 'Атыңыз',
    namePlaceholder: 'Сизге кандай кайрылсам болот?',
    emailAddress: 'Электрондук почта',
    emailPlaceholder: 'you@example.com',
    message: 'Кабарыңыз',
    messagePlaceholder: 'Оюңузду бул жерге жазыңыз...',
    send: 'Кат жөнөтүү',
    formNote: 'Кат жөнөтүү үчүн электрондук почта колдонмосу ачылат.',
    formStatus: 'Каттын долбоору даяр — аны почта колдонмосунан жөнөтүңүз.',
    footer: 'Үйрөнүүгө кызыгам. Жаңы идеяларга ачыкмын.',
    backTop: 'Жогоруга',
    close: 'Жабуу',
    discuss: 'Идея тууралуу сүйлөшүү',
  },
  ru: {
    pageTitle: 'Асема Алтынбекова — Портфолио',
    profession: 'Ученица, изучающая веб-разработку и графический дизайн',
    brandLabel: 'Асема Алтынбекова — главная',
    navLabel: 'Основная навигация',
    birthMonth: 'июня',
    birthYear: '2008 г.',
    schoolDates: 'Сентябрь 2015 — Май 2026',
    portraitAlt: 'Портрет Асемы Алтынбековой',
    portraitCaption: 'АСЕМА АЛТЫНБЕКОВА',
    portraitPlace: 'БИШКЕК · КЫРГЫЗСТАН',
    nav: ['Обо мне', 'Образование', 'Курсы', 'Навыки', 'Работы', 'Проекты', 'Услуги', 'Контакты'],
    available: 'Открыта новым возможностям',
    language: 'Выбрать язык',
    menu: 'Меню',
    openMenu: 'Открыть меню навигации',
    portfolio: 'Портфолио / 2025—26',
    heroIntro: 'Изучаю веб-разработку и визуальный дизайн, превращая любопытство в новые навыки.',
    contactMe: 'Связаться',
    viewProjects: 'Мои работы',
    scroll: 'Листайте ниже',
    marquee: 'Всегда учусь новому',
    aboutLabel: 'Немного обо мне',
    person: 'ЛИЧНАЯ ИНФОРМАЦИЯ',
    aboutTitle: <>Открыта<br />новым <em>идеям.</em></>,
    aboutLead: 'Я Асема — ученица, которой интересны творчество, технологии и новые знания.',
    aboutText: 'Окончила среднюю школу №2 им. Асана Абдраимова с хорошими оценками. Активно участвовала в школьных мероприятиях и олимпиадах.',
    aboutMore: 'Особенно интересуюсь веб-разработкой, графическим дизайном и кондитерским делом. Самостоятельно изучаю новые направления и продолжаю развивать свои навыки.',
    born: 'ДАТА РОЖДЕНИЯ',
    address: 'АДРЕС',
    email: 'ЭЛЕКТРОННАЯ ПОЧТА',
    educationLabel: 'Мой путь',
    educationNumber: 'ОБРАЗОВАНИЕ',
    educationTitle: <>Основа для<br /><em>будущего.</em></>,
    school: '№2 Асан Абдраимов',
    schoolLocation: '№2 Асан Абдраимов, Казарман.',
    schoolDescription: 'Окончила среднюю школу с хорошими оценками. Активно участвовала в школьных мероприятиях и олимпиадах.',
    coursesLabel: 'Самостоятельное обучение',
    coursesNumber: 'КУРСЫ И ИНТЕРЕСЫ',
    coursesTitle: <>Учусь с<br /><em>интересом.</em></>,
    course1: 'Получение среднего общего образования. Параллельно самостоятельно изучаю веб-разработку (HTML, CSS, JavaScript) и основы программирования.',
    course2: 'Окончание средней общеобразовательной школы №2 им. Асана Абдраимова (Казарман). Увлекаюсь приготовлением десертов, выпечкой и кондитерских изделий, развиваю навыки в этой сфере.',
    course3: 'Получение среднего общего образования в средней общеобразовательной школе №2 им. Асана Абдраимова (с. Казарман). Активный интерес к сфере визуальных коммуникаций и графического дизайна. Самостоятельно изучаю основы композиции, цветоведения, типографики и популярные графические редакторские программы (Photoshop, Figma, Illustrator) для создания современного визуального контента.',
    skillsLabel: 'Что я изучаю',
    skillsNumber: 'НАВЫКИ',
    skillsTitle: <>Цифровые<br /><em>основы.</em></>,
    skillsIntro: 'Постоянно развиваю свои знания веб-технологий и творческих инструментов.',
    skillsFoot: 'Каждый день — новый шаг.',
    languagesLabel: 'Языки',
    languagesNumber: 'УРОВЕНЬ ВЛАДЕНИЯ',
    languagesTitle: <>Находим<br /><em>общий язык.</em></>,
    languageLevel: 'УРОВЕНЬ',
    editLevel: 'Изменить уровень английского',
    workLabel: 'Избранное',
    workNumber: 'ИЗБРАННЫЕ РАБОТЫ',
    workTitle: <>Идеи для<br /><em>вдохновения.</em></>,
    workIntro: <>Творческие исследования на разные темы:<br />визуальные идеи и внимание к деталям.</>,
    allWork: 'Есть интересная идея?',
    makeReal: 'Давайте воплотим её',
    projectsLabel: 'Опубликованные проекты',
    projectsNumber: 'ПРОЕКТИ',
    projectsTitle: <>Мои <em>проекты.</em></>,
    projectsIntro: 'Опубликованный веб-проект. Откройте ссылку, чтобы изучить сайт целиком.',
    projectVisit: 'Открыть сайт',
    liveProject: {
      name: 'Subtle Pastelito',
      category: 'Веб-сайт · 2026',
      description: 'Сайт, созданный на HTML, CSS и JavaScript. Чистый дизайн, тёплые тона и адаптивная вёрстка для всех устройств.',
    },
    servicesLabel: 'Чем могу помочь',
    servicesNumber: 'УСЛУГИ',
    servicesTitle: <>От идеи<br /><em>к результату.</em></>,
    servicesIntro: 'Вместе — от первого наброска до финальных деталей.',
    services: [
      ['Визуальный стиль бренда', 'Уникальный образ, который запоминается и отражает свою идею.'],
      ['Цифровой дизайн', 'Понятные, удобные и эстетичные цифровые решения и веб-сайты.'],
      ['Арт-направление', 'Творческое видение — от первых референсов до финального результата.'],
    ],
    askService: 'Узнать об услуге',
    contactLabel: 'Давайте знакомиться',
    contactNumber: 'КОНТАКТЫ',
    contactKicker: 'Есть идея?',
    contactTitle: <>Давайте создадим<br /><em>что-то вместе.</em></>,
    based: 'АДРЕС',
    phone: 'ТЕЛЕФОН',
    elsewhere: 'СОЦИАЛЬНЫЕ СЕТИ',
    formTitle: 'Расскажите, что задумали.',
    name: 'Ваше имя',
    namePlaceholder: 'Как к вам обращаться?',
    emailAddress: 'Электронная почта',
    emailPlaceholder: 'you@example.com',
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите немного о вашей идее...',
    send: 'Отправить сообщение',
    formNote: 'Откроется почтовое приложение для отправки письма.',
    formStatus: 'Черновик письма готов — отправьте его из почтового приложения.',
    footer: 'Открыта новым знаниям и творческим идеям.',
    backTop: 'Наверх',
    close: 'Закрыть',
    discuss: 'Обсудить идею',
  },
  en: {
    pageTitle: 'Asema Altynbekova — Portfolio',
    profession: 'Student exploring web development & graphic design',
    brandLabel: 'Asema Altynbekova — home',
    navLabel: 'Main navigation',
    birthMonth: 'June',
    birthYear: '2008',
    schoolDates: 'September 2015 — May 2026',
    portraitAlt: 'Portrait of Asema Altynbekova',
    portraitCaption: 'ASEMA ALTYNBEKOVA',
    portraitPlace: 'BISHKEK · KYRGYZSTAN',
    nav: ['About', 'Education', 'Courses', 'Skills', 'Work', 'Projects', 'Services', 'Contact'],
    available: 'Open to new opportunities',
    language: 'Choose language',
    menu: 'Menu',
    openMenu: 'Open navigation menu',
    portfolio: 'Portfolio / 2025—26',
    heroIntro: 'Exploring web development and visual design, turning curiosity into new skills.',
    contactMe: 'Get in touch',
    viewProjects: 'View my work',
    scroll: 'Scroll to explore',
    marquee: 'Always learning',
    aboutLabel: 'A little about me',
    person: 'PERSONAL DETAILS',
    aboutTitle: <>Open to<br /><em>new ideas.</em></>,
    aboutLead: 'I’m Asema — a student curious about creativity, technology, and learning new things.',
    aboutText: 'I graduated from Secondary School No. 2 named after Asan Abdraimov with good grades. I actively participated in school events and academic competitions.',
    aboutMore: 'I’m especially interested in web development, graphic design, and pastry-making. I explore new subjects independently and keep building my skills.',
    born: 'DATE OF BIRTH',
    address: 'ADDRESS',
    email: 'EMAIL',
    educationLabel: 'My journey',
    educationNumber: 'EDUCATION',
    educationTitle: <>A foundation<br /><em>for what’s next.</em></>,
    school: '№2 Асан Абдраимов',
    schoolLocation: '№2 Асан Абдраимов, Kazarman.',
    schoolDescription: 'Completed secondary school with good grades. Actively participated in school events and academic competitions.',
    coursesLabel: 'Independent learning',
    coursesNumber: 'COURSES & INTERESTS',
    coursesTitle: <>Learning with<br /><em>curiosity.</em></>,
    course1: 'Secondary general education. Alongside school, I independently study web development (HTML, CSS, JavaScript) and programming fundamentals.',
    course2: 'Graduated from Secondary School No. 2 named after Asan Abdraimov (Kazarman). I enjoy making desserts, baking, and confectionery, and continue developing my skills in this area.',
    course3: 'Secondary general education at Secondary School No. 2 named after Asan Abdraimov (Kazarman village). I’m interested in visual communication and graphic design. I independently study composition, color theory, typography, and popular design software (Photoshop, Figma, Illustrator) to create contemporary visual content.',
    skillsLabel: 'What I’m learning',
    skillsNumber: 'SKILLS',
    skillsTitle: <>Digital<br /><em>foundations.</em></>,
    skillsIntro: 'I’m continually developing my knowledge of web technologies and creative tools.',
    skillsFoot: 'A little progress, every day.',
    languagesLabel: 'Languages',
    languagesNumber: 'LANGUAGE PROFICIENCY',
    languagesTitle: <>Finding a<br /><em>common language.</em></>,
    languageLevel: 'LEVEL',
    editLevel: 'Edit English proficiency',
    workLabel: 'A few good things',
    workNumber: 'SELECTED WORK',
    workTitle: <>Ideas to<br /><em>explore.</em></>,
    workIntro: <>Creative explorations across different themes:<br />visual ideas and thoughtful details.</>,
    allWork: 'Have an idea in mind?',
    makeReal: 'Let’s bring it to life',
    projectsLabel: 'Published projects',
    projectsNumber: 'PROJECTS',
    projectsTitle: <>My <em>projects.</em></>,
    projectsIntro: 'A published website built from scratch. Open the link to explore the full project.',
    projectVisit: 'Open the site',
    liveProject: {
      name: 'Subtle Pastelito',
      category: 'Website · 2026',
      description: 'A website built with HTML, CSS, and JavaScript. Clean design, warm colour palette, and fully responsive across all devices.',
    },
    servicesLabel: 'Ways I can help',
    servicesNumber: 'SERVICES',
    servicesTitle: <>From idea<br /><em>to impact.</em></>,
    servicesIntro: 'Working together, from the first sketch to the final details.',
    services: [
      ['Brand visual identity', 'A distinctive visual world that feels meaningful, memorable, and lasting.'],
      ['Digital experiences', 'Clear, intuitive, and considered digital design and websites.'],
      ['Art direction', 'A creative vision, from the first references through to the final frame.'],
    ],
    askService: 'Ask about this service',
    contactLabel: 'Let’s say hello',
    contactNumber: 'CONTACT',
    contactKicker: 'Have an idea?',
    contactTitle: <>Let’s make<br /><em>something together.</em></>,
    based: 'ADDRESS',
    phone: 'PHONE',
    elsewhere: 'ELSEWHERE',
    formTitle: 'Tell me what you’re thinking.',
    name: 'Your name',
    namePlaceholder: 'How should I call you?',
    emailAddress: 'Email address',
    emailPlaceholder: 'you@example.com',
    message: 'Your message',
    messagePlaceholder: 'Tell me a little about your idea...',
    send: 'Send a message',
    formNote: 'Your email app will open to send your message.',
    formStatus: 'Your email draft is ready — finish sending it in your mail app.',
    footer: 'Open to new knowledge and creative ideas.',
    backTop: 'Back to top',
    close: 'Close',
    discuss: 'Discuss an idea',
  },
}

const projects = [
  {
    number: '01',
    name: 'Serein',
    image: 'photo-1608248543803-ba4f8c70ae0b',
    className: 'project-card--large',
    category: { ky: 'Визуалдык стиль · 2025', ru: 'Айдентика · 2025', en: 'Brand identity · 2025' },
    description: {
      ky: 'Табигый косметика үчүн жаңы визуалдык тил.',
      ru: 'Новый визуальный язык для бренда натурального ухода.',
      en: 'A new visual language for a slower kind of skincare.',
    },
    detail: {
      ky: 'Serein — жай жашоонун ыргагына арналган табигый косметика бренди. Минималисттик түстөр, так типография жана таңгактын бирдиктүү системасы бул долбоордун негизин түзөт.',
      ru: 'Serein — бренд натуральной косметики, вдохновлённый искусством замедляться. Сдержанная палитра, выразительная типографика и целостная система упаковки формируют его визуальный язык.',
      en: 'Serein is a botanical skincare studio built around the ritual of slowing down. The identity pairs a restrained palette with tactile typography and a flexible packaging system designed to feel at home on a bathroom shelf.',
    },
    services: { ky: 'Стратегия, аталыш, арт-багыт, таңгак', ru: 'Стратегия, название, арт-дирекшн, упаковка', en: 'Strategy, Naming, Art direction, Packaging' },
  },
  {
    number: '02',
    name: 'Forma Objects',
    image: 'photo-1490312278390-ab64016e0aa9',
    className: 'project-card--offset',
    category: { ky: 'Санариптик дизайн · 2025', ru: 'Цифровой дизайн · 2025', en: 'Digital experience · 2025' },
    description: {
      ky: 'Узакка сакталчу буюмдар үчүн онлайн мейкиндик.',
      ru: 'Онлайн-пространство для вещей, которые хочется хранить.',
      en: 'An online home for objects made to be kept.',
    },
    detail: {
      ky: 'Көз карандысыз эмерек бренди үчүн ойлонулган интернет-дүкөн. Бош мейкиндик, жылуу сүрөттөр жана редакциялык ыргак ар бир буюмга көңүл бурат.',
      ru: 'Продуманное пространство интернет-магазина для независимого мебельного бренда. Воздух, тёплая фотография и спокойный редакционный ритм помогают раскрыть каждый предмет.',
      en: 'A considered e-commerce experience for an independent furniture label. Generous whitespace, warm product photography, and a quiet editorial rhythm make each piece the main event.',
    },
    services: { ky: 'Арт-багыт, UI/UX, веб-дизайн', ru: 'Арт-дирекшн, UI/UX, веб-дизайн', en: 'Art direction, UI/UX, Web design' },
  },
  {
    number: '03',
    name: 'Nocturne',
    image: 'photo-1515886657613-9f3515b0c78f',
    className: 'project-card--wide',
    category: { ky: 'Кампания · 2024', ru: 'Кампания · 2024', en: 'Campaign · 2024' },
    description: {
      ky: 'Шаар тынчый баштаган сааттардын сулуулугу.',
      ru: 'Красота города в промежутке между днём и ночью.',
      en: 'Finding beauty in the in-between hours.',
    },
    detail: {
      ky: 'Көз карандысыз мода бренди үчүн түнкү шаардын визуалдык изилдөөсү. Кинематографиялык сүрөттөр жана так типография басма жана санарип форматтарда бирдиктүү атмосфера түзөт.',
      ru: 'Визуальное исследование ночного города для независимого модного бренда. Кинематографичные изображения и выразительная типографика задают настроение печатным и цифровым материалам.',
      en: 'Nocturne is a visual study of the city after dark, expressed as a campaign for a new independent fashion house. Cinematic imagery and a sharp typographic system set the tone across print and digital.',
    },
    services: { ky: 'Кампания, сүрөт багыты, редакция', ru: 'Кампания, фотонаправление, редактура', en: 'Campaign, Photography direction, Editorial' },
  },
  {
    number: '04',
    name: 'Aroma',
    image: '/кондитер.png',
    className: 'project-card--large',
    category: { ky: 'Кондитердик бренд · Aroma', ru: 'Кондитерский бренд · Aroma', en: 'Confectionery brand · Aroma' },
    description: {
      ky: 'Кол өнөрчүлүк кондитердик азыктар. Табигый азыктар жана өзгөчө даамдар үчүн жаңы визуалдык тил.',
      ru: 'Авторская кондитерская. Новый визуальный язык для натуральных ингредиентов и фирменных вкусов.',
      en: 'Artisanal Pastry. A new visual language for natural ingredients and signature flavors.',
    },
    detail: {
      ky: 'Aroma — табигый азыктарга жана өзгөчө даамдарга арналган кол өнөрчүлүк кондитердик бренд. Ачык түстөгү таңгак жана так, минималисттик кара типография.',
      ru: 'Aroma — авторский кондитерский бренд натуральных ингредиентов и фирменных вкусов. Светлая упаковка с чёткой минималистичной чёрной типографикой.',
      en: 'Artisanal Pastry. A new visual language for natural ingredients and signature flavors. Clean, light-toned packaging with crisp, minimalist black typography.',
    },
    services: { ky: 'Брендинг, таңгак дизайны, арт-багыт', ru: 'Брендинг, дизайн упаковки, арт-дирекшн', en: 'Branding, Packaging, Art direction' },
  },
  {
    number: '05',
    name: 'Studio Vizor',
    image: '/гд.png',
    className: 'project-card--offset',
    category: { ky: 'Графикалык дизайн · Studio Vizor', ru: 'Графический дизайн · Studio Vizor', en: 'Graphic design · Studio Vizor' },
    description: {
      ky: 'Визуалдык өзгөчөлүк. Заманбап визуалдык тил жана эскирбес брендинг.',
      ru: 'Визуальная идентичность. Создаём современный визуальный язык и вневременной брендинг.',
      en: 'Visual Identity. Crafting modern visual languages and timeless branding.',
    },
    detail: {
      ky: 'Studio Vizor заманбап визуалдык тилди жана эскирбес брендингди жаратат. Күңүрт графит же кара фон, чоң көрктүү серифтик аталыш жана майда, так sans-serif маалыматтары.',
      ru: 'Studio Vizor создаёт современные визуальные языки и вневременной брендинг. Тёмный графитовый или матово-чёрный фон, крупный элегантный заголовок с засечками и лаконичные детали без засечек.',
      en: 'Visual Identity. Crafting modern visual languages and timeless branding. Dark charcoal or matte black background, large elegant serif title paired with small, clean sans-serif details.',
    },
    services: { ky: 'Визуалдык өзгөчөлүк, брендинг, типография', ru: 'Визуальная идентичность, брендинг, типографика', en: 'Visual identity, Branding, Typography' },
  },
  {
    number: '06',
    name: 'CodeCraft',
    image: '/айти.png',
    className: 'project-card--wide',
    category: { ky: 'IT жана программалоо · CodeCraft', ru: 'IT и разработка · CodeCraft', en: 'IT & software development · CodeCraft' },
    description: {
      ky: 'Санариптик чечимдер. Акылдуу өнүмдөрдү жана жаңы муундагы интерфейстерди иштеп чыгуу.',
      ru: 'Цифровые решения. Разрабатываем умные продукты и интерфейсы нового поколения.',
      en: 'Digital Solutions. Engineering smart products and next-generation interfaces.',
    },
    detail: {
      ky: 'CodeCraft акылдуу санариптик өнүмдөрдү жана жаңы муундагы интерфейстерди иштеп чыгат. Так геометриялык sans-serif типографиясы бар таза ак же күмүш визуалдык стиль.',
      ru: 'CodeCraft разрабатывает умные цифровые продукты и интерфейсы нового поколения. Чистый белый или серебристый фон с чёткой геометрической типографикой без засечек.',
      en: 'Digital Solutions. Engineering smart products and next-generation interfaces. Crisp white or silver background with sharp geometric sans-serif typography.',
    },
    services: { ky: 'Веб-иштеп чыгуу, интерфейс дизайны, санариптик чечимдер', ru: 'Веб-разработка, дизайн интерфейсов, цифровые решения', en: 'Web development, Interface design, Digital solutions' },
  },
]

const skillLevels = [
  { name: 'HTML', level: 3 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 3 },
  { name: 'React', level: 2 },
]

const languages = [
  { name: { ky: 'Кыргыз тили', ru: 'Кыргызский', en: 'Kyrgyz' }, level: 5 },
  { name: { ky: 'Орус тили', ru: 'Русский', en: 'Russian' }, level: 2 },
]

const courses = [
  { name: { ky: 'Окурман айти', ru: 'Окурман айти', en: 'Okurman IT' }, date: { ky: 'Август 2026', ru: 'Август 2026', en: 'August 2026' }, key: 'course1' },
  { name: { ky: 'Кондитер', ru: 'Кондитер', en: 'Pastry' }, date: { ky: 'Сентябрь 2026', ru: 'Сентябрь 2026', en: 'September 2026' }, key: 'course2' },
  { name: { ky: 'Графикалык дизайн', ru: 'ГД дизайнер', en: 'Graphic design' }, date: { ky: 'Октябрь 2026', ru: 'Октябрь 2026', en: 'October 2026' }, key: 'course3' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'} viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function SocialLink({ label, href, children }) {
  return <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
}

function LanguageSwitcher({ language, onChange, label, className = '' }) {
  return (
    <label className={`language-switcher ${className}`}>
      <span className="visually-hidden">{label}</span>
      <select value={language} onChange={(event) => onChange(event.target.value)} aria-label={label}>
        {languageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  )
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'ru')
  const [englishLevel, setEnglishLevel] = useState(() => Number(localStorage.getItem('portfolio-english-level') || 5))
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [formStatus, setFormStatus] = useState('')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.pageTitle
    localStorage.setItem('portfolio-language', language)
  }, [language, t.pageTitle])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(activeProject))
    if (activeProject) document.querySelector('.modal-close')?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  const closeMenu = () => setMenuOpen(false)

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage)
    closeMenu()
  }

  const handleEnglishLevelChange = (event) => {
    const nextLevel = Number(event.target.value)
    setEnglishLevel(nextLevel)
    localStorage.setItem('portfolio-english-level', String(nextLevel))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    setFormStatus(t.formStatus)
    window.location.href = `mailto:satarovaltynbek7@gmail.com?subject=${subject}&body=${body}`
    event.currentTarget.reset()
  }

  const navIds = ['about', 'education', 'courses', 'skills', 'work', 'projects', 'services', 'contact']

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={t.brandLabel}>
          A<span className="wordmark-dot">.</span>
        </a>
        <a className="header-note" href="#home">{t.profession}</a>
        <div
          className={`header-controls${menuOpen ? ' is-open' : ''}`}
          style={menuOpen ? { opacity: 1, visibility: 'visible', transform: 'translateY(0)' } : undefined}
        >
          <nav className="site-nav" aria-label={t.navLabel}>
            {t.nav.map((item, index) => (
              <a key={navIds[index]} href={`#${navIds[index]}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-availability" href="#contact" onClick={closeMenu}>
              <span className="availability-dot" /> {t.available}
            </a>
          </nav>
          <LanguageSwitcher language={language} onChange={handleLanguageChange} label={t.language} />
        </div>
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.close : t.openMenu}
        >
          <span />
          <span />
          <span className="menu-toggle-label">{menuOpen ? t.close : t.menu}</span>
        </button>
      </header>

      <main>
        <section className="hero hero--name-long" id="home">
          <div className="hero-grain" />
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> {t.portfolio}</p>
            <h1>Асема<br /><span>Алтынбекова</span></h1>
            <div className="hero-bottom">
              <p className="hero-role">{t.profession}</p>
              <p className="hero-intro">{t.heroIntro}</p>
              <div className="hero-actions">
                <a className="button button--gold" href="#contact">{t.contactMe} <ArrowIcon diagonal /></a>
                <a className="text-link" href="#work">{t.viewProjects} <span>↓</span></a>
              </div>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src="/1.png"
              alt={t.portraitAlt}
              fetchPriority="high"
            />
            <div className="portrait-caption"><span>{t.portraitCaption}</span><span>{t.portraitPlace}</span></div>
            <div className="portrait-mark">А</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> {t.scroll}</a>
          <p className="hero-index">01 — 09</p>
        </section>

        <div className="marquee" aria-label={t.marquee}>
          <div className="marquee-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span className="marquee-item" key={index}>{t.marquee} <i>✳</i> {t.aboutLabel} <i>✳</i></span>
            ))}
          </div>
        </div>

        <section className="about section-shell" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.aboutLabel}</p>
            <span className="section-number">01 / {t.person}</span>
          </div>
          <div className="about-layout">
            <div className="about-statement reveal">
              <h2>{t.aboutTitle}</h2>
              <div className="about-stamp" aria-hidden="true"><span>АСЕМА</span><b>✳</b><span>БИШКЕК</span></div>
            </div>
            <div className="about-copy reveal">
              <p className="about-lede">{t.aboutLead}</p>
              <p>{t.aboutText}</p>
              <p>{t.aboutMore}</p>
              <a className="text-link text-link--gold" href="#education">{t.educationLabel} <ArrowIcon /></a>
            </div>
            <div className="about-image reveal">
              <img src="/2.png" alt={t.portraitAlt} loading="lazy" />
              <span className="image-note">{t.aboutLabel}</span>
            </div>
            <div className="about-facts reveal">
              <div><strong>17 <span>{t.birthMonth}</span></strong><span>{t.born}<br />{t.birthYear}</span></div>
              <div><strong>Бишкек</strong><span>{t.address}<br />Ак-ордо, 720000 Бишкек</span></div>
              <div><strong>✉</strong><span>{t.email}<br /><a href="mailto:satarovaltynbek7@gmail.com">satarovaltynbek7@gmail.com</a></span></div>
            </div>
          </div>
        </section>

        <section className="education section-shell" id="education">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.educationLabel}</p>
            <span className="section-number">02 / {t.educationNumber}</span>
          </div>
          <div className="education-intro reveal">
            <h2>{t.educationTitle}</h2>
          </div>
          <article className="education-card reveal">
            <span className="education-mark" aria-hidden="true">02</span>
            <div className="education-card-main">
              <p className="eyebrow">2015 — 2026</p>
              <h3>{t.school}</h3>
              <p>{t.schoolLocation}</p>
              <p className="education-description">{t.schoolDescription}</p>
            </div>
            <span className="education-date">{t.schoolDates}</span>
          </article>
        </section>

        <section className="courses section-shell" id="courses">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.coursesLabel}</p>
            <span className="section-number">03 / {t.coursesNumber}</span>
          </div>
          <div className="courses-intro reveal"><h2>{t.coursesTitle}</h2></div>
          <div className="course-list">
            {courses.map((course, index) => (
              <article className="course-row reveal" key={course.key}>
                <span className="course-number">0{index + 1}</span>
                <div className="course-main">
                  <p className="course-date">{course.date[language]}</p>
                  <h3>{course.name[language]}</h3>
                </div>
                <p className="course-description">{t[course.key]}</p>
                <span className="course-spark" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.skillsLabel}</p>
            <span className="section-number">04 / {t.skillsNumber}</span>
          </div>
          <div className="skills-layout">
            <div className="skills-intro reveal">
              <h2>{t.skillsTitle}</h2>
              <p>{t.skillsIntro}</p>
              <span className="skills-symbol" aria-hidden="true">✳</span>
            </div>
            <div className="skills-list">
              {skillLevels.map((skill, index) => (
                <div className="skill-row reveal" key={skill.name} style={{ '--skill-delay': `${index * 90}ms` }}>
                  <div className="skill-meta"><span>{skill.name}</span><span>{skill.level}/5</span></div>
                  <div className="skill-track"><span style={{ '--skill-level': `${skill.level * 20}%` }} /></div>
                </div>
              ))}
              <p className="skills-footnote">{t.skillsFoot}</p>
            </div>
          </div>
        </section>

        <section className="languages section-shell" id="languages">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.languagesLabel}</p>
            <span className="section-number">05 / {t.languagesNumber}</span>
          </div>
          <div className="languages-layout">
            <div className="languages-intro reveal"><h2>{t.languagesTitle}</h2></div>
            <div className="language-list">
              {languages.map((item, index) => (
                <div className="language-row reveal" key={item.name.en} style={{ '--skill-delay': `${index * 90}ms` }}>
                  <div className="skill-meta"><span>{item.name[language]}</span><span>{item.level}/5</span></div>
                  <div className="skill-track"><span style={{ '--skill-level': `${item.level * 20}%` }} /></div>
                </div>
              ))}
              <div className="language-row language-row--editable reveal">
                <div className="skill-meta">
                  <span>{language === 'ky' ? 'Англис тили' : language === 'ru' ? 'Английский' : 'English'}</span>
                  <label className="language-level-select">
                    <span className="visually-hidden">{t.editLevel}</span>
                    <select value={englishLevel} onChange={handleEnglishLevelChange} aria-label={t.editLevel}>
                      {[1, 2, 3, 4, 5].map((level) => <option key={level} value={level}>{level}/5</option>)}
                    </select>
                  </label>
                </div>
                <div className="skill-track"><span style={{ '--skill-level': `${englishLevel * 20}%` }} /></div>
              </div>
              <p className="skills-footnote">{t.languageLevel} · /5</p>
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.workLabel}</p>
            <span className="section-number">06 / {t.workNumber}</span>
          </div>
          <div className="work-heading reveal">
            <h2>{t.workTitle}</h2>
            <p>{t.workIntro}</p>
            <span className="work-heading-mark">2024 — 2025</span>
          </div>
          <div className="project-grid">
            {projects.slice(3).map((project, index) => (
              <button
                type="button"
                className={`project-card ${project.className} reveal`}
                key={project.number}
                onClick={() => setActiveProject(project)}
                aria-label={`${language === 'ky' ? 'Долбоор тууралуу' : language === 'ru' ? 'Подробнее о проекте' : 'View project'} ${project.name}`}
              >
                <span className="project-image">
                  <img
                    src={project.image.startsWith('/') ? project.image : `https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1300&q=82`}
                    alt={`${project.name} — ${project.category[language]}`}
                    loading="lazy"
                  />
                  <span className="project-open"><ArrowIcon diagonal /></span>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </span>
                <span className="project-info">
                  <span><strong>{project.name}</strong><small>{project.description[language]}</small></span>
                  <span className="project-category">{project.category[language]}</span>
                </span>
              </button>
            ))}
          </div>
          <a className="all-work-link reveal" href="#contact">{t.allWork} <span>{t.makeReal} <ArrowIcon /></span></a>
        </section>

        <section className="live-projects section-shell" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.projectsLabel}</p>
            <span className="section-number">07 / {t.projectsNumber}</span>
          </div>
          <div className="live-projects-intro reveal">
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsIntro}</p>
          </div>
          <a
            className="live-project reveal"
            href="https://subtle-pastelito-89430f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="live-project-image">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1300&q=82"
                alt={t.liveProject.name}
                loading="lazy"
              />
              <span className="project-number">01</span>
            </span>
            <span className="live-project-copy">
              <span className="project-category">{t.liveProject.category}</span>
              <strong>{t.liveProject.name}</strong>
              <small>{t.liveProject.description}</small>
              <span className="live-project-link">{t.projectVisit} <ArrowIcon diagonal /></span>
            </span>
          </a>
        </section>

        <section className="services section-shell" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.servicesLabel}</p>
            <span className="section-number">08 / {t.servicesNumber}</span>
          </div>
          <div className="services-intro reveal">
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesIntro}</p>
          </div>
          <div className="service-list">
            {t.services.map(([title, text], index) => (
              <article className="service-row reveal" key={title}>
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon" aria-hidden="true">{['✳', '◈', '↗'][index]}</span>
                <div className="service-copy"><h3>{title}</h3><p>{text}</p></div>
                <a className="service-link" href="#contact" aria-label={`${t.askService}: ${title}`}><ArrowIcon diagonal /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-glow" />
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> {t.contactLabel}</p>
            <span className="section-number">09 / {t.contactNumber}</span>
          </div>
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <p className="contact-kicker">{t.contactKicker}</p>
              <h2>{t.contactTitle}</h2>
              <a className="contact-email" href="mailto:satarovaltynbek7@gmail.com">satarovaltynbek7@gmail.com <ArrowIcon diagonal /></a>
              <div className="contact-details">
                <div><span>{t.based}</span><strong>Ак-ордо, 720000 Бишкек</strong></div>
                <div><span>{t.phone}</span><a className="phone-link" href="tel:0507113956">0507113956</a></div>
                <div><span>{t.elsewhere}</span><div className="social-links">
                  <SocialLink label="Instagram" href="https://www.instagram.com/"><span>IG</span></SocialLink>
                  <SocialLink label="LinkedIn" href="https://www.linkedin.com/"><span>IN</span></SocialLink>
                  <SocialLink label="Behance" href="https://www.behance.net/"><span>BE</span></SocialLink>
                </div></div>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <p className="form-heading">{t.formTitle}</p>
              <label htmlFor="contact-name">{t.name}</label>
              <input id="contact-name" name="name" type="text" placeholder={t.namePlaceholder} required />
              <label htmlFor="contact-email">{t.emailAddress}</label>
              <input id="contact-email" name="email" type="email" placeholder={t.emailPlaceholder} required />
              <label htmlFor="contact-message">{t.message}</label>
              <textarea id="contact-message" name="message" rows="3" placeholder={t.messagePlaceholder} required />
              <button className="button button--gold form-submit" type="submit">{t.send} <ArrowIcon diagonal /></button>
              <p className="form-status" role="status">{formStatus}</p>
              <p className="form-note">{t.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-mark" href="#home">А<span>.</span></a>
        <p>{t.footer}</p>
        <a href="#home" className="back-top">{t.backTop} ↑</a>
        <span className="footer-copyright">© АСЕМА АЛТЫНБЕКОВА 2026</span>
      </footer>

      {activeProject && (
        <div className="project-modal" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveProject(null)
        }}>
          <article
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onKeyDown={(event) => {
              if (event.key === 'Escape') setActiveProject(null)
            }}
          >
            <button type="button" className="modal-close" onClick={() => setActiveProject(null)} aria-label={t.close}>×</button>
            <img
              src={activeProject.image.startsWith('/') ? activeProject.image : `https://images.unsplash.com/${activeProject.image}?auto=format&fit=crop&w=1400&q=85`}
              alt={`${activeProject.name} — ${activeProject.category[language]}`}
            />
            <div className="modal-content">
              <p className="eyebrow"><span className="eyebrow-line" /> {activeProject.category[language]}</p>
              <h2 id="modal-title">{activeProject.name}</h2>
              <p>{activeProject.detail[language]}</p>
              <span className="modal-services">{activeProject.services[language]}</span>
              <a className="button button--gold" href="#contact" onClick={() => setActiveProject(null)}>{t.discuss} <ArrowIcon diagonal /></a>
            </div>
          </article>
        </div>
      )}
    </>
  )
}

export default App
