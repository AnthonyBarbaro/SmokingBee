// src/app/locations/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";
export const dynamic = "force-dynamic";

type SEOPage = {
  title: string;
  description: string;
};

export default function LocationsPage() {
  // 1) Load seoPages.json
  const seoJsonPath = path.join(process.cwd(), "seoPages.json");
  const rawData = fs.readFileSync(seoJsonPath, "utf8");
  const seoPages: Record<string, SEOPage> = JSON.parse(rawData);

  // 2) Convert to array
  const linkEntries = Object.entries(seoPages).map(([slug, data]) => ({
    slug,
    title: data.title || slug,
  }));

  // 3) Render them all
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-2xl font-bold mb-4 text-center">All Pages</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {linkEntries.map(({ slug, title }) => (
            <li
              key={slug}
              className="border border-gray-200 p-4 rounded-md shadow hover:shadow-md transition"
            >
              <Link href={`/${slug}`} className="text-blue-600 hover:underline">
                <h2 className="font-semibold text-lg">{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
