// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script"; // <-- Add next/script for injecting JSON-LD
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import ClientMetadata from "@/components/ClientMetadata"; // ✅ Import Client Component

export const metadata: Metadata = {
  title: "The Smoking Bee | Best Smoke Shop in La Mesa & San Diego",
  description:
    "Looking for the best smoke shop near you? The Smoking Bee, also known as Smoking Bee, offers premium vapes, glass pipes, Puffco, and smoking accessories in La Mesa & San Diego.",
  keywords:
    "The Smoking Bee, Smoking Bee, smoke shop near me, smoke shop La Mesa, best smoke shop San Diego, vapes, glass pipes, smoking accessories, head shop near me, premium glassware, Puffco Peak Pro, Puffco Proxy, dab rigs, rolling papers, bongs, hookahs",
  openGraph: {
    title: "The Smoking Bee - La Mesa's Best Smoke Shop",
    description:
      "Visit The Smoking Bee, the best smoke shop in La Mesa & San Diego, offering premium vapes, glass pipes, and accessories.",
    images: "https://thesmokingbee.com/images/about/1.JPG",
    url: "https://thesmokingbee.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Smoking Bee | La Mesa's #1 Smoke Shop",
    description:
      "Find high-quality smoking accessories, glassware, and vapes at The Smoking Bee. The best smoke shop in La Mesa and San Diego!",
    images: "https://thesmokingbee.com/images/about/1.JPG",
  },

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 
          Inject LocalBusiness JSON-LD via a <script> tag so Google can parse it properly.
          The openingHoursSpecification array ensures each day is listed. 
        */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Smoking Bee",
              alternateName: "Smoking Bee",
              url: "https://thesmokingbee.com",
              image: "https://thesmokingbee.com/images/about/1.JPG",
              description:
                "The Smoking Bee, also known as Smoking Bee, is La Mesa's top smoke shop for premium glassware, vapes, and smoking accessories.",
              telephone: "(619) 467-7055",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7584 University Ave Suite B",
                addressLocality: "La Mesa",
                addressRegion: "CA",
                postalCode: "91942",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "32.7601",
                longitude: "-117.0222",
              },
              sameAs: [
                "https://www.instagram.com/thesmokingbee",
                "https://www.facebook.com/thesmokingbee",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  "opens": "09:00",
                  "closes": "21:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <CartProvider>
          <ClientMetadata /> {/* ✅ Handles SpeedInsights in the client */}
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* <FloatingCartButton /> */}
        </CartProvider>
      </body>
    </html>
  );
}
