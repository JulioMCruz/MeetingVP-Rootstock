'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Wallet, Globe, Calendar, Users } from 'lucide-react';
import { Mentor } from '@/lib/types';

interface MentorProfileProps {
  mentor: Mentor;
}

export function MentorProfile({ mentor }: MentorProfileProps) {
  return (
    <Card className="p-6 space-y-6">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">{mentor.name}</h1>
        <p className="text-muted-foreground">{mentor.role} @ {mentor.company}</p>
      </div>

      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({mentor.meetings} reviews)</span>
      </div>

      <div className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Duration</span>
          </div>
          <span>30 minutes</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Price</span>
          </div>
          <Badge variant="secondary">{mentor.price} MVP Tokens</Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Language</span>
          </div>
          <span>English</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <h3 className="font-semibold mb-2">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill) => (
            <Badge key={skill} variant="outline">{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Joined March 2024</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{mentor.meetings}+ meetings conducted</span>
        </div>
      </div>
    </Card>
  );
}