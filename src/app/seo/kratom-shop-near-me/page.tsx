import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Find Kratom Near You | The Smoking Bee",
    description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
    keywords: "kratom shop near me, kratom powder, kratom capsules, best kratom, smoke shop",
    openGraph: {
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      url: "https://thesmokingbee.com/kratom-shop-near-me",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Find Kratom Near You | The Smoking Bee"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function kratom_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Find Kratom Near You | The Smoking Bee</title>
        <meta name="description" content="Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions." />
        <meta name="keywords" content="kratom shop near me, kratom powder, kratom capsules, best kratom, smoke shop" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Find Kratom Near You | The Smoking Bee" />
        <meta property="og:description" content="Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/kratom-shop-near-me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Find Kratom Near You | The Smoking Bee" />
        <meta name="twitter:description" content="Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            We source high-grade kratom powders and capsules to ensure consistency for every customer. Explore our range of strains, from energizing white varieties to relaxing reds, each vetted for purity. Our staff is happy to guide you through best practices so you can find the perfect kratom solution.
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
