import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Glass Pipes for Sale | The Smoking Bee",
    description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
    keywords: "best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop",
    openGraph: {
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
      url: "https://thesmokingbee.com/best-glass-pipes",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Best Glass Pipes for Sale | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Glass Pipes for Sale | The Smoking Bee", "item": "https://thesmokingbee.com/best-glass-pipes"}]}`
    }
  };
}

export default async function best_glass_pipes_Page() {
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
          { "name": "Best Glass Pipes for Sale | The Smoking Bee", "path": "/best-glass-pipes" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Explore our collection of meticulously crafted glass pipes at The Smoking Bee. Whether you prefer simple designs or heady glass art, you’ll find the perfect piece to suit your style. We also carry water bongs, dab rigs, and unique accessories to elevate each session with flawless design and smooth hits.
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
