import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92189 | Skyline Hills",
    description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
    keywords: "smoke shop 92189, skyline hills, rolling papers, kratom, vape mods",
    openGraph: {
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
      url: "https://thesmokingbee.com/smoke-shop-92189-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92189 | Skyline Hills"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92189 | Skyline Hills", "item": "https://thesmokingbee.com/smoke-shop-92189-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92189_san_diego_Page() {
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
          { "name": "Smoke Shop 92189 | Skyline Hills", "path": "/smoke-shop-92189-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Check out our 92189 shop for robust vape mods, fresh kratom, and the rolling papers you need for a perfect roll. Discover delta-8 edibles to spice up your usual routine or opt for new glass attachments. We’re here to help you adapt your setup for maximum flavor and comfort.
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
