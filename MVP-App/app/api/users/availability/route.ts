import { NextResponse } from 'next/server';
import clientPromise from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("mvp-rootstock");
    
    const availability = await db
      .collection('userAvailability')
      .findOne({ userId });

    return NextResponse.json(availability);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const data = await request.json();

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("mvp-rootstock");
    
    const availability = await db
      .collection('userAvailability')
      .updateOne(
        { userId },
        { 
          $set: {
            isAvailable: data.isAvailable,
            workingDays: data.selectedDays,
            timeRanges: data.timeRanges,
            bufferTime: data.bufferTime,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );

    return NextResponse.json({ success: true, availability });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to save availability' }, { status: 500 });
  }
} 