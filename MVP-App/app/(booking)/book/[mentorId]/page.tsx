//import { allMentors } from '@/lib/mentors-data';
import { BookingClient } from '@/components/booking/booking-client';
import { notFound } from 'next/navigation';

async function getMentorByUserId(userId: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    let url = `${baseUrl}/api/users?userId=${userId}`;  
    // console.log('*** url:', url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }
    const userData = await response.json();

    // console.log('*** userData:', userData);
    
    // Find mentor data that matches this user
    //const mentor = allMentors.find(m => m.id === userData.userId);
    return userData || null;
  } catch (error) {
    console.error('Error fetching mentor:', error);
    return null;
  }
}

// export function generateStaticParams() {
//   return allMentors.map((mentor) => ({
//     mentorId: mentor.id,
//   }));
// }

export default async function BookMentorPage({ params }: { params: { mentorId: string } }) {
  // First try to find mentor directly (for static paths)

  // console.log('*** MentorId:', params.mentorId);
  // console.log('params:', params);
  
  //let mentor = allMentors.find(m => m.id === params.mentorId);
  
  // If not found, try to find by wallet address
  // if (!mentor) {
  let  mentor = await getMentorByUserId(params.mentorId);
  // }
  
  if (!mentor) {
    notFound();
  }

  return <BookingClient mentor={mentor} />;
}