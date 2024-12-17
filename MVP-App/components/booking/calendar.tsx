'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface BookingCalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  selectedSlot?: string;
  onSlotSelect: (slot: string) => void;
}

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

export function BookingCalendar({
  selectedDate,
  onDateSelect,
  selectedSlot,
  onSlotSelect,
}: BookingCalendarProps) {
  const [month, setMonth] = useState<Date>(new Date());

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            month={month}
            onMonthChange={setMonth}
            className="rounded-md border"
            disabled={(date) => 
              date < new Date() || 
              date.getDay() === 0 || 
              date.getDay() === 6
            }
          />

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
                  disabled={!selectedDate}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {selectedDate && selectedSlot && (
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">
            Selected: {format(selectedDate, 'PPP')} at {selectedSlot}
          </p>
        </div>
      )}
    </div>
  );
}