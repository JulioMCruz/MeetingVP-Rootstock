'use client';

import { Card } from '@/components/ui/card';
import { NewMeetingForm } from '@/components/dashboard/meetings/new-meeting-form';

export default function NewMeetingPage() {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <NewMeetingForm />
      </Card>
    </div>
  );
}