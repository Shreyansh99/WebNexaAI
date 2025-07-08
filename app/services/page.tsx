"use client";

import { motion } from "framer-motion";
import { ServiceAccordion } from "@/components/services/ServiceAccordion";
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="AI Automation & Marketing Services | WebNexaAI"
        description="Explore our AI agents, workflow automations, lead-gen chatbots, and custom AI integrations for business growth."
        canonical="https://webnexaai.com/services"
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' }
      ]} />
      <main className="min-h-screen relative">
        <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation, AI Agents, Workflow Automation, Lead-gen Chatbots, AI Marketing Systems, Custom AI Integrations",
            "provider": {
              "@type": "Organization",
              "name": "WebNexaAI",
              "url": "https://webnexaai.com",
              "logo": "https://webnexaai.com/logo.png"
            },
            "areaServed": "Worldwide",
            "description": "WebNexaAI offers AI automation, workflow automations, AI-powered marketing systems, lead-gen chatbots, and custom AI integrations for businesses.",
            "brand": {
              "@type": "Brand",
              "name": "WebNexaAI"
            },
            "url": "https://webnexaai.com/services"
          }
        `}</Script>
        {/* Background image with dark overlay - same as other pages */}
        <div className="absolute inset-0 -z-20">
          <Image src="/background.jpg" alt="Background" width={1920} height={1080} className="w-full h-full object-cover object-center" style={{ minHeight: "100%", minWidth: "100%" }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Additional atmospheric gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
        
        {/* Subtle warm glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

        <motion.header 
          className="mx-auto max-w-4xl px-4 py-6 sm:py-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
        </motion.header>

        <div className="relative z-10">
          <ServiceAccordion />
        </div>

        {/* FAQ Section */}
        <section className="relative z-10 max-w-3xl mx-auto mt-12 mb-16 bg-white/5 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-blue-300">How does WebNexaAI's automation work?</dt>
              <dd className="text-gray-200">We analyze your business processes and deploy custom AI agents and automations to save you time, reduce manual work, and boost productivity.</dd>
            </div>
            <div>
              <dt className="font-semibold text-blue-300">What industries do you serve?</dt>
              <dd className="text-gray-200">We work with businesses across e-commerce, real estate, healthcare, professional services, and more.</dd>
            </div>
            <div>
              <dt className="font-semibold text-blue-300">How quickly can I launch an AI chatbot?</dt>
              <dd className="text-gray-200">Most chatbots are live within 1–2 weeks, depending on your requirements and integrations.</dd>
            </div>
            <div>
              <dt className="font-semibold text-blue-300">Is support included?</dt>
              <dd className="text-gray-200">Yes! We provide ongoing support and optimization for all our solutions.</dd>
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
                "name": "How does WebNexaAI's automation work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We analyze your business processes and deploy custom AI agents and automations to save you time, reduce manual work, and boost productivity."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with businesses across e-commerce, real estate, healthcare, professional services, and more."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I launch an AI chatbot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most chatbots are live within 1–2 weeks, depending on your requirements and integrations."
                }
              },
              {
                "@type": "Question",
                "name": "Is support included?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide ongoing support and optimization for all our solutions."
                }
              }
            ]
          }
        `}</Script>
        {/* Internal links at the end of the services page */}
        <div className="mt-12 text-center text-blue-300 text-sm">
          <p>Want to see our work? <Link href="/portfolio" className="underline hover:text-blue-400">View our AI & web project portfolio</Link>. Learn more about AI automation in our <Link href="/blog" className="underline hover:text-blue-400">blog</Link> or <Link href="/contact" className="underline hover:text-blue-400">contact us</Link> for a custom solution.</p>
        </div>
      </main>
    </>
  );
}
