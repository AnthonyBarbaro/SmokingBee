import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  // Breadcrumb JSON‑LD
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thesmokingbee.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Smoke Shop La Mesa",
        item: "https://thesmokingbee.com/smoke-shop-la-mesa",
      },
    ],
  };

  return {
    title: "Smoke Shop La Mesa | The Smoking Bee",
    description:
      "Discover La Mesa’s #1 smoke shop at The Smoking Bee. Premium glass bongs, rolling trays, vapes, Delta‑8 & more.",
    keywords:
      "smoke shop la mesa, head shop la mesa, glass bongs la mesa, rolling trays la mesa, vapes la mesa, delta-8 la mesa",
    openGraph: {
      title: "Smoke Shop La Mesa | The Smoking Bee",
      description:
        "Discover La Mesa’s #1 smoke shop at The Smoking Bee. Premium glass bongs, rolling trays, vapes, Delta‑8 & more.",
      url: "https://thesmokingbee.com/smoke-shop-la-mesa",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Smoke Shop La Mesa | The Smoking Bee",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop La Mesa | The Smoking Bee",
      description:
        "Discover La Mesa’s #1 smoke shop at The Smoking Bee. Premium glass bongs, rolling trays, vapes, Delta‑8 & more.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"],
    },
    other: {
      "application/ld+json": JSON.stringify(breadcrumb),
    },
  };
}
export default async function smoke_shop_la_mesa_Page() {
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
          { "name": "Best Smoke Shop in La Mesa | The Smoking Bee", "path": "/smoke-shop-la-mesa" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4"></h1>
        <h1 className="text-2xl md:text-3xl font-bold text-gold mb-4 text-center">Smoke Shop La Mesa</h1>
        <p className="text-white-700">
          Located in the heart of La Mesa, The Smoking Bee is your go‑to smoke shop for
          premium glass bongs, rolling trays, vapes, Delta‑8, and more. Our friendly
          staff is here to help you find the perfect piece—whether you’re seeking
          local artisan glass or the latest flavored disposables. Conveniently near
          La Mesa Boulevard, we serve both new and experienced enthusiasts alike. Right Next to Buzz La Mesa.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
