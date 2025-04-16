import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Head Shop 92020 | El Cajon’s Finest",
    description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
    keywords: "head shop 92020, el cajon, rolling trays, glass pipes, vapes",
    openGraph: {
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      url: "https://thesmokingbee.com/head-shop-92020-el-cajon",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Head Shop 92020 | El Cajon’s Finest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Head Shop 92020 | El Cajon\u2019s Finest", "item": "https://thesmokingbee.com/head-shop-92020-el-cajon"}]}`
    }
  };
}

export default async function head_shop_92020_el_cajon_Page() {
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
          { "name": "Head Shop 92020 | El Cajon’s Finest", "path": "/head-shop-92020-el-cajon" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Proudly serving El Cajon’s 92020 zip code with an extensive range of glass pipes, rolling trays, and more. We specialize in locally blown glass and premium vape options for those seeking high performance. Whether you’re restocking essentials or exploring new styles, our head shop has it all.
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
