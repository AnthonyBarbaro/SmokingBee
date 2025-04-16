import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Premium Smoking Accessories | The Smoking Bee",
    description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
    keywords: "smoking accessories, rolling trays, grinders, premium bongs, smoke shop",
    openGraph: {
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
      url: "https://thesmokingbee.com/premium-smoking-accessories",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Premium Smoking Accessories | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Premium Smoking Accessories | The Smoking Bee", "item": "https://thesmokingbee.com/premium-smoking-accessories"}]}`
    }
  };
}

export default async function premium_smoking_accessories_Page() {
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
          { "name": "Premium Smoking Accessories | The Smoking Bee", "path": "/premium-smoking-accessories" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Upgrade your setup with our premium accessories—designed for durability and style to enhance every smoke. From sturdy metal grinders to sleek glass bongs, The Smoking Bee stocks top brands and unique finds. Let our staff recommend the perfect tray or rolling tool for a streamlined experience.
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
