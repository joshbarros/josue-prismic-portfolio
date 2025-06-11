import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const electrolize = Electrolize({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Josh Barros - Solution-Driven Developer",
  description: "Transforming ideas into powerful digital solutions. Expert in modern web development, 3D experiences, and innovative technology implementations."
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
