// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { getAllProductHandles, getCollections } from "@/lib/shopify";
import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";

export async function GET() {
  const baseUrl = "https://thesmokingbee.com";

  // 1) Static pages
  const staticPages = [
    { loc: "/",        changefreq: "daily",   priority: 1.0 },
    { loc: "/shop",    changefreq: "weekly",  priority: 0.9 },
    { loc: "/about",   changefreq: "monthly", priority: 0.6 },
    { loc: "/contact", changefreq: "monthly", priority: 0.6 },
    { loc: "/locations", changefreq: "monthly", priority: 0.6 },
  ].map(p => ({
    ...p,
    lastmod: new Date().toISOString(),
    url: baseUrl + p.loc,
  }));

  // 2) SEO pages from seoPages.json
  let seoPagesData: Record<string, any> = {};
  try {
    const json = await fsPromises.readFile(
      path.join(process.cwd(), "seoPages.json"),
      "utf8"
    );
    seoPagesData = JSON.parse(json);
  } catch {
    /* ignore if missing */
  }

  const seoPages = Object.keys(seoPagesData).map(slug => {
    const file = path.join(process.cwd(), `src/app/seo/${slug}/page.tsx`);
    const lastmod = fs.existsSync(file)
      ? fs.statSync(file).mtime.toISOString()
      : new Date().toISOString();
    return {
      url: `${baseUrl}/${slug}`,
      lastmod,
      changefreq: "weekly",
      priority: 0.8,
    };
  });

  // 3) Shopify product handles
  const productHandles = await getAllProductHandles();
  const productUrls = productHandles.map(handle => ({
    url: `${baseUrl}/product/${handle}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  // 4) Shopify collections
  const collections = await getCollections();
  const collectionUrls = collections.map(c => ({
    url: `${baseUrl}/shop/${c.node.handle}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.9,
  }));

  // Combine all entries
  const entries = [
    ...staticPages,
    ...seoPages,
    ...productUrls,
    ...collectionUrls,
  ];

  // Build XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const { url, lastmod, changefreq, priority } of entries) {
    const pr = (typeof priority === "number"
      ? priority.toFixed(1)
      : "0.0");
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
