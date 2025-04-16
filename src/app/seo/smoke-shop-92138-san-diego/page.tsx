import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92138 | Old Town San Diego",
    description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
    keywords: "smoke shop 92138, old town san diego, vapes, glass pipes, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92138-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92138 | Old Town San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92138 | Old Town San Diego", "item": "https://thesmokingbee.com/smoke-shop-92138-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92138_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
       <BreadcrumbClientWrapper
        crumbs={[
          { "name": "Home", "path": "/" },
          { "name": "Smoke Shop 92138 | Old Town San Diego", "path": "/smoke-shop-92138-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Right by Old Town, discover our curated selection of vapes, pipes, and must-have accessories. We carry specialized papers, natural wraps, and local glass creations. After exploring historic Old Town, come in to find new ways to enhance your smoke, from advanced hardware to classic favorites.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
