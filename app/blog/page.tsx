"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";
import { NextSeo } from 'next-seo';
import { compareDesc } from 'date-fns';
import Image from "next/image";

// Import all MDX files in the blog directory
const postModules = import.meta.glob('./*.mdx', { eager: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allPosts = Object.entries(postModules).map(([file, mod]: any) => ({
  ...(mod.meta || {}),
  slug: file.replace('./', '').replace('.mdx', ''),
}));

const categories = [
  'All',
  ...Array.from(new Set(allPosts.flatMap((post) => post.tags || []))).filter(Boolean)
];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  
  const filteredPosts = filter === 'All' 
    ? allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    : allPosts.filter(post => (post.tags || []).includes(filter)).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <NextSeo
        title="Blog | WebNexaAI"
        description="Insights, tips, and industry trends from the WebNexaAI team to help you stay ahead in the digital world."
        canonical="https://webnexaai.com/blog"
        openGraph={{
          url: 'https://webnexaai.com/blog',
          title: 'Blog | WebNexaAI',
          description: 'Insights, tips, and industry trends from the WebNexaAI team to help you stay ahead in the digital world.',
          images: [
            {
              url: 'https://webnexaai.com/logo.png',
              width: 800,
              height: 600,
              alt: 'WebNexaAI Blog',
            },
          ],
          site_name: 'WebNexaAI',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    <main className="min-h-screen relative">
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-20">
          <Image src="/background.jpg" alt="Background" width={1920} height={1080} className="w-full h-full object-cover object-center" style={{ minHeight: "100%", minWidth: "100%" }} />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl relative z-10"
      >
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Blog</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Insights, tips, and industry trends from our team of experts to help you stay ahead in the digital world.
          </p>
        </div>
      </motion.div>

      {/* Blog Filter */}
      <Container className="relative z-10 mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </Container>

      {/* Blog Grid */}
      <Container className="relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
              <Card key={post.slug} className="bg-blue-500/5 border border-blue-500/20 shadow-lg hover:bg-blue-500/10 transition-colors duration-300 flex flex-col h-full">
              <CardHeader className="pb-2 flex-row items-center gap-2">
                  <Badge variant="secondary" className="mb-0 mr-2">{post.tags?.[0]}</Badge>
                <span className="text-xs text-gray-400">{post.date}</span>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:underline" aria-label={`Read blog post: ${post.title}`}>
                  <CardTitle className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                  <p className="text-gray-300 text-sm mb-4 flex-1">{post.description}</p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {post.tags?.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs mr-1 mb-1">{tag}</Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block">
                    <Button variant="secondary" size="sm">Read More</Button>
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-400 py-12">No blog posts found for this category.</div>
        )}
      </Container>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12 sm:mt-16 lg:mt-20 mb-12 relative z-10"
      >
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white">Want more insights?</h2>
          <p className="text-base sm:text-lg text-gray-300 px-4">Subscribe to our newsletter for the latest updates, tips, and trends.</p>
        </div>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            required
          />
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3">
            Subscribe
          </Button>
        </form>
      </motion.div>

        {/* Internal links at the end of the blog page */}
        <div className="mt-12 text-center text-blue-300 text-sm">
          <p>Looking for AI solutions for your business? <Link href="/services" className="underline hover:text-blue-400">Explore our AI automation & marketing services</Link> or <Link href="/contact" className="underline hover:text-blue-400">contact us for a free strategy call</Link>.</p>
        </div>
    </main>
    </>
  );
}
