'use client';

import { Button } from '@/components/ui/button';
import { Wallet, ArrowRight } from 'lucide-react';

interface PaymentActionsProps {
  isWalletConnected: boolean;
  onConnect: () => void;
  onConfirm: () => void;
}

export function PaymentActions({ isWalletConnected, onConnect, onConfirm }: PaymentActionsProps) {
  if (!isWalletConnected) {
    return (
      <Button className="w-full" variant="outline" onClick={onConnect}>
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <Button className="w-full" onClick={onConfirm}>
      Confirm Payment
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}