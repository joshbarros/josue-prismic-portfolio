import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

type WebVitalsMetric = {
  id: string;
  name: string;
  value: number;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

function sendToAnalytics(metric: WebVitalsMetric) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to your analytics service
  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        id: metric.id,
        rating: metric.rating,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch(console.error);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`
    );
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // Updated from FID to INP (newer metric)
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Performance observer for long tasks
export function observeLongTasks() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`);
            // Send to analytics if needed
            sendToAnalytics({
              id: Math.random().toString(36).substr(2, 9),
              name: 'LongTask',
              value: entry.duration,
              delta: entry.duration,
              rating: entry.duration > 100 ? 'poor' : 'needs-improvement',
            });
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      // PerformanceObserver not supported
      console.warn('PerformanceObserver not supported');
    }
  }
}

// Monitor resource loading performance
export function observeResourceTiming() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resource = entry as PerformanceResourceTiming;
          
          // Monitor slow resources
          if (resource.duration > 1000) {
            console.warn(`Slow resource: ${resource.name} took ${resource.duration}ms`);
          }
          
          // Monitor large resources
          if (resource.transferSize && resource.transferSize > 500000) { // 500KB
            console.warn(`Large resource: ${resource.name} is ${Math.round(resource.transferSize / 1024)}KB`);
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource timing observer not supported');
    }
  }
}