import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { CartProvider } from "@/context/CartContext";
import FloatingCartButton from "@/components/FloatingCartButton";

export const metadata: Metadata = {
  title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
  description: "Discover premium glassware, vapes, and smoking accessories at The Smoking Bee in La Mesa, CA. Best selection and expert customer service!"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="The Smoking Bee is the best smoke shop in La Mesa, CA, offering premium glassware, vapes, and smoking accessories. Visit us today!" />
        <meta name="keywords" content="smoke shop La Mesa, best smoke shop in La Mesa, vapes, glass pipes, smoking accessories, premium glassware" />
        <meta name="author" content="The Smoking Bee" />
        <meta property="og:title" content="The Smoking Bee - La Mesa's Best Smoke Shop" />
        <meta property="og:description" content="Find high-quality glass pipes, vapes, and smoking accessories at The Smoking Bee in La Mesa, CA. Best selection and expert customer service!" />
        <meta property="og:image" content="public/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com" />
        <meta name="twitter:title" content="The Smoking Bee | La Mesa's Best Smoke Shop" />
        <meta name="twitter:description" content="Discover top-quality smoking accessories, glassware, and vapes in La Mesa. Visit The Smoking Bee today!" />
        <meta name="twitter:image" content="public/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
