import { NextRequest, NextResponse } from "next/server";
import { shopifySearchProducts, getAllProducts } from "@/lib/shopify";
import Fuse from "fuse.js";
let cachedProducts: any[] = [];
let lastFetched = 0;

async function getCachedProducts() {
  const now = Date.now();
  if (cachedProducts.length === 0 || now - lastFetched > 5 * 60 * 1000) {
    const raw = await getAllProducts(); // existing function
    cachedProducts = raw.map((p) => p.node); // flatten immediately
    lastFetched = now;
  }
  return cachedProducts;
}
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query) return NextResponse.json([]);

  try {
    // 1. Try Shopify direct search
    let results = await shopifySearchProducts(query);

    // 2. Fallback to fuzzy search if weak results
    if (results.length < 3) {
      const allProducts = await getCachedProducts();
      const fuse = new Fuse(allProducts.map((p) => p.node), {
        keys: ["title", "vendor", "productType", "description", "tags"],
        threshold: 0.3,
      });

      const fuzzyResults = fuse.search(query).map((r) => r.item);

      // Combine both results
      results = [...results, ...fuzzyResults];
    }

    // 3. Deduplicate by product handle
    const deduped = Array.from(
      new Map(results.map((p) => [p.handle, p])).values()
    );

    // 4. Limit to 10 results
    return NextResponse.json(deduped.slice(0, 10));
  } catch (error: any) {
    console.error("Search failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
