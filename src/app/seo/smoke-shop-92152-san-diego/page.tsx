import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92152 | Silver Strand / Coronado",
    description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
    keywords: "smoke shop 92152, silver strand, glass bongs, hookah flavors, vapes",
    openGraph: {
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92152-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92152 | Silver Strand / Coronado"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92152 | Silver Strand / Coronado", "item": "https://thesmokingbee.com/smoke-shop-92152-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92152_san_diego_Page() {
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
          { "name": "Smoke Shop 92152 | Silver Strand / Coronado", "path": "/smoke-shop-92152-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In the Silver Strand area, choose from our wide variety of bongs, vapes, and hookah selections. We’ve got everything from mild to intense flavors, plus delta-8 products for a modern twist. Relax by the beach, then drop by for fresh supplies or an upgrade to your existing setup.
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
