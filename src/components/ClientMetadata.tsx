"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function ClientMetadata() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
