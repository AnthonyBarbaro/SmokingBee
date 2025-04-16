import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92141 | Kearny Mesa",
    description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
    keywords: "smoke shop 92141, kearny mesa, delta-8, vape refills, glass bongs",
    openGraph: {
      title: "Smoke Shop 92141 | Kearny Mesa",
      description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92141-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92141 | Kearny Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92141 | Kearny Mesa",
      description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92141 | Kearny Mesa", "item": "https://thesmokingbee.com/smoke-shop-92141-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92141_san_diego_Page() {
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
          { "name": "Smoke Shop 92141 | Kearny Mesa", "path": "/smoke-shop-92141-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92141, find top-of-the-line vape refills, glass bongs, and more to enhance your sessions. Curious about new flavors or the latest coil technology? Our friendly staff can help. Our convenient Kearny Mesa location makes it easy to pop in after work or on weekends.
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
