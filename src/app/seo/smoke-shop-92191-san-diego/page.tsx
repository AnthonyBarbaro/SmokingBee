import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92191 | North City",
    description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
    keywords: "smoke shop 92191, north city, glass bongs, e-juices, rolling trays",
    openGraph: {
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92191-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92191 | North City"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92191 | North City", "item": "https://thesmokingbee.com/smoke-shop-92191-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92191_san_diego_Page() {
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
          { "name": "Smoke Shop 92191 | North City", "path": "/smoke-shop-92191-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92191, browse our diverse collection of glass bongs, tasty e-juices, and sturdy rolling trays. Our shop prioritizes both style and function, so you can find sleek designs or vibrant printed gear. If you’re exploring delta-8 or advanced vaping mods, ask our staff for a tailored recommendation.
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
