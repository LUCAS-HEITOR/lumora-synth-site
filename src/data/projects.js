// Portfolio project data — Lumora Synth (bilingual: en / pt-BR)

import { localizeItem, localizeList } from '../utils/localize';

export const projects = [
  {
    id: 5,
    slug: 'edge-rewards-bot',
    title: 'Edge Rewards Bot',
    category: 'automation',
    categoryLabel: { en: 'Automation', pt: 'Automação' },
    shortDescription: {
      en: 'An automated bot that performs searches on Microsoft Edge to earn Microsoft Rewards points automatically.',
      pt: 'Um bot automatizado que realiza pesquisas no Microsoft Edge para ganhar pontos do Microsoft Rewards automaticamente.',
    },
    overview: {
      en: 'Edge Rewards Bot automates the process of earning Microsoft Rewards points by performing searches on Microsoft Edge automatically. The bot manages search queries, handles sessions, and accumulates points that can be redeemed on Microsoft Rewards. A practical solution to maximize reward earnings without manual effort.',
      pt: 'O Edge Rewards Bot automatiza o processo de ganhar pontos do Microsoft Rewards realizando pesquisas no Microsoft Edge automaticamente. O bot gerencia as consultas de pesquisa, administra sessões e acumula pontos que podem ser resgatados no Microsoft Rewards. Uma solução prática para maximizar ganhos de recompensas sem esforço manual.',
    },
    features: {
      en: [
        'Automated searches on Microsoft Edge',
        'Points accumulation system',
        'Session management',
        'Configurable search frequency',
        'Automatic daily points earning',
      ],
      pt: [
        'Pesquisas automatizadas no Microsoft Edge',
        'Sistema de acumulação de pontos',
        'Gerenciamento de sessão',
        'Frequência de pesquisa configurável',
        'Ganho diário automático de pontos',
      ],
    },
    technologies: ['Python', 'Selenium'],
    image: '/projects/bot-rewards.png',
    galleryImages: ['/projects/bot-rewards.png'],
    videos: null,
    githubUrl: 'https://github.com/LUCAS-HEITOR/edge-rewards-bot',
    status: 'completed',
    featured: true,
  },
  {
    id: 3,
    slug: 'custom-automation-system',
    title: { en: 'Custom Automation System', pt: 'Sistema de Automação Personalizado' },
    category: 'automation',
    categoryLabel: { en: 'Automation', pt: 'Automação' },
    shortDescription: {
      en: 'Workflow automation system that connects multiple tools and reduces manual processes.',
      pt: 'Sistema de automação de fluxo de trabalho que conecta múltiplas ferramentas e reduz processos manuais.',
    },
    overview: {
      en: 'A custom automation pipeline that connects disparate business tools into a single efficient workflow. The system eliminates manual data entry, automates repetitive cross-platform tasks, and includes error handling with detailed logging for full transparency.',
      pt: 'Um pipeline de automação personalizado que conecta ferramentas de negócios distintas em um único fluxo de trabalho eficiente. O sistema elimina a entrada manual de dados, automatiza tarefas repetitivas entre plataformas e inclui tratamento de erros com registro detalhado para total transparência.',
    },
    features: {
      en: [
        'Cross-platform API integration',
        'Automated data synchronization',
        'Custom trigger and action workflows',
        'Error handling and retry logic',
        'Dashboard with real-time status monitoring',
        'Scheduled and event-driven automation',
      ],
      pt: [
        'Integração de API multiplataforma',
        'Sincronização automatizada de dados',
        'Fluxos de trabalho com gatilhos e ações personalizados',
        'Tratamento de erros e lógica de retentativa',
        'Painel com monitoramento de status em tempo real',
        'Automação agendada e orientada a eventos',
      ],
    },
    technologies: ['Node.js', 'React', 'Python', 'REST APIs'],
    image: null,
    galleryImages: [],
    videos: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 6,
    slug: 'taty-beauty-studio',
    title: 'Taty Beauty Studio',
    category: 'website',
    categoryLabel: 'Website',
    shortDescription: {
      en: 'Professional and elegant website for a beauty salon with service gallery, scheduling, and portfolio of works. Available in Portuguese and English.',
      pt: 'Website profissional e elegante para um salão de beleza com galeria de serviços, agendamento e portfólio de trabalhos. Disponível em português e inglês.',
    },
    overview: {
      en: 'Taty Beauty Studio is a modern website designed for a beauty salon focusing on feminine services. The site features a complete portfolio of works, offered services, online scheduling system, and direct contact. The elegant and responsive design offers a premium experience to clients in both Portuguese and English languages.',
      pt: 'Taty Beauty Studio é um website moderno projetado para um salão de beleza focado em serviços femininos. O site apresenta um portfólio completo de trabalhos, serviços oferecidos, sistema de agendamento online e contato direto. O design elegante e responsivo oferece uma experiência premium aos clientes em português e inglês.',
    },
    features: {
      en: [
        'Complete portfolio gallery',
        'Service showcase and details',
        'Online appointment booking system',
        'Integrated contact form',
        'Before and after photo galleries',
        'Modern responsive design',
        'Bilingual interface (Portuguese & English)',
        'Professional and elegant UI',
      ],
      pt: [
        'Galeria completa de portfólio',
        'Vitrine de serviços e detalhes',
        'Sistema de agendamento online',
        'Formulário de contato integrado',
        'Galerias de fotos antes e depois',
        'Design moderno e responsivo',
        'Interface bilíngue (Português & Inglês)',
        'UI profissional e elegante',
      ],
    },
    technologies: ['React', 'Node.js', 'CSS', 'JavaScript'],
    image: '/projects/divas/divas-site2.png',
    galleryImages: [
      '/projects/divas/divas-site2.png',
      '/projects/divas/divas-site3.png',
      '/projects/divas/divas-site4.png',
    ],
    videos: null,
    status: 'completed',
    featured: true,
  },
];

export function getProjectBySlug(slug, lang) {
  const p = projects.find((p) => p.slug === slug);
  return p ? localizeItem(p, lang) : null;
}

export function getFeaturedProjects(lang) {
  return localizeList(projects.filter((p) => p.featured), lang);
}

export function getProjectsByCategory(category, lang) {
  const filtered = !category || category === 'all'
    ? projects
    : projects.filter((p) => p.category === category);
  return localizeList(filtered, lang);
}

export function getLocalizedProjects(lang) {
  return localizeList(projects, lang);
}
