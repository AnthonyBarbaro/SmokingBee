import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92129 | Rancho Peñasquitos",
    description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
    keywords: "smoke shop 92129, rancho penasquitos, hookah tobacco, disposable vapes",
    openGraph: {
      title: "Smoke Shop 92129 | Rancho Peñasquitos",
      description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92129-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop 92129 | Rancho Peñasquitos"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92129 | Rancho Peñasquitos",
      description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92129 | Rancho Pe\u00f1asquitos", "item": "https://thesmokingbee.com/smoke-shop-92129-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92129_san_diego_Page() {
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
          { "name": "Smoke Shop 92129 | Rancho Peñasquitos", "path": "/smoke-shop-92129-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We cater to the 92129 community with a vast selection of hookah flavors, vapes, and top-brand accessories. Explore an array of disposable vape pens for quick on-the-go sessions or try our rolling trays to keep your space tidy. Our mission: make smoking more convenient and enjoyable.
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
