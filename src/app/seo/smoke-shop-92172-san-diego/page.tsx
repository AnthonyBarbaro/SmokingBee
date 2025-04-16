import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92172 | Poway Vicinity",
    description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
    keywords: "smoke shop 92172, poway area, glass, e-liquids, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92172 | Poway Vicinity",
      description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
      url: "https://thesmokingbee.com/smoke-shop-92172-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92172 | Poway Vicinity"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92172 | Poway Vicinity",
      description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92172 | Poway Vicinity", "item": "https://thesmokingbee.com/smoke-shop-92172-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92172_san_diego_Page() {
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
          { "name": "Smoke Shop 92172 | Poway Vicinity", "path": "/smoke-shop-92172-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our location near Poway features an array of glass options, delicious e-liquids, and must-have accessories. Check out top kratom strains, new rolling trays, or specialized hookah hoses. We proudly cater to casual visitors and committed connoisseurs alike with friendly service and quality stock.
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
