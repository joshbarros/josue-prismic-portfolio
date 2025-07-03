'use client';

import Bounded from '@/components/Bounded';

export default function AboutLoading() {
  return (
    <Bounded className="bg-gray-900">
      <div className="animate-pulse">
        {/* Hero section skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-700 rounded-lg mx-auto mb-6 max-w-md" />
          <div className="h-6 bg-gray-700 rounded mx-auto mb-4 max-w-2xl" />
          <div className="h-6 bg-gray-700 rounded mx-auto max-w-xl" />
        </div>

        {/* Content sections skeleton */}
        <div className="grid gap-12 lg:gap-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="h-8 bg-gray-700 rounded max-w-xs" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-700 rounded" />
                  <div className="h-4 bg-gray-700 rounded w-5/6" />
                  <div className="h-4 bg-gray-700 rounded w-4/6" />
                </div>
                <div className="flex gap-4">
                  <div className="h-10 bg-gray-700 rounded w-24" />
                  <div className="h-10 bg-gray-700 rounded w-28" />
                </div>
              </div>
              <div className="h-64 bg-gray-700 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}