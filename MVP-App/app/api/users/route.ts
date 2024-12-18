import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;

console.log('*** uri:', uri);
// GET user by userId
export async function GET(request: Request) {
  try {

    console.log('*** Get request:', request);

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    console.log('*** userId:', userId);

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const client = new MongoClient(uri!);
    await client.connect();

    const db = client.db('mvp-rootstock');
    const user = await db.collection('users').findOne({ userId });

    console.log('Fetched user data:', JSON.stringify(user));

    await client.close();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

// POST new user
export async function POST(request: Request) {
  try {

    console.log('*** Post request:', request);

    const body = await request.json();
    const { userId, ...userData } = body;

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const client = new MongoClient(uri!);
    await client.connect();

    const db = client.db('mvp-rootstock');
    const existingUser = await db.collection('users').findOne({ userId });

    if (existingUser) {
      await client.close();
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const newUser = {
      userId,
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection('users').insertOne(newUser);
    await client.close();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}

// PUT update user
export async function PUT(request: Request) {
  try { 

    console.log('*** Put request:', request);

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const updates = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const client = new MongoClient(uri!);
    await client.connect();

    const db = client.db('mvp-rootstock');
    const result = await db.collection('users').updateOne(
      { userId },
      { 
        $set: {
          ...updates,
          updatedAt: new Date()
        }
      }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User updated successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
} 