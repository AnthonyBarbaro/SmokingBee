import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92131 | Scripps Ranch",
    description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
    keywords: "smoke shop 92131, scripps ranch, rolling trays, vape, delta-8",
    openGraph: {
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      url: "https://thesmokingbee.com/smoke-shop-92131-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92131 | Scripps Ranch"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92131 | Scripps Ranch", "item": "https://thesmokingbee.com/smoke-shop-92131-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92131_san_diego_Page() {
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
          { "name": "Smoke Shop 92131 | Scripps Ranch", "path": "/smoke-shop-92131-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We bring top-tier rolling trays, Delta-8, and more to Scripps Ranch, ensuring you have a one-stop shop. Check out our carefully curated glass section for unique pieces you won’t find elsewhere. Need suggestions? Our staff can recommend the best setup for a smooth, flavorful session.
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
