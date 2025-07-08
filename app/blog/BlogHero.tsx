'use client';
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
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
  );
} 