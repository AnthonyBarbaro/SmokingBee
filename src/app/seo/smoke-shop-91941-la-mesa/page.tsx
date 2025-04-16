import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91941 | La Mesa’s Best",
    description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
    keywords: "smoke shop 91941, la mesa smoke shop, vapes near 91941, delta-8",
    openGraph: {
      title: "Smoke Shop 91941 | La Mesa’s Best",
      description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-91941-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 91941 | La Mesa’s Best"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91941 | La Mesa’s Best",
      description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 91941 | La Mesa\u2019s Best", "item": "https://thesmokingbee.com/smoke-shop-91941-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_91941_la_mesa_Page() {
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
          { "name": "Smoke Shop 91941 | La Mesa’s Best", "path": "/smoke-shop-91941-la-mesa" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Serving the 91941 area of La Mesa, The Smoking Bee carries everything from premium Delta-8 to top-shelf glass pipes. Conveniently located just off major bus routes, we strive to ensure you leave with the perfect product. Explore our local artisan pieces, curated to impress both newbies and connoisseurs.
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
