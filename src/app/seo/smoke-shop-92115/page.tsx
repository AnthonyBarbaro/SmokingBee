import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92115 | Near SDSU",
    description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
    keywords: "smoke shop 92115, sdsu, glass bongs, vapes near me, delta-8",
    openGraph: {
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      url: "https://thesmokingbee.com/smoke-shop-92115",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92115 | Near SDSU"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92115 | Near SDSU", "item": "https://thesmokingbee.com/smoke-shop-92115"}]}`
    }
  };
}

export default async function smoke_shop_92115_Page() {
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
          { "name": "Smoke Shop 92115 | Near SDSU", "path": "/smoke-shop-92115" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Just minutes from SDSU, we bring premium bongs, vape flavors, and kratom to the 92115 community. Grab a snack nearby and stop in to browse our new arrivals, from sleek handheld pipes to top-rated Delta-8 edibles. Whether you’re a seasoned enthusiast or curious beginner, we have you covered.
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
