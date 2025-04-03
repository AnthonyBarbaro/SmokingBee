import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

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
      <Head>
        <title>Smoke Shop 92182 | SDSU Area</title>
        <meta name="description" content="SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus." />
        <meta name="keywords" content="smoke shop 92182, sdsu, rolling papers, kratom, vape pods" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92182 | SDSU Area" />
        <meta property="og:description" content="SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92182-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92182 | SDSU Area" />
        <meta name="twitter:description" content="SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

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
