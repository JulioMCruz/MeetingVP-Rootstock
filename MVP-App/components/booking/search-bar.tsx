'use client';

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12"
    >
      <div className="flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search mentors by name, expertise, or company..." 
            className="h-12"
          />
        </div>
        <Button size="lg">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </motion.div>
  );
}