import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop in La Mesa | The Smoking Bee",
    description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
    keywords: "smoke shop la mesa, glass pipes la mesa, delta-8, kratom, best vapes",
    openGraph: {
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      url: "https://thesmokingbee.com/smoke-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Smoke Shop in La Mesa | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Smoke Shop in La Mesa | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_la_mesa_Page() {
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
          { "name": "Best Smoke Shop in La Mesa | The Smoking Bee", "path": "/smoke-shop-la-mesa" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located in the heart of La Mesa, The Smoking Bee offers top-tier glass, vapes, and Delta-8. Our friendly staff is ready to help you find the perfect piece, whether you’re seeking local artisan glass or the latest flavored disposables. Conveniently near La Mesa Boulevard, we proudly serve both new and experienced enthusiasts seeking quality smoking accessories.
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
