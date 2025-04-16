import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find a Smoke Shop Near You | The Smoking Bee",
    description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
    keywords: "smoke shop near me, head shop near me, best smoke shop, premium glass, vapes",
    openGraph: {
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find a Smoke Shop Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find a Smoke Shop Near You | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-near-me"}]}`
    }
  };
}

export default async function smoke_shop_near_me_Page() {
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
          { "name": "Find a Smoke Shop Near You | The Smoking Bee", "path": "/smoke-shop-near-me" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Wherever you are in San Diego, The Smoking Bee is just around the corner with quality vapes, glass, and more. Our friendly team can guide you through our wide selection of cutting-edge Delta-8 or classic rolling papers. Experience convenience and variety under one roof, no matter your smoking style.
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
