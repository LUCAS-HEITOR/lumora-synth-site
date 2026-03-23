// Portfolio project data — Lumora Synth (bilingual: en / pt-BR)

import { localizeItem, localizeList } from '../utils/localize';

export const projects = [
  {
    id: 7,
    slug: 'portfolio-website',
    title: { en: 'Portfolio Website', pt: 'Website de Portfólio' },
    category: 'website',
    categoryLabel: { en: 'Website', pt: 'Website' },
    shortDescription: {
      en: 'Modern and responsive portfolio website to showcase professional work and projects.',
      pt: 'Website de portfólio moderno e responsivo para exibir trabalhos e projetos profissionais.',
    },
    overview: {
      en: 'A clean and professional portfolio website designed to showcase skills, projects, and achievements. Features a modern design with smooth animations, responsive layout, and optimized performance for an excellent user experience across all devices.',
      pt: 'Um website de portfólio limpo e profissional projetado para exibir habilidades, projetos e conquistas. Possui design moderno com animações suaves, layout responsivo e performance otimizada para uma excelente experiência do usuário em todos os dispositivos.',
    },
    features: {
      en: [
        'Modern and clean design',
        'Responsive layout',
        'Project showcase section',
        'About me section',
        'Contact form integration',
        'Smooth animations',
      ],
      pt: [
        'Design moderno e limpo',
        'Layout responsivo',
        'Seção de exibição de projetos',
        'Seção sobre mim',
        'Integração com formulário de contato',
        'Animações suaves',
      ],
    },
    technologies: ['React', 'CSS', 'JavaScript'],
    image: '/projects/Portfolio/portfolio-1.png',
    galleryImages: [
      '/projects/Portfolio/portfolio-1.png',
      '/projects/Portfolio/portfolio-2.png',
      '/projects/Portfolio/portfolio-3.png',
      '/projects/Portfolio/portfolio-4.png',
    ],
    videos: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 8,
    slug: 'resumeai',
    title: 'ResumeAI',
    category: 'automation',
    categoryLabel: { en: 'AI Tool', pt: 'Ferramenta IA' },
    shortDescription: {
      en: 'AI-powered resume builder that helps create professional resumes quickly and efficiently.',
      pt: 'Criador de currículos com IA que ajuda a criar currículos profissionais de forma rápida e eficiente.',
    },
    overview: {
      en: 'ResumeAI is an intelligent tool that leverages artificial intelligence to help users create professional, ATS-friendly resumes. The system analyzes job descriptions and provides personalized suggestions to optimize your resume for specific positions.',
      pt: 'ResumeAI é uma ferramenta inteligente que utiliza inteligência artificial para ajudar usuários a criar currículos profissionais e compatíveis com sistemas ATS. O sistema analisa descrições de vagas e fornece sugestões personalizadas para otimizar seu currículo para posições específicas.',
    },
    features: {
      en: [
        'AI-powered content suggestions',
        'ATS-friendly templates',
        'Job description analyzer',
        'Multiple export formats',
        'Real-time preview',
        'Keyword optimization',
      ],
      pt: [
        'Sugestões de conteúdo com IA',
        'Templates compatíveis com ATS',
        'Analisador de descrição de vagas',
        'Múltiplos formatos de exportação',
        'Preview em tempo real',
        'Otimização de palavras-chave',
      ],
    },
    technologies: ['React', 'Node.js', 'OpenAI API', 'Python'],
    image: '/projects/ResumeAi/resumeai-1.png',
    galleryImages: [
      '/projects/ResumeAi/resumeai-1.png',
      '/projects/ResumeAi/resumeai-2.png',
      '/projects/ResumeAi/resumeai-3.png',
    ],
    videos: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 9,
    slug: 'taskflow',
    title: 'TaskFlow',
    category: 'custom-programs',
    categoryLabel: { en: 'Productivity Tool', pt: 'Ferramenta de Produtividade' },
    shortDescription: {
      en: 'A powerful task planner and project management tool to organize your workflow efficiently.',
      pt: 'Um poderoso planejador de tarefas e ferramenta de gerenciamento de projetos para organizar seu fluxo de trabalho de forma eficiente.',
    },
    overview: {
      en: 'TaskFlow is a comprehensive task management application designed to help individuals and teams organize their work effectively. Features include task boards, due date tracking, priority management, and progress visualization to keep your projects on track.',
      pt: 'TaskFlow é uma aplicação abrangente de gerenciamento de tarefas projetada para ajudar indivíduos e equipes a organizar seu trabalho de forma eficaz. Os recursos incluem quadros de tarefas, acompanhamento de prazos, gerenciamento de prioridades e visualização de progresso para manter seus projetos no caminho certo.',
    },
    features: {
      en: [
        'Kanban-style task boards',
        'Due date and reminder system',
        'Priority tagging',
        'Progress tracking',
        'Team collaboration',
        'Calendar integration',
      ],
      pt: [
        'Quadros de tarefas estilo Kanban',
        'Sistema de prazos e lembretes',
        'Tags de prioridade',
        'Acompanhamento de progresso',
        'Colaboração em equipe',
        'Integração com calendário',
      ],
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
    image: '/projects/TaskFlow/taskflow-1.png',
    galleryImages: [
      '/projects/TaskFlow/taskflow-1.png',
      '/projects/TaskFlow/taskflow-2.png',
      '/projects/TaskFlow/taskflow-3.png',
      '/projects/TaskFlow/taskflow-4.png',
    ],
    videos: null,
    status: 'completed',
    featured: true,
  },
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
