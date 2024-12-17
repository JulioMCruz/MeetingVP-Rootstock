'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { features } from '@/lib/booking-data';

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 h-full border-primary/10 bg-card/50 backdrop-blur-sm">
            <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${feature.gradient}`}>
              <feature.icon className="h-6 w-6 text-background" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}