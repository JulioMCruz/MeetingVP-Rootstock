'use client';

import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardStats } from '@/components/dashboard/stats';
import { UpcomingMeetings } from '@/components/dashboard/upcoming-meetings';
import { RecentActivity } from '@/components/dashboard/recent-activity';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid lg:grid-cols-2 gap-8">
        <UpcomingMeetings />
        <RecentActivity />
      </div>
    </div>
  );
}