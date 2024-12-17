import { Card } from '@/components/ui/card';
import { Users, Clock, CheckCircle, Wallet } from 'lucide-react';

const stats = [
  {
    title: 'Total Meetings',
    value: '24',
    change: '+12%',
    icon: Users,
    gradient: 'from-primary to-primary/50',
  },
  {
    title: 'Upcoming',
    value: '8',
    change: '+3',
    icon: Clock,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    title: 'Completed',
    value: '16',
    change: '+8',
    icon: CheckCircle,
    gradient: 'from-accent to-accent/50',
  },
  {
    title: 'Tokens Earned',
    value: '1,240',
    change: '+320',
    icon: Wallet,
    gradient: 'from-primary via-accent to-secondary',
  },
];

export function DashboardStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6 backdrop-blur-sm bg-card/50">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${stat.gradient}`}>
              <stat.icon className="h-6 w-6 text-background" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-xs text-secondary">{stat.change}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}