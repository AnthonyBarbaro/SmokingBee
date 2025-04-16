// src/lib/fuzzySearch.ts
import Fuse from "fuse.js";

export async function fuzzySearchProducts(products: any[], query: string) {
  // Configure how fuzzy the matching is
  const fuse = new Fuse(products, {
    keys: ["title", "vendor", "productType", "tags", "description"],
    threshold: 0.3, // Lower = stricter matching; 0.3 is moderate
    distance: 100,  // Approx how far characters can be from each other
  });
  
  // Perform the search
  return fuse.search(query).map((result) => result.item);
}
