import { allMentors } from '@/lib/mentors-data';
import { BookingClient } from '@/components/booking/booking-client';

export function generateStaticParams() {
  return allMentors.map((mentor) => ({
    mentorId: mentor.id,
  }));
}

export default function BookMentorPage({ params }: { params: { mentorId: string } }) {
  const mentor = allMentors.find(m => m.id === params.mentorId);
  
  if (!mentor) {
    return null;
  }

  return <BookingClient mentor={mentor} />;
}