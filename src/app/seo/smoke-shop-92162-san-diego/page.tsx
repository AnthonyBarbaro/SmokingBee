import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92162 | Normal Heights",
    description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
    keywords: "smoke shop 92162, normal heights, glass bongs, kratom, vapes",
    openGraph: {
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92162-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92162 | Normal Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92162 | Normal Heights", "item": "https://thesmokingbee.com/smoke-shop-92162-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92162_san_diego_Page() {
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
          { "name": "Smoke Shop 92162 | Normal Heights", "path": "/smoke-shop-92162-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to Normal Heights, we provide an assortment of kratom strains, bongs, and vapes for every preference. Stop by for quick rolling papers or take time to explore our advanced accessories and local glass. Our staff loves sharing new product arrivals and tips for getting the most out of each session.
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
