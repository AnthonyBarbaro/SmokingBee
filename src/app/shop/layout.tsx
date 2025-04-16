// src/app/shop/layout.tsx
"use client";

import { ReactNode } from "react";
import ClientBackButton from "@/components/ClientBackButton";
import SearchBar from "@/components/SearchBar";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header className="
        sticky top-0 z-50
        w-full
        bg-white
        border-b border-gray-200
        px-4 py-3
        flex items-center justify-center
        shadow-sm
      ">
        <div className="flex items-center gap-4 w-full max-w-3xl">
          <ClientBackButton />
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1">
        {children}
      </main>
    </section>
  );
}
