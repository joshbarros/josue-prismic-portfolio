'use client';

import Bounded from '@/components/Bounded';

export default function ServicesLoading() {
  return (
    <Bounded className="bg-gray-900">
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-700 rounded-lg mx-auto mb-6 max-w-lg" />
          <div className="h-6 bg-gray-700 rounded mx-auto mb-4 max-w-3xl" />
          <div className="h-6 bg-gray-700 rounded mx-auto max-w-2xl" />
        </div>

        {/* Services grid skeleton */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 space-y-4">
              <div className="h-12 w-12 bg-gray-700 rounded-lg" />
              <div className="h-6 bg-gray-700 rounded max-w-xs" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded" />
                <div className="h-4 bg-gray-700 rounded w-5/6" />
                <div className="h-4 bg-gray-700 rounded w-4/6" />
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex items-center space-x-2">
                    <div className="h-4 w-4 bg-gray-700 rounded-full" />
                    <div className="h-4 bg-gray-700 rounded flex-1" />
                  </div>
                ))}
              </div>
              <div className="h-10 bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}