'use client';
import { motion } from 'framer-motion';

export default function BlogCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-12 sm:mt-16 lg:mt-20 mb-12 relative z-10"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to transform your business with AI?</h2>
      <p className="text-gray-300 mb-6">Contact us today to discover how WebNexaAI can automate, optimize, and grow your business.</p>
      <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">Get in Touch</a>
    </motion.div>
  );
} 