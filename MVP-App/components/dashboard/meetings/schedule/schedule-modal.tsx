'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BasicInfoStep } from './steps/basic-info';
import { DateTimeStep } from './steps/date-time';
import { SettingsStep } from './steps/settings';
import { ParticipantsStep } from './steps/participants';

interface ScheduleModalProps {
  open: boolean;
  onClose: () => void;
}

export function ScheduleModal({ open, onClose }: ScheduleModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [isFree, setIsFree] = useState(false);
  const [meetingLink, setMeetingLink] = useState('');
  const [selectedMentor, setSelectedMentor] = useState('');
  const [invitedEmails, setInvitedEmails] = useState<string[]>([]);

  const handleNext = () => {
    if (step < 4) {
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
            <ParticipantsStep
              emails={invitedEmails}
              onEmailsChange={setInvitedEmails}
              selectedMentor={selectedMentor}
              onMentorChange={setSelectedMentor}
            />
          )}
          {step === 2 && <BasicInfoStep />}
          {step === 3 && <DateTimeStep date={date} onDateSelect={setDate} />}
          {step === 4 && (
            <SettingsStep 
              isFree={isFree}
              onFreeChange={setIsFree}
              meetingLink={meetingLink}
              onMeetingLinkChange={setMeetingLink}
            />
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
            {step === 4 ? 'Schedule Meeting' : 'Next'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}