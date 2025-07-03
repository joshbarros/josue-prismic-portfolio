'use client';

import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    // Prevent layout shift by maintaining page height
    document.body.style.minHeight = '100vh';
    
    return () => {
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Optimized spinner with CSS transforms */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-transparent border-b-purple-500 border-l-purple-500 rounded-full animate-spin animate-reverse" />
        </div>
        
        {/* Loading text with fade animation */}
        <div className="text-slate-300 font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}