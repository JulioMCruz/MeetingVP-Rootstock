'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Calendar, Clock, Wallet } from 'lucide-react';
import { TimeSlotSelector } from './time-slot-selector';

export function BookingSettings() {
  const [copied, setCopied] = useState(false);
  const bookingUrl = `https://mvp.com/book/${123}`; // Replace with actual mentor ID

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bookingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs defaultValue="availability">
      <TabsList className="mb-6">
        <TabsTrigger value="availability">Availability</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
        <TabsTrigger value="sharing">Sharing</TabsTrigger>
      </TabsList>

      <TabsContent value="availability">
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Enable Booking</Label>
                <Switch />
              </div>
              <p className="text-sm text-muted-foreground">
                Allow others to book meetings with you
              </p>
            </div>

            <TimeSlotSelector />

            <div className="space-y-4">
              <Label>Buffer Time</Label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="0"
                  placeholder="15"
                  className="w-24"
                />
                <span className="text-muted-foreground">minutes between meetings</span>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="preferences">
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className="space-y-4">
              <Label>Session Duration</Label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="15"
                  step="15"
                  placeholder="30"
                  className="w-24"
                />
                <span className="text-muted-foreground">minutes per session</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Price per Session</Label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="0"
                  placeholder="50"
                  className="w-24"
                />
                <span className="text-muted-foreground">MVP Tokens</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Require Deposit</Label>
                <Switch />
              </div>
              <p className="text-sm text-muted-foreground">
                Request a token deposit to prevent no-shows
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="sharing">
        <div className="space-y-6">
          <Card className="p-4 bg-muted">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Your Booking Page</span>
                <Badge variant="secondary">Public</Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? 'Copied!' : 'Copy Link'}
              </Button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground break-all">
              {bookingUrl}
            </p>
          </Card>

          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Preview</h3>
            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Available Times</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday, 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">30 minutes</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Price</p>
                    <p className="text-sm text-muted-foreground">50 MVP Tokens</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}