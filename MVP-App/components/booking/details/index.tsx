'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TimeInfo } from './time-info';
import { PriceInfo } from './price-info';

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
        <TimeInfo date={date} time={time} />
        <PriceInfo price={50} />
      </div>

      <Button onClick={onConfirm} className="w-full">
        Proceed to Payment
      </Button>
    </Card>
  );
}