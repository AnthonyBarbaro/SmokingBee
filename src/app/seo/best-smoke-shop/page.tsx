import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop Near You | The Smoking Bee",
    description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
    keywords: "best smoke shop, head shop near me, premium glass bongs, delta-8, smoking accessories",
    openGraph: {
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
      url: "https://thesmokingbee.com/best-smoke-shop",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Smoke Shop Near You | The Smoking Bee", "item": "https://thesmokingbee.com/best-smoke-shop"}]}`
    }
  };
}

export default async function best_smoke_shop_Page() {
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
          { "name": "Best Smoke Shop Near You | The Smoking Bee", "path": "/best-smoke-shop" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Searching for the best smoke shop experience? Discover The Smoking Bee’s curated selection of premium bongs, vapes, and more. From flavorful hookah shisha to local glass masterpieces, we’re dedicated to providing a standout shopping experience. Come see why customers call us their favorite one-stop destination for smoking essentials.
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
