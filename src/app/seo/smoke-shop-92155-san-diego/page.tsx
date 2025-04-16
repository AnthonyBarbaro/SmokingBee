import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92155 | North Island NAS",
    description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
    keywords: "smoke shop 92155, north island, vapes, delta-8, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92155 | North Island NAS",
      description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      url: "https://thesmokingbee.com/smoke-shop-92155-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92155 | North Island NAS"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92155 | North Island NAS",
      description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92155 | North Island NAS", "item": "https://thesmokingbee.com/smoke-shop-92155-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92155_san_diego_Page() {
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
          { "name": "Smoke Shop 92155 | North Island NAS", "path": "/smoke-shop-92155-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to North Island NAS, we cater to military and locals with premium vapes and delta-8 options. Discover durable rolling trays, specialty glass pipes, or smooth hookah tobacco for a relaxing break. Our store aims to provide convenience and variety for those balancing busy lifestyles.
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
