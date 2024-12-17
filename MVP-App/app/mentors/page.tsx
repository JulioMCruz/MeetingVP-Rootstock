'use client';

import { motion } from 'framer-motion';
import { MentorsList } from '@/components/mentors/mentors-list';
import { MentorFilters } from '@/components/mentors/mentor-filters';
import { Footer } from '@/components/layout/footer';

export default function MentorsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[40vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container relative text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Find Your Perfect Mentor
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with industry experts and transform your professional journey
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <MentorFilters />
          <MentorsList />
        </div>
      </section>

      <Footer />
    </main>
  );
}