import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
//import FloatingCartButton from "@/components/FloatingCartButton";
import ClientMetadata from "@/components/ClientMetadata"; // ✅ Import Client Component

export const metadata: Metadata = {
  title: "The Smoking Bee | La Mesa's Premier Smoke Shop",
  description: "Discover premium glassware, vapes, and smoking accessories at The Smoking Bee in La Mesa, CA. Best selection and expert customer service!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <ClientMetadata /> {/* ✅ Render Metadata Client-Side */}
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
         {/* <FloatingCartButton />*/}
        </CartProvider>
      </body>
    </html>
  );
}
