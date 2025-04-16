import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92149 | Paradise Valley",
    description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
    keywords: "smoke shop 92149, paradise valley, kratom, glass pipes, vape supplies",
    openGraph: {
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92149-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92149 | Paradise Valley"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92149 | Paradise Valley", "item": "https://thesmokingbee.com/smoke-shop-92149-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92149_san_diego_Page() {
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
          { "name": "Smoke Shop 92149 | Paradise Valley", "path": "/smoke-shop-92149-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve Paradise Valley with a robust selection of kratom, glass, and vape essentials you can trust. Stop by for a quick pick-me-up or to explore more sophisticated rigs. Our rotating inventory means there’s always something new, whether you want a classic favorite or a bold new flavor.
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
