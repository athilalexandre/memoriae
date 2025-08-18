'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GithubIcon } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { colorPalette } = useTheme();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/admin/create');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-limelight font-extrabold tracking-wide text-center mb-6 transition-colors duration-200" style={{ color: colorPalette.text }}>Memoriae</h1>
          <h2 className="text-xl font-bold text-center text-primary-800 pb-2 border-b border-gray-300 mb-6">Admin Login</h2>
          
          <form onSubmit={handleLogin} className="space-y-4 flex-grow">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-inputBorder rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-inputText bg-inputBg"
                required
                disabled={loading}
                placeholder="admin@memoriae.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-inputBorder rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-inputText bg-inputBg"
                required
                disabled={loading}
                placeholder="admin123"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6">
            <p className="text-xs text-gray-500 text-center">
              <strong>Credenciais de teste:</strong><br />
              Email: admin@memoriae.com<br />
              Senha: admin123
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 mt-6">
          <a
            href="https://github.com/athilalexandre/memoriae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 