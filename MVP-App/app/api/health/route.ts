import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'MongoDB URI not configured' },
        { status: 503 }
      );
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    await client.close();

    return NextResponse.json({ status: 'healthy' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Database connection failed: ${message}` },
      { status: 503 }
    );
  }
}