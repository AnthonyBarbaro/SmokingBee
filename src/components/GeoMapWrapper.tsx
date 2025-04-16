"use client";
import dynamic from "next/dynamic";

// Lazy-load GeoMap client-side only
const GeoMap = dynamic(() => import("./GeoMap"), { ssr: false });

export default function GeoMapWrapper() {
  return <GeoMap />;
}
