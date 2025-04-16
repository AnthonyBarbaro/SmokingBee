import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92147 | Point Loma Naval",
    description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
    keywords: "smoke shop 92147, point loma, delta-8, rolling trays, smoking gear",
    openGraph: {
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92147-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92147 | Point Loma Naval"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92147 | Point Loma Naval", "item": "https://thesmokingbee.com/smoke-shop-92147-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92147_san_diego_Page() {
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
          { "name": "Smoke Shop 92147 | Point Loma Naval", "path": "/smoke-shop-92147-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92147, elevate your smoking setup with our delta-8 products, trays, and carefully selected accessories. We pride ourselves on friendly advice and a laid-back atmosphere, perfect for exploring new hardware or restocking daily essentials. Whether you’re local or just passing through, you’ll find plenty to love.
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
