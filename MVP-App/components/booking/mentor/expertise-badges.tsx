'use client';

import { Badge } from '@/components/ui/badge';

interface ExpertiseBadgesProps {
  expertise: string[];
}

export function ExpertiseBadges({ expertise }: ExpertiseBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {expertise.map((skill) => (
        <Badge key={skill} variant="outline" className="text-xs">
          {skill}
        </Badge>
      ))}
    </div>
  );
}