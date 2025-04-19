import { getCollections, getAllProductHandles } from "@/lib/shopify";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-static";

export default async function SitemapHTMLPage() {
  const baseUrl = "https://thesmokingbee.com";

  // 1) Static
  const staticPaths = ["/", "/shop", "/about", "/contact", "/locations"];

  // 2) SEO slugs
  let seoSlugs: string[] = [];
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), "seoPages.json"),
      "utf8"
    );
    seoSlugs = Object.keys(JSON.parse(raw) as Record<string, unknown>);
  } catch {}

  // 3) Shopify
  const products = await getAllProductHandles();      // string[]
  const collections = (await getCollections()).map(c => c.node.handle);

  const allPaths = [
    ...staticPaths,
    ...seoSlugs.map((s) => `/${s}`),
    ...products.map((h) => `/product/${h}`),
    ...collections.map((h) => `/shop/${h}`),
  ];

  return (
    <main>
      <h1>HTML Sitemap for TheSmokingBee.com</h1>
      <ul>
        {allPaths.map((p) => (
          <li key={p}>
            <a href={`${baseUrl}${p}`}>{p}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
