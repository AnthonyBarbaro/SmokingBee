import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

export async function generateMetadata() {
  return {
    title: "Head Shop 92020 | El Cajon’s Finest",
    description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
    keywords: "head shop 92020, el cajon, rolling trays, glass pipes, vapes",
    openGraph: {
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      url: "https://thesmokingbee.com/head-shop-92020-el-cajon",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Head Shop 92020 | El Cajon’s Finest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function head_shop_92020_el_cajon_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Head Shop 92020 | El Cajon’s Finest</title>
        <meta name="description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee." />
        <meta name="keywords" content="head shop 92020, el cajon, rolling trays, glass pipes, vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Head Shop 92020 | El Cajon’s Finest" />
        <meta property="og:description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/head-shop-92020-el-cajon" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Head Shop 92020 | El Cajon’s Finest" />
        <meta name="twitter:description" content="El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Proudly serving El Cajon’s 92020 zip code with an extensive range of glass pipes, rolling trays, and more. We specialize in locally blown glass and premium vape options for those seeking high performance. Whether you’re restocking essentials or exploring new styles, our head shop has it all.
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
