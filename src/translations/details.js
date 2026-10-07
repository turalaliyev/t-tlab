/* Long-form copy for the Services and Work pages.
   services.details order matches SERVICES in data/site.js; work.cases order matches PROJECTS. */

export const details = {
  en: {
    services: {
      eyebrow: 'Services',
      title: 'What we build, and how.',
      description:
        'Six services, one team. Each section below covers what is included, who it suits and how long it usually takes.',
      labels: {
        included: 'What is included',
        goodFor: 'A good fit for',
        timeline: 'Typical timeline',
        tech: 'Technology',
        work: 'Related work',
        discuss: 'Discuss this service',
        jump: 'Jump to',
      },
      details: [
        {
          lead: 'Software built around how your business actually works: client portals, booking and order systems, dashboards, CRMs and internal tools. We design the data model and architecture first, so the product can grow without a rewrite.',
          timeline: 'MVP in 8–16 weeks',
          included: [
            'Discovery and technical specification',
            'Database design and system architecture',
            'Web application with role-based access',
            'Admin panel for your team',
            'Integrations with payments, CRMs and third-party APIs',
            'Automated tests, deployment pipeline and monitoring',
          ],
          goodFor: [
            'Replacing spreadsheets and manual processes',
            'Client and partner portals',
            'Booking, ordering and inventory systems',
            'SaaS products and MVPs',
          ],
        },
        {
          lead: 'iOS and Android apps built with React Native from one codebase, so both platforms ship together and stay in sync. We design the app, build the backend it talks to and publish it in the stores.',
          timeline: 'First release in 10–16 weeks',
          included: [
            'App design that follows iOS and Android conventions',
            'Cross-platform development in React Native',
            'Backend, API and admin panel',
            'Push notifications, analytics and crash reporting',
            'In-app payments and sign-in with Apple or Google',
            'App Store and Google Play publishing',
          ],
          goodFor: [
            'Customer apps for existing businesses',
            'Loyalty, booking and delivery apps',
            'Companion apps for a web platform',
            'Startup MVPs',
          ],
        },
        {
          lead: 'Corporate websites and content platforms that load fast, rank well and are easy for your team to update. Multilingual sites for Azerbaijani, Russian and English audiences are a regular part of our work.',
          timeline: '3–6 weeks',
          included: [
            'Information architecture and page structure',
            'Custom design, no templates',
            'Responsive build for every screen size',
            'Content management system',
            'Technical SEO, metadata and sitemaps',
            'Multilingual content and language switching',
          ],
          goodFor: [
            'Company and group websites',
            'Professional services firms',
            'Media and editorial sites',
            'Redesigns of outdated websites',
          ],
        },
        {
          lead: 'Online stores and product catalogs that make buying simple: clear product pages, fast filters and an ordering flow that suits how you sell, from a full cart with online payment to ordering through WhatsApp.',
          timeline: '4–10 weeks',
          included: [
            'Catalog structure, categories and filters',
            'Product pages with galleries and variants',
            'Cart, checkout and online payments',
            'Ordering via messenger or phone where it fits',
            'Product and order management',
            'Integrations with delivery, accounting and marketing tools',
          ],
          goodFor: [
            'Brands selling directly to customers',
            'Shops moving from Instagram to their own site',
            'Catalogs with in-store or messenger ordering',
            'B2B ordering portals',
          ],
        },
        {
          lead: 'Product and interface design in Figma, from user flows and wireframes to a finished design system. You review every screen, and development gets the specs it needs.',
          timeline: '1–4 weeks',
          included: [
            'Research into users, competitors and goals',
            'User flows and wireframes',
            'Interactive prototypes',
            'High-fidelity UI for web and mobile',
            'Design system and component library',
            'Developer handoff with specs',
          ],
          goodFor: [
            'New products before development starts',
            'Redesigning an outdated interface',
            'Teams that need a design system',
            'Testing an idea with a clickable prototype',
          ],
        },
        {
          lead: 'A single page with one goal: get the visitor to call, sign up or buy. We structure the page around that goal, build it to load fast on any phone and set up tracking so you can see what works.',
          timeline: '1–2 weeks',
          included: [
            'Page structure and copy guidance',
            'Custom design matched to your brand',
            'Lead forms connected to email, CRM or messenger',
            'Analytics and conversion tracking',
            'Fast, mobile-first build',
            'Sections ready for testing different offers',
          ],
          goodFor: [
            'Product and service launches',
            'Advertising campaigns',
            'Events and promotions',
            'Testing a new offer quickly',
          ],
        },
      ],
      every: {
        title: 'Included in every project',
        items: [
          { title: 'Responsive layouts', desc: 'Works on phones, tablets and desktops.' },
          { title: 'Performance', desc: 'Optimised images, code splitting and caching.' },
          { title: 'SEO foundations', desc: 'Clean markup, metadata and a sitemap.' },
          { title: 'Analytics', desc: 'Traffic and conversion tracking from launch day.' },
          { title: 'Security', desc: 'HTTPS, protected forms and current dependencies.' },
          { title: 'Easy updates', desc: 'A CMS or admin panel your team can use.' },
          { title: 'Full handover', desc: 'Code, accounts, access and documentation.' },
          { title: 'Support after launch', desc: 'Fixes, updates and new features on request.' },
        ],
      },
      models: {
        title: 'Ways to work with us',
        items: [
          {
            title: 'Fixed-scope project',
            desc: 'Scope, timeline and cost agreed in writing before work starts. Best for websites and first product releases.',
          },
          {
            title: 'Ongoing development',
            desc: 'Regular design and development time each month for products that keep growing after launch.',
          },
          {
            title: 'Support & maintenance',
            desc: 'Updates, monitoring and small improvements for a site or app that is already live.',
          },
        ],
      },
    },
    work: {
      eyebrow: 'Work',
      title: 'Products we have shipped.',
      description:
        'Every project below went from brief to launch with the same small team. Each one is live, so you can see it for yourself.',
      filters: { all: 'All', mobile: 'Mobile apps', corporate: 'Corporate', retail: 'Retail & fashion', media: 'Media' },
      labels: {
        scope: 'What we did',
        features: 'Key features',
        stack: 'Stack',
        languages: 'Languages',
        visit: 'Visit site',
        platforms: 'Platforms',
      },
      cta: {
        title: 'Your project could be next.',
        description: 'Send us a short brief and we will come back with questions, a timeline and an estimate.',
        primary: 'Start a project',
      },
      cases: [
        {
          industry: 'Education & AI',
          overview:
            'ADU AI Advisor is an AI study companion for university students, published on the App Store and Google Play. Students ask academic questions in chat, upload course documents into subject notebooks and get study materials generated from them. A separate AI psychologist offers a private space to talk.',
          scope: ['UI/UX design', 'iOS & Android development', 'AI features', 'App Store & Google Play publishing'],
          features: [
            'AI advisor that answers academic questions in chat',
            'Subject notebooks: upload PDF, Word or text files',
            'AI-generated flashcards, quizzes and mind maps',
            'Audio overviews of uploaded documents',
            'Private psychological support with an AI psychologist',
            'Sign-up verified against the university e-cabinet',
            'Chat history and push notifications',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Audit & consulting',
          overview:
            'Abacus Audit & Consulting is a licensed audit firm in Baku, working since 2017. The website presents nine service lines in three languages and is built to turn visitors into consultation requests.',
          scope: ['UI/UX design', 'Web development', 'Content structure', 'Multilingual setup'],
          features: [
            'Nine service sections, from audit and tax to migration services',
            'Blog and academy sections',
            'Built-in calculator',
            'Video hero with a consultation call-to-action',
            'WhatsApp and click-to-call contact',
            'Partners and FAQ sections',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Advertising & production',
          overview:
            'Prestige Group of Companies produces advertising, packaging and promotional products, from wide-format printing to branded packaging for restaurant chains. The website leads with imagery: each line of business gets a full-screen visual and its own service slides.',
          scope: ['UI/UX design', 'Web development', 'Motion design', 'Multilingual setup'],
          features: [
            'Full-screen visual storytelling',
            'Sections for printing, packaging, advertising and promo souvenirs',
            'Recommendation letters from clients such as Epson and Domino’s',
            'Language switcher',
            'Direct phone and email contacts',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Fashion & retail',
          overview:
            'Danilov is a Baku footwear brand, founded in 2010, that makes handmade shoes and leather accessories. The website works as a brand catalog: collections for men and women, a bespoke service and store locations, with orders placed through WhatsApp.',
          scope: ['UI/UX design', 'Web development', 'CMS integration', 'Multilingual setup'],
          features: [
            'Men’s and women’s collections with product pages',
            'Bespoke, service and brand story sections',
            'Store locator',
            'Ordering and contact through WhatsApp',
            'Products and content managed in Sanity CMS',
            'Sale and gift sections',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Media & publishing',
          overview:
            'RE:AZ is a fashion and culture magazine. We built an editorial website that puts long-form articles first, organised into Fashion, Art & Culture, Lifestyle and Beauty, with an events calendar alongside.',
          scope: ['UI/UX design', 'Web development', 'CMS integration', 'Multilingual setup'],
          features: [
            'Editorial layouts for long-form articles',
            'Fashion, Art & Culture, Lifestyle and Beauty sections',
            'Events calendar',
            'Articles published from Sanity CMS',
            'About, team and policy pages',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Agriculture & food',
          overview:
            'Fresh Garden is a fruit producer in Quba, operating since 2000 and supplying local and international markets. The website introduces the company, its products and its storage and sorting services.',
          scope: ['UI/UX design', 'Web development', 'Multilingual setup'],
          features: [
            'Product sections for apples, nectarines, flat peaches and cherries',
            'Storage and sorting services',
            'Company story and mission',
            'Photo gallery',
            'Phone, email and address contacts',
          ],
          languages: 'AZ · EN · RU',
        },
      ],
    },
  },

  ru: {
    services: {
      eyebrow: 'Услуги',
      title: 'Что мы создаём и как.',
      description:
        'Шесть услуг, одна команда. В каждом разделе ниже — что входит в работу, кому это подходит и сколько это обычно занимает.',
      labels: {
        included: 'Что входит',
        goodFor: 'Подходит для',
        timeline: 'Обычные сроки',
        tech: 'Технологии',
        work: 'Связанные проекты',
        discuss: 'Обсудить услугу',
        jump: 'Перейти к',
      },
      details: [
        {
          lead: 'Программное обеспечение под то, как на самом деле работает ваш бизнес: личные кабинеты, системы бронирования и заказов, дашборды, CRM и внутренние инструменты. Сначала проектируем модель данных и архитектуру, чтобы продукт рос без переписывания.',
          timeline: 'MVP за 8–16 недель',
          included: [
            'Анализ и техническое задание',
            'Проектирование базы данных и архитектуры',
            'Веб-приложение с ролями и правами доступа',
            'Панель администратора для вашей команды',
            'Интеграции с платежами, CRM и внешними API',
            'Автотесты, CI/CD и мониторинг',
          ],
          goodFor: [
            'Замены таблиц и ручных процессов',
            'Кабинетов для клиентов и партнёров',
            'Систем бронирования, заказов и учёта',
            'SaaS-продуктов и MVP',
          ],
        },
        {
          lead: 'Приложения для iOS и Android на React Native с одной кодовой базой: обе платформы выходят одновременно и развиваются синхронно. Мы проектируем приложение, создаём для него бэкенд и публикуем в сторах.',
          timeline: 'Первый релиз за 10–16 недель',
          included: [
            'Дизайн по гайдлайнам iOS и Android',
            'Кроссплатформенная разработка на React Native',
            'Бэкенд, API и панель администратора',
            'Push-уведомления, аналитика и отчёты о сбоях',
            'Оплата в приложении и вход через Apple или Google',
            'Публикация в App Store и Google Play',
          ],
          goodFor: [
            'Клиентских приложений для действующего бизнеса',
            'Приложений лояльности, бронирования и доставки',
            'Мобильной версии веб-платформы',
            'MVP для стартапов',
          ],
        },
        {
          lead: 'Корпоративные сайты и контентные платформы, которые быстро грузятся, хорошо индексируются и легко обновляются вашей командой. Мультиязычные сайты для аудитории на азербайджанском, русском и английском — обычная часть нашей работы.',
          timeline: '3–6 недель',
          included: [
            'Структура сайта и страниц',
            'Индивидуальный дизайн без шаблонов',
            'Адаптивная вёрстка под все экраны',
            'Система управления контентом',
            'Техническое SEO, метаданные и sitemap',
            'Мультиязычность и переключение языков',
          ],
          goodFor: [
            'Сайтов компаний и холдингов',
            'Консалтинговых и профессиональных фирм',
            'Медиа и редакционных проектов',
            'Редизайна устаревших сайтов',
          ],
        },
        {
          lead: 'Интернет-магазины и каталоги, в которых легко покупать: понятные карточки товаров, быстрые фильтры и оформление заказа под вашу модель продаж — от корзины с онлайн-оплатой до заказа через WhatsApp.',
          timeline: '4–10 недель',
          included: [
            'Структура каталога, категории и фильтры',
            'Карточки товаров с галереей и вариантами',
            'Корзина, оформление заказа и онлайн-оплата',
            'Заказ через мессенджер или телефон, где это уместно',
            'Управление товарами и заказами',
            'Интеграции с доставкой, учётом и маркетингом',
          ],
          goodFor: [
            'Брендов, продающих напрямую покупателям',
            'Магазинов, переходящих из Instagram на свой сайт',
            'Каталогов с заказом в магазине или мессенджере',
            'B2B-порталов для заказов',
          ],
        },
        {
          lead: 'Дизайн продуктов и интерфейсов в Figma: от пользовательских сценариев и прототипов до готовой дизайн-системы. Вы согласуете каждый экран, а разработка получает все нужные спецификации.',
          timeline: '1–4 недели',
          included: [
            'Исследование пользователей, конкурентов и целей',
            'Пользовательские сценарии и прототипы',
            'Интерактивные прототипы',
            'Финальный UI для веба и мобильных устройств',
            'Дизайн-система и библиотека компонентов',
            'Передача в разработку со спецификациями',
          ],
          goodFor: [
            'Новых продуктов до начала разработки',
            'Редизайна устаревшего интерфейса',
            'Команд, которым нужна дизайн-система',
            'Проверки идеи на кликабельном прототипе',
          ],
        },
        {
          lead: 'Одна страница с одной целью: чтобы посетитель позвонил, оставил заявку или купил. Выстраиваем страницу вокруг этой цели, делаем её быстрой на любом телефоне и настраиваем аналитику, чтобы было видно, что работает.',
          timeline: '1–2 недели',
          included: [
            'Структура страницы и рекомендации по текстам',
            'Дизайн в стиле вашего бренда',
            'Формы заявок с отправкой на почту, в CRM или мессенджер',
            'Аналитика и отслеживание конверсий',
            'Быстрая вёрстка с приоритетом мобильных',
            'Блоки, готовые к тестированию разных предложений',
          ],
          goodFor: [
            'Запуска продуктов и услуг',
            'Рекламных кампаний',
            'Мероприятий и акций',
            'Быстрой проверки нового предложения',
          ],
        },
      ],
      every: {
        title: 'Входит в каждый проект',
        items: [
          { title: 'Адаптивность', desc: 'Работает на телефонах, планшетах и компьютерах.' },
          { title: 'Производительность', desc: 'Оптимизация изображений, кода и кэширования.' },
          { title: 'Основа для SEO', desc: 'Чистая разметка, метаданные и sitemap.' },
          { title: 'Аналитика', desc: 'Трафик и конверсии отслеживаются с первого дня.' },
          { title: 'Безопасность', desc: 'HTTPS, защищённые формы и актуальные зависимости.' },
          { title: 'Простое обновление', desc: 'CMS или админ-панель для вашей команды.' },
          { title: 'Полная передача', desc: 'Код, аккаунты, доступы и документация.' },
          { title: 'Поддержка после запуска', desc: 'Исправления, обновления и новые функции.' },
        ],
      },
      models: {
        title: 'Форматы работы',
        items: [
          {
            title: 'Проект с фиксированным объёмом',
            desc: 'Объём, сроки и стоимость согласуются письменно до начала работ. Лучше всего для сайтов и первых релизов продукта.',
          },
          {
            title: 'Постоянная разработка',
            desc: 'Ежемесячное время дизайна и разработки для продуктов, которые продолжают расти после запуска.',
          },
          {
            title: 'Поддержка и сопровождение',
            desc: 'Обновления, мониторинг и небольшие улучшения для уже работающего сайта или приложения.',
          },
        ],
      },
    },
    work: {
      eyebrow: 'Работы',
      title: 'Проекты, которые мы запустили.',
      description:
        'Каждый проект ниже прошёл путь от ТЗ до запуска с одной и той же небольшой командой. Все они работают — можно открыть и посмотреть.',
      filters: { all: 'Все', mobile: 'Мобильные приложения', corporate: 'Корпоративные', retail: 'Ритейл и мода', media: 'Медиа' },
      labels: {
        scope: 'Что мы сделали',
        features: 'Ключевые функции',
        stack: 'Стек',
        languages: 'Языки',
        visit: 'Открыть сайт',
        platforms: 'Платформы',
      },
      cta: {
        title: 'Следующим может быть ваш проект.',
        description: 'Пришлите короткое описание, и мы вернёмся с вопросами, сроками и оценкой.',
        primary: 'Обсудить проект',
      },
      cases: [
        {
          industry: 'Образование и ИИ',
          overview:
            'ADU AI Advisor — учебный ИИ-помощник для студентов, опубликованный в App Store и Google Play. Студенты задают учебные вопросы в чате, загружают документы курсов в тетради по предметам и получают из них учебные материалы. Отдельный ИИ-психолог даёт возможность поговорить конфиденциально.',
          scope: ['UI/UX-дизайн', 'Разработка для iOS и Android', 'ИИ-функции', 'Публикация в App Store и Google Play'],
          features: [
            'ИИ-советник, отвечающий на учебные вопросы в чате',
            'Тетради по предметам: загрузка PDF, Word и текстовых файлов',
            'Карточки, тесты и ментальные карты, созданные ИИ',
            'Аудиообзоры загруженных документов',
            'Конфиденциальная психологическая поддержка с ИИ-психологом',
            'Регистрация с проверкой через электронный кабинет университета',
            'История чатов и push-уведомления',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Аудит и консалтинг',
          overview:
            'Abacus Audit & Consulting — лицензированная аудиторская компания в Баку, работающая с 2017 года. Сайт представляет девять направлений услуг на трёх языках и выстроен так, чтобы превращать посетителей в заявки на консультацию.',
          scope: ['UI/UX-дизайн', 'Веб-разработка', 'Структура контента', 'Мультиязычность'],
          features: [
            'Девять разделов услуг — от аудита и налогов до миграционных услуг',
            'Блог и раздел академии',
            'Встроенный калькулятор',
            'Видео на главном экране с призывом к консультации',
            'Связь через WhatsApp и звонок в один клик',
            'Разделы партнёров и частых вопросов',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Реклама и производство',
          overview:
            'Prestige Group of Companies производит рекламу, упаковку и промо-продукцию — от широкоформатной печати до брендированной упаковки для ресторанных сетей. Сайт построен на изображениях: у каждого направления свой полноэкранный визуал и слайды услуг.',
          scope: ['UI/UX-дизайн', 'Веб-разработка', 'Моушн-дизайн', 'Мультиязычность'],
          features: [
            'Полноэкранная визуальная подача',
            'Разделы печати, упаковки, рекламы и промо-сувениров',
            'Рекомендательные письма от клиентов, включая Epson и Domino’s',
            'Переключение языков',
            'Прямые контакты: телефоны и почта',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Мода и ритейл',
          overview:
            'Danilov — бакинский обувной бренд, основанный в 2010 году, который делает обувь и кожаные аксессуары ручной работы. Сайт работает как каталог бренда: мужские и женские коллекции, индивидуальный пошив и адреса магазинов, а заказы оформляются через WhatsApp.',
          scope: ['UI/UX-дизайн', 'Веб-разработка', 'Интеграция CMS', 'Мультиязычность'],
          features: [
            'Мужские и женские коллекции с карточками товаров',
            'Разделы индивидуального пошива, сервиса и истории бренда',
            'Адреса магазинов',
            'Заказ и связь через WhatsApp',
            'Товары и контент управляются в Sanity CMS',
            'Разделы скидок и подарков',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Медиа и издательство',
          overview:
            'RE:AZ — журнал о моде и культуре. Мы сделали редакционный сайт, где на первом месте длинные статьи, разделённые на Fashion, Art & Culture, Lifestyle и Beauty, а рядом — календарь событий.',
          scope: ['UI/UX-дизайн', 'Веб-разработка', 'Интеграция CMS', 'Мультиязычность'],
          features: [
            'Редакционная вёрстка для длинных статей',
            'Разделы Fashion, Art & Culture, Lifestyle и Beauty',
            'Календарь событий',
            'Публикация статей из Sanity CMS',
            'Страницы о журнале, команде и правилах',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Сельское хозяйство и продукты',
          overview:
            'Fresh Garden — производитель фруктов в Губе, работающий с 2000 года и поставляющий продукцию на местный и международный рынки. Сайт рассказывает о компании, её продукции и услугах хранения и сортировки.',
          scope: ['UI/UX-дизайн', 'Веб-разработка', 'Мультиязычность'],
          features: [
            'Разделы продукции: яблоки, нектарины, плоские персики и черешня',
            'Услуги хранения и сортировки',
            'История и миссия компании',
            'Фотогалерея',
            'Телефон, почта и адрес',
          ],
          languages: 'AZ · EN · RU',
        },
      ],
    },
  },

  az: {
    services: {
      eyebrow: 'Xidmətlər',
      title: 'Nə qururuq və necə.',
      description:
        'Altı xidmət, bir komanda. Aşağıdakı hər bölmədə nəyin daxil olduğu, kimə uyğun olduğu və adətən nə qədər vaxt apardığı göstərilib.',
      labels: {
        included: 'Nələr daxildir',
        goodFor: 'Uyğundur',
        timeline: 'Adi müddət',
        tech: 'Texnologiyalar',
        work: 'Əlaqəli işlər',
        discuss: 'Bu xidməti müzakirə et',
        jump: 'Keçid',
      },
      details: [
        {
          lead: 'Biznesinizin real iş prosesinə uyğun proqram təminatı: müştəri kabinetləri, bron və sifariş sistemləri, idarəetmə panelləri, CRM və daxili alətlər. Əvvəlcə məlumat modelini və arxitekturanı qururuq ki, məhsul yenidən yazılmadan böyüyə bilsin.',
          timeline: 'MVP 8–16 həftəyə',
          included: [
            'Araşdırma və texniki tapşırıq',
            'Verilənlər bazası və sistem arxitekturası',
            'Rollar və girişlərlə veb tətbiq',
            'Komandanız üçün admin panel',
            'Ödəniş, CRM və xarici API inteqrasiyaları',
            'Avtomatik testlər, CI/CD və monitorinq',
          ],
          goodFor: [
            'Cədvəlləri və əl işini əvəz etmək',
            'Müştəri və tərəfdaş kabinetləri',
            'Bron, sifariş və uçot sistemləri',
            'SaaS məhsulları və MVP',
          ],
        },
        {
          lead: 'React Native ilə bir kod bazasından iOS və Android tətbiqləri: hər iki platforma eyni vaxtda çıxır və birlikdə inkişaf edir. Tətbiqi dizayn edir, onun üçün backend qurur və mağazalarda dərc edirik.',
          timeline: 'İlk versiya 10–16 həftəyə',
          included: [
            'iOS və Android qaydalarına uyğun dizayn',
            'React Native ilə kross-platforma proqramlaşdırma',
            'Backend, API və admin panel',
            'Push bildirişlər, analitika və xəta hesabatları',
            'Tətbiqdaxili ödəniş, Apple və Google ilə giriş',
            'App Store və Google Play-də dərc',
          ],
          goodFor: [
            'Mövcud bizneslər üçün müştəri tətbiqləri',
            'Loyallıq, bron və çatdırılma tətbiqləri',
            'Veb platformanın mobil versiyası',
            'Startaplar üçün MVP',
          ],
        },
        {
          lead: 'Tez yüklənən, axtarışda yaxşı görünən və komandanızın asanlıqla yenilədiyi korporativ saytlar və məzmun platformaları. Azərbaycan, rus və ingilis dilli auditoriya üçün çoxdilli saytlar işimizin adi hissəsidir.',
          timeline: '3–6 həftə',
          included: [
            'Saytın və səhifələrin strukturu',
            'Şablonsuz fərdi dizayn',
            'Bütün ekranlar üçün adaptiv quruluş',
            'Məzmun idarəetmə sistemi',
            'Texniki SEO, metadata və sitemap',
            'Çoxdilli məzmun və dil seçimi',
          ],
          goodFor: [
            'Şirkət və holdinq saytları',
            'Peşəkar xidmət şirkətləri',
            'Media və redaksiya saytları',
            'Köhnəlmiş saytların yenilənməsi',
          ],
        },
        {
          lead: 'Alış-verişi asanlaşdıran onlayn mağazalar və kataloqlar: aydın məhsul səhifələri, sürətli filtrlər və satış modelinizə uyğun sifariş — onlayn ödənişli səbətdən WhatsApp vasitəsilə sifarişə qədər.',
          timeline: '4–10 həftə',
          included: [
            'Kataloq strukturu, kateqoriyalar və filtrlər',
            'Qalereya və variantlarla məhsul səhifələri',
            'Səbət, sifariş və onlayn ödəniş',
            'Uyğun olduqda messenger və ya telefonla sifariş',
            'Məhsul və sifariş idarəetməsi',
            'Çatdırılma, uçot və marketinq inteqrasiyaları',
          ],
          goodFor: [
            'Birbaşa müştəriyə satan brendlər',
            'Instagram-dan öz saytına keçən mağazalar',
            'Mağazada və ya messengerdə sifarişli kataloqlar',
            'B2B sifariş portalları',
          ],
        },
        {
          lead: 'Figma-da məhsul və interfeys dizaynı: istifadəçi ssenarilərindən və prototiplərdən hazır dizayn sisteminə qədər. Hər ekranı siz təsdiqləyirsiniz, proqramlaşdırma isə lazım olan bütün spesifikasiyaları alır.',
          timeline: '1–4 həftə',
          included: [
            'İstifadəçilər, rəqiblər və məqsədlər üzrə araşdırma',
            'İstifadəçi ssenariləri və wireframe-lər',
            'İnteraktiv prototiplər',
            'Veb və mobil üçün son UI',
            'Dizayn sistemi və komponent kitabxanası',
            'Spesifikasiyalarla proqramçılara təhvil',
          ],
          goodFor: [
            'Proqramlaşdırmadan əvvəl yeni məhsullar',
            'Köhnəlmiş interfeysin yenilənməsi',
            'Dizayn sisteminə ehtiyacı olan komandalar',
            'İdeyanı klikabel prototiplə yoxlamaq',
          ],
        },
        {
          lead: 'Bir məqsədli tək səhifə: ziyarətçi zəng etsin, müraciət göndərsin və ya alış etsin. Səhifəni bu məqsəd ətrafında qurur, istənilən telefonda sürətli açılmasını təmin edir və nəyin işlədiyini görmək üçün analitika qururuq.',
          timeline: '1–2 həftə',
          included: [
            'Səhifə strukturu və mətn tövsiyələri',
            'Brendinizə uyğun dizayn',
            'E-poçt, CRM və ya messengerə bağlı müraciət formaları',
            'Analitika və konversiya izləmə',
            'Mobil-öncəlikli sürətli quruluş',
            'Fərqli təklifləri sınamaq üçün hazır bloklar',
          ],
          goodFor: [
            'Məhsul və xidmət buraxılışları',
            'Reklam kampaniyaları',
            'Tədbirlər və aksiyalar',
            'Yeni təklifi tez yoxlamaq',
          ],
        },
      ],
      every: {
        title: 'Hər layihəyə daxildir',
        items: [
          { title: 'Adaptiv dizayn', desc: 'Telefon, planşet və kompüterdə işləyir.' },
          { title: 'Performans', desc: 'Şəkil, kod və keş optimallaşdırması.' },
          { title: 'SEO əsasları', desc: 'Təmiz kod, metadata və sitemap.' },
          { title: 'Analitika', desc: 'Trafik və konversiyalar ilk gündən izlənir.' },
          { title: 'Təhlükəsizlik', desc: 'HTTPS, qorunan formalar və aktual asılılıqlar.' },
          { title: 'Asan yeniləmə', desc: 'Komandanız üçün CMS və ya admin panel.' },
          { title: 'Tam təhvil', desc: 'Kod, hesablar, girişlər və sənədlər.' },
          { title: 'Buraxılışdan sonra dəstək', desc: 'Düzəlişlər, yeniləmələr və yeni funksiyalar.' },
        ],
      },
      models: {
        title: 'Əməkdaşlıq formatları',
        items: [
          {
            title: 'Sabit həcmli layihə',
            desc: 'Həcm, müddət və qiymət iş başlamazdan əvvəl yazılı razılaşdırılır. Saytlar və məhsulun ilk versiyası üçün ən yaxşı seçim.',
          },
          {
            title: 'Davamlı proqramlaşdırma',
            desc: 'Buraxılışdan sonra böyüməyə davam edən məhsullar üçün aylıq dizayn və proqramlaşdırma vaxtı.',
          },
          {
            title: 'Dəstək və xidmət',
            desc: 'Artıq işləyən sayt və ya tətbiq üçün yeniləmələr, monitorinq və kiçik təkmilləşdirmələr.',
          },
        ],
      },
    },
    work: {
      eyebrow: 'İşlər',
      title: 'Buraxdığımız məhsullar.',
      description:
        'Aşağıdakı hər layihə tapşırıqdan buraxılışa qədər eyni kiçik komanda ilə hazırlanıb. Hamısı işləyir — açıb baxa bilərsiniz.',
      filters: { all: 'Hamısı', mobile: 'Mobil tətbiqlər', corporate: 'Korporativ', retail: 'Pərakəndə və moda', media: 'Media' },
      labels: {
        scope: 'Nə etdik',
        features: 'Əsas funksiyalar',
        stack: 'Stek',
        languages: 'Dillər',
        visit: 'Sayta keç',
        platforms: 'Platformalar',
      },
      cta: {
        title: 'Növbəti layihə sizinki ola bilər.',
        description: 'Qısa təsvir göndərin, suallar, müddət və qiymət təxmini ilə qayıdaq.',
        primary: 'Layihəni müzakirə et',
      },
      cases: [
        {
          industry: 'Təhsil və süni intellekt',
          overview:
            'ADU AI Advisor App Store və Google Play-də dərc olunmuş, universitet tələbələri üçün süni intellektli tədris köməkçisidir. Tələbələr çatda tədris sualları verir, kurs sənədlərini fənn dəftərlərinə yükləyir və onlardan tədris materialları alırlar. Ayrıca süni intellekt psixoloqu məxfi söhbət imkanı verir.',
          scope: ['UI/UX dizayn', 'iOS və Android proqramlaşdırma', 'Süni intellekt funksiyaları', 'App Store və Google Play-də dərc'],
          features: [
            'Tədris suallarına çatda cavab verən süni intellekt məsləhətçisi',
            'Fənn dəftərləri: PDF, Word və mətn fayllarının yüklənməsi',
            'Süni intellektin hazırladığı kartlar, testlər və zehin xəritələri',
            'Yüklənmiş sənədlərin audio icmalı',
            'Süni intellekt psixoloqu ilə məxfi psixoloji dəstək',
            'Universitetin elektron kabineti ilə yoxlanılan qeydiyyat',
            'Söhbət tarixçəsi və push bildirişlər',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Audit və konsaltinq',
          overview:
            'Abacus Audit & Consulting 2017-ci ildən Bakıda fəaliyyət göstərən lisenziyalı audit şirkətidir. Sayt doqquz xidmət istiqamətini üç dildə təqdim edir və ziyarətçiləri konsultasiya müraciətinə çevirmək üçün qurulub.',
          scope: ['UI/UX dizayn', 'Veb proqramlaşdırma', 'Məzmun strukturu', 'Çoxdilli quruluş'],
          features: [
            'Auditdən və vergidən miqrasiya xidmətlərinə qədər doqquz xidmət bölməsi',
            'Bloq və akademiya bölmələri',
            'Daxili kalkulyator',
            'Konsultasiya çağırışı ilə video giriş ekranı',
            'WhatsApp və bir kliklə zəng',
            'Tərəfdaşlar və tez-tez verilən suallar bölmələri',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Reklam və istehsal',
          overview:
            'Prestige Group of Companies reklam, qablaşdırma və promo məhsullar istehsal edir — geniş formatlı çapdan restoran şəbəkələri üçün brendli qablaşdırmaya qədər. Sayt vizual üzərində qurulub: hər istiqamətin öz tam ekran şəkli və xidmət slaydları var.',
          scope: ['UI/UX dizayn', 'Veb proqramlaşdırma', 'Motion dizayn', 'Çoxdilli quruluş'],
          features: [
            'Tam ekran vizual təqdimat',
            'Çap, qablaşdırma, reklam və promo suvenir bölmələri',
            'Epson və Domino’s kimi müştərilərdən tövsiyə məktubları',
            'Dil seçimi',
            'Birbaşa telefon və e-poçt əlaqəsi',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Moda və pərakəndə',
          overview:
            'Danilov 2010-cu ildə yaradılmış, əl işi ayaqqabı və dəri aksesuarlar istehsal edən Bakı brendidir. Sayt brend kataloqu kimi işləyir: kişi və qadın kolleksiyaları, fərdi sifariş xidməti və mağaza ünvanları, sifarişlər isə WhatsApp vasitəsilə verilir.',
          scope: ['UI/UX dizayn', 'Veb proqramlaşdırma', 'CMS inteqrasiyası', 'Çoxdilli quruluş'],
          features: [
            'Məhsul səhifələri ilə kişi və qadın kolleksiyaları',
            'Fərdi sifariş, servis və brend tarixi bölmələri',
            'Mağaza ünvanları',
            'WhatsApp ilə sifariş və əlaqə',
            'Məhsullar və məzmun Sanity CMS-də idarə olunur',
            'Endirim və hədiyyə bölmələri',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Media və nəşriyyat',
          overview:
            'RE:AZ moda və mədəniyyət jurnalıdır. Uzun məqalələrin önə çıxdığı, Fashion, Art & Culture, Lifestyle və Beauty bölmələrinə ayrılmış və tədbirlər təqvimi olan redaksiya saytı hazırladıq.',
          scope: ['UI/UX dizayn', 'Veb proqramlaşdırma', 'CMS inteqrasiyası', 'Çoxdilli quruluş'],
          features: [
            'Uzun məqalələr üçün redaksiya dizaynı',
            'Fashion, Art & Culture, Lifestyle və Beauty bölmələri',
            'Tədbirlər təqvimi',
            'Məqalələrin Sanity CMS-dən dərci',
            'Jurnal, komanda və qaydalar səhifələri',
          ],
          languages: 'AZ · EN · RU',
        },
        {
          industry: 'Kənd təsərrüfatı və qida',
          overview:
            'Fresh Garden 2000-ci ildən fəaliyyət göstərən, yerli və beynəlxalq bazarlara məhsul tədarük edən Quba meyvə istehsalçısıdır. Sayt şirkəti, onun məhsullarını, saxlama və çeşidləmə xidmətlərini təqdim edir.',
          scope: ['UI/UX dizayn', 'Veb proqramlaşdırma', 'Çoxdilli quruluş'],
          features: [
            'Alma, nektarin, yastı şaftalı və gilas üçün məhsul bölmələri',
            'Saxlama və çeşidləmə xidmətləri',
            'Şirkət tarixi və missiyası',
            'Foto qalereya',
            'Telefon, e-poçt və ünvan',
          ],
          languages: 'AZ · EN · RU',
        },
      ],
    },
  },
};
