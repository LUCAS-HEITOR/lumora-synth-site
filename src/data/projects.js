// Portfolio projects data — Lumora Synth

export const projects = [
  {
    id: 1,
    slug: 'ciesa-digital-twin',
    title: 'CIESA Digital Twin',
    category: 'digital-twin',
    categoryLabel: 'Digital Twin',
    shortDescription:
      'A fully interactive recreation of a university campus built inside Roblox, including classrooms, corridors, outdoor areas and anomaly gameplay systems.',
    overview:
      'We recreated the entire CIESA university campus as an interactive Roblox experience. Players can explore faithful reproductions of classrooms, hallways, laboratories, and outdoor areas — all built from real-world reference. The project also integrates anomaly gameplay systems, turning the digital twin into an engaging exploration experience.',
    features: [
      'Full campus environment modeled from reference photos',
      'Interactive classrooms and laboratories',
      'Dynamic anomaly detection system',
      'Multiplayer exploration support',
      'UI HUD and monitoring system',
      'Ambient lighting and atmosphere effects',
    ],
    technologies: ['Roblox Studio', 'Lua', 'Blender', 'Photoshop'],
    image: null,
    galleryImages: [null, null, null, null],
    featured: true,
  },
  {
    id: 2,
    slug: 'multiplayer-exploration-game',
    title: 'Multiplayer Roblox Exploration Game',
    category: 'roblox-game',
    categoryLabel: 'Roblox Game',
    shortDescription:
      'A multiplayer exploration experience with anomaly detection mechanics, interactive environments and camera monitoring systems.',
    overview:
      'A multiplayer Roblox game designed around exploration and anomaly mechanics. Players work together to navigate environments, detect anomalies using in-game tools, and manage monitoring systems. The game features dynamic events, a camera surveillance system, and procedurally triggered anomalies that keep gameplay unpredictable.',
    features: [
      'Multiplayer system with real-time sync',
      'Dynamic anomaly system with randomized events',
      'Interactive environment objects',
      'Camera monitoring and surveillance UI',
      'HUD with player status and alerts',
      'Sound design and atmospheric effects',
    ],
    technologies: ['Roblox Studio', 'Lua', 'Blender', 'Node.js'],
    image: null,
    galleryImages: [null, null, null, null, null],
    featured: true,
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
