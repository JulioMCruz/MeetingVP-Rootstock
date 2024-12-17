import { Card } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';

const meetings = [
  {
    title: 'Project Review',
    date: 'Today',
    time: '2:00 PM',
    attendees: 4,
  },
  {
    title: 'Team Sync',
    date: 'Tomorrow',
    time: '10:00 AM',
    attendees: 6,
  },
  {
    title: 'Client Meeting',
    date: 'Mar 15',
    time: '3:30 PM',
    attendees: 3,
  },
];

export function UpcomingMeetings() {
  return (
    <Card className="p-6 backdrop-blur-sm bg-card/50">
      <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.title}
            className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div>
              <h3 className="font-medium">{meeting.title}</h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {meeting.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {meeting.time}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {meeting.attendees} attendees
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}