'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FeatureGrid } from '@/components/booking/feature-grid';
import { SearchBar } from '@/components/booking/search-bar';
import { FeaturedMentors } from '@/components/booking/featured-mentors';

export function BookingSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Connect with Expert Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book blockchain-verified meetings with leading DevRel professionals and industry experts
          </p>
        </motion.div>

        <FeatureGrid />
        <SearchBar />
        <FeaturedMentors />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Meetings?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of professionals who trust MVP for secure, verifiable, and efficient meeting management
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/mentors')}
            >
              View All Mentors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}