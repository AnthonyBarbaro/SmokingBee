import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
    description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
    keywords: "smoke shop chula vista, kratom near me, vapes, rolling accessories, glass pipes",
    openGraph: {
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      url: "https://thesmokingbee.com/smoke-shop-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Top Smoke Shop in Chula Vista | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Top Smoke Shop in Chula Vista | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-chula-vista"}]}`
    }
  };
}

export default async function smoke_shop_chula_vista_Page() {
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
          { "name": "Top Smoke Shop in Chula Vista | The Smoking Bee", "path": "/smoke-shop-chula-vista" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving Chula Vista with a vast range of glass pipes, kratom, and vapes, The Smoking Bee is your one-stop shop for top-tier smoking needs. Discover our selection of local and popular brand products, from unique rolling trays to flavorful e-liquids. We’re located near major thoroughfares, making it easy to swing by.
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
