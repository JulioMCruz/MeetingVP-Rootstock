'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardStats } from '@/components/dashboard/stats';
import { UpcomingMeetings } from '@/components/dashboard/upcoming-meetings';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const verifyUser = async () => {
      if (!user?.userId) return;

      try {
        const response = await fetch(`/api/users?userId=${user.userId}`);

        console.log('response:', JSON.stringify(response));
        
        if (response.status === 404) {
          console.log('User not found, creating new user');
          // User doesn't exist, create new user
          const newUser = {
            userId: user.userId,
            fullName: user.alias || '',
            email: user.email || '',
          };

          await fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });

          // Redirect to settings to complete profile
          router.push('/dashboard/settings');
        }
      } catch (error) {
        console.error('Error verifying user:', error);
      }
    };

    if (isLoggedIn && user) {
      verifyUser();
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid lg:grid-cols-2 gap-8">
        <UpcomingMeetings />
        <RecentActivity />
      </div>
    </div>
  );
}