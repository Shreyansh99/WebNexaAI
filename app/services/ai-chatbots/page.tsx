import { NextSeo } from 'next-seo';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Link from 'next/link';
import Script from 'next/script';

export default function AIChatbotsPage() {
  return (
    <>
      <NextSeo
        title="AI Chatbots for Lead Generation & Support | WebNexaAI"
        description="Deploy GPT-powered chatbots for 24/7 lead capture, support, and customer engagement. Integrate with your website, WhatsApp, and more."
        canonical="https://webnexaai.com/services/ai-chatbots"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/services/ai-chatbots', label: 'AI Chatbots' }
      ]} />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Chatbots for Lead Generation & Support</h1>
        <p className="text-lg text-gray-300 mb-6">Deploy GPT-powered chatbots for 24/7 lead capture, support, and customer engagement. Integrate with your website, WhatsApp, and more.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          <li>Custom logic trained on your data</li>
          <li>Integrations: Calendly, Typeform, WhatsApp, Telegram</li>
          <li>Push data to CRM, Slack, Email in real time</li>
        </ul>
        <div className="mb-8">
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition">Get a Free Chatbot Demo</Link>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">How do AI chatbots help with lead generation?</dt>
              <dd className="text-gray-300">They engage visitors instantly, qualify leads, and collect contact info even when your team is offline.</dd>
            </div>
            <div>
              <dt className="font-semibold">Can chatbots integrate with my CRM?</dt>
              <dd className="text-gray-300">Yes, we connect chatbots to your CRM, email, and other tools for seamless data flow.</dd>
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
                "name": "How do AI chatbots help with lead generation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They engage visitors instantly, qualify leads, and collect contact info even when your team is offline."
                }
              },
              {
                "@type": "Question",
                "name": "Can chatbots integrate with my CRM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we connect chatbots to your CRM, email, and other tools for seamless data flow."
                }
              }
            ]
          }
        `}</Script>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Client Testimonial</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">“We tripled our lead flow in less than a month thanks to WebNexaAI's automation setup. Their team nailed the website and built an AI bot that talks to our customers — and it actually works!”<br /><span className="block mt-2 font-semibold text-blue-200">— Amit Roy, Lotus Wellness</span></blockquote>
        </section>
        <div className="mt-8 text-blue-300 text-sm">
          <p>Want to see more? <Link href="/portfolio" className="underline hover:text-blue-400">View our chatbot case studies</Link> or <Link href="/blog" className="underline hover:text-blue-400">read our latest chatbot insights</Link>.</p>
        </div>
      </main>
    </>
  );
} 