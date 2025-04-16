import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

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
      <Head>
        <title>Find Rolling Papers Near You | The Smoking Bee</title>
        <meta name="description" content="Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience." />
        <meta name="keywords" content="rolling papers near me, best rolling papers, cones, wraps, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find Rolling Papers Near You | The Smoking Bee" />
        <meta property="og:description" content="Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/rolling-papers-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find Rolling Papers Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
