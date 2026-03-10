// Portfolio projects data — Lumora Synth

export const projects = [
  {
    id: 1,
    slug: 'ciesa-digital-twin-1',
    title: 'CIESA Digital Twin 1.0',
    category: 'digital-twin',
    categoryLabel: 'Digital Twin',
    shortDescription:
      'A simple collection game set inside a recreation of the CIESA university campus in Roblox, where players collect items while escaping a monster — a walking "carteira de trabalho".',
    overview:
      'Developed during university, CIESA Digital Twin 1.0 was the first version of an interactive recreation of the CIESA campus built inside Roblox. The environment faithfully reproduced classrooms, corridors, and outdoor areas from the real campus. The gameplay featured a simple collection mechanic where players had to gather items scattered across the map while running from a pursuing monster — a carteira de trabalho (work card) that chased them through the halls.',
    features: [
      'CIESA campus environment modeled from real-world reference',
      'Item collection gameplay system',
      'Monster chase mechanic (carteira de trabalho)',
      'Interactive corridors and classrooms',
      'Basic UI and HUD',
      'Ambient effects and atmosphere',
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
      'The next evolution of the CIESA campus experience — a fully rebuilt environment with multiplayer, anomaly detection systems, and camera monitoring. Currently in development.',
    overview:
      'CIESA Digital Twin 2.0 is a complete rebuild of the original project with far more ambitious scope. The campus has been recreated from scratch with higher fidelity, new interactive systems, and multiplayer support. Players explore the environment, detect anomalies using in-game tools, and manage a camera surveillance system. The game features dynamic events and procedurally triggered anomalies that keep gameplay unpredictable.',
    features: [
      'Full campus environment rebuilt with higher fidelity',
      'Multiplayer system with real-time sync',
      'Dynamic anomaly detection system',
      'Camera monitoring and surveillance UI',
      'Interactive environment objects',
      'HUD with player status and alerts',
      'Sound design and atmospheric effects',
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
    categoryLabel: 'Roblox Game',
    shortDescription:
      'A fast-paced Roblox obby game with challenging obstacle courses and chaotic level design.',
    overview:
      'Chaos Obby is a straightforward and fun Roblox obby (obstacle course) game. Players navigate through a series of increasingly difficult stages filled with jumps, moving platforms, and traps. The level design focuses on chaotic, unpredictable obstacles that keep players on their toes.',
    features: [
      'Multiple obstacle course stages',
      'Increasing difficulty progression',
      'Moving platforms and dynamic traps',
      'Checkpoint system',
      'Player respawn mechanics',
    ],
    technologies: ['Roblox Studio', 'Lua'],
    image: '/projects/chaos-obby.png',
    galleryImages: [],
    videos: null,
    localVideo: '/projects/chaos-obby.mp4',
    status: 'completed',
    featured: true,
  },
  {
    id: 6,
    slug: 'divas-site',
    title: 'DiVAS Beauty Website',
    category: 'web-software',
    categoryLabel: 'Website',
    shortDescription:
      'A modern beauty services website showcasing manicure, nail art, eyebrow shaping, and other aesthetic treatments.',
    overview:
      'DiVAS is a beautiful and professional website designed for a beauty salon business. The site showcases services including manicures, nail art, eyebrow shaping, and other aesthetic treatments. The design emphasizes elegance, showcases service galleries, and provides easy booking and contact functionality.',
    features: [
      'Service showcase gallery',
      'Appointment booking system',
      'Service pricing and details',
      'Before & after photo galleries',
      'Contact form integration',
      'Responsive mobile design',
    ],
    technologies: ['React', 'Node.js', 'CSS', 'JavaScript'],
    image: '/projects/divas-site.png',
    galleryImages: ['/projects/divas-site.png'],
    videos: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 5,
    slug: 'edge-rewards-bot',
    title: 'Edge Rewards Bot',
    category: 'web-software',
    categoryLabel: 'Automation',
    shortDescription:
      'An automated bot that performs Microsoft Edge searches to earn Microsoft Rewards points automatically.',
    overview:
      'The Edge Rewards Bot automates the process of earning Microsoft Rewards points by performing searches on Microsoft Edge automatically. The bot handles search queries, manages sessions, and accumulates points that can be redeemed for Microsoft Rewards. A hands-off solution to maximize reward earnings without manual effort.',
    features: [
      'Automated Microsoft Edge searches',
      'Points accumulation system',
      'Session management',
      'Configurable search frequency',
      'Hands-off daily point earning',
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
    title: 'Custom Automation System',
    category: 'web-software',
    categoryLabel: 'Automation',
    shortDescription:
      'Workflow automation system connecting multiple tools and reducing manual processes.',
    overview:
      'A custom-built automation pipeline that connects disparate business tools into a single efficient workflow. The system eliminates manual data entry, automates repetitive tasks across platforms, and includes error handling with detailed logging for full transparency.',
    features: [
      'Multi-platform API integration',
      'Automated data synchronization',
      'Custom trigger and action workflows',
      'Error handling and retry logic',
      'Dashboard with real-time status monitoring',
      'Scheduled and event-driven automation',
    ],
    technologies: ['Node.js', 'React', 'Python', 'REST APIs'],
    image: null,
    galleryImages: [null, null, null],
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
