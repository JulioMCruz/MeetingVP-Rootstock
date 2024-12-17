'use client';

import { Card } from '@/components/ui/card';
import { BookingSettings } from '@/components/dashboard/settings/booking-settings';

export default function BookingSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Booking Settings</h1>
        <p className="text-muted-foreground">Manage your availability and booking preferences</p>
      </div>

      <Card className="p-6">
        <BookingSettings />
      </Card>
    </div>
  );
}