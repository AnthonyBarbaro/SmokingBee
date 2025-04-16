import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92124 | Tierrasanta",
    description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
    keywords: "smoke shop 92124, tierrasanta, bongs, vape pens, kratom",
    openGraph: {
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      url: "https://thesmokingbee.com/smoke-shop-92124-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92124 | Tierrasanta"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92124 | Tierrasanta", "item": "https://thesmokingbee.com/smoke-shop-92124-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92124_san_diego_Page() {
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
          { "name": "Smoke Shop 92124 | Tierrasanta", "path": "/smoke-shop-92124-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            At The Smoking Bee Tierrasanta, discover an array of vape pens, bongs, and kratom tailored to your lifestyle. Whether you’re after a portable device or a new water pipe for home, we offer trusted brands and local artistry. Elevate your daily routine or weekend unwind with high-quality options.
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
