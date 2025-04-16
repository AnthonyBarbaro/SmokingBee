// src/app/product/layout.tsx (All client-side)
"use client";

import { ReactNode } from "react";
import ClientBackButton from "@/components/ClientBackButton";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen">
      <ClientBackButton />
      {children}
    </section>
  );
}
