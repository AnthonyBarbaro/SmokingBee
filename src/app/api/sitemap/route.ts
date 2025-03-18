import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export async function GET() {
  const sitemapEntries = await sitemap();
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries
      .map(({ url, lastModified }) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`)
      .join("\n")}
  </urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
