import { metadata } from './metadata';
import ClientLayout from './client-layout';
import type { ReactNode } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';

export { metadata };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <DefaultSeo {...SEO} />
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebNexaAI",
            "url": "https://webnexaai.com",
            "logo": "https://webnexaai.com/logo.png",
            "email": "webnexaai@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/company/webnexaai/",
              "https://twitter.com/webnexaai"
            ],
            "description": "AI Automation & Marketing Agency: AI agents, workflow automations, lead-gen chatbots, and custom AI integrations for business growth."
          }
        `}</Script>
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://webnexaai.com",
            "name": "WebNexaAI",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://webnexaai.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</Script>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
