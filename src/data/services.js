// Dados de serviços — Lumora Synth
// Cada serviço possui um slug único usado para rotas

export const categories = [
  { id: 'roblox-games', label: 'Jogos Roblox' },
  { id: 'digital-twins', label: 'Digital Twins' },
  { id: 'websites', label: 'Websites' },
  { id: 'automations', label: 'Automações' },
  { id: 'custom-programs', label: 'Programas Personalizados' },
  { id: 'blender-3d', label: 'Blender / 3D' },
];

export const services = [
  {
    id: 1,
    slug: 'roblox-basic-game',
    category: 'roblox-games',
    name: 'Jogo Roblox Básico',
    shortDescription: 'Um jogo Roblox totalmente funcional com mapa personalizado, interface e mecânicas principais.',
    description:
      'Construímos experiências completas para Roblox do zero. Este pacote inclui design de mapa, programação básica, interface de usuário e um loop de jogo polido pronto para publicação.',
    deliverables: [
      'Mapa 3D personalizado',
      'Mecânicas principais do jogo (programadas em Luau)',
      'Interface básica (menus, HUD, loja)',
      'Testes e correção de bugs',
      'Build pronto para publicação',
    ],
    priceFrom: 120,
    currency: 'USD',
    estimatedDays: '14–30',
    featured: true,
  },
  {
    id: 2,
    slug: 'roblox-advanced-game',
    category: 'roblox-games',
    name: 'Jogo Roblox Avançado',
    shortDescription: 'Jogos multiplayer complexos com monetização, datastores e sistemas avançados.',
    description:
      'Para estúdios e criadores que precisam de uma experiência Roblox de nível profissional. Inclui rede multiplayer, dados persistentes, economia no jogo, interface avançada e integração de monetização.',
    deliverables: [
      'Arquitetura multiplayer',
      'Integração com DataStore',
      'Economia e loja no jogo',
      'Interface UI/UX avançada',
      'Configuração de monetização (Game Passes, Dev Products)',
      'Medidas anti-exploit',
      'Ciclo completo de QA',
    ],
    priceFrom: 400,
    currency: 'USD',
    estimatedDays: '30–60',
    featured: true,
  },
  {
    id: 3,
    slug: 'digital-twin-roblox',
    category: 'digital-twins',
    name: 'Digital Twin para Roblox',
    shortDescription: 'Ambiente do mundo real replicado no Roblox com elementos interativos.',
    description:
      'Recriamos espaços físicos — escritórios, campus, lojas, eventos — como experiências interativas no Roblox. Ideal para educação, marketing e tours virtuais.',
    deliverables: [
      'Ambiente 3D modelado a partir de referência',
      'Elementos interativos (portas, NPCs, painéis de informação)',
      'Integração de marca personalizada',
      'Modo de tour guiado (opcional)',
      'Suporte multiplayer',
    ],
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
    shortDescription: 'Site de página única de alta conversão para seu produto ou serviço.',
    description:
      'Uma landing page limpa e responsiva projetada para converter visitantes em clientes. Construída com frameworks modernos e otimizada para velocidade e SEO.',
    deliverables: [
      'Design responsivo personalizado',
      'Até 5 seções',
      'Integração com formulário de contato',
      'Otimização SEO',
      'Otimização de performance',
      'Abordagem mobile-first',
    ],
    priceFrom: 90,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: true,
  },
  {
    id: 5,
    slug: 'full-website',
    category: 'websites',
    name: 'Website Completo',
    shortDescription: 'Site multi-páginas com CMS, autenticação e recursos avançados.',
    description:
      'Aplicação web completa com múltiplas páginas, autenticação de usuários, painel administrativo e gerenciamento de conteúdo. Construído com React ou Django conforme suas necessidades.',
    deliverables: [
      'Site responsivo multi-páginas',
      'Sistema de autenticação de usuários',
      'Painel admin / CMS',
      'Integração com banco de dados',
      'Desenvolvimento de API',
      'Deploy e configuração de hospedagem',
    ],
    priceFrom: 350,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: false,
  },
  {
    id: 6,
    slug: 'workflow-automation',
    category: 'automations',
    name: 'Automação de Fluxo de Trabalho',
    shortDescription: 'Automatize tarefas repetitivas e integre suas ferramentas facilmente.',
    description:
      'Construímos pipelines de automação personalizada que conectam suas ferramentas, eliminam trabalho manual e economizam horas toda semana. De gatilhos simples a fluxos de trabalho complexos de múltiplas etapas.',
    deliverables: [
      'Análise e design de fluxo de trabalho',
      'Scripts de automação personalizados',
      'Integrações de ferramentas (APIs, webhooks)',
      'Tratamento de erros e registro',
      'Documentação e treinamento',
    ],
    priceFrom: 120,
    currency: 'USD',
    estimatedDays: '7–21',
    featured: true,
  },
  {
    id: 7,
    slug: 'custom-bot',
    category: 'automations',
    name: 'Bot Personalizado',
    shortDescription: 'Bots para Discord, Telegram ou WhatsApp sob medida para suas necessidades.',
    description:
      'Bots personalizados para plataformas de comunicação. Automatize suporte ao cliente, notificações, moderação ou qualquer fluxo de trabalho diretamente no aplicativo de mensagens favorito da sua equipe.',
    deliverables: [
      'Desenvolvimento e deploy do bot',
      'Sistema de comandos personalizado',
      'Integrações de API',
      'Banco de dados para dados persistentes',
      'Configuração de hospedagem',
    ],
    priceFrom: 80,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: false,
  },
  {
    id: 8,
    slug: 'custom-software',
    category: 'custom-programs',
    name: 'Software Personalizado',
    shortDescription: 'Aplicações desktop ou web sob medida para seu fluxo de trabalho específico.',
    description:
      'Desenvolvemos soluções de software sob medida — de ferramentas internas e painéis a produtos SaaS completos. Cada projeto é dimensionado, projetado e construído conforme seus requisitos exatos.',
    deliverables: [
      'Análise de requisitos',
      'Design UI/UX',
      'Desenvolvimento full-stack',
      'Arquitetura de banco de dados',
      'Testes e QA',
      'Deploy e documentação',
    ],
    priceFrom: 300,
    currency: 'USD',
    estimatedDays: '30–90',
    featured: false,
  },
  {
    id: 9,
    slug: 'blender-3d-modeling',
    category: 'blender-3d',
    name: 'Modelagem e Renderização 3D',
    shortDescription: 'Modelos, cenas e renderizações 3D profissionais usando Blender.',
    description:
      'Serviços de modelagem 3D, texturização, iluminação e renderização de alta qualidade para jogos, marketing, visualização arquitetônica e mais. Feito com Blender.',
    deliverables: [
      'Criação de modelo 3D',
      'Texturização e materiais',
      'Configuração de iluminação',
      'Renders em alta resolução',
      'Arquivos .blend fonte',
    ],
    priceFrom: null,
    currency: 'USD',
    estimatedDays: 'TBD',
    comingSoon: true,
    featured: false,
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}

export function getServicesByCategory(categoryId) {
  return services.filter((s) => s.category === categoryId);
}

export function getFeaturedServices() {
  return services.filter((s) => s.featured);
}
