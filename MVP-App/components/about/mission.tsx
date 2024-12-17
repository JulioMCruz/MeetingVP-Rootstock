'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function AboutMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <Card className="p-8 backdrop-blur-sm bg-card/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meeting Value Protocol was founded with a clear vision: to transform how professionals manage and verify their meetings using blockchain technology. We believe in creating transparent, secure, and efficient meeting experiences that build trust and value for everyone involved.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}