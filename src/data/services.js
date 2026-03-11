// Service catalog — Lumora Synth (bilingual: en / pt-BR)

import { localizeItem, localizeList } from '../utils/localize';

export const categories = [
  { id: 'roblox-games', label: { en: 'Roblox Games', pt: 'Jogos Roblox' } },
  { id: 'digital-twins', label: { en: 'Digital Twins', pt: 'Digital Twins' } },
  { id: 'websites', label: { en: 'Websites', pt: 'Websites' } },
  { id: 'automations', label: { en: 'Automations', pt: 'Automações' } },
  { id: 'custom-programs', label: { en: 'Custom Programs', pt: 'Programas Personalizados' } },
  { id: 'blender-3d', label: { en: 'Blender / 3D', pt: 'Blender / 3D' } },
];

export const services = [
  {
    id: 1,
    slug: 'roblox-basic-game',
    category: 'roblox-games',
    name: { en: 'Basic Roblox Game', pt: 'Jogo Roblox Básico' },
    shortDescription: {
      en: 'A fully functional Roblox game with custom map, interface and core mechanics.',
      pt: 'Um jogo Roblox totalmente funcional com mapa personalizado, interface e mecânicas principais.',
    },
    description: {
      en: 'We build complete Roblox experiences from scratch. This package includes map design, basic programming, user interface, and a polished game loop ready for publication.',
      pt: 'Construímos experiências completas para Roblox do zero. Este pacote inclui design de mapa, programação básica, interface de usuário e um loop de jogo polido pronto para publicação.',
    },
    deliverables: {
      en: [
        'Custom 3D map',
        'Core game mechanics (programmed in Luau)',
        'Basic interface (menus, HUD, shop)',
        'Testing and bug fixing',
        'Publication-ready build',
      ],
      pt: [
        'Mapa 3D personalizado',
        'Mecânicas principais do jogo (programadas em Luau)',
        'Interface básica (menus, HUD, loja)',
        'Testes e correção de bugs',
        'Build pronto para publicação',
      ],
    },
    priceFrom: 120,
    currency: 'USD',
    estimatedDays: '14–30',
    featured: true,
  },
  {
    id: 2,
    slug: 'roblox-advanced-game',
    category: 'roblox-games',
    name: { en: 'Advanced Roblox Game', pt: 'Jogo Roblox Avançado' },
    shortDescription: {
      en: 'Complex multiplayer games with monetization, datastores and advanced systems.',
      pt: 'Jogos multiplayer complexos com monetização, datastores e sistemas avançados.',
    },
    description: {
      en: 'For studios and creators who need a professional-grade Roblox experience. Includes multiplayer networking, persistent data, in-game economy, advanced interface, and monetization integration.',
      pt: 'Para estúdios e criadores que precisam de uma experiência Roblox de nível profissional. Inclui rede multiplayer, dados persistentes, economia no jogo, interface avançada e integração de monetização.',
    },
    deliverables: {
      en: [
        'Multiplayer architecture',
        'DataStore integration',
        'In-game economy and shop',
        'Advanced UI/UX interface',
        'Monetization setup (Game Passes, Dev Products)',
        'Anti-exploit measures',
        'Full QA cycle',
      ],
      pt: [
        'Arquitetura multiplayer',
        'Integração com DataStore',
        'Economia e loja no jogo',
        'Interface UI/UX avançada',
        'Configuração de monetização (Game Passes, Dev Products)',
        'Medidas anti-exploit',
        'Ciclo completo de QA',
      ],
    },
    priceFrom: 400,
    currency: 'USD',
    estimatedDays: '30–60',
    featured: true,
  },
  {
    id: 3,
    slug: 'digital-twin-roblox',
    category: 'digital-twins',
    name: { en: 'Digital Twin for Roblox', pt: 'Digital Twin para Roblox' },
    shortDescription: {
      en: 'Real-world environment replicated in Roblox with interactive elements.',
      pt: 'Ambiente do mundo real replicado no Roblox com elementos interativos.',
    },
    description: {
      en: 'We recreate physical spaces — offices, campuses, stores, events — as interactive Roblox experiences. Ideal for education, marketing, and virtual tours.',
      pt: 'Recriamos espaços físicos — escritórios, campus, lojas, eventos — como experiências interativas no Roblox. Ideal para educação, marketing e tours virtuais.',
    },
    deliverables: {
      en: [
        '3D environment modeled from reference',
        'Interactive elements (doors, NPCs, info panels)',
        'Custom branding integration',
        'Guided tour mode (optional)',
        'Multiplayer support',
      ],
      pt: [
        'Ambiente 3D modelado a partir de referência',
        'Elementos interativos (portas, NPCs, painéis de informação)',
        'Integração de marca personalizada',
        'Modo de tour guiado (opcional)',
        'Suporte multiplayer',
      ],
    },
    priceFrom: 350,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: false,
  },
  {
    id: 4,
    slug: 'landing-page',
    category: 'websites',
    name: 'Landing Page',
    shortDescription: {
      en: 'High-conversion single-page website for your product or service.',
      pt: 'Site de página única de alta conversão para seu produto ou serviço.',
    },
    description: {
      en: 'A clean, responsive landing page designed to convert visitors into customers. Built with modern frameworks and optimized for speed and SEO.',
      pt: 'Uma landing page limpa e responsiva projetada para converter visitantes em clientes. Construída com frameworks modernos e otimizada para velocidade e SEO.',
    },
    deliverables: {
      en: [
        'Custom responsive design',
        'Up to 5 sections',
        'Contact form integration',
        'SEO optimization',
        'Performance optimization',
        'Mobile-first approach',
      ],
      pt: [
        'Design responsivo personalizado',
        'Até 5 seções',
        'Integração com formulário de contato',
        'Otimização SEO',
        'Otimização de performance',
        'Abordagem mobile-first',
      ],
    },
    priceFrom: 90,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: true,
  },
  {
    id: 5,
    slug: 'full-website',
    category: 'websites',
    name: { en: 'Full Website', pt: 'Website Completo' },
    shortDescription: {
      en: 'Multi-page website with CMS, authentication and advanced features.',
      pt: 'Site multi-páginas com CMS, autenticação e recursos avançados.',
    },
    description: {
      en: 'Complete web application with multiple pages, user authentication, admin panel, and content management. Built with React or Django based on your needs.',
      pt: 'Aplicação web completa com múltiplas páginas, autenticação de usuários, painel administrativo e gerenciamento de conteúdo. Construído com React ou Django conforme suas necessidades.',
    },
    deliverables: {
      en: [
        'Responsive multi-page website',
        'User authentication system',
        'Admin panel / CMS',
        'Database integration',
        'API development',
        'Deployment and hosting setup',
      ],
      pt: [
        'Site responsivo multi-páginas',
        'Sistema de autenticação de usuários',
        'Painel admin / CMS',
        'Integração com banco de dados',
        'Desenvolvimento de API',
        'Deploy e configuração de hospedagem',
      ],
    },
    priceFrom: 350,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: false,
  },
  {
    id: 6,
    slug: 'workflow-automation',
    category: 'automations',
    name: { en: 'Workflow Automation', pt: 'Automação de Fluxo de Trabalho' },
    shortDescription: {
      en: 'Automate repetitive tasks and integrate your tools seamlessly.',
      pt: 'Automatize tarefas repetitivas e integre suas ferramentas facilmente.',
    },
    description: {
      en: 'We build custom automation pipelines that connect your tools, eliminate manual work, and save hours every week. From simple triggers to complex multi-step workflows.',
      pt: 'Construímos pipelines de automação personalizada que conectam suas ferramentas, eliminam trabalho manual e economizam horas toda semana. De gatilhos simples a fluxos de trabalho complexos de múltiplas etapas.',
    },
    deliverables: {
      en: [
        'Workflow analysis and design',
        'Custom automation scripts',
        'Tool integrations (APIs, webhooks)',
        'Error handling and logging',
        'Documentation and training',
      ],
      pt: [
        'Análise e design de fluxo de trabalho',
        'Scripts de automação personalizados',
        'Integrações de ferramentas (APIs, webhooks)',
        'Tratamento de erros e registro',
        'Documentação e treinamento',
      ],
    },
    priceFrom: 120,
    currency: 'USD',
    estimatedDays: '7–21',
    featured: true,
  },
  {
    id: 7,
    slug: 'custom-bot',
    category: 'automations',
    name: { en: 'Custom Bot', pt: 'Bot Personalizado' },
    shortDescription: {
      en: 'Bots for Discord, Telegram or WhatsApp tailored to your needs.',
      pt: 'Bots para Discord, Telegram ou WhatsApp sob medida para suas necessidades.',
    },
    description: {
      en: 'Custom bots for communication platforms. Automate customer support, notifications, moderation, or any workflow directly in your team\'s favorite messaging app.',
      pt: 'Bots personalizados para plataformas de comunicação. Automatize suporte ao cliente, notificações, moderação ou qualquer fluxo de trabalho diretamente no aplicativo de mensagens favorito da sua equipe.',
    },
    deliverables: {
      en: [
        'Bot development and deployment',
        'Custom command system',
        'API integrations',
        'Database for persistent data',
        'Hosting setup',
      ],
      pt: [
        'Desenvolvimento e deploy do bot',
        'Sistema de comandos personalizado',
        'Integrações de API',
        'Banco de dados para dados persistentes',
        'Configuração de hospedagem',
      ],
    },
    priceFrom: 80,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: false,
  },
  {
    id: 8,
    slug: 'custom-software',
    category: 'custom-programs',
    name: { en: 'Custom Software', pt: 'Software Personalizado' },
    shortDescription: {
      en: 'Tailored desktop or web applications for your specific workflow.',
      pt: 'Aplicações desktop ou web sob medida para seu fluxo de trabalho específico.',
    },
    description: {
      en: 'We develop tailor-made software solutions — from internal tools and dashboards to full SaaS products. Every project is scoped, designed, and built to your exact requirements.',
      pt: 'Desenvolvemos soluções de software sob medida — de ferramentas internas e painéis a produtos SaaS completos. Cada projeto é dimensionado, projetado e construído conforme seus requisitos exatos.',
    },
    deliverables: {
      en: [
        'Requirements analysis',
        'UI/UX design',
        'Full-stack development',
        'Database architecture',
        'Testing and QA',
        'Deployment and documentation',
      ],
      pt: [
        'Análise de requisitos',
        'Design UI/UX',
        'Desenvolvimento full-stack',
        'Arquitetura de banco de dados',
        'Testes e QA',
        'Deploy e documentação',
      ],
    },
    priceFrom: 300,
    currency: 'USD',
    estimatedDays: '30–90',
    featured: false,
  },
  {
    id: 9,
    slug: 'blender-3d-modeling',
    category: 'blender-3d',
    name: { en: '3D Modeling & Rendering', pt: 'Modelagem e Renderização 3D' },
    shortDescription: {
      en: 'Professional 3D models, scenes and renders using Blender.',
      pt: 'Modelos, cenas e renderizações 3D profissionais usando Blender.',
    },
    description: {
      en: 'High-quality 3D modeling, texturing, lighting, and rendering services for games, marketing, architectural visualization, and more. Made with Blender.',
      pt: 'Serviços de modelagem 3D, texturização, iluminação e renderização de alta qualidade para jogos, marketing, visualização arquitetônica e mais. Feito com Blender.',
    },
    deliverables: {
      en: [
        '3D model creation',
        'Texturing and materials',
        'Lighting setup',
        'High-resolution renders',
        'Source .blend files',
      ],
      pt: [
        'Criação de modelo 3D',
        'Texturização e materiais',
        'Configuração de iluminação',
        'Renders em alta resolução',
        'Arquivos .blend fonte',
      ],
    },
    priceFrom: null,
    currency: 'USD',
    estimatedDays: 'TBD',
    comingSoon: true,
    featured: false,
  },
];

export function getServiceBySlug(slug, lang) {
  const s = services.find((s) => s.slug === slug);
  return s ? localizeItem(s, lang) : null;
}

export function getServicesByCategory(categoryId, lang) {
  return localizeList(services.filter((s) => s.category === categoryId), lang);
}

export function getFeaturedServices(lang) {
  return localizeList(services.filter((s) => s.featured), lang);
}

export function getLocalizedServices(lang) {
  return localizeList(services, lang);
}

export function getLocalizedCategories(lang) {
  return localizeList(categories, lang);
}
