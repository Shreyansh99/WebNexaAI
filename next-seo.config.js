const siteUrl = 'https://webnexaai.com';

export default {
  titleTemplate: '%s | WebNexaAI',
  defaultTitle: 'WebNexaAI',
  description: 'AI Automation & Marketing Agency: AI agents, workflow automations, lead-gen chatbots, and custom AI integrations for business growth.',
  canonical: siteUrl,
  themeColor: '#0B1220',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'WebNexaAI',
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 800,
        height: 600,
        alt: 'WebNexaAI Logo',
      },
    ],
  },
  twitter: {
    handle: '@webnexaai',
    site: '@webnexaai',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' },
  ],
};