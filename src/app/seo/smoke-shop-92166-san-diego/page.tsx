import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92166 | Roseville/Fleetridge",
    description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
    keywords: "smoke shop 92166, roseville, fleetridge, glass, vapes, accessories",
    openGraph: {
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92166-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92166 | Roseville/Fleetridge"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92166 | Roseville/Fleetridge", "item": "https://thesmokingbee.com/smoke-shop-92166-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92166_san_diego_Page() {
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
          { "name": "Smoke Shop 92166 | Roseville/Fleetridge", "path": "/smoke-shop-92166-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving 92166 with a wide array of glass options, from bongs to vapes, plus must-have accessories. Whether you need a new torch for dabbing or a stylish rolling tray, we stock items chosen for quality. Swing by for friendly advice or to explore the latest local glass artistry.
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
