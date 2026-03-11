// Portfolio project data — Lumora Synth (bilingual: en / pt-BR)

import { localizeItem, localizeList } from '../utils/localize';

export const projects = [
  {
    id: 1,
    slug: 'ciesa-digital-twin-1',
    title: 'CIESA Digital Twin 1.0',
    category: 'digital-twin',
    categoryLabel: { en: 'Digital Twin', pt: 'Gêmeo Digital' },
    shortDescription: {
      en: 'A simple collection game set in a recreation of the CIESA university campus in Roblox, where players collect items while fleeing from a monster — a walking "work card".',
      pt: 'Um jogo simples de coleta ambientado em uma recriação do campus universitário CIESA no Roblox, onde jogadores coletam itens enquanto fogem de um monstro — uma "carteira de trabalho" ambulante.',
    },
    overview: {
      en: 'Developed during college, CIESA Digital Twin 1.0 was the first version of an interactive recreation of the CIESA campus built within Roblox. The environment faithfully reproduced classrooms, corridors, and outdoor areas of the actual campus. The gameplay featured a simple collection mechanic where players needed to gather items scattered throughout the map while fleeing from a chaser monster — a work card that pursued them through the corridors.',
      pt: 'Desenvolvido durante a faculdade, CIESA Digital Twin 1.0 foi a primeira versão de uma recriação interativa do campus CIESA construída dentro do Roblox. O ambiente reproduziu fielmente salas de aula, corredores e áreas externas do campus real. A jogabilidade apresentava uma mecânica simples de coleta onde os jogadores precisavam reunir itens espalhados pelo mapa enquanto fugiam de um monstro perseguidor — uma carteira de trabalho que os perseguia pelos corredores.',
    },
    features: {
      en: [
        'Campus environment modeled from real-world references',
        'Item collection gameplay system',
        'Monster chase mechanic (work card)',
        'Interactive corridors and classrooms',
        'Basic interface and HUD',
        'Environmental effects and atmosphere',
      ],
      pt: [
        'Ambiente do campus CIESA modelado a partir de referências do mundo real',
        'Sistema de jogabilidade de coleta de itens',
        'Mecânica de perseguição por monstro (carteira de trabalho)',
        'Corredores e salas de aula interativos',
        'Interface e HUD básicos',
        'Efeitos ambientais e atmosfera',
      ],
    },
    technologies: ['Roblox Studio', 'Lua', 'Blender'],
    image: '/projects/ciesa10-1.png',
    galleryImages: [
      '/projects/ciesa10-1.png',
      '/projects/ciesa10-2.png',
      '/projects/ciesa10-3.png',
    ],
    videos: [
      'https://www.instagram.com/reel/DO_qhMPiVfc/',
      'https://www.instagram.com/reel/DPCniteADhv/',
    ],
    status: 'completed',
    featured: true,
  },
  {
    id: 2,
    slug: 'ciesa-digital-twin-2',
    title: 'CIESA Digital Twin 2.0',
    category: 'digital-twin',
    categoryLabel: { en: 'Digital Twin', pt: 'Gêmeo Digital' },
    shortDescription: {
      en: 'The next evolution of the CIESA campus experience — a completely rebuilt environment with multiplayer, anomaly detection systems and camera monitoring. Currently in development.',
      pt: 'A próxima evolução da experiência do campus CIESA — um ambiente completamente reconstruído com multiplayer, sistemas de detecção de anomalias e monitoramento por câmeras. Atualmente em desenvolvimento.',
    },
    overview: {
      en: 'CIESA Digital Twin 2.0 is a complete rebuild of the original project with a much more ambitious scope. The campus has been recreated from scratch with higher fidelity, new interactive systems, and multiplayer support. Players explore the environment, detect anomalies using in-game tools, and manage a camera surveillance system. The game features dynamic events and procedurally triggered anomalies that keep gameplay unpredictable.',
      pt: 'CIESA Digital Twin 2.0 é uma reconstrução completa do projeto original com escopo muito mais ambicioso. O campus foi recriado do zero com maior fidelidade, novos sistemas interativos e suporte multiplayer. Jogadores exploram o ambiente, detectam anomalias usando ferramentas do jogo e gerenciam um sistema de vigilância por câmeras. O jogo apresenta eventos dinâmicos e anomalias acionadas proceduralmente que mantêm a jogabilidade imprevisível.',
    },
    features: {
      en: [
        'Complete campus environment rebuilt with higher fidelity',
        'Multiplayer system with real-time synchronization',
        'Dynamic anomaly detection system',
        'Camera monitoring and surveillance interface',
        'Interactive environment objects',
        'HUD with player status and alerts',
        'Sound design and atmospheric effects',
      ],
      pt: [
        'Ambiente completo do campus reconstruído com maior fidelidade',
        'Sistema multiplayer com sincronização em tempo real',
        'Sistema dinâmico de detecção de anomalias',
        'Monitoramento por câmeras e interface de vigilância',
        'Objetos interativos no ambiente',
        'HUD com status do jogador e alertas',
        'Design de som e efeitos atmosféricos',
      ],
    },
    technologies: ['Roblox Studio', 'Lua', 'Blender', 'Node.js'],
    image: null,
    galleryImages: [],
    videos: null,
    status: 'in-development',
    featured: true,
  },
  {
    id: 4,
    slug: 'chaos-obby',
    title: 'Chaos Obby',
    category: 'roblox-game',
    categoryLabel: { en: 'Roblox Game', pt: 'Jogo Roblox' },
    shortDescription: {
      en: 'A fast-paced obby game on Roblox with 165+ dynamic modifiers that ensure every match is unique and unpredictable.',
      pt: 'Um jogo obby de ritmo acelerado no Roblox com mais de 165 modificadores dinâmicos que garantem que cada partida seja única e imprevisível.',
    },
    overview: {
      en: 'Chaos Obby is a high-replayability obstacle course game for Roblox featuring a revolutionary modifier system. Players navigate through challenging obstacle courses where the gameplay constantly changes. The game includes 165+ modifiers split between Power-ups (Buffs) and Debuffs, allowing for nearly infinite combination possibilities. Each match is different with random modifier combinations that apply dynamic changes like altered gravity, increased speed, invulnerability periods, platform modifications, and environmental hazards. This ensures that no two runs are ever the same.',
      pt: 'Chaos Obby é um jogo obby (pista de obstáculos) para Roblox com alta rejogabilidade, apresentando um sistema revolucionário de modificadores. Os jogadores navegam por pistas de obstáculos desafiadoras onde a jogabilidade muda constantemente. O jogo inclui mais de 165 modificadores divididos entre Potencializadores (Buffs) e Debuffs, permitindo possibilidades de combinação quase infinitas. Cada partida é diferente com combinações aleatórias de modificadores que aplicam mudanças dinâmicas como gravidade alterada, velocidade aumentada, períodos de invulnerabilidade, modificações de plataformas e perigos ambientais. Isso garante que nenhuma partida seja igual.',
    },
    features: {
      en: [
        'Multiple obstacle course stages with progressive difficulty',
        'Increasing difficulty progression system',
        'Moving platforms and dynamic traps',
        'Advanced checkpoint system',
        'Respawn mechanics with fall detection',
        '165+ Dynamic Modifiers (44+ Buffs + 56+ Debuffs)',
        'Random modifier combinations for infinite replayability',
        'Real-time modifier effects on gameplay',
        'Power-up System (Speed, Jump, Defense, etc.)',
        'Debuff Challenges (Gravity Shifts, Control Inversion, Vision Impairment, etc.)',
        'Category-based modifier system (Speed, Jump, Defense, Scale, Platform, Vision, Time, Gadgets, Hazards and more)',
      ],
      pt: [
        'Múltiplas fases de pista de obstáculos com dificuldade progressiva',
        'Sistema de progressão de dificuldade crescente',
        'Plataformas móveis e armadilhas dinâmicas',
        'Sistema avançado de checkpoints',
        'Mecânicas de reaparecimento com detecção de queda',
        '165+ Modificadores Dinâmicos (44+ Buffs + 56+ Debuffs)',
        'Combinações aleatórias de modificadores para rejogabilidade infinita',
        'Efeitos de modificadores em tempo real na jogabilidade',
        'Sistema de Potencializadores (Velocidade, Pulo, Defesa, etc.)',
        'Desafios de Debuffs (Mudanças de Gravidade, Inversão de Controles, Impedimento de Visão, etc.)',
        'Sistema de modificadores por categoria (Velocidade, Pulo, Defesa, Escala, Plataforma, Visão, Tempo, Gadgets, Perigos e mais)',
      ],
    },
    technologies: ['Roblox Studio', 'Lua'],
    image: '/projects/chaos-obby/chaos-obby.png',
    galleryImages: [],
    videos: null,
    localVideo: '/projects/chaos-obby/chaos-obby.mp4',
    status: 'completed',
    featured: true,
    modifiers: {
      total: 165,
      buffs: 44,
      debuffs: 56,
      categories: ['speed', 'jump', 'defense', 'scale', 'utility', 'platform', 'vision', 'time', 'gadget', 'hazard', 'control', 'sound', 'chaos', 'difficulty'],
    },
  },
  {
    id: 5,
    slug: 'edge-rewards-bot',
    title: 'Edge Rewards Bot',
    category: 'web-software',
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
    technologies: ['Python'],
    image: '/projects/bot-rewards.png',
    galleryImages: ['/projects/bot-rewards.png'],
    videos: null,
    githubUrl: 'https://github.com/LUCAS-HEITOR/edge-rewards-bot',
    status: 'completed',
    featured: false,
  },
  {
    id: 3,
    slug: 'custom-automation-system',
    title: { en: 'Custom Automation System', pt: 'Sistema de Automação Personalizado' },
    category: 'web-software',
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
    galleryImages: [null, null, null],
    videos: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 6,
    slug: 'taty-beauty-studio',
    title: 'Taty Beauty Studio',
    category: 'web-software',
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
