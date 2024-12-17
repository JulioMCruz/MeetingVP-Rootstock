'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: '123 Blockchain Avenue, Tech District, CA 94105',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@mvprotocol.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p className="text-muted-foreground">
          Reach out to us through any of these channels. We&apos;re here to help!
        </p>
      </div>

      {contactInfo.map((item, index) => (
        <Card 
          key={item.title}
          className="p-4 backdrop-blur-sm bg-card/50 flex items-start gap-4"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-primary/50`}>
            <item.icon className="h-5 w-5 text-background" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-muted-foreground">{item.content}</p>
          </div>
        </Card>
      ))}
    </motion.div>
  );
}