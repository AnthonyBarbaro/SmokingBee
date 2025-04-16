import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91942 | Top La Mesa Essentials",
    description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
    keywords: "smoke shop 91942, la mesa smoke shop, kratom near 91942, glass pipes",
    openGraph: {
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-91942-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 91942 | Top La Mesa Essentials"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 91942 | Top La Mesa Essentials", "item": "https://thesmokingbee.com/smoke-shop-91942-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_91942_la_mesa_Page() {
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
          { "name": "Smoke Shop 91942 | Top La Mesa Essentials", "path": "/smoke-shop-91942-la-mesa" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located near 91942 La Mesa, we pride ourselves on offering top-grade kratom and glassware to meet your smoking needs. Our curated selection includes unique rolling papers and the latest disposable vape flavors. Drop by for friendly advice or to check out new arrivals in store.
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
