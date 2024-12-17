'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PaymentSummary } from './payment/payment-summary';
import { PaymentActions } from './payment/payment-actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  amount: number;
  onSuccess: () => void;
}

export function PaymentModal({ open, onClose, amount }: PaymentModalProps) {
  const router = useRouter();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const handleConfirmPayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      router.push('/thank-you');
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <PaymentSummary amount={amount} networkFee="~0.001 ETH" />
          <PaymentActions 
            isWalletConnected={isWalletConnected}
            onConnect={handleConnectWallet}
            onConfirm={handleConfirmPayment}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}