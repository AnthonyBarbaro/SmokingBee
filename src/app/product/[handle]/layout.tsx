// src/app/product/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClientBackButton from "@/components/ClientBackButton";

/**
 * Segment-level defaults for all /product/* routes.
 * If a child page provides its own title via generateMetadata (it should),
 * that title wins; otherwise this fallback is used.
 */
export const metadata: Metadata = {
  title: {
    default: "Products",
    template: "%s | The Smoking Bee",
  },
};
export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen">
      {/* Client component is fine inside a Server layout */}
      <ClientBackButton />
      {children}
    </section>
  );
}
