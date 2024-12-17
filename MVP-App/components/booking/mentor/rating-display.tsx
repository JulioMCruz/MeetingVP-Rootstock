'use client';

import { Star } from 'lucide-react';

interface RatingDisplayProps {
  rating: number;
  reviews?: number;
}

export function RatingDisplay({ rating, reviews }: RatingDisplayProps) {
  return (
    <div className="flex items-center gap-1">
      <Star className="h-4 w-4 fill-primary text-primary" />
      <span>{rating}</span>
      {reviews && (
        <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
      )}
    </div>
  );
}