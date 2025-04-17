import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  const title = "Head Shop 92020 | El Cajon’s Finest";
  const description =
    "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.";
  const url = "https://thesmokingbee.com/head-shop-92020-el-cajon";
  const image = "https://thesmokingbee.com/images/about/1.JPG";
  return {
    title,
    description,
    keywords:
      "smoke shop El Cajon, head shop El Cajon, 92020 smoke shop, glass pipes El Cajon, vapes El Cajon",
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      // BreadcrumbList schema
      "application/ld+json": `{
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
          {
            "@type":"ListItem",
            "position":1,
            "name":"Home",
            "item":"https://thesmokingbee.com/"
          },
          {
            "@type":"ListItem",
            "position":2,
            "name":"${title}",
            "item":"${url}"
          }
        ]
      }`,
    },
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
       <BreadcrumbClientWrapper
        crumbs={[
          { "name": "Home", "path": "/" },
          { "name": "Head Shop 92020 | El Cajon’s Finest", "path": "/head-shop-92020-el-cajon" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gold mb-4 text-center">Find a Smoke Shop Near You in El Cajon</h1>
        <p>
          Welcome to <strong>The Smoking Bee</strong>, the premier <em>smoke shop in El Cajon’s 92020</em>. 
          As your local <em>head shop</em>, we carry an extensive selection of 
          <strong> glass pipes</strong>, <strong>rolling trays</strong>, high‑performance <strong>vapes</strong>, 
          Delta‑8 products, and more. Whether you’re hunting for artisan‑blown glass pieces or the 
          latest disposable vape pen, our knowledgeable team is here to guide you. 
          Stop by today to experience why we’re El Cajon’s #1 smoke shop and head shop. Check out the best smoke shop near you.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
