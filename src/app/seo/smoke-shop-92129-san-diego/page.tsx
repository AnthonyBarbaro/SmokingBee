import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import Head from "next/head";
import GeoMapWrapper from "@/components/GeoMapWrapper";

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
      <Head>
        <title>Smoke Shop 92129 | Rancho Peñasquitos</title>
        <meta name="description" content="Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee." />
        <meta name="keywords" content="smoke shop 92129, rancho penasquitos, hookah tobacco, disposable vapes" />
        <meta name="author" content="The Smoking Bee" />

        <meta property="og:title" content="Smoke Shop 92129 | Rancho Peñasquitos" />
        <meta property="og:description" content="Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee." />
        <meta property="og:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta property="og:url" content="https://thesmokingbee.com/smoke-shop-92129-san-diego" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Smoke Shop 92129 | Rancho Peñasquitos" />
        <meta name="twitter:description" content="Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee." />
        <meta name="twitter:image" content="https://thesmokingbee.com/images/about/1.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
