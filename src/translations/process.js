/* Copy for the Process page. Stage titles and durations come from home.process.steps;
   stages[] order matches PROCESS_STAGES in pages/Process.jsx. */

export const processPage = {
  en: {
    eyebrow: 'Process',
    title: 'How we take a project from idea to launch.',
    description:
      'Four stages with clear deliverables, weekly check-ins and a working product you can see at every step.',
    labels: {
      activities: 'What happens',
      deliverables: 'What you get',
      yourPart: 'Your part',
      duration: 'Duration',
      stages: 'Stages',
    },
    stages: [
      {
        lead: 'We get to know your business, your users and what success looks like, then turn it into a plan we both sign off.',
        activities: [
          'Kick-off call about goals, users and constraints',
          'Review of existing materials, competitors and systems',
          'Feature list and priorities for the first release',
          'Technical approach and choice of stack',
        ],
        deliverables: ['Written brief and scope', 'Timeline with milestones', 'Cost estimate'],
        yourPart: 'A 30–60 minute call and quick answers to follow-up questions.',
      },
      {
        lead: 'We design how the product works before how it looks, so the structure is right before any visual detail.',
        activities: [
          'User flows and wireframes for key screens',
          'Visual direction based on your brand',
          'Final screens for mobile and desktop',
          'Clickable prototype for review',
        ],
        deliverables: ['Figma designs for every screen', 'Interactive prototype', 'Design system for development'],
        yourPart: 'Review the screens and leave comments directly in Figma.',
      },
      {
        lead: 'We build in short sprints. Every week you get a working version on a test link, not just a progress report.',
        activities: [
          'Front-end and back-end development',
          'CMS, payments and other integrations',
          'Testing on real devices and browsers',
          'Performance and SEO checks',
        ],
        deliverables: ['Weekly demo on a test link', 'Short written update after each sprint', 'Tested, launch-ready build'],
        yourPart: 'Try each demo and send feedback within a few days.',
      },
      {
        lead: 'We put the product live, make sure your team can run it and stay on for whatever comes next.',
        activities: [
          'Domain, hosting and deployment setup',
          'Analytics and error monitoring',
          'Team training on the CMS or admin panel',
          'Fixes and improvements after launch',
        ],
        deliverables: ['Live product', 'Full handover: code, accounts and documentation', 'Support on request or ongoing'],
        yourPart: 'Final approval before launch and the content for go-live.',
      },
    ],
    comms: {
      title: 'How we keep in touch',
      items: [
        { title: 'One shared chat', desc: 'A WhatsApp or Telegram group with the people building your product.' },
        { title: 'Weekly demo', desc: 'A short call or recording that shows what changed that week.' },
        { title: 'Live test link', desc: 'A test version you can open on any device at any time.' },
        { title: 'Written updates', desc: 'What was done, what comes next and anything we need from you.' },
      ],
    },
  },

  ru: {
    eyebrow: 'Процесс',
    title: 'Как мы ведём проект от идеи до запуска.',
    description:
      'Четыре этапа с понятными результатами, еженедельные встречи и работающий продукт, который видно на каждом шаге.',
    labels: {
      activities: 'Что происходит',
      deliverables: 'Что вы получаете',
      yourPart: 'Ваше участие',
      duration: 'Срок',
      stages: 'Этапы',
    },
    stages: [
      {
        lead: 'Знакомимся с вашим бизнесом, пользователями и критериями успеха, а затем превращаем это в план, который мы оба утверждаем.',
        activities: [
          'Стартовый созвон о целях, пользователях и ограничениях',
          'Разбор существующих материалов, конкурентов и систем',
          'Список функций и приоритеты для первого релиза',
          'Технический подход и выбор стека',
        ],
        deliverables: ['Письменное ТЗ и объём работ', 'План с ключевыми этапами', 'Оценка стоимости'],
        yourPart: 'Созвон на 30–60 минут и быстрые ответы на уточняющие вопросы.',
      },
      {
        lead: 'Сначала проектируем, как продукт работает, и только потом — как он выглядит, чтобы структура была верной до визуальных деталей.',
        activities: [
          'Пользовательские сценарии и прототипы ключевых экранов',
          'Визуальное направление на основе вашего бренда',
          'Финальные экраны для мобильных и десктопа',
          'Кликабельный прототип для согласования',
        ],
        deliverables: ['Дизайн всех экранов в Figma', 'Интерактивный прототип', 'Дизайн-система для разработки'],
        yourPart: 'Просмотреть экраны и оставить комментарии прямо в Figma.',
      },
      {
        lead: 'Работаем короткими спринтами. Каждую неделю вы получаете рабочую версию на тестовой ссылке, а не просто отчёт.',
        activities: [
          'Фронтенд- и бэкенд-разработка',
          'CMS, платежи и другие интеграции',
          'Тестирование на реальных устройствах и браузерах',
          'Проверка производительности и SEO',
        ],
        deliverables: ['Еженедельное демо на тестовой ссылке', 'Короткий письменный отчёт после спринта', 'Протестированная версия, готовая к запуску'],
        yourPart: 'Посмотреть каждое демо и прислать отзыв в течение пары дней.',
      },
      {
        lead: 'Запускаем продукт, убеждаемся, что ваша команда умеет с ним работать, и остаёмся рядом для следующих шагов.',
        activities: [
          'Настройка домена, хостинга и публикации',
          'Аналитика и мониторинг ошибок',
          'Обучение команды работе с CMS или админ-панелью',
          'Исправления и улучшения после запуска',
        ],
        deliverables: ['Работающий продукт', 'Полная передача: код, доступы и документация', 'Поддержка по запросу или постоянно'],
        yourPart: 'Финальное согласование перед запуском и контент для публикации.',
      },
    ],
    comms: {
      title: 'Как мы держим связь',
      items: [
        { title: 'Общий чат', desc: 'Группа в WhatsApp или Telegram с теми, кто делает ваш продукт.' },
        { title: 'Еженедельное демо', desc: 'Короткий созвон или запись с изменениями за неделю.' },
        { title: 'Тестовая ссылка', desc: 'Тестовая версия, которую можно открыть на любом устройстве.' },
        { title: 'Письменные отчёты', desc: 'Что сделано, что дальше и что нам нужно от вас.' },
      ],
    },
  },

  az: {
    eyebrow: 'Proses',
    title: 'Layihəni ideyadan buraxılışa necə aparırıq.',
    description:
      'Aydın nəticələri olan dörd mərhələ, həftəlik görüşlər və hər addımda görə biləcəyiniz işləyən məhsul.',
    labels: {
      activities: 'Nə baş verir',
      deliverables: 'Nə alırsınız',
      yourPart: 'Sizin iştirakınız',
      duration: 'Müddət',
      stages: 'Mərhələlər',
    },
    stages: [
      {
        lead: 'Biznesinizi, istifadəçilərinizi və uğurun nə demək olduğunu öyrənir, sonra bunu hər ikimizin təsdiqlədiyi plana çeviririk.',
        activities: [
          'Məqsədlər, istifadəçilər və məhdudiyyətlər üzrə başlanğıc zəngi',
          'Mövcud materialların, rəqiblərin və sistemlərin təhlili',
          'İlk versiya üçün funksiyalar siyahısı və prioritetlər',
          'Texniki yanaşma və stek seçimi',
        ],
        deliverables: ['Yazılı tapşırıq və iş həcmi', 'Əsas mərhələlərlə qrafik', 'Qiymət təxmini'],
        yourPart: '30–60 dəqiqəlik zəng və əlavə suallara tez cavab.',
      },
      {
        lead: 'Əvvəlcə məhsulun necə işlədiyini, sonra necə göründüyünü dizayn edirik ki, struktur vizual detallardan əvvəl düzgün olsun.',
        activities: [
          'Əsas ekranlar üçün istifadəçi ssenariləri və wireframe-lər',
          'Brendinizə əsaslanan vizual istiqamət',
          'Mobil və desktop üçün son ekranlar',
          'Təsdiq üçün klikabel prototip',
        ],
        deliverables: ['Bütün ekranların Figma dizaynı', 'İnteraktiv prototip', 'Proqramlaşdırma üçün dizayn sistemi'],
        yourPart: 'Ekranlara baxmaq və şərhləri birbaşa Figma-da yazmaq.',
      },
      {
        lead: 'Qısa sprintlərlə işləyirik. Hər həftə sadəcə hesabat yox, test linkində işləyən versiya alırsınız.',
        activities: [
          'Frontend və backend proqramlaşdırma',
          'CMS, ödəniş və digər inteqrasiyalar',
          'Real cihaz və brauzerlərdə test',
          'Performans və SEO yoxlaması',
        ],
        deliverables: ['Test linkində həftəlik demo', 'Hər sprintdən sonra qısa yazılı hesabat', 'Test olunmuş, buraxılışa hazır versiya'],
        yourPart: 'Hər demoya baxmaq və bir neçə gün ərzində rəy göndərmək.',
      },
      {
        lead: 'Məhsulu yayıma çıxarır, komandanızın onu idarə edə bildiyinə əmin olur və növbəti addımlar üçün yanınızda qalırıq.',
        activities: [
          'Domen, hostinq və dərc ayarları',
          'Analitika və xəta monitorinqi',
          'Komandaya CMS və ya admin panel üzrə təlim',
          'Buraxılışdan sonra düzəlişlər və təkmilləşdirmələr',
        ],
        deliverables: ['İşləyən məhsul', 'Tam təhvil: kod, girişlər və sənədlər', 'Sorğu əsasında və ya davamlı dəstək'],
        yourPart: 'Buraxılışdan əvvəl son təsdiq və dərc üçün məzmun.',
      },
    ],
    comms: {
      title: 'Əlaqəni necə saxlayırıq',
      items: [
        { title: 'Ortaq çat', desc: 'Məhsulunuzu quranlarla WhatsApp və ya Telegram qrupu.' },
        { title: 'Həftəlik demo', desc: 'Həftənin dəyişikliklərini göstərən qısa zəng və ya video.' },
        { title: 'Test linki', desc: 'İstənilən cihazda istənilən vaxt aça biləcəyiniz test versiyası.' },
        { title: 'Yazılı hesabatlar', desc: 'Nə edildi, növbəti nədir və bizə sizdən nə lazımdır.' },
      ],
    },
  },
};
