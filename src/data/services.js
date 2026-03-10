// Services data — Lumora Synth
// Each service has a unique slug used for routing

export const categories = [
  { id: 'roblox-games', label: 'Roblox Games' },
  { id: 'digital-twins', label: 'Digital Twins' },
  { id: 'websites', label: 'Websites' },
  { id: 'automations', label: 'Automations' },
  { id: 'custom-programs', label: 'Custom Programs' },
  { id: 'blender-3d', label: 'Blender / 3D' },
];

export const services = [
  {
    id: 1,
    slug: 'roblox-basic-game',
    category: 'roblox-games',
    name: 'Roblox Basic Game',
    shortDescription: 'A fully functional Roblox game with custom map, UI, and core mechanics.',
    description:
      'We build complete Roblox experiences from scratch. This package includes map design, basic scripting, user interface, and a polished game loop ready for publishing.',
    deliverables: [
      'Custom 3D map',
      'Core game mechanics (scripted in Luau)',
      'Basic UI (menus, HUD, shop)',
      'Testing & bug fixes',
      'Publishing-ready build',
    ],
    priceFrom: 350,
    currency: 'USD',
    estimatedDays: '14–30',
    featured: true,
  },
  {
    id: 2,
    slug: 'roblox-advanced-game',
    category: 'roblox-games',
    name: 'Roblox Advanced Game',
    shortDescription: 'Complex multiplayer games with monetization, datastores, and advanced systems.',
    description:
      'For studios and creators who need a production-grade Roblox experience. Includes multiplayer networking, persistent data, in-game economy, advanced UI, and monetization integration.',
    deliverables: [
      'Multiplayer architecture',
      'DataStore integration',
      'In-game economy & shop',
      'Advanced UI/UX',
      'Monetization setup (Game Passes, Dev Products)',
      'Anti-exploit measures',
      'Full QA cycle',
    ],
    priceFrom: 1200,
    currency: 'USD',
    estimatedDays: '30–60',
    featured: true,
  },
  {
    id: 3,
    slug: 'digital-twin-roblox',
    category: 'digital-twins',
    name: 'Digital Twin for Roblox',
    shortDescription: 'Real-world environment replicated in Roblox with interactive elements.',
    description:
      'We recreate physical spaces — offices, campuses, stores, events — as interactive Roblox experiences. Ideal for education, marketing, and virtual tours.',
    deliverables: [
      '3D environment modeled from reference',
      'Interactive elements (doors, NPCs, info panels)',
      'Custom branding integration',
      'Guided tour mode (optional)',
      'Multiplayer support',
    ],
    priceFrom: 900,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: false,
  },
  {
    id: 4,
    slug: 'landing-page',
    category: 'websites',
    name: 'Landing Page',
    shortDescription: 'High-converting single-page website for your product or service.',
    description:
      'A clean, responsive landing page designed to convert visitors into customers. Built with modern frameworks and optimized for speed and SEO.',
    deliverables: [
      'Custom responsive design',
      'Up to 5 sections',
      'Contact form integration',
      'SEO optimization',
      'Performance optimization',
      'Mobile-first approach',
    ],
    priceFrom: 150,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: true,
  },
  {
    id: 5,
    slug: 'full-website',
    category: 'websites',
    name: 'Full Website',
    shortDescription: 'Multi-page website with CMS, authentication, and advanced features.',
    description:
      'Complete web application with multiple pages, user authentication, admin dashboard, and content management. Built with React or Django based on your needs.',
    deliverables: [
      'Multi-page responsive website',
      'User authentication system',
      'Admin panel / CMS',
      'Database integration',
      'API development',
      'Deployment & hosting setup',
    ],
    priceFrom: 800,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: false,
  },
  {
    id: 6,
    slug: 'workflow-automation',
    category: 'automations',
    name: 'Workflow Automation',
    shortDescription: 'Automate repetitive tasks and integrate your tools seamlessly.',
    description:
      'We build custom automation pipelines that connect your tools, eliminate manual work, and save hours every week. From simple triggers to complex multi-step workflows.',
    deliverables: [
      'Workflow analysis & design',
      'Custom automation scripts',
      'Tool integrations (APIs, webhooks)',
      'Error handling & logging',
      'Documentation & training',
    ],
    priceFrom: 250,
    currency: 'USD',
    estimatedDays: '7–21',
    featured: true,
  },
  {
    id: 7,
    slug: 'custom-bot',
    category: 'automations',
    name: 'Custom Bot',
    shortDescription: 'Discord, Telegram, or WhatsApp bots tailored to your needs.',
    description:
      'Custom-built bots for communication platforms. Automate customer support, notifications, moderation, or any workflow directly within your team\'s favorite messaging app.',
    deliverables: [
      'Bot development & deployment',
      'Custom command system',
      'API integrations',
      'Database for persistent data',
      'Hosting setup',
    ],
    priceFrom: 200,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: false,
  },
  {
    id: 8,
    slug: 'custom-software',
    category: 'custom-programs',
    name: 'Custom Software',
    shortDescription: 'Tailored desktop or web applications built for your specific workflow.',
    description:
      'We develop bespoke software solutions — from internal tools and dashboards to full SaaS products. Every project is scoped, designed, and built around your exact requirements.',
    deliverables: [
      'Requirements analysis',
      'UI/UX design',
      'Full-stack development',
      'Database architecture',
      'Testing & QA',
      'Deployment & documentation',
    ],
    priceFrom: 1200,
    currency: 'USD',
    estimatedDays: '30–90',
    featured: false,
  },
  {
    id: 9,
    slug: 'blender-3d-modeling',
    category: 'blender-3d',
    name: '3D Modeling & Rendering',
    shortDescription: 'Professional 3D models, scenes, and renders using Blender.',
    description:
      'High-quality 3D modeling, texturing, lighting, and rendering services for games, marketing, architecture visualization, and more. Powered by Blender.',
    deliverables: [
      '3D model creation',
      'Texturing & materials',
      'Lighting setup',
      'High-res renders',
      'Source .blend files',
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
