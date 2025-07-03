'use client';

import { useEffect } from 'react';
import { reportWebVitals, observeLongTasks, observeResourceTiming } from '@/lib/web-vitals';

export default function WebVitalsReporter() {
  useEffect(() => {
    // Report web vitals
    reportWebVitals();
    
    // Observe performance issues
    observeLongTasks();
    observeResourceTiming();

    // Performance budget checks
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Check for potential performance issues
      const checkPerformanceBudget = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          // Check if DOM content loaded takes too long
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          if (domContentLoaded > 1000) {
            console.warn(`DOM Content Loaded took ${domContentLoaded}ms (budget: 1000ms)`);
          }

          // Check if load event takes too long
          const loadEvent = navigation.loadEventEnd - navigation.loadEventStart;
          if (loadEvent > 2000) {
            console.warn(`Load event took ${loadEvent}ms (budget: 2000ms)`);
          }

          // Check total page load time
          const totalLoadTime = navigation.loadEventEnd - navigation.fetchStart;
          if (totalLoadTime > 3000) {
            console.warn(`Total page load time: ${totalLoadTime}ms (budget: 3000ms)`);
          }
        }
      };

      // Check performance budget after page load
      if (document.readyState === 'complete') {
        checkPerformanceBudget();
      } else {
        window.addEventListener('load', checkPerformanceBudget);
      }

      // Memory usage monitoring (Chrome only)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (memoryUsage > 0.8) {
          console.warn(`High memory usage detected: ${Math.round(memoryUsage * 100)}%`);
        }
      }
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', () => {});
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}