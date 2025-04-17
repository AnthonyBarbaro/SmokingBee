import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
    description:
      "Discover The Smoking Bee’s San Diego flagship store: an exceptional selection of artisanal glass, cutting‑edge vapes, Delta‑8, and more. Elevate your experience today.",
    keywords:
      "smoke shop san diego, premium glass pipes, vape shop san diego, delta-8, smoke accessories, head shop",
    openGraph: {
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description:
        "Discover The Smoking Bee’s San Diego flagship store: an exceptional selection of artisanal glass, cutting‑edge vapes, Delta‑8, and more. Elevate your experience today.",
      url: "https://thesmokingbee.com/smoke-shop-san-diego",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "San Diego’s Premier Smoke Shop | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description:
        "Discover The Smoking Bee’s San Diego flagship store: an exceptional selection of artisanal glass, cutting‑edge vapes, Delta‑8, and more. Elevate your experience today.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thesmokingbee.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "San Diego’s Premier Smoke Shop | The Smoking Bee",
            "item": "https://thesmokingbee.com/smoke-shop-san-diego"
          }
        ]
      }`
    }
  };
}

export default async function smoke_shop_san_diego_Page() {
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
          { "name": "San Diego’s Premier Smoke Shop | The Smoking Bee", "path": "/smoke-shop-san-diego" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4 text-center">
            Why Visit Our San Diego Flagship?
          </h2>
          <p className="text-white">
            From Gaslamp Quarter to Pacific Beach, The Smoking Bee in San Diego
            brings you an unrivaled collection of premium glassware, avant‑garde
            vaping devices, and Delta‑8 innovations. Whether you’re a collector
            seeking handcrafted pieces or a newcomer exploring fresh flavors,
            our knowledgeable team is here to guide you every step of the way.
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
