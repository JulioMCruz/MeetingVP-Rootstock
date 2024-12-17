'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Users, FileText, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Calendar,
  },
  {
    title: 'Meetings',
    href: '/dashboard/meetings',
    icon: Users,
  },
  {
    title: 'Documents',
    href: '/dashboard/documents',
    icon: FileText,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/dashboard" className="text-xl font-bold text-primary">
          MVP
        </Link>
      </div>
      
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}