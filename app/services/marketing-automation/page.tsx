import { NextSeo } from 'next-seo';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Link from 'next/link';
import Script from 'next/script';

export default function MarketingAutomationPage() {
  return (
    <>
      <NextSeo
        title="Marketing Automation Systems | WebNexaAI"
        description="Automate your marketing with AI-driven email, WhatsApp, and lead nurturing systems. Boost conversions and save time."
        canonical="https://webnexaai.com/services/marketing-automation"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/services/marketing-automation', label: 'Marketing Automation' }
      ]} />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Marketing Automation Systems</h1>
        <p className="text-lg text-gray-300 mb-6">Automate your marketing with AI-driven email, WhatsApp, and lead nurturing systems. Boost conversions and save time.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          <li>Automated email and WhatsApp campaigns</li>
          <li>Lead scoring and nurturing workflows</li>
          <li>CRM and landing page integrations</li>
          <li>Analytics and reporting dashboards</li>
        </ul>
        <div className="mb-8">
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition">Get a Free Marketing Audit</Link>
        </div>
        <div className="mb-8 text-blue-300 text-sm">
          <p>Related reading: <Link href="/blog/ai-automation-for-business-growth" className="underline hover:text-blue-400">AI Automation for Business Growth (Guide)</Link> | <Link href="/blog/ai-in-digital-marketing-2025" className="underline hover:text-blue-400">How AI Automation is Changing Digital Marketing in 2025</Link></p>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">What platforms do you support?</dt>
              <dd className="text-gray-300">We work with Mailchimp, HubSpot, WhatsApp Business API, and more.</dd>
            </div>
            <div>
              <dt className="font-semibold">Can you automate lead follow-ups?</dt>
              <dd className="text-gray-300">Yes, we build workflows that nurture leads and trigger follow-ups automatically.</dd>
            </div>
          </dl>
        </section>
        <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What platforms do you support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with Mailchimp, HubSpot, WhatsApp Business API, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Can you automate lead follow-ups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we build workflows that nurture leads and trigger follow-ups automatically."
                }
              }
            ]
          }
        `}</Script>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Client Testimonial</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">“WebNexaAI set up our marketing automation. Our open rates doubled and our sales team is always in sync.”<br /><span className="block mt-2 font-semibold text-blue-200">— Sneha Patel, GreenLeaf</span></blockquote>
        </section>
        <div className="mt-8 text-blue-300 text-sm">
          <p>Want to see more? <Link href="/portfolio" className="underline hover:text-blue-400">View our marketing automation case studies</Link> or <Link href="/blog" className="underline hover:text-blue-400">read our latest marketing automation tips</Link>.</p>
        </div>
      </main>
    </>
  );
} 