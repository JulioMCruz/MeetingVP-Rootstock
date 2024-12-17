import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

const activities = [
  {
    type: 'completed',
    title: 'DevRel Workshop',
    time: '2 hours ago',
    icon: CheckCircle,
  },
  {
    type: 'scheduled',
    title: 'Team Planning',
    time: '5 hours ago',
    icon: Clock,
  },
  {
    type: 'cancelled',
    title: 'Client Call',
    time: '1 day ago',
    icon: XCircle,
  },
];

const typeStyles = {
  completed: 'text-secondary',
  scheduled: 'text-primary',
  cancelled: 'text-destructive',
};

export function RecentActivity() {
  return (
    <Card className="p-6 backdrop-blur-sm bg-card/50">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
          >
            <activity.icon className={`h-5 w-5 ${typeStyles[activity.type]}`} />
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}