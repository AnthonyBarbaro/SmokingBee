import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
    description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
    keywords: "smoke shop 92184, serra mesa, vaping mods, kratom capsules, smoking shop",
    openGraph: {
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92184-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92184 | Serra Mesa / Mission Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92184 | Serra Mesa / Mission Heights", "item": "https://thesmokingbee.com/smoke-shop-92184-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92184_san_diego_Page() {
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
          { "name": "Smoke Shop 92184 | Serra Mesa / Mission Heights", "path": "/smoke-shop-92184-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At our 92184 location, discover advanced vaping mods, quality kratom, and other smoking essentials. Whether you want intense vapor production or simpler gear, we have solutions for both. Pair your new mod with a tasty e-liquid or see our top picks in delta-8 edibles for a complete experience.
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
