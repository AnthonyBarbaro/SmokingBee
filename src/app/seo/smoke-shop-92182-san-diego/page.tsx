import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92182 | SDSU Area",
    description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
    keywords: "smoke shop 92182, sdsu, rolling papers, kratom, vape pods",
    openGraph: {
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
      url: "https://thesmokingbee.com/smoke-shop-92182-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92182 | SDSU Area"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92182 | SDSU Area", "item": "https://thesmokingbee.com/smoke-shop-92182-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92182_san_diego_Page() {
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
          { "name": "Smoke Shop 92182 | SDSU Area", "path": "/smoke-shop-92182-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Conveniently located for SDSU, we carry must-have items like kratom, pods, and top rolling paper brands. Grab a quick refill on your lunch break or invest in a new water pipe to spruce up your dorm setup. Our mix of budget-friendly and high-end gear ensures you’ll find your perfect match.
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
