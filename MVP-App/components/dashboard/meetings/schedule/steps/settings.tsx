'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SettingsStepProps {
  isFree: boolean;
  onFreeChange: (checked: boolean) => void;
  meetingLink: string;
  onMeetingLinkChange: (value: string) => void;
}

export function SettingsStep({ 
  isFree, 
  onFreeChange, 
  meetingLink, 
  onMeetingLinkChange 
}: SettingsStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="free-meeting" 
          checked={isFree}
          onCheckedChange={onFreeChange}
        />
        <Label htmlFor="free-meeting">This is a free meeting</Label>
      </div>

      {!isFree && (
        <div className="space-y-2">
          <Label>Required Deposit (MVP Tokens)</Label>
          <Input type="number" min="0" placeholder="0.0" />
        </div>
      )}

      <div className="space-y-2">
        <Label>Maximum Participants</Label>
        <Input type="number" min="1" placeholder="1" />
      </div>

      <div className="space-y-2">
        <Label>Meeting Platform</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Meet</SelectItem>
            <SelectItem value="zoom">Zoom</SelectItem>
            <SelectItem value="teams">Microsoft Teams</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Meeting Link</Label>
        <Input 
          placeholder="Enter meeting link"
          value={meetingLink}
          onChange={(e) => onMeetingLinkChange(e.target.value)}
        />
      </div>
    </div>
  );
}