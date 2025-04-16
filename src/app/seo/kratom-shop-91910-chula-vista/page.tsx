import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Kratom Shop 91910 | Premium in Chula Vista",
    description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
    keywords: "kratom shop 91910, chula vista kratom, vapes near me, glass accessories",
    openGraph: {
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      url: "https://thesmokingbee.com/kratom-shop-91910-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Kratom Shop 91910 | Premium in Chula Vista"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Kratom Shop 91910 | Premium in Chula Vista", "item": "https://thesmokingbee.com/kratom-shop-91910-chula-vista"}]}`
    }
  };
}

export default async function kratom_shop_91910_chula_vista_Page() {
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
          { "name": "Kratom Shop 91910 | Premium in Chula Vista", "path": "/kratom-shop-91910-chula-vista" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our 91910 Chula Vista location carries reliable kratom plus a variety of vapes and glassware for every preference. Whether you’re looking for energetic strains or something more mellow, we have the perfect kratom solution. Don’t forget to explore our rolling papers and accessories for a fully stocked setup.
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
