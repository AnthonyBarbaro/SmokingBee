import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92127 | Rancho Bernardo",
    description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
    keywords: "smoke shop 92127, rancho bernardo, vapes, smoking accessories, delta-8",
    openGraph: {
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      url: "https://thesmokingbee.com/smoke-shop-92127-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92127 | Rancho Bernardo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92127 | Rancho Bernardo", "item": "https://thesmokingbee.com/smoke-shop-92127-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92127_san_diego_Page() {
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
          { "name": "Smoke Shop 92127 | Rancho Bernardo", "path": "/smoke-shop-92127-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At our 92127 location, find high-quality vapes, Delta-8, and more to enhance your smoking routine. Whether you want a sleek new battery mod or strong pre-roll cones, we’ve got you covered. Stop by after enjoying the local hiking trails for a refreshing pick-me-up or new gear.
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
