// src/app/contact/page.tsx
import ContactContent from "./ContactContent";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export const metadata = {
  title: "Contact | The Smoking Bee",
  description: "Contact The Smoking Bee for premium smoking accessories in La Mesa.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 py-12">
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