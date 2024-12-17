'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Wallet, Shield, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MentorCard } from './mentor-card';
import { featuredMentors } from '@/lib/booking-data';

export function FeaturedMentors() {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredMentors.map((mentor, index) => (
        <motion.div
          key={mentor.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MentorCard mentor={mentor} onBook={() => router.push(`/book/${mentor.id}`)} />
        </motion.div>
      ))}
    </div>
  );
}