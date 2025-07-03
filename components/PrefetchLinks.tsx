'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrefetchLinks() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch critical routes on hover/mouseover
    const prefetchOnHover = (selector: string, route: string) => {
      const links = document.querySelectorAll(selector);
      
      links.forEach((link) => {
        const handleMouseEnter = () => {
          router.prefetch(route);
        };

        link.addEventListener('mouseenter', handleMouseEnter, { once: true });
        
        // Cleanup
        return () => {
          link.removeEventListener('mouseenter', handleMouseEnter);
        };
      });
    };

    // Prefetch on intersection (when links become visible)
    const prefetchOnIntersection = (routes: string[]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const route = entry.target.getAttribute('data-prefetch-route');
              if (route) {
                router.prefetch(route);
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { rootMargin: '50px' }
      );

      // Add data attributes to navigation links
      const navLinks = document.querySelectorAll('a[href^="/"]');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && routes.includes(href)) {
          link.setAttribute('data-prefetch-route', href);
          observer.observe(link);
        }
      });

      return () => observer.disconnect();
    };

    // Critical routes to prefetch
    const criticalRoutes = ['/about', '/services', '/contact'];
    
    // Set up prefetching
    const cleanup1 = prefetchOnIntersection(criticalRoutes);
    
    // Prefetch on specific hover selectors
    prefetchOnHover('a[href="/services"]', '/services');
    prefetchOnHover('a[href="/about"]', '/about');
    prefetchOnHover('a[href="/contact"]', '/contact');

    // Prefetch important routes after initial load
    const prefetchTimer = setTimeout(() => {
      criticalRoutes.forEach(route => {
        router.prefetch(route);
      });
    }, 2000); // Wait 2 seconds after load

    return () => {
      cleanup1();
      clearTimeout(prefetchTimer);
    };
  }, [router]);

  return null;
}