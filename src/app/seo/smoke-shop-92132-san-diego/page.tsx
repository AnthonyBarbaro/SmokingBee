import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92132 | Central San Diego",
    description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
    keywords: "smoke shop 92132, central san diego, glass pipes, delta-8, smoking supplies",
    openGraph: {
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      url: "https://thesmokingbee.com/smoke-shop-92132-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92132 | Central San Diego"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92132 | Central San Diego", "item": "https://thesmokingbee.com/smoke-shop-92132-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92132_san_diego_Page() {
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
          { "name": "Smoke Shop 92132 | Central San Diego", "path": "/smoke-shop-92132-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently located in central San Diego, we offer a full range of pipes, Delta-8, and accessories. From discreet vape pods to robust glass bongs, there’s something for everyone. Come experience friendly service, fair pricing, and a welcoming space that keeps customers returning.
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
