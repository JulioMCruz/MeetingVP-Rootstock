'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { comparisonData } from '@/lib/feature-data';

export function FeatureComparison() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose MVP?</h2>
          <p className="text-muted-foreground">See how MVP compares to traditional meeting solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisonData.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-4">
                  {column.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-2">
                      {feature.available ? (
                        <Check className="h-5 w-5 text-secondary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}