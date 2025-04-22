import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92165 | Kensington",
    description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
    keywords: "smoke shop 92165, kensington, bongs, e-liquids, delta-8, head shop near me, smoke shop open now, 420 shop in 92165, cheap glass pipes 92165, buy vapes in 92165, delta 8 92165",
    openGraph: {
      title: "Smoke Shop 92165 | Kensington",
      description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
      url: "https://thesmokingbee.com/smoke-shop-92165-san-diego",
      images: [{ url: "/images/about/19.JPG", alt: "Smoke Shop 92165 | Kensington" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92165 | Kensington",
      description: "Kensington (92165) relies on The Smoking Bee for top-tier bongs, e-liquids, and Delta-8 products.",
      images: ["/images/about/19.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92165-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92165 | Kensington", "item": "https://thesmokingbee.com/smoke-shop-92165-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92165_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Perfect Smoke at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Kensington</h2><p>In the heart of Kensington (92165), The Smoking Bee is your premier destination for all things smoke-related. Whether you’re in search of top-tier bongs, flavorful e-liquids, or the latest Delta-8 products, we’ve got you covered. Our shop is designed for both seasoned enthusiasts and newcomers alike, ensuring that everyone finds exactly what they need.</p><h2>Explore Our Product Range</h2><p>At The Smoking Bee, we pride ourselves on offering a diverse selection of products. Here’s what you can expect when you visit:</p><ul><li><strong>Bongs:</strong> Choose from a variety of styles and sizes that fit your preferences and enhance your smoking experience.</li><li><strong>E-liquids:</strong> Sample unique flavors that will tantalize your taste buds. Our selection is curated to ensure quality and satisfaction.</li><li><strong>Delta-8 Products:</strong> Discover the benefits of Delta-8 with our range of products that are gaining popularity for their smooth effects.</li></ul><p>Not only do we offer great products, but our knowledgeable staff is always on hand to help you navigate your options. Whether you need advice on the best grinder or want to learn about different hemp wraps, we’re here to enhance your shopping experience.</p><h2>Your Kensington Smoke Destination</h2><p>The Smoking Bee isn’t just a shop; it’s a community hub for smoke enthusiasts in Kensington. We host events, workshops, and tastings that allow you to connect with other locals and learn more about your favorite products. Join us for a fun and informative experience!</p><p>Next time you’re in the Kensington area, stop by The Smoking Bee. We guarantee you’ll leave with something special and a smile on your face!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of bongs, e-liquids, and Delta-8 products."}, {"q": "Is your staff knowledgeable about the products?", "a": "Absolutely! Our staff is trained to help you with product knowledge and recommendations."}, {"q": "Do you host events or tastings?", "a": "Yes, we host various events and tastings for our community."}, {"q": "Where is The Smoking Bee located?", "a": "We're located in the charming Kensington neighborhood, easily accessible for all local residents."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92165 | Kensington", path: "/smoke-shop-92165-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/19.JPG" />
      <AnimatedCategorySection categories={safeCategories} />
      <section
        className="prose prose-lg max-w-4xl mx-auto my-12 px-6 py-10 bg-black text-white shadow-xl rounded-2xl border border-gold"
        style={{
          borderColor: "#FFD700",
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <GeoMapWrapper />
      {faqItems.length > 0 && (
        <section className="my-16">
          <section className="max-w-3xl mx-auto py-10 px-6 bg-black text-white rounded-2xl border border-gold shadow-lg">
            <h2 className="text-3xl font-extrabold mb-6 text-gold">FAQ</h2>
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="border border-white/20 rounded-lg p-4 mb-4 transition duration-300 hover:border-gold"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {item.q}
                </summary>
                <p className="mt-2 text-white">{item.a}</p>
              </details>
            ))}
          </section>
        </section>
      )}

      
      
      
      <Testimonials />
      <CTASection />
    </>
  );
}
