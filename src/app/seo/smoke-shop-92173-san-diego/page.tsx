import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92173 | San Ysidro",
    description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
    keywords: "smoke shop 92173, san ysidro, vape pens, delta-8, smoking shop",
    openGraph: {
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      url: "https://thesmokingbee.com/smoke-shop-92173-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92173 | San Ysidro"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92173 | San Ysidro", "item": "https://thesmokingbee.com/smoke-shop-92173-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92173_san_diego_Page() {
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
          { "name": "Smoke Shop 92173 | San Ysidro", "path": "/smoke-shop-92173-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We pride ourselves on serving 92173 with a hand-picked assortment of vape pens and Delta-8 products. From flavorful pods to potent cartridges, find the perfect match for your style. Our approachable staff can recommend new glass pieces or the best rolling paper to maximize your enjoyment.
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
