import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92160 | Central SD",
    description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
    keywords: "smoke shop 92160, central sd, premium smoking supplies, vapes, kratom",
    openGraph: {
      title: "Smoke Shop 92160 | Central SD",
      description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-92160-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92160 | Central SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92160 | Central SD",
      description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92160 | Central SD", "item": "https://thesmokingbee.com/smoke-shop-92160-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92160_san_diego_Page() {
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
          { "name": "Smoke Shop 92160 | Central SD", "path": "/smoke-shop-92160-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our central San Diego location carries a broad range of high-quality supplies to meet every smoker’s preference. From specialized vape coils to advanced dab rigs, we’ve curated top brands for reliability. If you’re looking for delta-8 or local glass artistry, we have you covered.
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
