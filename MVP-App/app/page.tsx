'use client';

import { Hero } from '@/components/sections/hero';
import { BookingSection } from '@/components/sections/booking';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BookingSection />
      <Features />
      <HowItWorks />
      <TechStack />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}