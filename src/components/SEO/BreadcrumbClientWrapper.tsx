"use client";

import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

interface Crumb {
  name: string;
  path: string;
}

export default function BreadcrumbClientWrapper({ crumbs }: { crumbs: Crumb[] }) {
  return <BreadcrumbSchema crumbs={crumbs} />;
}
