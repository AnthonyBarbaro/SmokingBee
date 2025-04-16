import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92134 | Near Naval Base",
    description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
    keywords: "smoke shop 92134, naval base, vapes, rolling papers, glass pipes",
    openGraph: {
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92134-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92134 | Near Naval Base"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92134 | Near Naval Base", "item": "https://thesmokingbee.com/smoke-shop-92134-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92134_san_diego_Page() {
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
          { "name": "Smoke Shop 92134 | Near Naval Base", "path": "/smoke-shop-92134-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Near 92134’s naval base? We offer high-quality glass, vapes, and everything you need for a satisfying session. Our store features top-tier rolling papers, Delta-8 gummies, and discreet portable devices. Whether you’re active duty or a local resident, count on The Smoking Bee for top-notch service.
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
