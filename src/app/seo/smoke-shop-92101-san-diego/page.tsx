import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92101 | Downtown San Diego",
    description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
    keywords: "smoke shop 92101, downtown san diego, delta-8, rolling papers",
    openGraph: {
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      url: "https://thesmokingbee.com/smoke-shop-92101-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92101 | Downtown San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92101 | Downtown San Diego", "item": "https://thesmokingbee.com/smoke-shop-92101-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92101_san_diego_Page() {
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
          { "name": "Smoke Shop 92101 | Downtown San Diego", "path": "/smoke-shop-92101-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently near downtown, our 92101 location stocks Delta-8, rolling papers, and everything else for a premium session. Explore local glass artistry, specialty blunt wraps, and advanced vape gear all under one roof. Perfect for city dwellers and visitors alike craving top-tier smoking products.
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
