import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { MdWeb, MdShoppingCart, MdPhoneIphone, MdSettings } from "react-icons/md";

const solutions = [
  {
    icon: MdWeb,
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Performance Focused"]
  },
  {
    icon: MdShoppingCart,
    title: "Ecommerce Development",
    description: "Complete ecommerce solutions including headless WooCommerce and Shopify development with seamless shopping experiences, secure payment processing, and robust management systems.",
    features: ["Headless WooCommerce", "Headless Shopify", "Payment Integration", "Inventory Management"]
  },
  {
    icon: MdPhoneIphone,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile applications that engage users and extend your business reach to mobile devices.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"]
  },
  {
    icon: MdSettings,
    title: "Custom Solutions",
    description: "Tailored digital solutions designed specifically for your unique business requirements and operational challenges.",
    features: ["Process Automation", "API Integration", "Custom Databases", "System Migration"]
  }
];

export default function Solutions() {
  return (
    <section className="py-20">
      <Bounded as="div">
        <div className="text-center mb-16">
          <Heading as="h2" size="xl" className="mb-4">
            Digital Solutions That{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Businesses
          </Heading>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From websites to mobile apps and custom solutions, I deliver comprehensive digital
            development services that drive engagement, increase conversions, and accelerate growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="group relative rounded-2xl bg-slate-800/50 p-8 transition-all hover:bg-slate-800/70">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/10 to-yellow-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-300/10">
                    <Icon className="h-8 w-8 text-yellow-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-block rounded-full bg-yellow-300/10 px-3 py-1 text-sm text-yellow-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/services" label="Explore All Services" showIcon className="mx-auto" />
        </div>
      </Bounded>
    </section>
  );
}
