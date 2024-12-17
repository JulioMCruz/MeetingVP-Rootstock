'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Brain, Lock, Cpu } from 'lucide-react';

const technologies = [
  {
    title: 'Blockchain Security',
    description: 'Built on secure blockchain technology for immutable meeting records',
    icon: Lock,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'AI Integration',
    description: 'Advanced AI for meeting analytics and real-time translations',
    icon: Brain,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'Smart Contracts',
    description: 'Automated meeting management with smart contract technology',
    icon: Cpu,
    gradient: 'from-secondary to-secondary/50',
  },
];

export function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by cutting-edge blockchain and AI technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${tech.gradient}`}>
                  <tech.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}