'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MentorProfile } from '@/components/booking/mentor-profile';
import { BookingCalendar } from '@/components/booking/calendar';
import { BookingDetails } from '@/components/booking/details';
import { PaymentModal } from '@/components/booking/payment-modal';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/lib/hooks/use-booking';
import type { Mentor } from '@/lib/types';

interface BookingClientProps {
  mentor: Mentor;
}

export function BookingClient({ mentor }: BookingClientProps) {
  const router = useRouter();
  const {
    selectedDate,
    selectedSlot,
    showPayment,
    handleDateSelect,
    handleSlotSelect,
    handleShowPayment,
    handleClosePayment,
  } = useBooking();

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1">
            <MentorProfile mentor={mentor} />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <BookingCalendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                selectedSlot={selectedSlot}
                onSlotSelect={handleSlotSelect}
              />
            </Card>

            {selectedDate && selectedSlot && (
              <BookingDetails
                date={selectedDate}
                time={selectedSlot}
                price={mentor.price}
                onConfirm={handleShowPayment}
              />
            )}
          </div>
        </motion.div>
      </div>

      <PaymentModal 
        open={showPayment} 
        onClose={handleClosePayment}
        amount={mentor.price}
        onSuccess={() => router.push('/dashboard')}
      />
    </main>
  );
}