'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function BasicInfoStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Meeting Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select meeting type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-on-one">One-on-One</SelectItem>
            <SelectItem value="group">Group Meeting</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Title</Label>
        <Input placeholder="Enter meeting title" />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea 
          placeholder="Enter meeting description"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}