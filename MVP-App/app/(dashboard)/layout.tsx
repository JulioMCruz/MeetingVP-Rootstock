'use client';

import { DashboardNav } from '@/components/dashboard/nav';
import { motion } from 'framer-motion';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <DashboardNav />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-8 pt-20 ml-64"
      >
        {children}
      </motion.main>
    </div>
  );
}