'use client';

import { useState } from 'react';

export function useBooking() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string>();
  const [showPayment, setShowPayment] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(undefined);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleShowPayment = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setIsWalletConnected(true);
  };

  return {
    selectedDate,
    selectedSlot,
    showPayment,
    isWalletConnected,
    handleDateSelect,
    handleSlotSelect,
    handleShowPayment,
    handleClosePayment,
    handleConnectWallet,
  };
}