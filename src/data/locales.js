import { experiences, featuredProjects, technologies } from './portfolio'

const englishTechnologies = [
  { number: '01', title: '.NET', text: 'Robust APIs, scalable services, and backend applications ready to evolve.', category: 'BACKEND' },
  { number: '02', title: 'C#', text: 'Primary language for clear business rules, strong typing, and maintainable code.', category: 'LANGUAGE' },
  { number: '03', title: 'Node.js', text: 'Lightweight services, integrations, and event-driven APIs with JavaScript on the server.', category: 'BACKEND' },
  { number: '04', title: 'React', text: 'Component-based, accessible interfaces connected to product needs.', category: 'FRONTEND' },
  { number: '05', title: 'AWS', text: 'Cloud, deployment, and infrastructure ready for availability and scale.', category: 'CLOUD' },
  { number: '06', title: 'SQL', text: 'Relational modeling, efficient queries, and organized business data.', category: 'DATA' },
  { number: '07', title: 'NoSQL', text: 'Flexible structures for distributed, fast, document-oriented scenarios.', category: 'DATA' },
  { number: '08', title: 'Docker', text: 'Consistent environments for developing, testing, and shipping with less friction.', category: 'DEVOPS' },
]

const englishExperiences = [
  { number: '01', role: 'Backend Developer', period: 'MAY/2025 - PRESENT', domain: 'REGULATED FINANCIAL SYSTEMS', description: 'I evolve APIs, workers, and critical routines with .NET, VB, and TypeScript, integrating external services with SQL and NoSQL data. I also help prepare UAT environments, change windows, and deployments.' },
  { number: '02', role: 'Software Developer', period: 'AUG/2024 - MAY/2025', domain: 'MICROSERVICES AND MODERNIZATION', description: 'I developed .NET/C# APIs in microservices and interfaces with Razor and JavaScript, while maintaining Xamarin applications. I worked on modernizing legacy systems with hexagonal architecture principles.' },
  { number: '03', role: 'Full-stack Developer', period: 'JAN/2023 - AUG/2024', domain: 'PRODUCTS AND MANAGEMENT SYSTEMS', description: 'I helped evolve a .NET management product, contributing to APIs, calculation rules, and internal workflows. I took part in architecture decisions, DDD, code reviews, CI/CD, and tools such as query runners.' },
]

const englishProjects = [
  {
    ...featuredProjects[0],
    type: 'TEAM PROTOTYPE',
    description: 'University carpooling prototype. I worked on the app and API, including authentication, invitations, profiles, search, and filters.',
    role: 'DEVELOPER · TEAM LEAD / PO',
    links: [
      { label: 'View app', href: 'https://github.com/Unirota/Unirota.APP' },
      { label: 'View API', href: 'https://github.com/Unirota/Unirota.API' },
    ],
  },
  {
    ...featuredProjects[1],
    type: 'BACKEND API',
    description: 'API in development for home automation, organized to evolve with validation, decoupled persistence, and new integrations.',
    role: 'SOLO PROJECT',
    links: [
      { label: 'View on GitHub', href: 'https://github.com/ThiagoArcoverde/homevault-api' },
    ],
  },
]

const spanishTechnologies = [
  { number: '01', title: '.NET', text: 'APIs robustas, servicios escalables y aplicaciones backend listas para evolucionar.', category: 'BACKEND' },
  { number: '02', title: 'C#', text: 'Lenguaje principal para reglas de negocio claras, tipado fuerte y código sostenible.', category: 'LENGUAJE' },
  { number: '03', title: 'Node.js', text: 'Servicios ligeros, integraciones y APIs orientadas a eventos con JavaScript en el servidor.', category: 'BACKEND' },
  { number: '04', title: 'React', text: 'Interfaces basadas en componentes, accesibles y conectadas con las necesidades del producto.', category: 'FRONTEND' },
  { number: '05', title: 'AWS', text: 'Cloud, despliegue e infraestructura preparados para ofrecer disponibilidad y escala.', category: 'CLOUD' },
  { number: '06', title: 'SQL', text: 'Modelado relacional, consultas eficientes y datos organizados para el negocio.', category: 'DATOS' },
  { number: '07', title: 'NoSQL', text: 'Estructuras flexibles para escenarios distribuidos, rápidos y orientados a documentos.', category: 'DATOS' },
  { number: '08', title: 'Docker', text: 'Entornos consistentes para desarrollar, probar y publicar con menos fricción.', category: 'DEVOPS' },
]

const spanishExperiences = [
  { number: '01', role: 'Desarrollador Backend', period: 'MAY/2025 - ACTUALIDAD', domain: 'SISTEMAS FINANCIEROS REGULADOS', description: 'Evoluciono APIs, workers y rutinas críticas con .NET, VB y TypeScript, integrando servicios externos y datos SQL y NoSQL. También participo en la preparación de entornos UAT, ventanas de cambio y despliegues.' },
  { number: '02', role: 'Desarrollador de Software', period: 'AGO/2024 - MAY/2025', domain: 'MICROSERVICIOS Y MODERNIZACIÓN', description: 'Desarrollé APIs .NET/C# en microservicios e interfaces con Razor y JavaScript, además de mantener aplicaciones Xamarin. Trabajé en la modernización de sistemas heredados con principios de arquitectura hexagonal.' },
  { number: '03', role: 'Desarrollador Full-stack', period: 'ENE/2023 - AGO/2024', domain: 'PRODUCTOS Y SISTEMAS DE GESTIÓN', description: 'Trabajé en la evolución de un producto de gestión en .NET, contribuyendo a APIs, reglas de cálculo y flujos internos. Participé en decisiones de arquitectura, DDD, revisiones de código, CI/CD y herramientas como query runner.' },
]

const spanishProjects = [
  {
    ...featuredProjects[0],
    type: 'PROTOTIPO EN EQUIPO',
    description: 'Prototipo de viajes compartidos universitarios. Trabajé en la aplicación y la API, con autenticación, invitaciones, perfiles, búsqueda y filtros.',
    role: 'DESARROLLADOR · TEAM LEAD / PO',
    links: [
      { label: 'Ver aplicación', href: 'https://github.com/Unirota/Unirota.APP' },
      { label: 'Ver API', href: 'https://github.com/Unirota/Unirota.API' },
    ],
  },
  {
    ...featuredProjects[1],
    type: 'API BACKEND',
    description: 'API en desarrollo para automatización residencial, organizada para evolucionar con validación, persistencia desacoplada y nuevas integraciones.',
    role: 'PROYECTO INDIVIDUAL',
    links: [
      { label: 'Ver en GitHub', href: 'https://github.com/ThiagoArcoverde/homevault-api' },
    ],
  },
]

const portuguese = {
  language: 'pt-BR',
  header: {
    brandLabel: 'Thiago Arcoverde, início',
    talk: 'Vamos conversar',
    themeLight: 'Ativar tema claro',
    themeDark: 'Ativar tema escuro',
    languageLabel: 'Selecionar idioma',
  },
  carousel: {
    ariaLabel: 'Conteúdo do portfólio',
    instruction: 'Use as setas ou a roda do mouse para navegar entre os painéis',
    navigation: 'Navegação do carrossel',
    previous: 'Página anterior',
    next: 'Próxima página',
    panels: ['Principal', 'Experiência', 'Especialidades', 'Projetos', 'Contato'],
  },
  terminal: {
    ariaLabel: 'Resumo técnico',
    status: 'online',
    prompt: 'ready to build',
    location: 'location',
    experience: 'experience',
  },
  hero: {
    greeting: 'Olá, me chamo',
    name: 'Thiago',
    intro: 'Sou engenheiro de software especializado em .NET e C#. Gosto de entender o problema por trás do código e construir soluções simples, confiáveis e preparadas para crescer.',
    note: 'Entre APIs, arquitetura e aprendizado constante, estou sempre tentando deixar o próximo passo mais claro do que o anterior.',
  },
  experience: {
    heading: 'Experiência além',
    accent: 'código.',
  },
  expertise: {
    heading: 'Tecnologias que conheço',
    accent: 'e uso.',
    intro: 'Tecnologias que conheço e uso para construir produtos claros, confiáveis e prontos para crescer.',
  },
  projects: {
    heading: 'Alguns dos meus',
    accent: ' projetos.',
    technologyLabel: 'Tecnologias',
    repositories: 'Ver todos no GitHub',
  },
  contact: {
    heading: 'Como me',
    accent: 'encontrar?',
    linkedinKicker: 'REDE PROFISSIONAL',
    linkedinDescription: 'Perfil profissional',
    githubKicker: 'CÓDIGO ABERTO',
    githubDescription: 'Código e projetos',
    emailKicker: 'CONTATO DIRETO',
  },
  technologies,
  experiences,
  featuredProjects,
}

const english = {
  language: 'en',
  header: {
    brandLabel: 'Thiago Arcoverde, home',
    talk: "Let's talk",
    themeLight: 'Enable light theme',
    themeDark: 'Enable dark theme',
    languageLabel: 'Select language',
  },
  carousel: {
    ariaLabel: 'Portfolio content',
    instruction: 'Use the arrows or mouse wheel to navigate between panels',
    navigation: 'Carousel navigation',
    previous: 'Previous page',
    next: 'Next page',
    panels: ['Home', 'Experience', 'Expertise', 'Projects', 'Contact'],
  },
  terminal: {
    ariaLabel: 'Technical summary',
    status: 'online',
    prompt: 'ready to build',
    location: 'location',
    experience: 'experience',
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Thiago',
    intro: 'I am a software engineer focused on .NET and C#. I like understanding the problem behind the code and building simple, reliable solutions ready to grow.',
    note: 'Between APIs, architecture, and continuous learning, I am always trying to make the next step clearer than the last.',
  },
  experience: {
    heading: 'Experience beyond',
    accent: 'code.',
  },
  expertise: {
    heading: 'Technologies I know',
    accent: 'and use.',
    intro: 'Technologies I know and use to build clear, reliable products ready to grow.',
  },
  projects: {
    heading: 'Some of my',
    accent: ' projects.',
    technologyLabel: 'Technologies',
    repositories: 'View all on GitHub',
  },
  contact: {
    heading: 'How to',
    accent: 'find me?',
    linkedinKicker: 'PROFESSIONAL NETWORK',
    linkedinDescription: 'Professional profile',
    githubKicker: 'OPEN SOURCE',
    githubDescription: 'Code and projects',
    emailKicker: 'DIRECT CONTACT',
  },
  technologies: englishTechnologies,
  experiences: englishExperiences,
  featuredProjects: englishProjects,
}

const spanish = {
  language: 'es',
  header: {
    brandLabel: 'Thiago Arcoverde, inicio',
    talk: 'Hablemos',
    themeLight: 'Activar tema claro',
    themeDark: 'Activar tema oscuro',
    languageLabel: 'Seleccionar idioma',
  },
  carousel: {
    ariaLabel: 'Contenido del portafolio',
    instruction: 'Usa las flechas o la rueda del ratón para navegar entre los paneles',
    navigation: 'Navegación del carrusel',
    previous: 'Página anterior',
    next: 'Página siguiente',
    panels: ['Inicio', 'Experiencia', 'Especialidades', 'Proyectos', 'Contacto'],
  },
  terminal: {
    ariaLabel: 'Resumen técnico',
    status: 'online',
    prompt: 'ready to build',
    location: 'ubicación',
    experience: 'experiencia',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Thiago',
    intro: 'Soy ingeniero de software especializado en .NET y C#. Me gusta entender el problema detrás del código y construir soluciones simples, confiables y preparadas para crecer.',
    note: 'Entre APIs, arquitectura y aprendizaje constante, siempre intento que el próximo paso sea más claro que el anterior.',
  },
  experience: {
    heading: 'Experiencia más allá del',
    accent: 'código.',
  },
  expertise: {
    heading: 'Tecnologías que conozco',
    accent: 'y uso.',
    intro: 'Tecnologías que conozco y uso para construir productos claros, confiables y listos para crecer.',
  },
  projects: {
    heading: 'Algunos de mis',
    accent: ' proyectos.',
    technologyLabel: 'Tecnologías',
    repositories: 'Ver todos en GitHub',
  },
  contact: {
    heading: 'Cómo',
    accent: 'encontrarme?',
    linkedinKicker: 'RED PROFESIONAL',
    linkedinDescription: 'Perfil profesional',
    githubKicker: 'CÓDIGO ABIERTO',
    githubDescription: 'Código y proyectos',
    emailKicker: 'CONTACTO DIRECTO',
  },
  technologies: spanishTechnologies,
  experiences: spanishExperiences,
  featuredProjects: spanishProjects,
}

export const locales = { 'pt-BR': portuguese, en: english, es: spanish }

export function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem('portfolio-language')
  if (savedLanguage === 'pt-BR' || savedLanguage === 'en' || savedLanguage === 'es') return savedLanguage
  if (window.navigator.language.toLowerCase().startsWith('es')) return 'es'
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
}
