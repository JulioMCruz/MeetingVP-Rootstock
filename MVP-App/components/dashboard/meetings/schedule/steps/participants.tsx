'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface ParticipantsStepProps {
  emails: string[];
  onEmailsChange: (emails: string[]) => void;
  selectedMentor: string;
  onMentorChange: (mentor: string) => void;
}

const mentors = [
  { id: '1', name: 'Sarah Chen - Senior DevRel' },
  { id: '2', name: 'Michael Rodriguez - Web3 Expert' },
  { id: '3', name: 'Emily Taylor - Community Lead' },
];

export function ParticipantsStep({
  emails,
  onEmailsChange,
  selectedMentor,
  onMentorChange,
}: ParticipantsStepProps) {
  const [newEmail, setNewEmail] = useState('');

  const handleAddEmail = () => {
    if (newEmail && !emails.includes(newEmail)) {
      onEmailsChange([...emails, newEmail]);
      setNewEmail('');
    }
  };

  const handleRemoveEmail = (email: string) => {
    onEmailsChange(emails.filter(e => e !== email));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Mentor/DevRel</Label>
        <Select value={selectedMentor} onValueChange={onMentorChange}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a mentor" />
          </SelectTrigger>
          <SelectContent>
            {mentors.map((mentor) => (
              <SelectItem key={mentor.id} value={mentor.id}>
                {mentor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Invite Participants</Label>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter email address"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddEmail()}
          />
          <Button type="button" onClick={handleAddEmail}>
            Add
          </Button>
        </div>
      </div>

      {emails.length > 0 && (
        <div className="space-y-2">
          <Label>Invited Participants</Label>
          <div className="space-y-2">
            {emails.map((email) => (
              <div
                key={email}
                className="flex items-center justify-between p-2 rounded-md bg-muted"
              >
                <span className="text-sm">{email}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveEmail(email)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}