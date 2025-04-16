import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92142 | Residential SD Area",
    description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
    keywords: "smoke shop 92142, glass pipes, rolling papers, vapes, san diego",
    openGraph: {
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-92142-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92142 | Residential SD Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92142 | Residential SD Area", "item": "https://thesmokingbee.com/smoke-shop-92142-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92142_san_diego_Page() {
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
          { "name": "Smoke Shop 92142 | Residential SD Area", "path": "/smoke-shop-92142-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            For the 92142 community, we provide carefully curated smoking essentials, from papers to vapes. Whether you want a sleek new device or a sturdy pipe for home use, we have options. Chat with us about delta-8, new e-liquids, or advanced accessories to personalize your setup.
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
