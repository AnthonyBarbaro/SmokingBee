import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92178 | Coronado Island",
    description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
    keywords: "smoke shop 92178, coronado island, vape juices, glass bongs, smoking shop",
    openGraph: {
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92178-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92178 | Coronado Island"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92178 | Coronado Island", "item": "https://thesmokingbee.com/smoke-shop-92178-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92178_san_diego_Page() {
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
          { "name": "Smoke Shop 92178 | Coronado Island", "path": "/smoke-shop-92178-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92178, find everything from smooth vape juices to stylish glass bongs for a premium smoking experience. Unwind with our curated selection of rolling papers, natural wraps, or check out delta-8 edibles for a new spin on relaxation. We make it easy to discover your ideal setup.
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
