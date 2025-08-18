import { deleteSession } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Delete session
    await deleteSession();
    
    return NextResponse.json({ message: 'Logout successful' });
  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
} 