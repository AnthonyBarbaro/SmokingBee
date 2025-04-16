import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92105 | City Heights",
    description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
    keywords: "smoke shop 92105, city heights, rolling papers, kratom near me",
    openGraph: {
      title: "Smoke Shop 92105 | City Heights",
      description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92105",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92105 | City Heights"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92105 | City Heights",
      description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92105 | City Heights", "item": "https://thesmokingbee.com/smoke-shop-92105"}]}`
    }
  };
}

export default async function smoke_shop_92105_Page() {
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
          { "name": "Smoke Shop 92105 | City Heights", "path": "/smoke-shop-92105" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            In 92105 City Heights, our store offers top rolling options, potent kratom strains, and friendly service. Check out our variety of vape pens, local glass pipes, and sweet wrap flavors. We’re here to help you customize your smoke in a way that fits your lifestyle and budget.
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
