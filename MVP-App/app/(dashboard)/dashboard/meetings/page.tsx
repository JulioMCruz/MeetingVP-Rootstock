'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { MeetingsList } from '@/components/dashboard/meetings/meetings-list';
import { MeetingFilters } from '@/components/dashboard/meetings/meeting-filters';

export default function MeetingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Meetings</h1>
          <p className="text-muted-foreground">Manage and schedule your meetings</p>
        </div>
      </div>

      <Card className="p-6">
        <MeetingFilters />
        <MeetingsList />
      </Card>
    </div>
  );
}