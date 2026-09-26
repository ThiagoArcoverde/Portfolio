export const technologies = [
  {
    number: '01',
    title: '.NET',
    text: 'APIs robustas, serviços escaláveis e aplicações backend prontas para evoluir.',
    category: 'BACKEND',
  },
  {
    number: '02',
    title: 'C#',
    text: 'Linguagem principal para regras de negócio claras, tipagem forte e código sustentável.',
    category: 'LINGUAGEM',
  },
  {
    number: '03',
    title: 'Node.js',
    text: 'Serviços leves, integrações e APIs orientadas a eventos com JavaScript no servidor.',
    category: 'BACKEND',
  },
  {
    number: '04',
    title: 'React',
    text: 'Interfaces componentizadas, acessíveis e conectadas às necessidades do produto.',
    category: 'FRONTEND',
  },
  {
    number: '05',
    title: 'AWS',
    text: 'Cloud, deploy e infraestrutura preparados para entregar disponibilidade e escala.',
    category: 'CLOUD',
  },
  {
    number: '06',
    title: 'SQL',
    text: 'Modelagem relacional, consultas eficientes e dados organizados para o negócio.',
    category: 'DADOS',
  },
  {
    number: '07',
    title: 'NoSQL',
    text: 'Estruturas flexíveis para cenários distribuídos, rápidos e orientados a documentos.',
    category: 'DADOS',
  },
  {
    number: '08',
    title: 'Docker',
    text: 'Ambientes consistentes para desenvolver, testar e publicar com menos atrito.',
    category: 'DEVOPS',
  },
]

export const experiences = [
  {
    number: '01',
    role: 'Desenvolvedor Backend',
    period: 'MAI/2025 - ATUAL',
    domain: 'SISTEMAS FINANCEIROS REGULADOS',
    description: 'Evoluo APIs, workers e rotinas críticas com .NET, VB e TypeScript, integrando serviços externos e dados SQL e NoSQL. Também participo da preparação de ambientes UAT, GMUDs e deploys.',
  },
  {
    number: '02',
    role: 'Desenvolvedor de Software',
    period: 'AGO/2024 - MAI/2025',
    domain: 'MICROSSERVIÇOS E MODERNIZAÇÃO',
    description: 'Desenvolvi APIs .NET/C# em microsserviços e interfaces com Razor e JavaScript, além de manter aplicações Xamarin. Atuei na modernização de sistemas legados com princípios de arquitetura hexagonal.',
  },
  {
    number: '03',
    role: 'Desenvolvedor Full-stack',
    period: 'JAN/2023 - AGO/2024',
    domain: 'PRODUTOS E SISTEMAS DE GESTÃO',
    description: 'Atuei na evolução de um produto de gestão em .NET, contribuindo para APIs, regras de cálculo e fluxos internos. Participei de decisões de arquitetura, DDD, code review, CI/CD e ferramentas como query runner.',
  },
]

export const featuredProjects = [
  {
    name: 'unirota',
    type: 'PROTÓTIPO EM EQUIPE',
    title: 'Unirota',
    description: 'Protótipo de caronas universitárias. Atuei no aplicativo e na API, com autenticação, convites, perfil, busca e filtros.',
    role: 'DESENVOLVEDOR · TEAM LEAD / PO',
    stack: 'C#  ·  .NET  ·  React Native  ·  PostgreSQL  ·  SignalR',
    accent: 'blue',
    shape: '↔',
    links: [
      { label: 'Ver aplicativo', href: 'https://github.com/Unirota/Unirota.APP' },
      { label: 'Ver API', href: 'https://github.com/Unirota/Unirota.API' },
    ],
  },
  {
    name: 'homevault-api',
    type: 'API BACKEND',
    title: 'Homevault API',
    description: 'API em desenvolvimento para automações residenciais, organizada para evoluir com validação, persistência desacoplada e novas integrações.',
    role: 'PROJETO INDIVIDUAL',
    stack: 'C#  ·  .NET 10  ·  ASP.NET Core  ·  EF Core  ·  SQLite',
    accent: 'coral',
    shape: '⌂',
    links: [
      { label: 'Ver API', href: 'https://github.com/ThiagoArcoverde/homevault-api' },
      { label: 'Ver WEB', href: 'https://github.com/ThiagoArcoverde/homevault-web' },
    ],
  },
]
