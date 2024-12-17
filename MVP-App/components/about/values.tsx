'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Shield, Lightbulb, Users, Globe } from 'lucide-react';
import { aboutData } from '@/lib/about-data';

export function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Values
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {aboutData.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${value.gradient}`}>
                  <value.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}