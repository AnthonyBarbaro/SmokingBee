import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92177 | Linda Vista",
    description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
    keywords: "smoke shop 92177, linda vista, delta-8, disposable vapes, water pipes",
    openGraph: {
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      url: "https://thesmokingbee.com/smoke-shop-92177-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92177 | Linda Vista"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92177 | Linda Vista", "item": "https://thesmokingbee.com/smoke-shop-92177-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92177_san_diego_Page() {
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
          { "name": "Smoke Shop 92177 | Linda Vista", "path": "/smoke-shop-92177-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Discover our broad Delta-8 offerings, water pipes, and disposables in the Linda Vista neighborhood. Pick up a quick travel-friendly device or browse statement glass pieces for your home setup. We constantly update our selection so you can enjoy fresh flavors and modern hardware any time you visit.
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
