import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

// ISR configuration - revalidate every hour
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog - Golden Glow IT Solutions",
  description: "Latest insights, tutorials, and industry news from our digital transformation experts.",
  openGraph: {
    title: "Blog - Golden Glow IT Solutions", 
    description: "Latest insights, tutorials, and industry news from our digital transformation experts.",
    url: "https://goldenglowitsolutions.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="py-20">
      <Bounded as="div">
        <div className="text-center mb-20">
          <Heading as="h1" size="xl" className="mb-6">
            Digital Insights &{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </Heading>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stay updated with the latest trends in web development, 3D experiences,
            and digital solutions. Coming soon with fresh insights and tutorials.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-12 text-center">
          <div className="mb-8">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-yellow-300/10 flex items-center justify-center">
              <svg className="h-12 w-12 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <Heading as="h2" size="lg" className="mb-4">
              Blog Coming Soon
            </Heading>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              I&apos;m preparing a collection of insights, tutorials, and case studies about
              modern web development, 3D experiences, and digital solution strategies.
              Stay tuned for valuable content that will help you understand the latest
              trends and best practices in digital development.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button href="/services" label="Explore Services" showIcon />
            <Button
              href="/contact"
              label="Get Notified"
              className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800"
            />
          </div>
        </div>

        {/* Topics Preview */}
        <div className="mt-20">
          <Heading as="h3" size="md" className="mb-8 text-center">
            Upcoming Topics
          </Heading>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-slate-700/30 p-6 text-center">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Web Development</h4>
              <p className="text-slate-400 text-sm">
                React, Next.js, TypeScript best practices and advanced techniques
              </p>
            </div>
            <div className="rounded-lg bg-slate-700/30 p-6 text-center">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">3D & Interactive</h4>
              <p className="text-slate-400 text-sm">
                Three.js tutorials, WebGL optimization, and animation techniques
              </p>
            </div>
            <div className="rounded-lg bg-slate-700/30 p-6 text-center">
              <h4 className="text-lg font-semibold text-yellow-300 mb-2">Performance</h4>
              <p className="text-slate-400 text-sm">
                Core Web Vitals, SEO strategies, and conversion optimization
              </p>
            </div>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
