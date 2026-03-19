// Service catalog — Lumora Synth (bilingual: en / pt-BR)

import { localizeItem, localizeList } from '../utils/localize';

export const categories = [
  { id: 'websites', label: { en: 'Websites', pt: 'Websites' } },
  { id: 'automations', label: { en: 'Automations', pt: 'Automações' } },
  { id: 'custom-programs', label: { en: 'Custom Programs', pt: 'Programas Personalizados' } },
  { id: 'bundles', label: { en: 'Bundles', pt: 'Pacotes' } },
];

export const services = [
  {
    id: 1,
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
    priceFrom: 60,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: true,
  },
  {
    id: 2,
    slug: 'full-website',
    category: 'websites',
    name: { en: 'Full Website (Multi-page)', pt: 'Website Completo (Multi-páginas)' },
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
    priceFrom: 150,
    currency: 'USD',
    estimatedDays: '21–45',
    featured: true,
  },
  {
    id: 3,
    slug: 'complex-website',
    category: 'websites',
    name: { en: 'Complex Website (E-commerce / Systems)', pt: 'Website Complexo (E-commerce / Sistemas)' },
    shortDescription: {
      en: 'Full e-commerce or complex web system with payment integration, dashboards and advanced logic.',
      pt: 'E-commerce completo ou sistema web complexo com integração de pagamento, dashboards e lógica avançada.',
    },
    description: {
      en: 'Enterprise-grade web applications including e-commerce platforms, management systems, and complex dashboards. Includes payment gateway integration, inventory management, and advanced user roles.',
      pt: 'Aplicações web de nível empresarial incluindo plataformas e-commerce, sistemas de gestão e dashboards complexos. Inclui integração com gateway de pagamento, gestão de estoque e papéis de usuário avançados.',
    },
    deliverables: {
      en: [
        'Full e-commerce or system architecture',
        'Payment gateway integration',
        'Admin dashboard with analytics',
        'User role management',
        'Database design and optimization',
        'Deployment, SSL and hosting setup',
      ],
      pt: [
        'Arquitetura completa de e-commerce ou sistema',
        'Integração com gateway de pagamento',
        'Painel admin com analytics',
        'Gerenciamento de papéis de usuário',
        'Design e otimização de banco de dados',
        'Deploy, SSL e configuração de hospedagem',
      ],
    },
    priceFrom: 300,
    currency: 'USD',
    estimatedDays: '30–60',
    featured: true,
  },
  {
    id: 4,
    slug: 'selenium-automation-bot',
    category: 'automations',
    name: { en: 'Selenium Automation Bot', pt: 'Bot de Automação Selenium' },
    shortDescription: {
      en: 'Automated browser bot for web scraping, lead capture, form filling and repetitive tasks.',
      pt: 'Bot de navegador automatizado para web scraping, captura de leads, preenchimento de formulários e tarefas repetitivas.',
    },
    description: {
      en: 'Custom Selenium-based automation bots that handle repetitive browser tasks. Perfect for lead generation, data extraction, automated testing, form submissions, and any workflow that involves interacting with web pages.',
      pt: 'Bots de automação baseados em Selenium que lidam com tarefas repetitivas no navegador. Perfeito para geração de leads, extração de dados, testes automatizados, envio de formulários e qualquer fluxo de trabalho que envolva interação com páginas web.',
    },
    deliverables: {
      en: [
        'Custom Selenium bot development',
        'Web scraping and data extraction',
        'Error handling and retry logic',
        'Data export (CSV/JSON/Excel)',
        'Documentation and setup guide',
      ],
      pt: [
        'Desenvolvimento de bot Selenium personalizado',
        'Web scraping e extração de dados',
        'Tratamento de erros e lógica de retentativa',
        'Exportação de dados (CSV/JSON/Excel)',
        'Documentação e guia de configuração',
      ],
    },
    priceFrom: 120,
    currency: 'USD',
    estimatedDays: '7–21',
    featured: true,
  },
  {
    id: 5,
    slug: 'csv-excel-automation',
    category: 'automations',
    name: { en: 'CSV / Excel Automation', pt: 'Automação CSV / Excel' },
    shortDescription: {
      en: 'Automate spreadsheet processing, data transformation and report generation.',
      pt: 'Automatize processamento de planilhas, transformação de dados e geração de relatórios.',
    },
    description: {
      en: 'Custom scripts and tools to automate your spreadsheet workflows. From data cleaning and transformation to automated report generation, pivot tables, and integration with external APIs.',
      pt: 'Scripts e ferramentas personalizadas para automatizar seus fluxos de trabalho com planilhas. De limpeza e transformação de dados a geração automatizada de relatórios, tabelas dinâmicas e integração com APIs externas.',
    },
    deliverables: {
      en: [
        'Custom data processing scripts',
        'Automated report generation',
        'Data cleaning and transformation',
        'API integration for data sync',
        'Documentation and usage guide',
      ],
      pt: [
        'Scripts personalizados de processamento de dados',
        'Geração automatizada de relatórios',
        'Limpeza e transformação de dados',
        'Integração com API para sincronização de dados',
        'Documentação e guia de uso',
      ],
    },
    priceFrom: 80,
    currency: 'USD',
    estimatedDays: '5–14',
    featured: false,
  },
  {
    id: 6,
    slug: 'custom-software-dashboard',
    category: 'custom-programs',
    name: { en: 'Custom Software / Dashboard', pt: 'Software Personalizado / Dashboard' },
    shortDescription: {
      en: 'Tailored desktop or web applications, admin panels and dashboards for your workflow.',
      pt: 'Aplicações desktop ou web sob medida, painéis admin e dashboards para seu fluxo de trabalho.',
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
    priceFrom: 250,
    currency: 'USD',
    estimatedDays: '30–90',
    featured: true,
  },
  {
    id: 7,
    slug: 'whatsapp-discord-bot',
    category: 'automations',
    name: { en: 'WhatsApp / Discord Bot', pt: 'Bot WhatsApp / Discord' },
    shortDescription: {
      en: 'Custom bots for WhatsApp or Discord tailored to your business needs.',
      pt: 'Bots personalizados para WhatsApp ou Discord sob medida para suas necessidades.',
    },
    description: {
      en: 'Custom bots for communication platforms. Automate customer support, notifications, moderation, or any workflow directly in WhatsApp or Discord.',
      pt: 'Bots personalizados para plataformas de comunicação. Automatize suporte ao cliente, notificações, moderação ou qualquer fluxo de trabalho diretamente no WhatsApp ou Discord.',
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
    priceFrom: 100,
    currency: 'USD',
    estimatedDays: '7–14',
    featured: false,
  },
  // ── Bundles ──
  {
    id: 8,
    slug: 'startup-bundle',
    category: 'bundles',
    name: { en: 'Startup Bundle', pt: 'Pacote Startup' },
    shortDescription: {
      en: 'Landing Page + Selenium Bot (lead capture) + Email Marketing Setup — everything to launch your business online.',
      pt: 'Landing Page + Bot Selenium (captura de leads) + Configuração de E-mail Marketing — tudo para lançar seu negócio online.',
    },
    description: {
      en: 'The perfect starter kit for new businesses. Get a high-conversion landing page, a Selenium bot configured for automated lead capture, and a complete email marketing setup to nurture your leads into customers.',
      pt: 'O kit perfeito para novos negócios. Receba uma landing page de alta conversão, um bot Selenium configurado para captura automatizada de leads e uma configuração completa de e-mail marketing para transformar seus leads em clientes.',
    },
    deliverables: {
      en: [
        'Custom Landing Page (responsive, SEO-optimized)',
        'Selenium Bot for automated lead capture',
        'Email marketing platform setup',
        'Lead nurturing email templates',
        'Integration between all components',
        'Documentation and training',
      ],
      pt: [
        'Landing Page personalizada (responsiva, otimizada para SEO)',
        'Bot Selenium para captura automatizada de leads',
        'Configuração de plataforma de e-mail marketing',
        'Templates de e-mail para nutrição de leads',
        'Integração entre todos os componentes',
        'Documentação e treinamento',
      ],
    },
    priceFrom: 320,
    currency: 'USD',
    estimatedDays: '14–30',
    featured: true,
  },
  {
    id: 9,
    slug: 'business-scale',
    category: 'bundles',
    name: { en: 'Business Scale', pt: 'Pacote Business Scale' },
    shortDescription: {
      en: 'Complex Website + CSV/Excel Automation + 3-month tech support — scale your operations.',
      pt: 'Website Complexo + Automação CSV/Excel + Suporte técnico 3 meses — escale suas operações.',
    },
    description: {
      en: 'A complete digital infrastructure package for growing businesses. Includes a full e-commerce or complex website, automated spreadsheet workflows for data management, and 3 months of dedicated technical support.',
      pt: 'Um pacote completo de infraestrutura digital para negócios em crescimento. Inclui e-commerce completo ou website complexo, automação de planilhas para gestão de dados e 3 meses de suporte técnico dedicado.',
    },
    deliverables: {
      en: [
        'Complex Website / E-commerce (full build)',
        'CSV/Excel automation scripts',
        'Data pipeline integration',
        '3 months of technical support',
        'Bug fixes and minor adjustments included',
        'Priority response time',
      ],
      pt: [
        'Website Complexo / E-commerce (build completo)',
        'Scripts de automação CSV/Excel',
        'Integração de pipeline de dados',
        '3 meses de suporte técnico',
        'Correção de bugs e ajustes menores incluídos',
        'Tempo de resposta prioritário',
      ],
    },
    priceFrom: 550,
    currency: 'USD',
    estimatedDays: '30–60',
    featured: false,
  },
  {
    id: 10,
    slug: 'automation-prime',
    category: 'bundles',
    name: { en: 'Automation Prime', pt: 'Pacote Automation Prime' },
    shortDescription: {
      en: 'Selenium Bot + Google Sheets/Excel Integration + User Manual — automate your workflow end-to-end.',
      pt: 'Bot Selenium + Integração Google Sheets/Excel + Manual de uso — automatize seu fluxo de trabalho de ponta a ponta.',
    },
    description: {
      en: 'Everything you need to automate your data workflows. A powerful Selenium bot integrated directly with Google Sheets or Excel, plus a comprehensive user manual so your team can operate it independently.',
      pt: 'Tudo que você precisa para automatizar seus fluxos de dados. Um bot Selenium poderoso integrado diretamente com Google Sheets ou Excel, além de um manual de uso completo para sua equipe operar de forma independente.',
    },
    deliverables: {
      en: [
        'Custom Selenium automation bot',
        'Google Sheets / Excel integration',
        'Automated data sync pipeline',
        'Comprehensive user manual (PDF)',
        'Video walkthrough of the system',
        'Setup and deployment',
      ],
      pt: [
        'Bot de automação Selenium personalizado',
        'Integração com Google Sheets / Excel',
        'Pipeline de sincronização automatizada de dados',
        'Manual de uso completo (PDF)',
        'Vídeo explicativo do sistema',
        'Configuração e deploy',
      ],
    },
    priceFrom: 200,
    currency: 'USD',
    estimatedDays: '14–21',
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
