import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92180 | Kearny Mesa",
    description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
    keywords: "smoke shop 92180, kearny mesa, e-liquids, rolling trays, glass accessories",
    openGraph: {
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-92180-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92180 | Kearny Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92180 | Kearny Mesa", "item": "https://thesmokingbee.com/smoke-shop-92180-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92180_san_diego_Page() {
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
          { "name": "Smoke Shop 92180 | Kearny Mesa", "path": "/smoke-shop-92180-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In Kearny Mesa, we specialize in e-liquids, quality trays, and sturdy glass pieces for an upgraded session. Explore advanced vape mods or pick up a fresh coil to keep clouds thick and flavors rich. Our rotating selection of delta-8 edibles ensures there’s always a novel way to relax.
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
