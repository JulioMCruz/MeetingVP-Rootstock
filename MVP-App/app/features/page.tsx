'use client';

import { FeatureHero } from '@/components/features/hero';
import { FeatureList } from '@/components/features/feature-list';
import { FeatureComparison } from '@/components/features/comparison';
import { FeatureCTA } from '@/components/features/cta';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <FeatureHero />
      <FeatureList />
      <FeatureComparison />
      <FeatureCTA />
    </main>
  );
}