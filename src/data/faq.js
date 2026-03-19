// FAQ data — Lumora Synth (bilingual: en / pt-BR)

import { localizeList } from '../utils/localize';

export const faqItems = [
  {
    id: 1,
    question: {
      en: 'How long does a project usually take?',
      pt: 'Quanto tempo um projeto normalmente leva?',
    },
    answer: {
      en: 'Timelines vary depending on scope. A simple landing page can be delivered in 1–2 weeks, while a full website or custom software can take 4–12 weeks. We provide an estimate during the quoting process.',
      pt: 'Os prazos variam dependendo do escopo. Uma landing page simples pode ser entregue em 1–2 semanas, enquanto um website completo ou software personalizado pode levar de 4–12 semanas. Fornecemos uma estimativa durante o processo de orçamento.',
    },
  },
  {
    id: 2,
    question: {
      en: 'How many revisions are included?',
      pt: 'Quantas revisões estão incluídas?',
    },
    answer: {
      en: 'All our packages include at least 2 rounds of revisions. Additional revisions can be arranged for an agreed fee. We work closely with you to ensure the result matches your vision.',
      pt: 'Todos os nossos pacotes incluem pelo menos 2 rodadas de revisões. Revisões adicionais podem ser combinadas por um valor acordado. Trabalhamos em conjunto com você para garantir que o resultado corresponda à sua visão.',
    },
  },
  {
    id: 3,
    question: {
      en: 'What payment methods do you accept?',
      pt: 'Quais métodos de pagamento vocês aceitam?',
    },
    answer: {
      en: 'We accept PayPal for all clients. All prices are in USD (US Dollars). Payments are securely processed through our checkout.',
      pt: 'Aceitamos PayPal para todos os clientes. Todos os preços são em USD (Dólares Americanos). Os pagamentos são processados de forma segura pelo nosso checkout.',
    },
  },
  {
    id: 4,
    question: {
      en: 'Do you work with international clients?',
      pt: 'Vocês trabalham com clientes internacionais?',
    },
    answer: {
      en: 'Absolutely. We serve clients worldwide. Our team communicates in Portuguese and English. We use asynchronous communication tools and adapt to your timezone for meetings when necessary.',
      pt: 'Com certeza. Atendemos clientes no mundo todo. Nossa equipe se comunica em português e inglês. Usamos ferramentas de comunicação assíncrona e nos adaptamos ao seu fuso horário para reuniões quando necessário.',
    },
  },
  {
    id: 5,
    question: {
      en: 'What technologies do you work with?',
      pt: 'Com quais tecnologias vocês trabalham?',
    },
    answer: {
      en: 'Our stack includes React, Django, Python, Node.js, Selenium, and various automation tools. We choose the best technology for each project based on your requirements.',
      pt: 'Nosso stack inclui React, Django, Python, Node.js, Selenium e diversas ferramentas de automação. Escolhemos a melhor tecnologia para cada projeto com base nos seus requisitos.',
    },
  },
  {
    id: 6,
    question: {
      en: 'Can I request a fully custom project?',
      pt: 'Posso solicitar um projeto totalmente personalizado?',
    },
    answer: {
      en: 'Yes. If our standard packages don\'t meet your needs, use our Request Quote form to describe your project. We\'ll review it and send a custom proposal with scope, timeline, and pricing.',
      pt: 'Sim. Se nossos pacotes padrão não atenderem suas necessidades, use nosso formulário de Solicitar Orçamento para descrever seu projeto. Analisaremos e enviaremos uma proposta personalizada com escopo, prazo e preço.',
    },
  },
  {
    id: 7,
    question: {
      en: 'Do you offer ongoing support after delivery?',
      pt: 'Vocês oferecem suporte contínuo após a entrega?',
    },
    answer: {
      en: 'We offer a 30-day support window after delivery for bug fixes and minor adjustments. For long-term maintenance or feature additions, we can set up a retainer or on-demand agreement.',
      pt: 'Oferecemos uma janela de suporte de 30 dias após a entrega para correção de bugs e ajustes menores. Para manutenção de longo prazo ou adição de funcionalidades, podemos configurar um acordo de retenção ou por demanda.',
    },
  },
  {
    id: 8,
    question: {
      en: 'What are the bundles and how do they save me money?',
      pt: 'O que são os pacotes e como eles economizam dinheiro?',
    },
    answer: {
      en: 'Our bundles combine related services at a discounted price. For example, the Startup Bundle includes a Landing Page, Selenium Bot, and Email Marketing Setup for $320 — saving you compared to buying each separately. Check our Services page for all available bundles.',
      pt: 'Nossos pacotes combinam serviços relacionados com preço com desconto. Por exemplo, o Pacote Startup inclui Landing Page, Bot Selenium e Configuração de E-mail Marketing por $320 — economizando em comparação à compra separada. Confira nossa página de Serviços para todos os pacotes disponíveis.',
    },
  },
  {
    id: 9,
    question: {
      en: 'How do I get started?',
      pt: 'Como faço para começar?',
    },
    answer: {
      en: 'You can buy a service directly through our checkout or fill out the Request Quote form for custom projects. We\'ll get in touch within 24 hours to discuss next steps.',
      pt: 'Você pode comprar um serviço diretamente pelo nosso checkout ou preencher o formulário de Solicitar Orçamento para projetos personalizados. Entraremos em contato em até 24 horas para discutir os próximos passos.',
    },
  },
];

export function getLocalizedFaqItems(lang) {
  return localizeList(faqItems, lang);
}
