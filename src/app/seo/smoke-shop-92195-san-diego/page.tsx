import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92195 | College Area",
    description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
    keywords: "smoke shop 92195, college area, hookah, glass bongs, e-liquids",
    openGraph: {
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      url: "https://thesmokingbee.com/smoke-shop-92195-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92195 | College Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92195 | College Area", "item": "https://thesmokingbee.com/smoke-shop-92195-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92195_san_diego_Page() {
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
          { "name": "Smoke Shop 92195 | College Area", "path": "/smoke-shop-92195-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Near 92195, we offer a range of hookah essentials, vibrant e-liquids, and high-quality glass bongs to elevate your sessions. Explore delta-8 tinctures or pick up rolling supplies on your way to class. Our friendly vibe and rotating stock mean there’s always a new flavor or accessory to try.
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
