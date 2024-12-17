'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimeSlotsProps {
  selectedSlot?: string;
  onSlotSelect: (slot: string) => void;
  disabled?: boolean;
}

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

export function TimeSlots({ selectedSlot, onSlotSelect, disabled }: TimeSlotsProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-3">Available Time Slots</h3>
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((slot) => (
          <Button
            key={slot}
            variant="outline"
            className={cn(
              'w-full',
              selectedSlot === slot && 'bg-primary text-primary-foreground'
            )}
            onClick={() => onSlotSelect(slot)}
            disabled={disabled}
          >
            {slot}
          </Button>
        ))}
      </div>
    </Card>
  );
}