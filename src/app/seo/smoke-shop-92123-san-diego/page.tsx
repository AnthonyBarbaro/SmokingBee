import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92123 | Serra Mesa’s Best",
    description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
    keywords: "smoke shop 92123, serra mesa, glass pipes, vapes, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92123-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92123 | Serra Mesa’s Best"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92123 | Serra Mesa\u2019s Best", "item": "https://thesmokingbee.com/smoke-shop-92123-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92123_san_diego_Page() {
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
          { "name": "Smoke Shop 92123 | Serra Mesa’s Best", "path": "/smoke-shop-92123-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Stop by in Serra Mesa for all your smoking essentials—glass, vapes, and top-notch accessories are on hand. From unique ashcatchers to flavored rolling papers, The Smoking Bee covers every angle. Our staff can point you to the right Delta-8 edible or the sturdiest water pipe for smooth hits.
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
