export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
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
  email: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  farcaster?: string;
  createdAt: Date;
  updatedAt: Date;
}