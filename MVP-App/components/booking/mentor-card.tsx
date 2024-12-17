'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Wallet, Shield, ArrowRight } from 'lucide-react';
import { Mentor } from '@/lib/types';

interface MentorCardProps {
  mentor: Mentor;
  onBook: () => void;
}

export function MentorCard({ mentor, onBook }: MentorCardProps) {
  return (
    <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {mentor.verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <Shield className="h-3 w-3 text-primary-foreground" />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold">{mentor.name}</h3>
          <p className="text-sm text-muted-foreground">{mentor.role}</p>
          <p className="text-sm text-muted-foreground">{mentor.company}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.expertise.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span>{mentor.rating}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{mentor.meetings}+ meetings</span>
          </div>
          <div className="flex items-center gap-1">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="font-semibold">{mentor.price}</span>
            <span className="text-sm text-muted-foreground">MVP</span>
          </div>
        </div>
      </div>

      <Button className="w-full" onClick={onBook}>
        Book Meeting
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
}