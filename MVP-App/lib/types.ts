export interface Mentor {
  id: string;
  fullName: string;
  role: string;
  company: string;
  profileImage?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  farcaster?: string;
  rating: number;
  price: number;
  expertise: string[];
  meetings: number;
  verified: boolean;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
  gradient: string;
}

export interface User {
  userId: string;
  fullName: string;
  profileImage?: string;
  email: string;
  address: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  farcaster?: string;
  createdAt: Date;
  updatedAt: Date;
}