//src/app/api/sitemap/route.ts
import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export async function GET() {
  const sitemapEntries = await sitemap();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries
      .map(({ url, lastModified, changeFrequency, priority }) => `  
      <url>
        <loc>${url}</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>${changeFrequency}</changefreq>
        <priority>${priority}</priority>
      </url>`)
      .join("\n")}
  </urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
