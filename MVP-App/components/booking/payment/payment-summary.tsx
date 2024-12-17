'use client';

import { Card } from '@/components/ui/card';

interface PaymentSummaryProps {
  amount: number;
  networkFee: string;
}

export function PaymentSummary({ amount, networkFee }: PaymentSummaryProps) {
  return (
    <Card className="p-4 bg-muted">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm">Amount</span>
        <span className="font-medium">{amount} MVP Tokens</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Network Fee</span>
        <span className="text-sm text-muted-foreground">{networkFee}</span>
      </div>
    </Card>
  );
}