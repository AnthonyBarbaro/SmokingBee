import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92121 | Sorrento Valley",
    description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
    keywords: "smoke shop 92121, sorrento valley, delta-8, glass pipes, vapes",
    openGraph: {
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      url: "https://thesmokingbee.com/smoke-shop-92121-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92121 | Sorrento Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92121 | Sorrento Valley", "item": "https://thesmokingbee.com/smoke-shop-92121-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92121_san_diego_Page() {
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
          { "name": "Smoke Shop 92121 | Sorrento Valley", "path": "/smoke-shop-92121-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In Sorrento Valley (92121), our shelves are stocked with high-quality glass and potent Delta-8 for a satisfying session. Check out new arrivals or ask about recommended hardware upgrades for your vape. We’re conveniently located for professionals in the area looking to unwind with premium smoking products.
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
