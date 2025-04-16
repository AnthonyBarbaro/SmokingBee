import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92150 | Rancho Santa Fe",
    description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
    keywords: "smoke shop 92150, rancho santa fe, delta-8, smoking accessories, vapes",
    openGraph: {
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92150-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92150 | Rancho Santa Fe"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92150 | Rancho Santa Fe", "item": "https://thesmokingbee.com/smoke-shop-92150-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92150_san_diego_Page() {
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
          { "name": "Smoke Shop 92150 | Rancho Santa Fe", "path": "/smoke-shop-92150-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Enhance your Rancho Santa Fe sessions with our top-tier delta-8, vapes, and must-have accessories. Try a fresh e-liquid flavor or browse our decorative rolling trays. Our knowledgeable staff loves helping folks discover new ways to customize their smoking experience in a refined, comfortable setting.
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
