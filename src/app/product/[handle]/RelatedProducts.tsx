// src/app/product/[handle]/RelatedProducts.tsx
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton"; // client island
import { getProductByHandle, getAllProducts } from "@/lib/shopify";

/** Simple money formatter for whole + cents */
function money(amount: unknown) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return { whole: "0", cents: "00" };
  const [whole, cents = "00"] = n.toFixed(2).split(".");
  return { whole, cents };
}

/* ---------- seeded "random" helpers (stable per day) ---------- */
/** Fast string -> uint32 seed */
function hashSeed(str: string) {
  // FNV-1a 32-bit
  let h = 0x811c9dc5 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Mulberry32-style PRNG (good enough for UI shuffles) */
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates using a supplied RNG */
function shuffleWithRng<T>(arr: T[], rng: () => number) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default async function RelatedProducts({ handle }: { handle: string }) {
  const product = await getProductByHandle(handle);
  if (!product) return null;

  const vendor = product.vendor;
  const all = await getAllProducts();
  const edges = Array.isArray(all) ? all : (all as any)?.edges ?? [];
  const nodes = edges.map((e: any) => e?.node).filter(Boolean);

  const sameVendor = nodes.filter(
    (p: any) => p?.handle && p.handle !== handle && p?.vendor === vendor
  );
  const others = nodes.filter(
    (p: any) => p?.handle && p.handle !== handle && p?.vendor !== vendor
  );

  // Seed by product + current date so it rotates daily but is stable within that day
  const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const rng = mulberry32(hashSeed(`${handle}-${day}`));

  // Shuffle both pools, then take up to 6 preferring same-vendor first
  const shuffledSame = shuffleWithRng(sameVendor, rng);
  const shuffledOthers = shuffleWithRng(others, rng);
  const related = [...shuffledSame, ...shuffledOthers].slice(0, 6);

  if (!related.length) return null;

  // Lightweight ItemList JSON‑LD for the list
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: related.map((p: any, i: number) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://thesmokingbee.com/product/${p.handle}`,
      name: p.title,
    })),
  };

  return (
    <section className="mt-12 bg-white">
      {/* JSON-LD helps search engines understand this section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gold">
          {vendor ? `More from ${vendor}` : "You might also like"}
        </h2>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {related.map((p: any) => {
            const firstImage = p?.images?.edges?.[0]?.node;
            const variant = p?.variants?.edges?.[0]?.node;
            const price = money(variant?.price?.amount);
            const currency = variant?.price?.currencyCode ?? "USD";

            return (
              <li
                key={p.handle}
                className="group rounded-2xl bg-white border border-gray-200 hover:border-gold transition shadow-sm hover:shadow-md"
              >
                {/* Image — clickable to PDP with descriptive anchor text */}
                <Link
                  href={`/product/${p.handle}`}
                  className="block"
                  aria-label={`View ${p.title}`}
                >
                  <div className="relative aspect-square bg-gray-100 rounded-t-2xl overflow-hidden">
                    {firstImage ? (
                      <Image
                        src={firstImage.url}
                        alt={firstImage.altText || p.title}
                        fill
                        className="object-contain p-4 transition group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                </Link>

                {/* Body */}
                <div className="p-4">
                  <Link
                    href={`/product/${p.handle}`}
                    className="block font-semibold leading-snug hover:underline"
                    aria-label={`View details for ${p.title}`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {p.title}
                  </Link>

                  {p.vendor && (
                    <p className="text-xs text-gray-500 mt-1 mb-3">by {p.vendor}</p>
                  )}

                  {/* Price */}
                  <p className="text-xl font-bold text-black mb-3">
                    <span className="text-2xl">${price.whole}</span>
                    <span className="align-super text-sm ml-0.5">.{price.cents}</span>
                    <span className="align-super text-sm ml-1">{currency}</span>
                  </p>

                  {/* CTA row — compact and balanced */}
                  <div className="flex items-center justify-between">
                    <AddToCartButton product={p} />
                    <Link
                      href={`/product/${p.handle}`}
                      className="text-sm font-medium text-gold hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Subtle hub link to prevent “dead ends” */}
        <div className="text-sm text-gray-600 mt-6">
          Explore more: <Link href="/shop" className="underline">All Products</Link>
        </div>
      </div>
    </section>
  );
}
