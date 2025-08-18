import { deleteSession } from '@/lib/session';
import { signOutAdmin } from '@/lib/firebase';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Sign out from Firebase
    await signOutAdmin();
    
    // Delete session
    await deleteSession();
    
    return NextResponse.json({ message: 'Logout successful' });
  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
} 