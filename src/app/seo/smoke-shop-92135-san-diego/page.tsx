import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92135 | Coronado Naval Area",
    description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
    keywords: "smoke shop 92135, coronado, glass pipes, kratom, smoking accessories",
    openGraph: {
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      url: "https://thesmokingbee.com/smoke-shop-92135-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92135 | Coronado Naval Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92135 | Coronado Naval Area", "item": "https://thesmokingbee.com/smoke-shop-92135-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92135_san_diego_Page() {
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
          { "name": "Smoke Shop 92135 | Coronado Naval Area", "path": "/smoke-shop-92135-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Stop by near Coronado to browse our top-notch glass pipes and kratom selections, perfect for any smoker. We stock reputable e-liquid brands, plus a variety of Delta-8 cartridges for those seeking a unique alternative. Enjoy local charm while finding everything you need in one friendly stop.
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
