// Dados de projetos do portfólio — Lumora Synth

export const projects = [
  {
    id: 1,
    slug: 'ciesa-digital-twin-1',
    title: 'CIESA Digital Twin 1.0',
    category: 'digital-twin',
    categoryLabel: 'Digital Twin',
    shortDescription:
      'Um jogo simples de coleta ambientado em uma recriação do campus universitário CIESA no Roblox, onde jogadores coletam itens enquanto fogem de um monstro — uma "carteira de trabalho" ambulante.',
    overview:
      'Desenvolvido durante a faculdade, CIESA Digital Twin 1.0 foi a primeira versão de uma recriação interativa do campus CIESA construída dentro do Roblox. O ambiente reproduziu fielmente salas de aula, corredores e áreas externas do campus real. A jogabilidade apresentava uma mecânica simples de coleta onde os jogadores precisavam reunir itens espalhados pelo mapa enquanto fugiam de um monstro perseguidor — uma carteira de trabalho que os perseguia pelos corredores.',
    features: [
      'Ambiente do campus CIESA modelado a partir de referências do mundo real',
      'Sistema de jogabilidade de coleta de itens',
      'Mecânica de perseguição por monstro (carteira de trabalho)',
      'Corredores e salas de aula interativos',
      'Interface e HUD básicos',
      'Efeitos ambientais e atmosfera',
    ],
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
    categoryLabel: 'Digital Twin',
    shortDescription:
      'A próxima evolução da experiência do campus CIESA — um ambiente completamente reconstruído com multiplayer, sistemas de detecção de anomalias e monitoramento por câmeras. Atualmente em desenvolvimento.',
    overview:
      'CIESA Digital Twin 2.0 é uma reconstrução completa do projeto original com escopo muito mais ambicioso. O campus foi recriado do zero com maior fidelidade, novos sistemas interativos e suporte multiplayer. Jogadores exploram o ambiente, detectam anomalias usando ferramentas do jogo e gerenciam um sistema de vigilância por câmeras. O jogo apresenta eventos dinâmicos e anomalias acionadas proceduralmente que mantêm a jogabilidade imprevisível.',
    features: [
      'Ambiente completo do campus reconstruído com maior fidelidade',
      'Sistema multiplayer com sincronização em tempo real',
      'Sistema dinâmico de detecção de anomalias',
      'Monitoramento por câmeras e interface de vigilância',
      'Objetos interativos no ambiente',
      'HUD com status do jogador e alertas',
      'Design de som e efeitos atmosféricos',
    ],
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
    categoryLabel: 'Jogo Roblox',
    shortDescription:
      'Um jogo obby de ritmo acelerado no Roblox com mais de 165 modificadores dinâmicos que garantem que cada partida seja única e imprevisível.',
    overview:
      'Chaos Obby é um jogo obby (pista de obstáculos) para Roblox com alta rejogabilidade, apresentando um sistema revolucionário de modificadores. Os jogadores navegam por pistas de obstáculos desafiadoras onde a jogabilidade muda constantemente. O jogo inclui mais de 100 modificadores divididos entre Potencializadores (Buffs) e Debuffs, permitindo possibilidades de combinação quase infinitas. Cada partida é diferente com combinações aleatórias de modificadores que aplicam mudanças dinâmicas como gravidade alterada, velocidade aumentada, períodos de invulnerabilidade, modificações de plataformas e perigos ambientais. Isso garante que nenhuma partida seja igual.',
    features: [
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
    categoryLabel: 'Automação',
    shortDescription:
      'Um bot automatizado que realiza pesquisas no Microsoft Edge para ganhar pontos do Microsoft Rewards automaticamente.',
    overview:
      'O Edge Rewards Bot automatiza o processo de ganhar pontos do Microsoft Rewards realizando pesquisas no Microsoft Edge automaticamente. O bot gerencia as consultas de pesquisa, administra sessões e acumula pontos que podem ser resgatados no Microsoft Rewards. Uma solução prática para maximizar ganhos de recompensas sem esforço manual.',
    features: [
      'Pesquisas automatizadas no Microsoft Edge',
      'Sistema de acumulação de pontos',
      'Gerenciamento de sessão',
      'Frequência de pesquisa configurável',
      'Ganho diário automático de pontos',
    ],
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
    title: 'Sistema de Automação Personalizado',
    category: 'web-software',
    categoryLabel: 'Automação',
    shortDescription:
      'Sistema de automação de fluxo de trabalho que conecta múltiplas ferramentas e reduz processos manuais.',
    overview:
      'Um pipeline de automação personalizado que conecta ferramentas de negócios distintas em um único fluxo de trabalho eficiente. O sistema elimina a entrada manual de dados, automatiza tarefas repetitivas entre plataformas e inclui tratamento de erros com registro detalhado para total transparência.',
    features: [
      'Integração de API multiplataforma',
      'Sincronização automatizada de dados',
      'Fluxos de trabalho com gatilhos e ações personalizados',
      'Tratamento de erros e lógica de retentativa',
      'Painel com monitoramento de status em tempo real',
      'Automação agendada e orientada a eventos',
    ],
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
    shortDescription:
      'Professional and elegant website for a beauty salon with service gallery, scheduling, and portfolio of works. Available in Portuguese and English.',
    overview:
      'Taty Beauty Studio is a modern website designed for a beauty salon focusing on feminine services. The site features a complete portfolio of works, offered services, online scheduling system, and direct contact. The elegant and responsive design offers a premium experience to clients in both Portuguese and English languages.',
    features: [
      'Complete portfolio gallery',
      'Service showcase and details',
      'Online appointment booking system',
      'Integrated contact form',
      'Before and after photo galleries',
      'Modern responsive design',
      'Bilingual interface (Portuguese & English)',
      'Professional and elegant UI',
    ],
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

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category) {
  if (!category || category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}
