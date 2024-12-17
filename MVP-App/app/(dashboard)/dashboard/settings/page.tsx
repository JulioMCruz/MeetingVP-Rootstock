'use client';

import { Card } from '@/components/ui/card';
import { SettingsTabs } from '@/components/dashboard/settings/settings-tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Card className="p-6">
        <SettingsTabs />
      </Card>
    </div>
  );
}