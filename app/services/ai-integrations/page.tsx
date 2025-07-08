import { NextSeo } from 'next-seo';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Link from 'next/link';
import Script from 'next/script';

export default function AIIntegrationsPage() {
  return (
    <>
      <NextSeo
        title="Custom AI Integrations for Business | WebNexaAI"
        description="Integrate AI into your business tools and workflows. Custom GPT, vision, and automation solutions for your unique needs."
        canonical="https://webnexaai.com/services/ai-integrations"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/services/ai-integrations', label: 'Custom AI Integrations' }
      ]} />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Custom AI Integrations for Business</h1>
        <p className="text-lg text-gray-300 mb-6">Integrate AI into your business tools and workflows. Custom GPT, vision, and automation solutions for your unique needs.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          <li>GPT, LLM, and AI model integration</li>
          <li>Connect AI to CRMs, ERPs, and databases</li>
          <li>Custom API and webhook development</li>
          <li>AI-powered document and image processing</li>
        </ul>
        <div className="mb-8">
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition">Request a Free AI Integration Consult</Link>
        </div>
        <div className="mb-8 text-blue-300 text-sm">
          <p>Related reading: <Link href="/blog/ai-automation-for-business-growth" className="underline hover:text-blue-400">AI Automation for Business Growth (Guide)</Link> | <Link href="/blog/workflow-automation-real-world-use-cases" className="underline hover:text-blue-400">Workflow Automation: Real-World Use Cases</Link> | <Link href="/blog/ai-in-digital-marketing-2025" className="underline hover:text-blue-400">How AI Automation is Changing Digital Marketing in 2025</Link></p>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">What types of AI can you integrate?</dt>
              <dd className="text-gray-300">We work with GPT, vision models, speech-to-text, and custom ML solutions tailored to your business.</dd>
            </div>
            <div>
              <dt className="font-semibold">Is my data secure?</dt>
              <dd className="text-gray-300">Yes, we use secure APIs and follow best practices for data privacy and compliance.</dd>
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
                "name": "What types of AI can you integrate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with GPT, vision models, speech-to-text, and custom ML solutions tailored to your business."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we use secure APIs and follow best practices for data privacy and compliance."
                }
              }
            ]
          }
        `}</Script>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Client Testimonial</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">“WebNexaAI built a custom AI integration for our CRM. Now our sales team gets instant insights and saves hours every week.”<br /><span className="block mt-2 font-semibold text-blue-200">— Priya Sharma, FinEdge</span></blockquote>
        </section>
        <div className="mt-8 text-blue-300 text-sm">
          <p>Want to see more? <Link href="/portfolio" className="underline hover:text-blue-400">View our AI integration case studies</Link> or <Link href="/blog" className="underline hover:text-blue-400">read our latest AI integration guides</Link>.</p>
        </div>
      </main>
    </>
  );
} 