import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Rolling Trays for Sale | The Smoking Bee",
    description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
    keywords: "best rolling trays, rolling trays for sale, premium smoking accessories, head shop",
    openGraph: {
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
      url: "https://thesmokingbee.com/best-rolling-trays",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Rolling Trays for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Rolling Trays for Sale | The Smoking Bee", "item": "https://thesmokingbee.com/best-rolling-trays"}]}`
    }
  };
}

export default async function best_rolling_trays_Page() {
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
          { "name": "Best Rolling Trays for Sale | The Smoking Bee", "path": "/best-rolling-trays" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Check out our stylish, functional rolling trays for a cleaner, smoother experience every time. From minimalist metal trays to vibrant art prints, The Smoking Bee has designs to match any preference. Keep your herb organized and your surfaces tidy with the best trays on the market.
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
