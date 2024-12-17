'use client';

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';

export function MentorFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-12 space-y-4"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by name, expertise, or company..." 
            className="h-12"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blockchain">Blockchain</SelectItem>
              <SelectItem value="web3">Web3</SelectItem>
              <SelectItem value="defi">DeFi</SelectItem>
              <SelectItem value="nft">NFTs</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">0-50 MVP</SelectItem>
              <SelectItem value="51-100">51-100 MVP</SelectItem>
              <SelectItem value="101-200">101-200 MVP</SelectItem>
              <SelectItem value="201+">201+ MVP</SelectItem>
            </SelectContent>
          </Select>

          <Button size="icon" variant="outline">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}