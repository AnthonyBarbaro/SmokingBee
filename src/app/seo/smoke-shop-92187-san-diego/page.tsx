import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92187 | Southeastern San Diego",
    description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
    keywords: "smoke shop 92187, disposable vapes, delta-8, glass pieces, smoking shop",
    openGraph: {
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92187-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92187 | Southeastern San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92187 | Southeastern San Diego", "item": "https://thesmokingbee.com/smoke-shop-92187-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92187_san_diego_Page() {
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
          { "name": "Smoke Shop 92187 | Southeastern San Diego", "path": "/smoke-shop-92187-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our Southeastern San Diego shop offers a wide selection of Delta-8, disposables, and glass to suit every taste. Searching for unique water pipe designs or simple, travel-friendly solutions? We keep our inventory fresh so you can explore something different every time you stop by.
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
