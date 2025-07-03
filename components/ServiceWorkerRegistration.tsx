'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker after page load to avoid blocking critical resources
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          console.log('Service Worker registered successfully:', registration.scope);

          // Update available - notify user
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available
                  console.log('New content available! Please refresh.');
                  
                  // You could show a toast notification here
                  if (confirm('New content available! Would you like to refresh?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Check for updates every 24 hours
          setInterval(() => {
            registration.update();
          }, 24 * 60 * 60 * 1000);

        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
          window.location.reload();
        }
      });

      // Handle offline/online status
      const handleOnline = () => {
        console.log('Back online');
        // Trigger background sync if available
        if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
          navigator.serviceWorker.ready.then((registration) => {
            // Type assertion for sync API (experimental feature)
            return (registration as any).sync?.register('contact-form');
          });
        }
      };

      const handleOffline = () => {
        console.log('Gone offline');
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return null;
}