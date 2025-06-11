import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Bounded as="div">
        {/* Hero Section */}
        <div className="grid gap-y-8 lg:grid-cols-[2fr,1fr] lg:gap-x-12 mb-20">
          <div>
            <Heading as="h1" size="xl" className="mb-6">
              Building Digital Solutions That{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Matter
              </span>
            </Heading>
                        <div className="prose prose-xl prose-slate prose-invert">
              <p>
                I&apos;m Josh Barros, a digital solutions architect specializing in modern web
                development, mobile applications, and ecommerce solutions. With a passion for
                turning complex business challenges into elegant digital solutions, I help
                organizations transform their online presence and drive meaningful results.
              </p>
              <p>
                My approach combines technical excellence with strategic thinking. I don&apos;t just
                build websites—I create digital experiences that engage users, drive conversions,
                and scale with your business growth.
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/20 to-yellow-500/30 blur-2xl"></div>
              <div className="absolute inset-0 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-600/20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <Heading as="h2" size="lg" className="mb-12 text-center">
            Core Expertise
          </Heading>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Frontend & Mobile Development</h3>
              <p className="text-slate-300 mb-4">
                Expert in React, Redux, React Native, TypeScript, and modern frontend frameworks.
                Creating responsive, accessible, and performant user interfaces across web and mobile.
              </p>
              <div className="text-sm text-slate-400">
                React • Redux • React Native • TypeScript • JavaScript
              </div>
            </div>

                                    <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Backend & Cloud Development</h3>
              <p className="text-slate-300 mb-4">
                Full-stack backend development with Java, Spring Boot, Python, Golang, and Node.js.
                Cloud deployment and scaling on AWS, GCP, and Azure platforms.
              </p>
              <div className="text-sm text-slate-400">
                Java • Spring Boot • Python • Golang • NodeJS • AWS • GCP • Azure
              </div>
            </div>

                                    <div className="rounded-xl bg-slate-800/50 p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Data Engineering & DevOps</h3>
              <p className="text-slate-300 mb-4">
                Data engineering with Databricks, PySpark, ETL pipelines, and DevOps
                automation using Docker, Kubernetes, Terraform, and CI/CD pipelines.
              </p>
              <div className="text-sm text-slate-400">
                Databricks • PySpark • Docker • Kubernetes • Terraform • CI/CD
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-20 rounded-2xl bg-slate-800/30 p-12">
          <Heading as="h2" size="lg" className="mb-8 text-center">
            My Approach
          </Heading>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Discovery & Strategy</h3>
              <p className="text-slate-300">
                Every project begins with understanding your business goals, target audience,
                and technical requirements. I believe great solutions start with great questions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Design & Development</h3>
              <p className="text-slate-300">
                Using modern development practices and cutting-edge technologies to build
                solutions that are both beautiful and functional.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Testing & Optimization</h3>
              <p className="text-slate-300">
                Rigorous testing across devices and browsers, followed by performance
                optimization to ensure the best possible user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Launch & Support</h3>
              <p className="text-slate-300">
                Smooth deployment and ongoing support to ensure your solution continues
                to perform and evolve with your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Heading as="h2" size="lg" className="mb-6">
            Ready to Start Your Next Project?
          </Heading>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help transform your digital presence and drive real results for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/services" label="View Services" showIcon />
            <Button
              href="/contact"
              label="Get In Touch"
              className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800"
            />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
