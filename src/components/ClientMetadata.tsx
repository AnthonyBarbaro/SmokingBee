"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function ClientMetadata() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <Head>
      <meta name="description" content="The Smoking Bee is the best smoke shop in La Mesa, CA, offering premium glassware, vapes, and smoking accessories. Visit us today!" />
      <meta name="keywords" content="smoke shop La Mesa, best smoke shop in La Mesa, vapes, glass pipes, smoking accessories, premium glassware" />
      <meta name="author" content="The Smoking Bee" />
      <meta property="og:title" content="The Smoking Bee - La Mesa's Best Smoke Shop" />
      <meta property="og:description" content="Find high-quality glass pipes, vapes, and smoking accessories at The Smoking Bee in La Mesa, CA. Best selection and expert customer service!" />
      <meta property="og:image" content="/images/about/1.JPG" />
      <meta property="og:url" content="https://thesmokingbee.com" />
      <meta name="twitter:title" content="The Smoking Bee | La Mesa's Best Smoke Shop" />
      <meta name="twitter:description" content="Discover top-quality smoking accessories, glassware, and vapes in La Mesa. Visit The Smoking Bee today!" />
      <meta name="twitter:image" content="/images/about/1.JPG" />
      <meta name="twitter:card" content="/images/about/1.JPG" />
    </Head>
  );
}
