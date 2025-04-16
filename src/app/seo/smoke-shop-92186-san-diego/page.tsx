import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92186 | Escondido Area",
    description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
    keywords: "smoke shop 92186, escondido area, rolling trays, glass pipes, kratom",
    openGraph: {
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      url: "https://thesmokingbee.com/smoke-shop-92186-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92186 | Escondido Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92186 | Escondido Area", "item": "https://thesmokingbee.com/smoke-shop-92186-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92186_san_diego_Page() {
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
          { "name": "Smoke Shop 92186 | Escondido Area", "path": "/smoke-shop-92186-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We serve the greater Escondido region with well-crafted glass, sturdy rolling trays, and high-quality kratom. Looking for delta-8 carts or new vape flavors? Ask our staff for the best picks. We’re here to ensure both casual shoppers and seasoned pros find a product they’ll love.
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
