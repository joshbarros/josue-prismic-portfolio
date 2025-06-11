import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="py-20">
      <Bounded as="div">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heading as="h1" size="xl" className="mb-6">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Together
          </Heading>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? I&apos;d love to hear about your project
            and discuss how we can create a website, mobile app, or custom solution that drives real results for your business.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          {/* Contact Form */}
          <div className="rounded-2xl bg-slate-800/50 p-8">
            <Heading as="h2" size="lg" className="mb-6">
              Start Your Project
            </Heading>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-slate-800/30 p-6">
              <Heading as="h3" size="md" className="mb-6">
                Get In Touch
              </Heading>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-300/10">
                    <MdEmail className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-300">Email</p>
                    <p className="text-slate-400">goldenglowitsolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-300/10">
                    <MdPhone className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-300">Phone</p>
                    <p className="text-slate-400">+55 22 98125-0144</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-300/10">
                    <MdLocationOn className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-300">Location</p>
                    <p className="text-slate-400">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800/30 p-6">
              <Heading as="h3" size="md" className="mb-6">
                Connect With Me
              </Heading>

              <div className="flex gap-4">
                <a
                  href="https://github.com/joshbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 transition-all hover:bg-yellow-300/10 hover:text-yellow-300"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/joshbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 transition-all hover:bg-yellow-300/10 hover:text-yellow-300"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                                  <a
                    href="https://wa.me/5522981250144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 transition-all hover:bg-yellow-300/10 hover:text-yellow-300"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                  </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-yellow-300/10 to-yellow-500/10 p-6">
              <Heading as="h3" size="md" className="mb-4">
                Response Time
              </Heading>
              <p className="text-slate-400">
                I typically respond to all inquiries within 24 hours.
                For urgent projects, feel free to reach out via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
