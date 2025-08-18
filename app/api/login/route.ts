import { createSession } from '@/lib/session';
import { signInAdmin } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Sign in with simple auth
    const user = await signInAdmin(email, password);
    
    return NextResponse.json({ message: 'Login successful', user });
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ message: error.message || 'Invalid credentials' }, { status: 401 });
  }
} 