import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find Rolling Papers Near You | The Smoking Bee",
    description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
    keywords: "rolling papers near me, best rolling papers, cones, wraps, smoke shop",
    openGraph: {
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
      url: "https://thesmokingbee.com/rolling-papers-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find Rolling Papers Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find Rolling Papers Near You | The Smoking Bee", "item": "https://thesmokingbee.com/rolling-papers-near-me"}]}`
    }
  };
}

export default async function rolling_papers_near_me_Page() {
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
          { "name": "Find Rolling Papers Near You | The Smoking Bee", "path": "/rolling-papers-near-me" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            From classic papers to premium wraps, The Smoking Bee has you covered for all your rolling needs. Discover top brands like RAW, Elements, and more, plus cones and flavored wraps for a twist on your session. Elevate every smoke with our high-quality options, curated for beginners and connoisseurs alike.
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
