"use client"

import HeroTitle from "@/src/components/home/hero-title";
import AboutSection from "@/src/components/home/about-section";
import ServiceItem from "@/src/components/services/ServiceItem";
import CallToAction from "@/src/components/home/call-to-action";
import { 
  Zap,
  Bot,
  RotateCcw,
  TrendingUp,
  Rocket,
  Users,
  Target,
  Lightbulb,
  Handshake,
  Settings
} from "lucide-react";
import { NextSeo } from 'next-seo';
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About WebNexaAI | AI Automation & Marketing Experts"
        description="Learn about WebNexaAI's mission, team, and approach to building AI-powered growth systems for modern businesses."
        canonical="https://webnexaai.com/about"
      />
    <main className="min-h-screen relative">
      {/* Background image with dark overlay - same as services page */}
      <div className="absolute inset-0 -z-20">
          <Image src="/background.jpg" alt="Background" width={1920} height={1080} className="w-full h-full object-cover object-center" style={{ minHeight: '100%', minWidth: '100%' }} />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Additional atmospheric gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      
      {/* Subtle warm glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl relative z-10">
          <header>
        <HeroTitle />
          </header>
          <section aria-label="Who We Are">
            <AboutSection icon={<Rocket className="h-6 w-6 sm:h-7 sm:w-7" />} title="Who We Are" delay={0.1} />
          </section>
          <section aria-label="What Makes Us Different">
            <AboutSection icon={<Settings className="h-6 w-6 sm:h-7 sm:w-7" />} title="What Makes Us Different" delay={0.2} />
          </section>
          <section aria-label="What We Build">
            <AboutSection icon={<Target className="h-6 w-6 sm:h-7 sm:w-7" />} title="What We Build" delay={0.3} />
          </section>
          <section aria-label="Who We Help">
            <AboutSection icon={<Users className="h-6 w-6 sm:h-7 sm:w-7" />} title="Who We Help" delay={0.4} />
          </section>
          <section aria-label="Why It Matters">
            <AboutSection icon={<Lightbulb className="h-6 w-6 sm:h-7 sm:w-7" />} title="Why It Matters" delay={0.5} />
          </section>
          <section aria-label="Built to Scale With You">
            <AboutSection icon={<Handshake className="h-6 w-6 sm:h-7 sm:w-7" />} title="Built to Scale With You" delay={0.6} />
          </section>
          <section aria-label="Call To Action">
            <CallToAction />
          </section>
          {/* Internal links at the end of the about page */}
          <div className="mt-12 text-center text-blue-300 text-sm">
            <p>Ready to grow with AI? <Link href="/services" className="underline hover:text-blue-400">See our AI automation & marketing services</Link>, <Link href="/portfolio" className="underline hover:text-blue-400">explore our client projects</Link>, or <Link href="/blog" className="underline hover:text-blue-400">read our latest insights</Link>.</p>
            </div>
      </div>
    </main>
    </>
  );
};

export default AboutPage;
