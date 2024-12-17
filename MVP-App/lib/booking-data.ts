import { Shield, Clock, FileCheck, Brain } from 'lucide-react';
import { Mentor, Feature } from './types';

export const featuredMentors: Mentor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior DevRel',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&h=120&auto=format&fit=crop',
    rating: 4.9,
    price: 50,
    expertise: ['Blockchain', 'Web3', 'DeFi'],
    meetings: 150,
    verified: true,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Web3 Expert',
    company: 'BlockChain Inc',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&auto=format&fit=crop',
    rating: 4.8,
    price: 45,
    expertise: ['Smart Contracts', 'NFTs', 'TokenEconomics'],
    meetings: 120,
    verified: true,
  },
  {
    id: '3',
    name: 'Emily Taylor',
    role: 'Community Lead',
    company: 'DeFi Protocol',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&h=120&auto=format&fit=crop',
    rating: 4.7,
    price: 40,
    expertise: ['Community Building', 'DAO Management', 'Governance'],
    meetings: 200,
    verified: true,
  },
];

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Secure Blockchain Verification',
    description: 'Every meeting is verified and recorded on the blockchain',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling with automated reminders',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: FileCheck,
    title: 'Verified Attestations',
    description: 'Get blockchain-verified certificates for each meeting',
    gradient: 'from-accent to-accent/50',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Real-time translation and meeting analytics',
    gradient: 'from-primary via-accent to-secondary',
  },
];