import { MetadataRoute } from "next";
import { getAllProductHandles, getCollections } from "@/lib/shopify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ✅ Fetch all product handles from Shopify
  const productHandles = await getAllProductHandles();
  const collections = await getCollections();

  // ✅ Base URLs for important pages
  const staticPages = [
    { url: "https://thesmokingbee.com/", lastModified: new Date().toISOString() },
    { url: "https://thesmokingbee.com/shop", lastModified: new Date().toISOString() },
    { url: "https://thesmokingbee.com/about", lastModified: new Date().toISOString() },
    { url: "https://thesmokingbee.com/contact", lastModified: new Date().toISOString() },
  ];

  // ✅ Product URLs
  const productUrls = productHandles.map((handle) => ({
    url: `https://thesmokingbee.com/products/${handle}`,
    lastModified: new Date().toISOString(),
  }));

  // ✅ Collection URLs (categories like "Glassware", "Vapes", etc.)
  const collectionUrls = collections.map((collection) => ({
    url: `https://thesmokingbee.com/shop/${collection.node.handle}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...productUrls, ...collectionUrls];
}
