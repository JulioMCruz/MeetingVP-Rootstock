import { Shield, Clock, FileCheck, Brain, Users, Globe, Lock, Sparkles } from 'lucide-react';

export const featureData = [
  {
    title: 'Blockchain Security',
    description: 'Smart contract-based meeting management with tamper-proof records',
    icon: Shield,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'Time Management',
    description: 'Automated scheduling and reminders with deposit system',
    icon: Clock,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'Verified Attestations',
    description: 'Generate blockchain-verified certificates for meetings',
    icon: FileCheck,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'AI Integration',
    description: 'Smart agenda creation and real-time meeting translations',
    icon: Brain,
    gradient: 'from-primary via-accent to-secondary',
  },
  {
    title: 'Global Accessibility',
    description: 'Connect with professionals worldwide with real-time translation',
    icon: Globe,
    gradient: 'from-secondary to-accent',
  },
  {
    title: 'Smart Analytics',
    description: 'AI-powered insights and meeting effectiveness tracking',
    icon: Sparkles,
    gradient: 'from-accent to-primary',
  },
];

export const comparisonData = [
  {
    title: 'Traditional Solutions',
    features: [
      { text: 'Basic scheduling', available: true },
      { text: 'Meeting recordings', available: true },
      { text: 'Calendar integration', available: true },
      { text: 'Blockchain verification', available: false },
      { text: 'Smart contracts', available: false },
      { text: 'AI-powered insights', available: false },
      { text: 'Tokenized incentives', available: false },
      { text: 'Immutable records', available: false },
    ],
  },
  {
    title: 'Meeting Value Protocol',
    features: [
      { text: 'Advanced scheduling', available: true },
      { text: 'Verified recordings', available: true },
      { text: 'Web3 calendar integration', available: true },
      { text: 'Blockchain verification', available: true },
      { text: 'Smart contracts', available: true },
      { text: 'AI-powered insights', available: true },
      { text: 'Tokenized incentives', available: true },
      { text: 'Immutable records', available: true },
    ],
  },
];