// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { getAllProductHandles, getCollections } from "@/lib/shopify";
import path from "path";
import fs from "fs/promises";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://thesmokingbee.com";

  // 1) Static pages
  const staticPages = [
    { loc: "/",          changefreq: "daily",   priority: 1.0 },
    { loc: "/shop",      changefreq: "weekly",  priority: 0.9 },
    { loc: "/about",     changefreq: "monthly", priority: 0.6 },
    { loc: "/contact",   changefreq: "monthly", priority: 0.6 },
    { loc: "/locations", changefreq: "monthly", priority: 0.6 },
  ].map(({ loc, changefreq, priority }) => ({
    url:       `${baseUrl}${loc}`,
    lastmod:   new Date().toISOString(),
    changefreq,
    priority,
  }));

  // 2) SEO pages (from seoPages.json)
  let seoSlugs: string[] = [];
  try {
    const raw     = await fs.readFile(path.join(process.cwd(), "seoPages.json"), "utf8");
    const data    = JSON.parse(raw) as Record<string, unknown>;
    seoSlugs       = Object.keys(data);
  } catch {
    // no seoPages.json → skip
  }
  const seoPages = seoSlugs.map(slug => ({
    url:       `${baseUrl}/${slug}`,
    lastmod:   new Date().toISOString(),
    changefreq:'weekly' as const,
    priority:  0.8,
  }));

  // 3) Shopify products
  const products = await getAllProductHandles();
  const productPages = products.map(handle => ({
    url:       `${baseUrl}/product/${handle}`,
    lastmod:   new Date().toISOString(),
    changefreq:'monthly' as const,
    priority:  0.7,
  }));

  // 4) Shopify collections
  const collections = await getCollections();
  const collectionPages = collections.map(c => ({
    url:       `${baseUrl}/shop/${c.node.handle}`,
    lastmod:   new Date().toISOString(),
    changefreq:'weekly' as const,
    priority:  0.9,
  }));

  // Combine _all_ entries
  const entries = [
    ...staticPages,
    ...seoPages,
    ...productPages,
    ...collectionPages,
  ];

  // Render XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const { url, lastmod, changefreq, priority } of entries) {
    const pr = priority.toFixed(1); // “1” → “1.0”
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${pr}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}