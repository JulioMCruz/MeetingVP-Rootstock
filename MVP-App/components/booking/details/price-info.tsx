'use client';

import { Wallet } from 'lucide-react';

interface PriceInfoProps {
  price: number;
  currency?: string;
}

export function PriceInfo({ price, currency = 'MVP Tokens' }: PriceInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Wallet className="h-5 w-5 text-muted-foreground" />
      <div>
        <p className="font-medium">Price</p>
        <p className="text-sm text-muted-foreground">{price} {currency}</p>
      </div>
    </div>
  );
}