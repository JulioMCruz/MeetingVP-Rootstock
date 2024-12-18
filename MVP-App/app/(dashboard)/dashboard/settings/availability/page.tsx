'use client';

import { Card } from '@/components/ui/card';
import { AvailabilitySettings } from '@/components/dashboard/settings/availability-settings';

export default function AvailabilitySettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Availability Settings</h1>
        <p className="text-muted-foreground">Manage your availability for accepting meetings</p>
      </div>

      <Card className="p-6">
        <AvailabilitySettings />
      </Card>
    </div>
  );
}