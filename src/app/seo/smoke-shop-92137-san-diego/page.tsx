import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92137 | Clairemont/Bay Park",
    description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
    keywords: "smoke shop 92137, bay park, rolling papers, glass bongs, kratom",
    openGraph: {
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      url: "https://thesmokingbee.com/smoke-shop-92137-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92137 | Clairemont/Bay Park"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92137 | Clairemont/Bay Park", "item": "https://thesmokingbee.com/smoke-shop-92137-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92137_san_diego_Page() {
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
          { "name": "Smoke Shop 92137 | Clairemont/Bay Park", "path": "/smoke-shop-92137-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving Clairemont and Bay Park with a wide range of premium bongs, rolling papers, and high-quality kratom. Our inventory includes discreet vaporizers, artisan pipes, and popular Delta-8 lines. Swing by after exploring the bay to stock up on all your smoking essentials in one go.
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
