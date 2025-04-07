import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMap from "@/components/GeoMap";

export async function generateMetadata() {
  return {
    title: "Kratom Shop 91910 | Premium in Chula Vista",
    description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
    keywords: "kratom shop 91910, chula vista kratom, vapes near me, glass accessories",
    openGraph: {
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      url: "https://thesmokingbee.com/kratom-shop-91910-chula-vista",
      images: [
        {
          url: "https://thesmokingbee.com/images/about/1.JPG",
          alt: "Kratom Shop 91910 | Premium in Chula Vista"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"]
    }
  };
}

export default async function kratom_shop_91910_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);

  const safeCategories = (categories ?? []).filter(cat => cat?.node?.id);

  return (
    <>
      <Head>
        <title>Kratom Shop 91910 | Premium in Chula Vista</title>
        <meta name="description" content="Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista." />
        <meta name="keywords" content="kratom shop 91910, chula vista kratom, vapes near me, glass accessories" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Kratom Shop 91910 | Premium in Chula Vista" />
        <meta property="og:description" content="Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/kratom-shop-91910-chula-vista" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Kratom Shop 91910 | Premium in Chula Vista" />
        <meta name="twitter:description" content="Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMap />

      <section className="py-8 px-6">
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          <p>
            Our 91910 Chula Vista location carries reliable kratom plus a variety of vapes and glassware for every preference. Whether you’re looking for energetic strains or something more mellow, we have the perfect kratom solution. Don’t forget to explore our rolling papers and accessories for a fully stocked setup.
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
