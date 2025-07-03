'use client';

import Bounded from '@/components/Bounded';

export default function ContactLoading() {
  return (
    <Bounded className="bg-gray-900">
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-700 rounded-lg mx-auto mb-6 max-w-md" />
          <div className="h-6 bg-gray-700 rounded mx-auto mb-4 max-w-2xl" />
          <div className="h-6 bg-gray-700 rounded mx-auto max-w-xl" />
        </div>

        {/* Contact form skeleton */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info skeleton */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-700 rounded max-w-xs" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-700 rounded" />
                <div className="h-4 bg-gray-700 rounded w-5/6" />
              </div>
            </div>

            {/* Contact methods skeleton */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gray-700 rounded-lg" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-700 rounded w-1/3" />
                    <div className="h-4 bg-gray-700 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form skeleton */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-12 bg-gray-700 rounded" />
              <div className="h-12 bg-gray-700 rounded" />
            </div>
            <div className="h-12 bg-gray-700 rounded" />
            <div className="h-12 bg-gray-700 rounded" />
            <div className="h-32 bg-gray-700 rounded" />
            <div className="h-12 bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </Bounded>
  );
}