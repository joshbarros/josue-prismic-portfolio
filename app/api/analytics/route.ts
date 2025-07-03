import { NextRequest, NextResponse } from 'next/server';

interface WebVitalData {
  metric: string;
  value: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  url: string;
  userAgent: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: WebVitalData = await request.json();
    
    // Validate the data
    if (!data.metric || typeof data.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${data.metric}: ${data.value}ms (${data.rating})`);
    }

    // Here you would typically send to your analytics service
    // Examples:
    // - Google Analytics 4
    // - DataDog
    // - New Relic
    // - Custom analytics database
    
    // For now, we'll just log it
    // In production, you might want to:
    // 1. Store in a database
    // 2. Send to external analytics service
    // 3. Aggregate metrics for dashboards
    
    const performanceData = {
      metric: data.metric,
      value: data.value,
      rating: data.rating,
      timestamp: new Date(data.timestamp).toISOString(),
      url: new URL(data.url).pathname,
      userAgent: data.userAgent.substring(0, 100), // Truncate for storage
    };

    // Log to structured format for monitoring tools
    console.log('PERFORMANCE_METRIC', JSON.stringify(performanceData));

    return NextResponse.json({ 
      success: true, 
      message: 'Analytics data received' 
    });
    
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle CORS for analytics requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}