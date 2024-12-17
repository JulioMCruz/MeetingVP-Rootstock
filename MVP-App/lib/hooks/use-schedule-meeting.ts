'use client';

import { useState } from 'react';

interface MeetingData {
  type?: string;
  title?: string;
  description?: string;
  date?: Date;
  time?: string;
  duration?: string;
  isFree?: boolean;
  deposit?: number;
  maxParticipants?: number;
  platform?: string;
  meetingLink?: string;
}

export function useScheduleMeeting() {
  const [data, setData] = useState<MeetingData>({});
  const [step, setStep] = useState(1);

  const updateData = (newData: Partial<MeetingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetForm = () => {
    setData({});
    setStep(1);
  };

  return {
    data,
    step,
    updateData,
    nextStep,
    previousStep,
    resetForm,
  };
}