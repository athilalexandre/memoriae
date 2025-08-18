import { createSession } from '@/lib/session';
import { signInAdmin } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Check if it's the admin user
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      // Sign in with Firebase
      const user = await signInAdmin(email, password);
      
      // Create session
      await createSession(user.uid);
      
      return NextResponse.json({ message: 'Login successful' });
    } else {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
  }
} 