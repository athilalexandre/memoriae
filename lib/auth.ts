// Simple authentication system without Firebase
import { createSession, deleteSession } from './session';

export interface User {
  id: string;
  email: string;
  name: string;
}

// Simple admin credentials (in production, use environment variables)
const ADMIN_CREDENTIALS = {
  email: 'admin@memoriae.com',
  password: 'admin123'
};

export const signInAdmin = async (email: string, password: string): Promise<User> => {
  // Simple validation
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const user: User = {
      id: 'admin-1',
      email: email,
      name: 'Administrator'
    };
    
    // Create session
    await createSession(user.id);
    
    return user;
  }
  
  throw new Error('Invalid credentials');
};

export const signOutAdmin = async (): Promise<void> => {
  await deleteSession();
};

export const getCurrentUser = (): User | null => {
  // In a real app, you'd check the session
  // For now, return null (will be handled by session middleware)
  return null;
};
