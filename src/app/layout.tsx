// src/app/layout.tsx
import "./globals.css";
import fs from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import ClientMetadata from "@/components/ClientMetadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://thesmokingbee.com"),
  title: "The Smoking Bee | Best Smoke Shop in La Mesa & San Diego",
  description:
    "Looking for the best smoke shop near you? The Smoking Bee, also known as Smoking Bee, offers premium vapes, glass pipes, Puffco, and smoking accessories in La Mesa & San Diego.",
  keywords:
    "smoke shop, La Mesa, San Diego, vapes, glass pipes, smoking accessories, Puffco",
  robots: "index, follow",
  openGraph: {
    title: "The Smoking Bee - La Mesa's Best Smoke Shop",
    description:
      "Visit The Smoking Bee for premium vapes, glass pipes, and smoking accessories in La Mesa & San Diego.",
    url: "https://thesmokingbee.com",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Smoking Bee | La Mesa's #1 Smoke Shop",
    description:
      "Find high-quality smoking accessories, glassware, and vapes at The Smoking Bee.",
    images: ["https://thesmokingbee.com/images/about/1.JPG"],
  },

};

export default async  function RootLayout({ children }: { children: ReactNode }) {
  let seoPages: { slug: string; title: string }[] = []
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "seoPages.json"), "utf8")
    const data: Record<string,{title:string}> = JSON.parse(raw)
    seoPages = Object.entries(data).map(([slug,{title}]) => ({slug,title}))
  } catch {}
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 1) Core meta tags */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
         <meta name="robots" content="index, follow" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://thesmokingbee.com"
        />

        {/* 2) LocalBusiness (you already have this) */}
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
                "La Mesa’s top smoke shop for premium glassware, vapes, and accessories.",
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
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />

        {/* 3) Organization schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Smoking Bee",
              url: "https://thesmokingbee.com",
              logo: "https://thesmokingbee.com/favicon.ico",
              sameAs: [
                "https://www.instagram.com/thesmokingbee",
                "https://www.facebook.com/thesmokingbee",
              ],
            }),
          }}
        />

        {/* 4) WebSite + SearchAction schema (enables a “search box” rich result) */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Smoking Bee",
              url: "https://thesmokingbee.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://thesmokingbee.com/search?query={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "The Smoking Bee",
              url: "https://thesmokingbee.com",
              description:
                "La Mesa’s premier smoke shop offering premium glassware, vapes, and accessories. Smoke Shop Near me, Bongs, Glass, Smoke Shop La Mesa",
            }),
          }}
        />
      </head>

      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <CartProvider>
          <ClientMetadata />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer seoPages={seoPages} />
          {/* <FloatingCartButton /> */}
        </CartProvider>
      </body>
    </html>
  );
}
