import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92175 | Encanto / Emerald Hills",
    description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
    keywords: "smoke shop 92175, encanto, hookah flavors, rolling trays, accessories",
    openGraph: {
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92175-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92175 | Encanto / Emerald Hills"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92175 | Encanto / Emerald Hills", "item": "https://thesmokingbee.com/smoke-shop-92175-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92175_san_diego_Page() {
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
          { "name": "Smoke Shop 92175 | Encanto / Emerald Hills", "path": "/smoke-shop-92175-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve the Encanto/Emerald Hills area with flavorful hookah products, reliable trays, and more to enhance your sessions. Explore disposable vapes or check out the latest delta-8 tinctures if you want something different. Our staff is here to keep you informed so you can enjoy the best smoking experience.
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
