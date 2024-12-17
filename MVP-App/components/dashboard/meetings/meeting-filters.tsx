'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';

export function MeetingFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Input placeholder="Search meetings..." className="md:max-w-xs" />
      
      <Select defaultValue="all">
        <SelectTrigger className="md:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <DatePickerWithRange className="md:w-auto" />
    </div>
  );
}