'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { TimeSlots } from './time-slots';
import { SelectedInfo } from './selected-info';

interface BookingCalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  selectedSlot?: string;
  onSlotSelect: (slot: string) => void;
}

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

          <TimeSlots
            selectedSlot={selectedSlot}
            onSlotSelect={onSlotSelect}
            disabled={!selectedDate}
          />
        </div>
      </div>

      <SelectedInfo date={selectedDate} time={selectedSlot} />
    </div>
  );
}