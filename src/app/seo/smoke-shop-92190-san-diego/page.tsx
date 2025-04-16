import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92190 | Central Coast SD",
    description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
    keywords: "smoke shop 92190, central coast, delta-8 edibles, vape devices, smoking shop",
    openGraph: {
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      url: "https://thesmokingbee.com/smoke-shop-92190-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92190 | Central Coast SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92190 | Central Coast SD", "item": "https://thesmokingbee.com/smoke-shop-92190-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92190_san_diego_Page() {
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
          { "name": "Smoke Shop 92190 | Central Coast SD", "path": "/smoke-shop-92190-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We bring the central coast high-quality vape gear, potent Delta-8 edibles, and a variety of smoking accessories. Whether you need quick disposable pods or a showpiece glass bong, we’ve got you covered. Explore new brand drops or consult with us on building your ideal smoking toolkit.
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
