import { createSession } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { user } = await request.json();

    // Validate input
    if (!user || !user.uid || !user.email) {
      return NextResponse.json({ message: 'Invalid user data' }, { status: 400 });
    }

    // Check if it's an authorized admin user
    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['athilalexandre@gmail.com'];
    
    if (adminEmails.includes(user.email)) {
      // Create session
      await createSession(user.uid);
      
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ message: 'Unauthorized access' }, { status: 403 });
    }
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
  }
} 