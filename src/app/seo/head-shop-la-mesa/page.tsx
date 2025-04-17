import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop La Mesa | The Smoking Bee – La Mesa’s Top Head Shop",
    description:
      "The Smoking Bee is La Mesa’s #1 smoke shop, offering premium glass bongs, rolling trays, vapes, Delta‑8 and more. Visit us at 7584 University Ave.",
    keywords:
      "smoke shop La Mesa, head shop La Mesa, La Mesa smoke shop, glass bongs La Mesa, rolling trays La Mesa, vapes La Mesa",
    openGraph: {
      title: "Smoke Shop La Mesa | The Smoking Bee",
      description:
        "Your go‑to head shop in La Mesa: glass bongs, rolling trays, vapes, Delta‑8 and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/head-shop-la-mesa",
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
        "The Smoking Bee is La Mesa’s #1 smoke shop for glass bongs, rolling trays, and vapes. Visit 7584 University Ave.",
      images: ["https://thesmokingbee.com/images/about/1.JPG"],
    },
    other: {
      // Breadcrumb
      "application/ld+json": `{
        "@context":"https://schema.org",
        "@type":"BreadcrumbList",
        "itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://thesmokingbee.com/"},
          {"@type":"ListItem","position":2,"name":"Smoke Shop La Mesa","item":"https://thesmokingbee.com/head-shop-la-mesa"}
        ]
      }`,
      // LocalBusiness
      "application/ld+json-2": `{
        "@context":"https://schema.org",
        "@type":"SmokeShop",
        "name":"The Smoking Bee",
        "image":"https://thesmokingbee.com/images/about/1.JPG",
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"7584 University Ave Suite B",
          "addressLocality":"La Mesa",
          "addressRegion":"CA",
          "postalCode":"91942",
          "addressCountry":"US"
        },
        "geo":{
          "@type":"GeoCoordinates",
          "latitude":32.7601,
          "longitude":-117.0222
        },
        "telephone":"+1-619-555-1234",
        "url":"https://thesmokingbee.com/head-shop-la-mesa",
        "openingHours":"Mo–Sa 10:00–20:00",
        "priceRange":"$"
      }`,
    },
  };
}
export default async function head_shop_la_mesa_Page() {
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
          { "name": "La Mesa’s #1 Head Shop | The Smoking Bee", "path": "/head-shop-la-mesa" }
        ]}
      />
      <HeroSection />
      <AnimatedCategorySection categories={safeCategories} />
      <GeoMapWrapper />

      <section className="py-8 px-6 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gold mb-4 text-center">Head Shop La Mesa</h1>
        <p>
          Welcome to <strong>The Smoking Bee</strong>, La Mesa’s premier smoke shop located at 7584 University Ave Suite B. 
          We specialize in handcrafted glass bongs, premium rolling trays, high‑performance vapes, Delta‑8 cartridges, 
          and more. Whether you’re restocking essentials or exploring new styles, our friendly staff is here to help 
          you find the perfect piece. We have a wide selection and great deals, check us out.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <Testimonials />
      </section>

      <CTASection />
    </>
  );
}
