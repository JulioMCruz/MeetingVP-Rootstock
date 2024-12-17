'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar, Clock, Wallet } from 'lucide-react';

interface BookingDetailsProps {
  date: Date;
  time: string;
  onConfirm: () => void;
}

export function BookingDetails({ date, time, onConfirm }: BookingDetailsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
      
      <div className="space-y-4 mb-6">
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

        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Price</p>
            <p className="text-sm text-muted-foreground">50 MVP Tokens</p>
          </div>
        </div>
      </div>

      <Button onClick={onConfirm} className="w-full">
        Proceed to Payment
      </Button>
    </Card>
  );
}