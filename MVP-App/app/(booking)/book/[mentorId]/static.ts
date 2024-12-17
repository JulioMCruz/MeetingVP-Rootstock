import { allMentors } from '@/lib/mentors-data';

export function generateStaticParams() {
  return allMentors.map((mentor) => ({
    mentorId: mentor.id,
  }));
}