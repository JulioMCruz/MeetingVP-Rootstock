'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Wallet, Clock, FileCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Connect Wallet',
    description: 'Link your blockchain wallet to get started',
    icon: Wallet,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'Schedule Meeting',
    description: 'Set up your meeting with smart contract protection',
    icon: Clock,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'Attend Meeting',
    description: 'Join your scheduled meeting securely',
    icon: FileCheck,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'Get Verified',
    description: 'Receive blockchain-verified attendance proof',
    icon: CheckCircle,
    gradient: 'from-primary via-accent to-secondary',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with MVP in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${step.gradient}`}>
                    <step.icon className="h-6 w-6 text-background" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}