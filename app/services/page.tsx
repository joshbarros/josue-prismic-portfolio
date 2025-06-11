import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { MdCheckCircle } from "react-icons/md";

const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
    features: [
      "Custom React/Next.js applications",
      "Responsive design across all devices",
      "Performance optimization",
      "SEO implementation",
      "Content management integration",
      "Analytics and tracking setup",
      "Maintenance and support",
      "Cross-browser compatibility"
    ],
    ideal: "Businesses needing a professional online presence that converts visitors into customers."
  },
  {
    title: "Ecommerce Development",
    description: "Complete ecommerce solutions including headless WooCommerce and Shopify development that provide seamless shopping experiences and robust backend management for your online store.",
    features: [
      "Headless WooCommerce development",
      "Headless Shopify development",
      "Custom ecommerce platforms",
      "Payment gateway integration",
      "Inventory management systems",
      "Shopping cart optimization",
      "Product catalog management",
      "Order processing automation"
    ],
    ideal: "Businesses ready to sell online with a scalable, secure ecommerce platform."
  },
  {
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile applications that engage users and extend your business reach to mobile devices.",
    features: [
      "React Native development",
      "iOS and Android compatibility",
      "Push notification systems",
      "Offline functionality",
      "API integration",
      "User authentication",
      "App store optimization",
      "Performance monitoring"
    ],
    ideal: "Companies looking to engage customers through mobile experiences and increase accessibility."
  },
  {
    title: "Custom Solutions",
    description: "Tailored digital solutions designed specifically for your unique business requirements and operational challenges.",
    features: [
      "Business process automation",
      "Custom database solutions",
      "Third-party integrations",
      "Workflow optimization",
      "Data visualization dashboards",
      "API development",
      "System migrations",
      "Legacy system modernization"
    ],
    ideal: "Organizations with specific needs that require custom-built solutions and integrations."
  }
];

export default function ServicesPage() {
  return (
    <main className="py-20">
      <Bounded as="div">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heading as="h1" size="xl" className="mb-6">
            Digital Services That{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Drive Results
            </span>
          </Heading>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From websites to mobile apps and custom solutions, I provide comprehensive
            digital development services tailored to your business needs and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services" className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl bg-slate-800/50 p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                <div>
                  <div className="mb-6">
                    <Heading as="h2" size="lg" className="mb-4">
                      {service.title}
                    </Heading>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-4">What&apos;s Included:</h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <MdCheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-slate-400">
                    <p className="mb-2">
                      <strong className="text-slate-300">Perfect for:</strong> {service.ideal}
                    </p>
                  </div>
                </div>

                <div className="lg:pl-8 flex items-center justify-center">
                  <div className="rounded-xl bg-slate-700/50 p-6 text-center">
                    <h3 className="text-xl font-bold text-yellow-300 mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-slate-400 mb-6">
                      Let&apos;s discuss your project requirements and create a solution tailored to your needs.
                    </p>
                    <Button
                      href="/contact"
                      label="Get Quote"
                      showIcon
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center rounded-2xl bg-gradient-to-r from-yellow-300/10 to-yellow-500/10 p-12">
          <Heading as="h2" size="lg" className="mb-4">
            Ready to Transform Your Digital Presence?
          </Heading>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a solution that drives real results for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/contact" label="Start Your Project" showIcon />
            <Button
              href="/about"
              label="Learn More"
              className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800"
            />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
