'use client';

import { AboutHero } from '@/components/about/hero';
import { AboutMission } from '@/components/about/mission';
import { AboutTeam } from '@/components/about/team';
import { AboutValues } from '@/components/about/values';
import { AboutCTA } from '@/components/about/cta';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}