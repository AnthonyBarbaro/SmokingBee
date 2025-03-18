//src/app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllProductHandles, getCollections } from "@/lib/shopify";
import path from "path";
import fsPromises from "fs/promises"; 
import fs from "fs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://thesmokingbee.com";

  // ✅ Fetch all product handles from Shopify
  const productHandles = await getAllProductHandles();
  const collections = await getCollections();

  // ✅ Static Pages with accurate `lastModified` dates
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/shop`, lastModified: new Date().toISOString(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  // ✅ Load SEO Pages safely
  let seoPagesData = {};
  try {
    const seoPagesJsonPath = path.join(process.cwd(), "seoPages.json");
    const fileContent = await fsPromises.readFile(seoPagesJsonPath, "utf8");
    seoPagesData = JSON.parse(fileContent);
  } catch (error) {
    console.error("Failed to load seoPages.json:", error);
  }

  // ✅ Function to get actual file modification date
  const getLastModified = (slug: string): string => {
    const filePath = path.join(process.cwd(), `src/app/seo/${slug}/page.tsx`);
    return fs.existsSync(filePath) ? fs.statSync(filePath).mtime.toISOString() : new Date().toISOString();
  };

  // ✅ SEO Pages with accurate modification dates
  const seoPages: MetadataRoute.Sitemap = Object.keys(seoPagesData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: getLastModified(slug),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  // ✅ Shopify Product URLs
  const productUrls: MetadataRoute.Sitemap = productHandles.map((handle) => ({
    url: `${baseUrl}/products/${handle}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // ✅ Shopify Collection URLs
  const collectionUrls: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/shop/${collection.node.handle}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticPages, ...seoPages, ...productUrls, ...collectionUrls];
}