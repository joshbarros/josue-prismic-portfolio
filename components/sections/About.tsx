import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

export default function About() {
  return (
    <section className="py-20 bg-slate-800/50">
      <Bounded as="div">
        <div className="grid gap-y-8 lg:grid-cols-[1fr,2fr] lg:gap-x-12">
          <div>
            <Heading as="h2" size="lg" className="text-yellow-300">
              Why Choose My Solutions
            </Heading>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg prose-slate prose-invert">
                            <p>
                With years of experience in modern web development, I specialize in creating
                digital solutions that don&apos;t just look great—they deliver measurable results
                for your business.
              </p>

              <p>
                My approach combines cutting-edge technology with strategic thinking. Whether
                you need a professional website, an ecommerce platform, a mobile application, or a
                custom solution, I focus on understanding your unique challenges
                and building solutions that scale with your growth.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-slate-700/50 p-6">
                                                <h3 className="text-xl font-bold text-yellow-300 mb-3">Technical Excellence</h3>
                <p className="text-slate-300">
                  Full-stack expertise from frontend (React, Redux) to backend (Java, Python, Golang),
                  cloud platforms (AWS, GCP, Azure), and data engineering to create comprehensive solutions.
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Results-Driven</h3>
                <p className="text-slate-300">
                  Every project is built with your business goals in mind, focusing on user
                  experience, performance, and conversion optimization.
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Collaborative Process</h3>
                <p className="text-slate-300">
                  I work closely with you throughout the entire development process, ensuring
                  your vision is brought to life exactly as you imagined.
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Future-Proof Solutions</h3>
                <p className="text-slate-300">
                  Building scalable, maintainable solutions that grow with your business
                  and adapt to changing market demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
