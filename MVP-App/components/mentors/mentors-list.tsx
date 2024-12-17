'use client';

import { motion } from 'framer-motion';
import { MentorCard } from '@/components/booking/mentor-card';
import { allMentors } from '@/lib/mentors-data';

export function MentorsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allMentors.map((mentor, index) => (
        <motion.div
          key={mentor.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MentorCard mentor={mentor} onBook={() => window.location.href = `/book/${mentor.id}`} />
        </motion.div>
      ))}
    </div>
  );
}