'use client';

import { Shield } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  role: string;
  company: string;
  image: string;
  verified?: boolean;
}

export function ProfileHeader({ name, role, company, image, verified }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        {verified && (
          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
            <Shield className="h-3 w-3 text-primary-foreground" />
          </div>
        )}
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </div>
  );
}