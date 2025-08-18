'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GithubIcon } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { signInWithGoogle, getCurrentUser, onAuthChange } from '@/lib/firebase';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { colorPalette } = useTheme();

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        // User is already logged in, redirect to create page
        router.push('/admin/create');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      const user = await signInWithGoogle();
      
      // Send user data to server to create session
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });

      if (response.ok) {
        router.push('/admin/create');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md flex flex-col justify-between h-[30rem]">
        <h1 className="text-5xl font-limelight font-extrabold tracking-wide text-center mb-6 transition-colors duration-200" style={{ color: colorPalette.text }}>Memoriae</h1>
        <h2 className="text-xl font-bold text-center text-primary-800 pb-2 border-b border-gray-300 mb-6">Admin Login</h2>
        
        <div className="flex-grow flex flex-col justify-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600 mr-2"></div>
                Entrando...
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Entrar com Google
              </div>
            )}
          </button>
          
          {error && (
            <p className="text-red-600 text-sm text-center mt-4">{error}</p>
          )}
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Apenas usuários autorizados podem acessar o painel administrativo.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 mt-6">
          <a
            href="https://github.com/athilalexandre"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-200"
            aria-label="GitHub - Athila Alexandre"
          >
            <GithubIcon size={20} className="transition-transform duration-200 group-hover:scale-110" style={{ color: colorPalette.text }}/>
            <span className="ml-1 text-sm font-brunson font-semibold typing-text-hidden max-w-full" style={{ color: colorPalette.text }}>Athila Alexandre</span>
          </a>
          <a
            href="https://github.com/Crawfordcorp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-200"
            aria-label="GitHub - David Aleixo"
          >
            <GithubIcon size={20} className="transition-transform duration-200 group-hover:scale-110" style={{ color: colorPalette.text }}/>
            <span className="ml-1 text-sm font-brunson font-semibold typing-text-hidden max-w-full" style={{ color: colorPalette.text }}>David Aleixo</span>
          </a>
        </div>
      </div>
    </div>
  );
} 