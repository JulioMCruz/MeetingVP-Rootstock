'use client';

import { ContactHero } from '@/components/contact/hero';
import { ContactForm } from '@/components/contact/form';
import { ContactInfo } from '@/components/contact/info';
import { Footer } from '@/components/layout/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}