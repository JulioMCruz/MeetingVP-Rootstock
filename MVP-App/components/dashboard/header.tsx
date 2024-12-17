'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ScheduleModal } from './meetings/schedule/schedule-modal';

export function DashboardHeader() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your meetings today.</p>
        </div>
        <Button onClick={() => setShowScheduleModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      <ScheduleModal 
        open={showScheduleModal} 
        onClose={() => setShowScheduleModal(false)} 
      />
    </>
  );
}