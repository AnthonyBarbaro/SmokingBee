import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92179 | Skyline/Jamacha",
    description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
    keywords: "smoke shop 92179, skyline, hookah tobacco, kratom, rolling papers",
    openGraph: {
      title: "Smoke Shop 92179 | Skyline/Jamacha",
      description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
      url: "https://thesmokingbee.com/smoke-shop-92179-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92179 | Skyline/Jamacha"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92179 | Skyline/Jamacha",
      description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92179 | Skyline/Jamacha", "item": "https://thesmokingbee.com/smoke-shop-92179-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92179_san_diego_Page() {
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
          { "name": "Smoke Shop 92179 | Skyline/Jamacha", "path": "/smoke-shop-92179-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We proudly support the Skyline/Jamacha community with top hookah flavors, budget-friendly kratom, and more. Looking for something portable? Check out our wide array of vapes or discreet delta-8 carts. Our staff is on-hand to guide you toward the perfect combination of products for your preferences.
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
