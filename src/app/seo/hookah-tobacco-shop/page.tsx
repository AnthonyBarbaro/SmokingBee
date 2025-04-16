import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Hookah & Tobacco Shop | The Smoking Bee",
    description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
    keywords: "hookah shop, tobacco store, shisha flavors, hookah accessories, smoke shop",
    openGraph: {
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      url: "https://thesmokingbee.com/hookah-tobacco-shop",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Hookah & Tobacco Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Hookah & Tobacco Shop | The Smoking Bee", "item": "https://thesmokingbee.com/hookah-tobacco-shop"}]}`
    }
  };
}

export default async function hookah_tobacco_shop_Page() {
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
          { "name": "Best Hookah & Tobacco Shop | The Smoking Bee", "path": "/hookah-tobacco-shop" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            From smooth shisha flavors to reliable hookah accessories, The Smoking Bee elevates your hookah sessions with premium picks. Discover popular brands, coals, hoses, and creative flavor mixes for an enhanced communal experience. Our knowledgeable team can even suggest the ideal bowl setup for optimal clouds.
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
