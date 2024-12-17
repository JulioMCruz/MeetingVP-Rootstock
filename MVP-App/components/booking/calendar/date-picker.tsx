'use client';

import { Calendar } from '@/components/ui/calendar';

interface DatePickerProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  month: Date;
  onMonthChange: (month: Date) => void;
}

export function DatePicker({ selectedDate, onDateSelect, month, onMonthChange }: DatePickerProps) {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onDateSelect}
      month={month}
      onMonthChange={onMonthChange}
      className="rounded-md border"
      disabled={(date) => 
        date < new Date() || 
        date.getDay() === 0 || 
        date.getDay() === 6
      }
    />
  );
}