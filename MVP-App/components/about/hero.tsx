'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container relative text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Revolutionizing Professional Meetings
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Building the future of decentralized meeting management with blockchain technology and AI
        </p>
      </motion.div>
    </section>
  );
}