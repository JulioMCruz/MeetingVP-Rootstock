'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

interface ScheduleMeetingModalProps {
  open: boolean;
  onClose: () => void;
}

export function ScheduleMeetingModal({ open, onClose }: ScheduleMeetingModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push('/dashboard/meetings');
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Schedule New Meeting</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Meeting Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-on-one">One-on-One</SelectItem>
                    <SelectItem value="group">Group Meeting</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="Enter meeting title" />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  placeholder="Enter meeting description"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9:00 AM</SelectItem>
                      <SelectItem value="10">10:00 AM</SelectItem>
                      <SelectItem value="11">11:00 AM</SelectItem>
                      <SelectItem value="14">2:00 PM</SelectItem>
                      <SelectItem value="15">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Required Deposit (MVP Tokens)</Label>
                <Input type="number" min="0" placeholder="0.0" />
              </div>

              <div className="space-y-2">
                <Label>Maximum Participants</Label>
                <Input type="number" min="1" placeholder="1" />
              </div>

              <div className="space-y-2">
                <Label>Meeting Link</Label>
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
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={step === 1 ? onClose : handleBack}
          >
            {step === 1 ? 'Cancel' : 'Back'}
          </Button>
          <Button onClick={handleNext}>
            {step === 3 ? 'Schedule Meeting' : 'Next'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}