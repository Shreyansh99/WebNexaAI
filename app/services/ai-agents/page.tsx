import { NextSeo } from 'next-seo';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Link from 'next/link';

export default function AIAgentsPage() {
  return (
    <>
      <NextSeo
        title="AI Agents for Business | WebNexaAI"
        description="Deploy smart AI agents for sales, support, and operations. 24/7 automation for lead qualification, booking, and customer service."
        canonical="https://webnexaai.com/services/ai-agents"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/services/ai-agents', label: 'AI Agents' }
      ]} />
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Agents for Business</h1>
        <p className="text-lg text-gray-300 mb-6">Deploy smart AI agents for sales, support, and operations. 24/7 automation for lead qualification, booking, and customer service.</p>
        <ul className="list-disc pl-6 mb-6 text-gray-200">
          <li>AI Sales Assistant</li>
          <li>AI Lead Qualifier</li>
          <li>AI Booking Agent</li>
          <li>AI Support Chatbot</li>
        </ul>
        <div className="mb-8">
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition">Book a Free AI Strategy Call</Link>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Frequently Asked Questions</h2>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">How do AI agents help my business?</dt>
              <dd className="text-gray-300">They automate repetitive tasks, qualify leads, handle bookings, and provide instant support, freeing your team to focus on growth.</dd>
            </div>
            <div>
              <dt className="font-semibold">How quickly can I launch an AI agent?</dt>
              <dd className="text-gray-300">Most agents are live within 1–2 weeks, fully customized to your workflow.</dd>
            </div>
          </dl>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-300">Client Testimonial</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-200">“The AI agent they built for us is a game changer. Our website is faster, and our sales team is free to focus on closing, not chasing leads.”<br /><span className="block mt-2 font-semibold text-blue-200">— Neha Kapoor, BrightPath</span></blockquote>
        </section>
        <div className="mt-8 text-blue-300 text-sm">
          <p>Want to see more? <Link href="/portfolio" className="underline hover:text-blue-400">View our AI agent case studies</Link> or <Link href="/blog" className="underline hover:text-blue-400">read our latest AI automation insights</Link>.</p>
        </div>
      </main>
    </>
  );
} 