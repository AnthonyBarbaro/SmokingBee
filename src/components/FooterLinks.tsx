// src/components/FooterLinks.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";

export const dynamic = "force-dynamic";

type SEOPage = {
  title: string;
  description: string;
};

export default function FooterLinks() {
  // 1) Load seoPages.json
  const seoJsonPath = path.join(process.cwd(), "seoPages.json");
  const rawData = fs.readFileSync(seoJsonPath, "utf8");
  const seoPages: Record<string, SEOPage> = JSON.parse(rawData);

  // 2) Convert to an array
  const linkEntries = Object.entries(seoPages).map(([slug, data]) => ({
    slug,
    title: data.title || slug,
  }));

  // 3) Limit to first 5
  const limitedLinks = linkEntries.slice(0, 1);

  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-2">Explore More Pages</h4>
      <ul className="space-y-1 text-sm">
        {limitedLinks.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/${slug}`} className="text-blue-400 hover:underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Link to all pages */}
      <p className="text-sm mt-2">
        <Link href="/locations" className="text-gold underline hover:text-yellow-300">
          See All Pages
        </Link>
      </p>
    </div>
  );
}
