'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, colorPalette } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen" style={{ backgroundColor: colorPalette.background }} />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`} style={{ backgroundColor: colorPalette.background }}>
      {children}
    </div>
  );
} 