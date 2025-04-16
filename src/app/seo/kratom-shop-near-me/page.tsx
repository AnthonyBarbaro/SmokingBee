import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find Kratom Near You | The Smoking Bee",
    description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
    keywords: "kratom shop near me, kratom powder, kratom capsules, best kratom, smoke shop",
    openGraph: {
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      url: "https://thesmokingbee.com/kratom-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find Kratom Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find Kratom Near You | The Smoking Bee", "item": "https://thesmokingbee.com/kratom-shop-near-me"}]}`
    }
  };
}

export default async function kratom_shop_near_me_Page() {
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
          { "name": "Find Kratom Near You | The Smoking Bee", "path": "/kratom-shop-near-me" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We source high-grade kratom powders and capsules to ensure consistency for every customer. Explore our range of strains, from energizing white varieties to relaxing reds, each vetted for purity. Our staff is happy to guide you through best practices so you can find the perfect kratom solution.
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
