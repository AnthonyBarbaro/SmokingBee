import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92140 | MCRD Area",
    description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
    keywords: "smoke shop 92140, MCRD, vape products, glass pipes, rolling trays",
    openGraph: {
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92140-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92140 | MCRD Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92140 | MCRD Area", "item": "https://thesmokingbee.com/smoke-shop-92140-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92140_san_diego_Page() {
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
          { "name": "Smoke Shop 92140 | MCRD Area", "path": "/smoke-shop-92140-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Close to MCRD, our selection features quality vape gear and an array of glassware for every taste. Stock up on rolling trays, unique wraps, or local glass art. Whether you’re stationed nearby or just passing through, we strive to make every visit welcoming and informative.
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
