'use client';

import { format } from 'date-fns';

interface SelectedInfoProps {
  date?: Date;
  time?: string;
}

export function SelectedInfo({ date, time }: SelectedInfoProps) {
  if (!date || !time) return null;

  return (
    <div className="p-4 rounded-lg bg-muted">
      <p className="text-sm text-muted-foreground">
        Selected: {format(date, 'PPP')} at {time}
      </p>
    </div>
  );
}