'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, ExternalLink, MoreHorizontal, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ScheduleMeetingModal } from './schedule-meeting-modal';

const meetings = [
  {
    id: 1,
    title: 'Project Review',
    date: 'Today',
    time: '2:00 PM',
    attendees: 4,
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Team Sync',
    date: 'Tomorrow',
    time: '10:00 AM',
    attendees: 6,
    status: 'confirmed',
  },
  {
    id: 3,
    title: 'Client Meeting',
    date: 'Mar 15',
    time: '3:30 PM',
    attendees: 3,
    status: 'pending',
  },
];

const statusStyles = {
  upcoming: 'bg-primary/10 text-primary',
  confirmed: 'bg-secondary/10 text-secondary',
  pending: 'bg-accent/10 text-accent',
  completed: 'bg-muted text-muted-foreground',
  cancelled: 'bg-destructive/10 text-destructive',
};

export function MeetingsList() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Meetings</h2>
        <Button onClick={() => setShowScheduleModal(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meeting</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Attendees</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meetings.map((meeting) => (
            <TableRow key={meeting.id}>
              <TableCell className="font-medium">{meeting.title}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {meeting.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {meeting.time}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {meeting.attendees}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={statusStyles[meeting.status]}>
                  {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Meeting
                    </DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Meeting</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Cancel Meeting
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ScheduleMeetingModal 
        open={showScheduleModal} 
        onClose={() => setShowScheduleModal(false)} 
      />
    </>
  );
}