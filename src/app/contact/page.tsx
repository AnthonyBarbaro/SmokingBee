// src/app/contact/page.tsx
import Head from "next/head";
import ContactContent from "./ContactContent";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export const metadata = {
  title: "Contact | The Smoking Bee, Smoke Shop near La Mesa",
  description: "Contact The Smoking Bee for premium smoking accessories in La Mesa. Vapes, Bongs, Glass, Puffco",
  alternates: {
    canonical: "https://thesmokingbee.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 py-12">
      <Head>
        <link rel="canonical" href="https://thesmokingbee.com/contact" />
      </Head>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactContent />
    </main>
  );
}