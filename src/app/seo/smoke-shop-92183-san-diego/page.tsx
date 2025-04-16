import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92183 | Southeastern Encanto",
    description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
    keywords: "smoke shop 92183, encanto, hookah flavors, delta-8, glass pipes",
    openGraph: {
      title: "Smoke Shop 92183 | Southeastern Encanto",
      description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
      url: "https://thesmokingbee.com/smoke-shop-92183-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92183 | Southeastern Encanto"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92183 | Southeastern Encanto",
      description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92183 | Southeastern Encanto", "item": "https://thesmokingbee.com/smoke-shop-92183-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92183_san_diego_Page() {
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
          { "name": "Smoke Shop 92183 | Southeastern Encanto", "path": "/smoke-shop-92183-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We cater to the Encanto community with a selection of glass pipes, flavorful hookah, and potent Delta-8 products. Check out new e-liquid lines or enjoy classic rolling paper brands for your daily use. Our staff loves sharing recommendations so you can discover fresh and exciting options.
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
