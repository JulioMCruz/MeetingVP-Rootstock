'use client';

import { Card } from '@/components/ui/card';
import { Shield, Clock, FileCheck, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Blockchain Security',
    description: 'Smart contract-based meeting management with tamper-proof records',
    icon: Shield,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'Time Management',
    description: 'Automated scheduling and reminders with deposit system',
    icon: Clock,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'Verified Attestations',
    description: 'Generate blockchain-verified certificates for meetings',
    icon: FileCheck,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'AI Integration',
    description: 'Smart agenda creation and real-time meeting translations',
    icon: Brain,
    gradient: 'from-primary via-accent to-secondary',
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${feature.gradient}`}>
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}