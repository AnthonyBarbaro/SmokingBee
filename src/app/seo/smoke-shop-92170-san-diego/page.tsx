import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92170 | Naval Base SD",
    description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
    keywords: "smoke shop 92170, naval base, bongs, vapes, delta-8",
    openGraph: {
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      url: "https://thesmokingbee.com/smoke-shop-92170-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92170 | Naval Base SD"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92170 | Naval Base SD", "item": "https://thesmokingbee.com/smoke-shop-92170-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92170_san_diego_Page() {
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
          { "name": "Smoke Shop 92170 | Naval Base SD", "path": "/smoke-shop-92170-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located near Naval Base SD, we provide a range of bongs, Delta-8, and vape products for convenient shopping. Pick out a unique glass piece or stock up on rolling supplies for your off-duty hours. We pride ourselves on being welcoming to both new smokers and seasoned aficionados.
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
