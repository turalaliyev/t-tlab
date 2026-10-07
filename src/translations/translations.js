import { details } from './details';

const base = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      stack: 'Stack',
      contact: 'Contact',
      cta: 'Start a project',
      language: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    common: {
      visitSite: 'Visit site',
      backToTop: 'Back to top',
    },
    home: {
      badge: 'Taking on new projects',
      titleA: 'Software development',
      titleB: 'for mobile and web.',
      description:
        'We design, build and support custom software, mobile apps and web platforms. One team takes your product from the first call to launch and beyond, and you work directly with the engineers.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See our work',
      stats: [
        { value: '3+', label: 'Years building' },
        { value: '15+', label: 'Projects shipped' },
        { value: '100%', label: 'Client satisfaction' },
        { value: '24h', label: 'Response time' },
      ],
      techStrip: 'Built with tools trusted by the best product teams',
      services: {
        eyebrow: 'Services',
        all: 'All services',
        title: 'Custom software, mobile apps and the web.',
        description:
          'Pick one service or hand us the whole product. The same team carries it through design, development and launch.',
        items: [
          {
            title: 'Custom software',
            desc: 'Web platforms, SaaS products, client portals and internal tools that replace spreadsheets and manual work.',
            tags: ['Architecture', 'APIs & integrations', 'Auth & roles'],
          },
          {
            title: 'Mobile apps',
            desc: 'iOS and Android apps from one codebase, published to the App Store and Google Play.',
            tags: ['iOS', 'Android', 'Push notifications'],
          },
          {
            title: 'Web development',
            desc: 'Corporate websites and multi-page platforms your team can edit on its own, with SEO set up from day one.',
            tags: ['CMS', 'SEO', 'Multilingual'],
          },
          {
            title: 'E-commerce',
            desc: 'Online stores with catalog, cart, payments and delivery, connected to the tools you already use.',
            tags: ['Payments', 'Inventory', 'Integrations'],
          },
          {
            title: 'UI/UX design',
            desc: 'Research, wireframes and interface design in Figma, tested with you before any code is written.',
            tags: ['Research', 'Prototypes', 'Design systems'],
          },
          {
            title: 'Landing pages',
            desc: 'Single pages for a launch, campaign or product, built to load fast and turn visits into leads.',
            tags: ['Copy & layout', 'Lead forms', 'Analytics'],
          },
        ],
      },
      work: {
        eyebrow: 'Selected work',
        title: 'Recent launches.',
        description: 'Live products we designed and built for clients in education, finance, fashion, media, advertising and agriculture.',
        all: 'All projects',
      },
      process: {
        eyebrow: 'Process',
        title: 'How a project runs.',
        description: 'Four stages, clear deliverables at each one, and no surprises on the invoice.',
        steps: [
          {
            title: 'Discovery',
            meta: 'Week 1',
            desc: 'A call and a written brief: goals, users, scope, timeline and a cost estimate.',
          },
          {
            title: 'Design',
            meta: '1–3 weeks',
            desc: 'Wireframes first, then final screens. You review and comment before we build.',
          },
          {
            title: 'Build',
            meta: '2–12 weeks',
            desc: 'Development in short sprints with a demo every week on a live staging link.',
          },
          {
            title: 'Launch & support',
            meta: 'Ongoing',
            desc: 'Deployment, analytics, handover and training. We stay on for fixes and new features.',
          },
        ],
      },
      why: {
        eyebrow: 'Why 22 Lab',
        title: 'Agency output, studio attention.',
        items: [
          {
            title: 'Direct access',
            desc: 'No account managers in between. You message the developer working on your project.',
          },
          {
            title: 'Weekly demos',
            desc: 'Every week you get something you can click, not a status report.',
          },
          {
            title: 'Fast by default',
            desc: 'Quick load times, responsive layouts and clean SEO markup are part of every build.',
          },
          {
            title: 'You own everything',
            desc: 'Code, domains, hosting accounts and design files are handed over to you.',
          },
        ],
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Questions we hear often.',
        items: [
          {
            q: 'How much does a project cost?',
            a: 'It depends on scope. After a short call we send a written estimate with the cost and timeline for the agreed scope, so you know the numbers before anything starts.',
          },
          {
            q: 'How long does it take?',
            a: 'The first release of custom software or a mobile app usually takes 2–4 months. A website takes 3–6 weeks, a landing page 1–2 weeks.',
          },
          {
            q: 'Do you work with clients outside Azerbaijan?',
            a: 'Yes. We work remotely and communicate in English, Russian and Azerbaijani.',
          },
          {
            q: 'Can I update the website myself?',
            a: 'Yes. We connect a content management system so your team can edit text, images and products without a developer.',
          },
          {
            q: 'What happens after launch?',
            a: 'We stay available for fixes, updates and new features, either per request or on an ongoing basis.',
          },
        ],
      },
      cta: {
        title: 'Have a project in mind?',
        description: 'Tell us what you are building. We reply within 24 hours with questions or a first estimate.',
        primary: 'Start a project',
        secondary: 'Message on WhatsApp',
      },
    },
    projects: [
      {
        category: 'Education & AI',
        tagline: 'AI study assistant for university students',
        desc: 'iOS and Android app that answers students’ questions with AI, turns course documents into flashcards, quizzes, mind maps and audio summaries, and offers private psychological support.',
      },
      {
        category: 'Finance & consulting',
        tagline: 'Audit and consulting firm',
        desc: 'Trilingual website for a licensed audit firm in Baku: services, blog, an academy section and a built-in tax calculator, with a free consultation request on every page.',
      },
      {
        category: 'Advertising & production',
        tagline: 'Advertising and packaging group',
        desc: 'Image-led website for a group working in advertising, packaging and marketing, presenting each line of business with full-screen visuals and service slides.',
      },
      {
        category: 'Fashion & retail',
        tagline: 'Handmade footwear brand',
        desc: 'Trilingual catalog for a Baku footwear brand: collections, bespoke service and store locations, with ordering through WhatsApp and content managed in Sanity.',
      },
      {
        category: 'Media & publishing',
        tagline: 'Fashion and culture magazine',
        desc: 'Editorial website for a fashion and culture magazine, with category sections, an events calendar and articles published from Sanity.',
      },
      {
        category: 'Agriculture & food',
        tagline: 'Fruit producer website',
        desc: 'Corporate website for a Quba fruit producer, presenting its products, storage and sorting services and photo gallery.',
      },
    ],
    portfolio: {
      eyebrow: 'Work',
      title: 'Products we have shipped.',
      description: 'Each one went from brief to launch with the same small team. Click through to see them live.',
      ctaTitle: 'Your project could be next.',
      ctaDesc: 'Send us a short brief and we will come back with questions, a timeline and an estimate.',
      cta: 'Start a project',
    },
    stack: {
      eyebrow: 'Technology',
      title: 'A modern stack, chosen per project.',
      description:
        'We pick tools for long-term maintainability, not trends. These are the ones we use and know well.',
      groups: [
        { title: 'Frontend', desc: 'Interfaces that are fast, accessible and easy to extend.' },
        { title: 'Mobile', desc: 'Native-feeling iOS and Android apps from a single codebase.' },
        { title: 'Backend & data', desc: 'APIs, databases, auth and real-time features.' },
        { title: 'CMS & commerce', desc: 'Content and stores your team manages without code.' },
        { title: 'Cloud & DevOps', desc: 'Hosting, CI/CD, monitoring and global delivery.' },
        { title: 'Design', desc: 'Wireframes, prototypes and design systems.' },
      ],
      principlesTitle: 'Engineering standards on every project',
      principles: [
        { title: 'Typed code', desc: 'TypeScript and code review keep bugs out of production.' },
        { title: 'Performance budget', desc: 'We measure Core Web Vitals before launch, not after complaints.' },
        { title: 'Error monitoring', desc: 'Crashes and slow pages are reported to us before users notice.' },
        { title: 'Automated deploys', desc: 'Every change goes through a preview link before it goes live.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us about your project.',
      description: 'Fill in the form or write to us directly. We reply within 24 hours.',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      location: 'Location',
      locationValue: 'Remote, working worldwide',
      socials: 'Elsewhere',
      nextTitle: 'What happens next',
      next: [
        'We read your brief and reply within 24 hours.',
        'A 30-minute call to go through goals and scope.',
        'You get a written estimate with timeline and cost.',
      ],
      formTitle: 'Project brief',
      fullName: 'Your name',
      emailAddress: 'Email',
      projectType: 'What do you need?',
      types: {
        landing: 'Landing page',
        website: 'Website',
        ecommerce: 'E-commerce',
        webapp: 'Custom software',
        mobile: 'Mobile app',
        design: 'UI/UX design',
        other: 'Something else',
      },
      budget: 'Budget',
      optional: 'optional',
      budgetPlaceholder: 'Select a range',
      budgets: ['Under $2k', '$2k – $5k', '$5k – $15k', '$15k+', 'Not sure yet'],
      projectDetails: 'Project details',
      projectDetailsPlaceholder: 'What are you building, who is it for, and when do you need it?',
      requireNDA: 'I need an NDA before sharing details',
      sendMessage: 'Send brief',
      formNote: 'Opens your email app with the brief filled in.',
    },
    footer: {
      tagline: 'Software, mobile and web development by one team, from first call to launch and support.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  },

  ru: {
    nav: {
      services: 'Услуги',
      work: 'Работы',
      process: 'Процесс',
      stack: 'Стек',
      contact: 'Контакты',
      cta: 'Обсудить проект',
      language: 'Язык',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
    common: {
      visitSite: 'Открыть сайт',
      backToTop: 'Наверх',
    },
    home: {
      badge: 'Берём новые проекты',
      titleA: 'Разработка ПО,',
      titleB: 'мобильных и веб‑приложений.',
      description:
        'Проектируем, разрабатываем и поддерживаем программное обеспечение, мобильные приложения и веб-платформы. Одна команда ведёт продукт от первого звонка до запуска и дальше, а вы работаете напрямую с инженерами.',
      ctaPrimary: 'Обсудить проект',
      ctaSecondary: 'Наши работы',
      stats: [
        { value: '3+', label: 'Года в разработке' },
        { value: '15+', label: 'Запущенных проектов' },
        { value: '100%', label: 'Довольных клиентов' },
        { value: '24ч', label: 'Время ответа' },
      ],
      techStrip: 'Работаем на инструментах, которым доверяют лучшие продуктовые команды',
      services: {
        eyebrow: 'Услуги',
        all: 'Все услуги',
        title: 'Программное обеспечение, мобильные приложения и веб.',
        description:
          'Возьмите одну услугу или доверьте нам весь продукт. Одна и та же команда ведёт его через дизайн, разработку и запуск.',
        items: [
          {
            title: 'Разработка ПО',
            desc: 'Веб-платформы, SaaS-продукты, личные кабинеты и внутренние инструменты вместо таблиц и ручной работы.',
            tags: ['Архитектура', 'API и интеграции', 'Роли и доступ'],
          },
          {
            title: 'Мобильные приложения',
            desc: 'Приложения для iOS и Android на одной кодовой базе, с публикацией в App Store и Google Play.',
            tags: ['iOS', 'Android', 'Push-уведомления'],
          },
          {
            title: 'Веб-разработка',
            desc: 'Корпоративные сайты и многостраничные платформы, которые ваша команда редактирует сама. SEO настроено с первого дня.',
            tags: ['CMS', 'SEO', 'Мультиязычность'],
          },
          {
            title: 'Интернет-магазины',
            desc: 'Каталог, корзина, оплата и доставка, подключённые к сервисам, которыми вы уже пользуетесь.',
            tags: ['Платежи', 'Склад', 'Интеграции'],
          },
          {
            title: 'UI/UX-дизайн',
            desc: 'Исследование, прототипы и дизайн интерфейсов в Figma. Согласуем с вами до начала разработки.',
            tags: ['Исследование', 'Прототипы', 'Дизайн-системы'],
          },
          {
            title: 'Лендинги',
            desc: 'Одностраничные сайты для запуска, рекламной кампании или продукта. Быстро грузятся и приводят заявки.',
            tags: ['Тексты и макет', 'Формы заявок', 'Аналитика'],
          },
        ],
      },
      work: {
        eyebrow: 'Избранные работы',
        title: 'Последние запуски.',
        description: 'Живые проекты, которые мы спроектировали и разработали для клиентов из образования, финансов, моды, медиа, рекламы и сельского хозяйства.',
        all: 'Все проекты',
      },
      process: {
        eyebrow: 'Процесс',
        title: 'Как проходит проект.',
        description: 'Четыре этапа, понятный результат на каждом и никаких сюрпризов в счёте.',
        steps: [
          {
            title: 'Анализ',
            meta: '1 неделя',
            desc: 'Созвон и письменное ТЗ: цели, пользователи, объём работ, сроки и оценка стоимости.',
          },
          {
            title: 'Дизайн',
            meta: '1–3 недели',
            desc: 'Сначала прототипы, затем финальные экраны. Вы согласуете их до начала разработки.',
          },
          {
            title: 'Разработка',
            meta: '2–12 недель',
            desc: 'Короткие спринты и демо каждую неделю на тестовой ссылке.',
          },
          {
            title: 'Запуск и поддержка',
            meta: 'Постоянно',
            desc: 'Публикация, аналитика, передача доступов и обучение. Остаёмся на связи для правок и новых функций.',
          },
        ],
      },
      why: {
        eyebrow: 'Почему 22 Lab',
        title: 'Результат агентства, внимание студии.',
        items: [
          {
            title: 'Прямой контакт',
            desc: 'Без менеджеров-посредников. Вы пишете разработчику, который ведёт ваш проект.',
          },
          {
            title: 'Демо каждую неделю',
            desc: 'Каждую неделю вы получаете то, что можно открыть и потрогать, а не отчёт о статусе.',
          },
          {
            title: 'Скорость по умолчанию',
            desc: 'Быстрая загрузка, адаптивная вёрстка и чистая SEO-разметка входят в каждый проект.',
          },
          {
            title: 'Всё принадлежит вам',
            desc: 'Код, домены, доступы к хостингу и дизайн-файлы передаются вам.',
          },
        ],
      },
      faq: {
        eyebrow: 'Вопросы',
        title: 'Частые вопросы.',
        items: [
          {
            q: 'Сколько стоит проект?',
            a: 'Зависит от объёма работ. После короткого созвона мы присылаем письменную оценку стоимости и сроков, чтобы вы знали цифры до начала работы.',
          },
          {
            q: 'Сколько времени занимает разработка?',
            a: 'Первая версия программного продукта или мобильного приложения обычно занимает 2–4 месяца. Сайт — 3–6 недель, лендинг — 1–2 недели.',
          },
          {
            q: 'Вы работаете с клиентами за пределами Азербайджана?',
            a: 'Да. Мы работаем удалённо и общаемся на английском, русском и азербайджанском.',
          },
          {
            q: 'Смогу ли я сам обновлять сайт?',
            a: 'Да. Мы подключаем систему управления контентом, чтобы ваша команда меняла тексты, фото и товары без разработчика.',
          },
          {
            q: 'Что происходит после запуска?',
            a: 'Мы остаёмся на связи для исправлений, обновлений и новых функций — по запросу или на постоянной основе.',
          },
        ],
      },
      cta: {
        title: 'Есть идея проекта?',
        description: 'Расскажите, что вы хотите создать. Ответим в течение 24 часов с вопросами или первой оценкой.',
        primary: 'Обсудить проект',
        secondary: 'Написать в WhatsApp',
      },
    },
    projects: [
      {
        category: 'Образование и ИИ',
        tagline: 'ИИ-помощник для студентов',
        desc: 'Приложение для iOS и Android: отвечает на вопросы студентов с помощью ИИ, превращает учебные документы в карточки, тесты, ментальные карты и аудиообзоры и даёт конфиденциальную психологическую поддержку.',
      },
      {
        category: 'Финансы и консалтинг',
        tagline: 'Аудиторская компания',
        desc: 'Сайт на трёх языках для лицензированной аудиторской компании в Баку: услуги, блог, раздел академии и встроенный налоговый калькулятор, а заявка на бесплатную консультацию доступна с любой страницы.',
      },
      {
        category: 'Реклама и производство',
        tagline: 'Рекламно-упаковочная группа',
        desc: 'Визуальный сайт для группы компаний в сфере рекламы, упаковки и маркетинга: каждое направление представлено полноэкранными изображениями и слайдами услуг.',
      },
      {
        category: 'Мода и ритейл',
        tagline: 'Бренд обуви ручной работы',
        desc: 'Каталог на трёх языках для бакинского обувного бренда: коллекции, индивидуальный пошив и адреса магазинов, заказ через WhatsApp и контент в Sanity.',
      },
      {
        category: 'Медиа и издательство',
        tagline: 'Журнал о моде и культуре',
        desc: 'Редакционный сайт журнала о моде и культуре с тематическими разделами, календарём событий и статьями из Sanity.',
      },
      {
        category: 'Сельское хозяйство и продукты',
        tagline: 'Сайт производителя фруктов',
        desc: 'Корпоративный сайт производителя фруктов из Губы: продукция, услуги хранения и сортировки, фотогалерея.',
      },
    ],
    portfolio: {
      eyebrow: 'Работы',
      title: 'Проекты, которые мы запустили.',
      description: 'Каждый прошёл путь от ТЗ до запуска с одной и той же небольшой командой. Откройте их вживую.',
      ctaTitle: 'Следующим может быть ваш проект.',
      ctaDesc: 'Пришлите короткое описание, и мы вернёмся с вопросами, сроками и оценкой.',
      cta: 'Обсудить проект',
    },
    stack: {
      eyebrow: 'Технологии',
      title: 'Современный стек под каждую задачу.',
      description:
        'Выбираем инструменты, которые легко поддерживать годами, а не модные. Вот те, что мы используем и хорошо знаем.',
      groups: [
        { title: 'Фронтенд', desc: 'Быстрые, доступные и легко расширяемые интерфейсы.' },
        { title: 'Мобильная разработка', desc: 'Приложения для iOS и Android на одной кодовой базе.' },
        { title: 'Бэкенд и данные', desc: 'API, базы данных, авторизация и функции в реальном времени.' },
        { title: 'CMS и e-commerce', desc: 'Контент и магазины, которыми команда управляет без кода.' },
        { title: 'Облако и DevOps', desc: 'Хостинг, CI/CD, мониторинг и быстрая доставка по всему миру.' },
        { title: 'Дизайн', desc: 'Прототипы, макеты и дизайн-системы.' },
      ],
      principlesTitle: 'Инженерные стандарты в каждом проекте',
      principles: [
        { title: 'Типизированный код', desc: 'TypeScript и код-ревью не пускают ошибки в продакшен.' },
        { title: 'Бюджет производительности', desc: 'Измеряем Core Web Vitals до запуска, а не после жалоб.' },
        { title: 'Мониторинг ошибок', desc: 'О сбоях и медленных страницах мы узнаём раньше пользователей.' },
        { title: 'Автоматический деплой', desc: 'Каждое изменение проходит через превью-ссылку перед публикацией.' },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Расскажите о проекте.',
      description: 'Заполните форму или напишите нам напрямую. Ответим в течение 24 часов.',
      email: 'Email',
      phone: 'Телефон / WhatsApp',
      location: 'Где мы',
      locationValue: 'Удалённо, работаем по всему миру',
      socials: 'Мы в сетях',
      nextTitle: 'Что дальше',
      next: [
        'Изучаем ваш запрос и отвечаем в течение 24 часов.',
        '30-минутный созвон о целях и объёме работ.',
        'Вы получаете письменную оценку сроков и стоимости.',
      ],
      formTitle: 'Описание проекта',
      fullName: 'Ваше имя',
      emailAddress: 'Email',
      projectType: 'Что нужно сделать?',
      types: {
        landing: 'Лендинг',
        website: 'Сайт',
        ecommerce: 'Интернет-магазин',
        webapp: 'Разработка ПО',
        mobile: 'Мобильное приложение',
        design: 'UI/UX-дизайн',
        other: 'Другое',
      },
      budget: 'Бюджет',
      optional: 'необязательно',
      budgetPlaceholder: 'Выберите диапазон',
      budgets: ['До $2k', '$2k – $5k', '$5k – $15k', '$15k+', 'Пока не знаю'],
      projectDetails: 'Детали проекта',
      projectDetailsPlaceholder: 'Что вы создаёте, для кого и к какому сроку?',
      requireNDA: 'Нужно NDA до обсуждения деталей',
      sendMessage: 'Отправить',
      formNote: 'Откроется почтовое приложение с заполненным письмом.',
    },
    footer: {
      tagline: 'Разработка ПО, мобильных и веб-приложений одной командой: от первого звонка до запуска и поддержки.',
      services: 'Услуги',
      company: 'Компания',
      contact: 'Контакты',
      rights: 'Все права защищены.',
    },
  },

  az: {
    nav: {
      services: 'Xidmətlər',
      work: 'İşlər',
      process: 'Proses',
      stack: 'Texnologiyalar',
      contact: 'Əlaqə',
      cta: 'Layihəni müzakirə et',
      language: 'Dil',
      openMenu: 'Menyunu aç',
      closeMenu: 'Menyunu bağla',
    },
    common: {
      visitSite: 'Sayta keç',
      backToTop: 'Yuxarı',
    },
    home: {
      badge: 'Yeni layihələr qəbul edirik',
      titleA: 'Proqram təminatı,',
      titleB: 'mobil və veb tətbiqlərin hazırlanması.',
      description:
        'Proqram təminatı, mobil tətbiqlər və veb platformalar dizayn edir, hazırlayır və dəstəkləyirik. Bir komanda məhsulunuzu ilk zəngdən buraxılışa və sonrasına qədər aparır, siz isə birbaşa mühəndislərlə işləyirsiniz.',
      ctaPrimary: 'Layihəni müzakirə et',
      ctaSecondary: 'İşlərimizə bax',
      stats: [
        { value: '3+', label: 'İllik təcrübə' },
        { value: '15+', label: 'Tamamlanmış layihə' },
        { value: '100%', label: 'Müştəri məmnuniyyəti' },
        { value: '24s', label: 'Cavab müddəti' },
      ],
      techStrip: 'Ən yaxşı məhsul komandalarının güvəndiyi alətlərlə işləyirik',
      services: {
        eyebrow: 'Xidmətlər',
        all: 'Bütün xidmətlər',
        title: 'Proqram təminatı, mobil tətbiqlər və veb.',
        description:
          'Bir xidmət seçin və ya bütün məhsulu bizə həvalə edin. Eyni komanda onu dizayndan proqramlaşdırmaya və buraxılışa qədər aparır.',
        items: [
          {
            title: 'Proqram təminatı',
            desc: 'Cədvəlləri və əl işini əvəz edən veb platformalar, SaaS məhsulları, müştəri kabinetləri və daxili alətlər.',
            tags: ['Arxitektura', 'API və inteqrasiyalar', 'Rollar və giriş'],
          },
          {
            title: 'Mobil tətbiqlər',
            desc: 'Bir kod bazasından iOS və Android tətbiqləri, App Store və Google Play-də dərc ilə.',
            tags: ['iOS', 'Android', 'Push bildirişlər'],
          },
          {
            title: 'Veb proqramlaşdırma',
            desc: 'Komandanızın özü redaktə edə bildiyi korporativ saytlar və çoxsəhifəli platformalar. SEO ilk gündən qurulur.',
            tags: ['CMS', 'SEO', 'Çoxdilli'],
          },
          {
            title: 'Onlayn mağazalar',
            desc: 'Kataloq, səbət, ödəniş və çatdırılma — artıq istifadə etdiyiniz xidmətlərlə inteqrasiyada.',
            tags: ['Ödənişlər', 'Anbar', 'İnteqrasiyalar'],
          },
          {
            title: 'UI/UX dizayn',
            desc: 'Figma-da araşdırma, prototip və interfeys dizaynı. Kod yazılmazdan əvvəl sizinlə təsdiqlənir.',
            tags: ['Araşdırma', 'Prototiplər', 'Dizayn sistemləri'],
          },
          {
            title: 'Landing səhifələr',
            desc: 'Məhsul buraxılışı, kampaniya və ya xidmət üçün tez açılan və müraciət gətirən tək səhifələr.',
            tags: ['Mətn və maket', 'Müraciət formaları', 'Analitika'],
          },
        ],
      },
      work: {
        eyebrow: 'Seçilmiş işlər',
        title: 'Son buraxılışlar.',
        description: 'Təhsil, maliyyə, moda, media, reklam və kənd təsərrüfatı sahələrindəki müştərilər üçün dizayn edib qurduğumuz canlı layihələr.',
        all: 'Bütün layihələr',
      },
      process: {
        eyebrow: 'Proses',
        title: 'Layihə necə gedir.',
        description: 'Dörd mərhələ, hər birində aydın nəticə və hesabda heç bir sürpriz yoxdur.',
        steps: [
          {
            title: 'Araşdırma',
            meta: '1 həftə',
            desc: 'Zəng və yazılı tapşırıq: məqsədlər, istifadəçilər, iş həcmi, müddət və qiymət təxmini.',
          },
          {
            title: 'Dizayn',
            meta: '1–3 həftə',
            desc: 'Əvvəlcə prototiplər, sonra son ekranlar. Proqramlaşdırmadan əvvəl siz təsdiqləyirsiniz.',
          },
          {
            title: 'Proqramlaşdırma',
            meta: '2–12 həftə',
            desc: 'Qısa sprintlər və hər həftə test linkində demo.',
          },
          {
            title: 'Buraxılış və dəstək',
            meta: 'Davamlı',
            desc: 'Dərc, analitika, girişlərin təhvili və təlim. Düzəlişlər və yeni funksiyalar üçün əlaqədə qalırıq.',
          },
        ],
      },
      why: {
        eyebrow: 'Niyə 22 Lab',
        title: 'Agentlik nəticəsi, studiya diqqəti.',
        items: [
          {
            title: 'Birbaşa əlaqə',
            desc: 'Arada menecer yoxdur. Layihənizi quran proqramçıya birbaşa yazırsınız.',
          },
          {
            title: 'Həftəlik demo',
            desc: 'Hər həftə status hesabatı yox, açıb yoxlaya biləcəyiniz nəticə alırsınız.',
          },
          {
            title: 'Standart olaraq sürətli',
            desc: 'Tez yüklənmə, adaptiv dizayn və təmiz SEO hər layihəyə daxildir.',
          },
          {
            title: 'Hər şey sizindir',
            desc: 'Kod, domenlər, hostinq hesabları və dizayn faylları sizə təhvil verilir.',
          },
        ],
      },
      faq: {
        eyebrow: 'Suallar',
        title: 'Tez-tez verilən suallar.',
        items: [
          {
            q: 'Layihə nə qədər başa gəlir?',
            a: 'İş həcmindən asılıdır. Qısa zəngdən sonra qiymət və müddət üzrə yazılı təxmin göndəririk ki, işə başlamazdan əvvəl rəqəmləri biləsiniz.',
          },
          {
            q: 'Nə qədər vaxt aparır?',
            a: 'Proqram təminatının və ya mobil tətbiqin ilk versiyası adətən 2–4 ay çəkir. Sayt 3–6 həftə, landing səhifə 1–2 həftə.',
          },
          {
            q: 'Azərbaycandan kənar müştərilərlə işləyirsiniz?',
            a: 'Bəli. Uzaqdan işləyirik və ingilis, rus və Azərbaycan dillərində ünsiyyət qururuq.',
          },
          {
            q: 'Saytı özüm yeniləyə bilərəmmi?',
            a: 'Bəli. Məzmun idarəetmə sistemi qoşuruq ki, komandanız mətn, şəkil və məhsulları proqramçısız dəyişə bilsin.',
          },
          {
            q: 'Buraxılışdan sonra nə olur?',
            a: 'Düzəlişlər, yeniləmələr və yeni funksiyalar üçün əlaqədə qalırıq — sorğu əsasında və ya davamlı olaraq.',
          },
        ],
      },
      cta: {
        title: 'Layihə fikriniz var?',
        description: 'Nə qurmaq istədiyinizi yazın. 24 saat ərzində suallar və ya ilk təxminlə cavab veririk.',
        primary: 'Layihəni müzakirə et',
        secondary: 'WhatsApp-da yaz',
      },
    },
    projects: [
      {
        category: 'Təhsil və süni intellekt',
        tagline: 'Tələbələr üçün süni intellekt köməkçisi',
        desc: 'Tələbələrin suallarını süni intellektlə cavablandıran, tədris sənədlərini kartlara, testlərə, zehin xəritələrinə və audio icmallara çevirən və məxfi psixoloji dəstək verən iOS və Android tətbiqi.',
      },
      {
        category: 'Maliyyə və konsaltinq',
        tagline: 'Audit və konsaltinq şirkəti',
        desc: 'Bakıda lisenziyalı audit şirkəti üçün üçdilli sayt: xidmətlər, bloq, akademiya bölməsi və vergi kalkulyatoru, hər səhifədən pulsuz konsultasiya sorğusu ilə.',
      },
      {
        category: 'Reklam və istehsal',
        tagline: 'Reklam və qablaşdırma qrupu',
        desc: 'Reklam, qablaşdırma və marketinq sahəsində çalışan şirkətlər qrupu üçün vizual sayt: hər istiqamət tam ekran şəkillər və xidmət slaydları ilə təqdim olunur.',
      },
      {
        category: 'Moda və pərakəndə',
        tagline: 'Əl işi ayaqqabı brendi',
        desc: 'Bakı ayaqqabı brendi üçün üçdilli kataloq: kolleksiyalar, fərdi sifariş və mağaza ünvanları, WhatsApp ilə sifariş və Sanity-də məzmun.',
      },
      {
        category: 'Media və nəşriyyat',
        tagline: 'Moda və mədəniyyət jurnalı',
        desc: 'Moda və mədəniyyət jurnalı üçün bölmələri, tədbirlər təqvimi və Sanity-dən dərc olunan məqalələri olan redaksiya saytı.',
      },
      {
        category: 'Kənd təsərrüfatı və qida',
        tagline: 'Meyvə istehsalçısının saytı',
        desc: 'Quba meyvə istehsalçısı üçün məhsulları, saxlama və çeşidləmə xidmətlərini və foto qalereyanı təqdim edən korporativ sayt.',
      },
    ],
    portfolio: {
      eyebrow: 'İşlər',
      title: 'Buraxdığımız məhsullar.',
      description: 'Hər biri tapşırıqdan buraxılışa qədər eyni kiçik komanda ilə hazırlanıb. Canlı baxmaq üçün açın.',
      ctaTitle: 'Növbəti layihə sizinki ola bilər.',
      ctaDesc: 'Qısa təsvir göndərin, suallar, müddət və qiymət təxmini ilə qayıdaq.',
      cta: 'Layihəni müzakirə et',
    },
    stack: {
      eyebrow: 'Texnologiyalar',
      title: 'Hər layihəyə uyğun müasir stek.',
      description:
        'Alətləri dəbə görə yox, illərlə rahat dəstəklənməsinə görə seçirik. Bunlar istifadə etdiyimiz və yaxşı bildiyimiz alətlərdir.',
      groups: [
        { title: 'Frontend', desc: 'Sürətli, əlçatan və asan genişlənən interfeyslər.' },
        { title: 'Mobil', desc: 'Bir kod bazasından iOS və Android tətbiqləri.' },
        { title: 'Backend və məlumat', desc: 'API, verilənlər bazası, avtorizasiya və real vaxt funksiyaları.' },
        { title: 'CMS və e-ticarət', desc: 'Komandanızın kodsuz idarə etdiyi məzmun və mağazalar.' },
        { title: 'Bulud və DevOps', desc: 'Hostinq, CI/CD, monitorinq və qlobal çatdırılma.' },
        { title: 'Dizayn', desc: 'Prototiplər, maketlər və dizayn sistemləri.' },
      ],
      principlesTitle: 'Hər layihədə mühəndislik standartları',
      principles: [
        { title: 'Tipli kod', desc: 'TypeScript və kod yoxlaması xətaları istehsala buraxmır.' },
        { title: 'Performans büdcəsi', desc: 'Core Web Vitals-ı şikayətdən sonra yox, buraxılışdan əvvəl ölçürük.' },
        { title: 'Xəta monitorinqi', desc: 'Nasazlıq və yavaş səhifələrdən istifadəçilərdən əvvəl xəbər tuturuq.' },
        { title: 'Avtomatik deploy', desc: 'Hər dəyişiklik dərcdən əvvəl önizləmə linkindən keçir.' },
      ],
    },
    contact: {
      eyebrow: 'Əlaqə',
      title: 'Layihəniz haqqında danışın.',
      description: 'Formu doldurun və ya birbaşa yazın. 24 saat ərzində cavab veririk.',
      email: 'E-poçt',
      phone: 'Telefon / WhatsApp',
      location: 'Məkan',
      locationValue: 'Uzaqdan, bütün dünya ilə işləyirik',
      socials: 'Sosial şəbəkələr',
      nextTitle: 'Sonra nə olur',
      next: [
        'Müraciətinizi oxuyub 24 saat ərzində cavab veririk.',
        'Məqsədlər və iş həcmi üzrə 30 dəqiqəlik zəng.',
        'Müddət və qiymət üzrə yazılı təxmin alırsınız.',
      ],
      formTitle: 'Layihə təsviri',
      fullName: 'Adınız',
      emailAddress: 'E-poçt',
      projectType: 'Nə lazımdır?',
      types: {
        landing: 'Landing səhifə',
        website: 'Sayt',
        ecommerce: 'Onlayn mağaza',
        webapp: 'Proqram təminatı',
        mobile: 'Mobil tətbiq',
        design: 'UI/UX dizayn',
        other: 'Digər',
      },
      budget: 'Büdcə',
      optional: 'məcburi deyil',
      budgetPlaceholder: 'Aralıq seçin',
      budgets: ['$2k-dan az', '$2k – $5k', '$5k – $15k', '$15k+', 'Hələ bilmirəm'],
      projectDetails: 'Layihə detalları',
      projectDetailsPlaceholder: 'Nə qurursunuz, kimin üçün və nə vaxta lazımdır?',
      requireNDA: 'Detalları paylaşmazdan əvvəl NDA lazımdır',
      sendMessage: 'Göndər',
      formNote: 'Doldurulmuş məktubla e-poçt tətbiqiniz açılacaq.',
    },
    footer: {
      tagline: 'Proqram təminatı, mobil və veb tətbiqlər — ilk zəngdən buraxılışa və dəstəyə qədər bir komandadan.',
      services: 'Xidmətlər',
      company: 'Şirkət',
      contact: 'Əlaqə',
      rights: 'Bütün hüquqlar qorunur.',
    },
  },
};

export const translations = Object.fromEntries(
  Object.entries(base).map(([lang, strings]) => [lang, { ...strings, ...details[lang] }]),
);
