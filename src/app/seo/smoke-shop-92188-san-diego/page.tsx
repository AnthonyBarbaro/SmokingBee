import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
    description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
    keywords: "smoke shop 92188, sorrento mesa, e-liquids, hookah flavors, best smoke shop",
    openGraph: {
      title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
      description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
      url: "https://thesmokingbee.com/smoke-shop-92188-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
      description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92188 | Sorrento Mesa / Qualcomm", "item": "https://thesmokingbee.com/smoke-shop-92188-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92188_san_diego_Page() {
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
          { "name": "Smoke Shop 92188 | Sorrento Mesa / Qualcomm", "path": "/smoke-shop-92188-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Near Qualcomm in 92188, we carry crowd-favorite e-liquids, flavorful hookah blends, and more to enhance your smoke. Our staff can assist with mod upgrades, coil replacements, or guiding you to a potent kratom variety. We strive to make each visit efficient for busy professionals in the area.
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
