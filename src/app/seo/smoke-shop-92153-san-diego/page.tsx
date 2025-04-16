import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92153 | Otay Mesa",
    description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
    keywords: "smoke shop 92153, otay mesa, rolling papers, disposable vapes, glass",
    openGraph: {
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92153-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92153 | Otay Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92153 | Otay Mesa", "item": "https://thesmokingbee.com/smoke-shop-92153-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92153_san_diego_Page() {
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
          { "name": "Smoke Shop 92153 | Otay Mesa", "path": "/smoke-shop-92153-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We carry popular rolling papers, disposable vapes, and reliable glass for the 92153 Otay Mesa community. Pick up a quick on-the-go vape or delve into our artisan pipe collection. Our rotating selection of delta-8 ensures there’s always something new to try for a personalized experience.
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
