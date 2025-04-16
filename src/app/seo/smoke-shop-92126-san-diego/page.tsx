import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92126 | Mira Mesa",
    description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
    keywords: "smoke shop 92126, mira mesa, delta-8, glass pipes, premium smoke shop",
    openGraph: {
      title: "Smoke Shop 92126 | Mira Mesa",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92126-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92126 | Mira Mesa"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92126 | Mira Mesa",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92126 | Mira Mesa", "item": "https://thesmokingbee.com/smoke-shop-92126-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92126_san_diego_Page() {
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
          { "name": "Smoke Shop 92126 | Mira Mesa", "path": "/smoke-shop-92126-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Located in Mira Mesa, we stock everything from Delta-8 to premium glass, ensuring a top-tier experience. Try out new vape flavors, pick up a compact hand pipe, or explore kratom strains. Our friendly staff can help you find the perfect accessory for your next session.
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
