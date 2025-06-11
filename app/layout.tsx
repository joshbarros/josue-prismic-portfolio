import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const electrolize = Electrolize({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Golden Glow IT Solutions - Digital Transformation Experts",
  description: "Transform your business with modern web development, ecommerce solutions, and mobile applications. Expert digital solutions that drive real results for your business growth."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 text-slate-100">
      <body className={electrolize.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
