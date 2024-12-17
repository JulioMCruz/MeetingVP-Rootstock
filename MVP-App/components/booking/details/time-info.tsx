'use client';

import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface TimeInfoProps {
  date: Date;
  time: string;
}

export function TimeInfo({ date, time }: TimeInfoProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="font-medium">Date</p>
          <p className="text-sm text-muted-foreground">{format(date, 'PPP')}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="font-medium">Time</p>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </div>
    </>
  );
}