'use client';

import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DateTimeStepProps {
  date?: Date;
  onDateSelect: (date: Date | undefined) => void;
}

export function DateTimeStep({ date, onDateSelect }: DateTimeStepProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Date</Label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateSelect}
          className="rounded-md border"
          disabled={(date) => 
            date < new Date() || 
            date.getDay() === 0 || 
            date.getDay() === 6
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Time</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9:00 AM</SelectItem>
              <SelectItem value="10">10:00 AM</SelectItem>
              <SelectItem value="11">11:00 AM</SelectItem>
              <SelectItem value="14">2:00 PM</SelectItem>
              <SelectItem value="15">3:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Duration</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="60">1 hour</SelectItem>
              <SelectItem value="90">1.5 hours</SelectItem>
              <SelectItem value="120">2 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}