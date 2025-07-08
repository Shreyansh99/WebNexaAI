import { NextSeo } from 'next-seo';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Link from 'next/link';
import Script from 'next/script';

export default function AutomationPage() {
  return (
    <>
      <NextSeo
        title="Workflow Automation for Business | WebNexaAI"
        description="Automate your business processes with AI-powered workflow automation. Save time, reduce manual work, and scale faster."
        canonical="https://webnexaai.com/services/automation"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/services/automation', label: 'Workflow Automation' }
      ]} />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Workflow Automation for Business</h1>
        <p className="text-lg text-gray-300 mb-6">Automate your business processes with AI-powered workflow automation. Save time, reduce manual work, and scale faster.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          <li>CRM & lead form integrations</li>
          <li>WhatsApp, Email, and Slack triggers</li>
          <li>Google Sheets, Airtable, Notion automations</li>
          <li>Internal workflows & business ops</li>
        </ul>
        <div className="mb-8">
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition">Book a Free Automation Audit</Link>
        </div>
        <div className="mb-8 text-blue-300 text-sm">
          <p>Related reading: <Link href="/blog/ai-automation-for-business-growth" className="underline hover:text-blue-400">AI Automation for Business Growth (Guide)</Link> | <Link href="/blog/workflow-automation-real-world-use-cases" className="underline hover:text-blue-400">Workflow Automation: Real-World Use Cases</Link> | <Link href="/blog/ai-in-digital-marketing-2025" className="underline hover:text-blue-400">How AI Automation is Changing Digital Marketing in 2025</Link></p>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">What can workflow automation do for my business?</dt>
              <dd className="text-gray-300">It eliminates repetitive tasks, reduces errors, and lets your team focus on high-value work.</dd>
            </div>
            <div>
              <dt className="font-semibold">How do you integrate with my existing tools?</dt>
              <dd className="text-gray-300">We connect to your CRM, email, chat, and databases using secure APIs and no-code/low-code platforms.</dd>
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
                "name": "What can workflow automation do for my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It eliminates repetitive tasks, reduces errors, and lets your team focus on high-value work."
                }
              },
              {
                "@type": "Question",
                "name": "How do you integrate with my existing tools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We connect to your CRM, email, chat, and databases using secure APIs and no-code/low-code platforms."
                }
              }
            ]
          }
        `}</Script>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Client Testimonial</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">“WebNexaAI automated our FAQs and support. Our customers get instant answers, and our team can focus on growth. Highly recommend!”<br /><span className="block mt-2 font-semibold text-blue-200">— Rahul Deshmukh, Urban Realty</span></blockquote>
        </section>
        <div className="mt-8 text-blue-300 text-sm">
          <p>Want to see more? <Link href="/portfolio" className="underline hover:text-blue-400">View our automation case studies</Link> or <Link href="/blog" className="underline hover:text-blue-400">read our latest workflow automation tips</Link>.</p>
        </div>
      </main>
    </>
  );
} 