import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Shop Disposable Vapes | The Smoking Bee",
    description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
    keywords: "shop disposable vapes, best disposable vapes, vape shop, vapes near me",
    openGraph: {
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
      url: "https://thesmokingbee.com/shop-disposable-vapes",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Shop Disposable Vapes | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Shop Disposable Vapes | The Smoking Bee", "item": "https://thesmokingbee.com/shop-disposable-vapes"}]}`
    }
  };
}

export default async function shop_disposable_vapes_Page() {
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
          { "name": "Shop Disposable Vapes | The Smoking Bee", "path": "/shop-disposable-vapes" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Whether you want fruity or classic flavors, our disposable vapes offer simplicity on the go—no maintenance needed. Browse respected brands that prioritize smooth hits and consistent quality. Perfect for travelers or busy schedules, these disposables combine convenience with delicious vapor.
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
