import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "San Diego’s Best Head Shop | The Smoking Bee",
    description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
    keywords: "head shop san diego, premium bongs, grinders, rolling trays, smoking accessories, head shop near me, smoke shop open now, 420 shop in san diego, cheap glass pipes san diego",
    openGraph: {
      title: "San Diego’s Best Head Shop | The Smoking Bee",
      description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
      url: "https://thesmokingbee.com/head-shop-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "San Diego’s Best Head Shop | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego’s Best Head Shop | The Smoking Bee",
      description: "Looking for a top head shop in San Diego? Visit The Smoking Bee for quality bongs, grinders, trays, and more.",
      images: ["/images/about/11.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/head-shop-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "San Diego\u2019s Best Head Shop | The Smoking Bee", "item": "https://thesmokingbee.com/head-shop-san-diego"}]}`
    }
  };
}

export default async function head_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover San Diego’s Premier Head Shop Today!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you're on the hunt for the best head shop in San Diego, look no further! The Smoking Bee is your one-stop destination for all your smoking needs. Our shop is stocked with an incredible selection of high-quality bongs, grinders, rolling trays, and much more, catering to both casual users and avid collectors alike.</p><h2>Why Choose Us?</h2><p>At The Smoking Bee, we pride ourselves on providing a diverse range of products that meet the needs of every smoking enthusiast. Our collection features:</p><ul><li><strong>Premium Bongs:</strong> Choose from an array of stylish and functional bongs made from high-grade materials.</li><li><strong>Grinders:</strong> Find the perfect grinder to enhance your smoking experience.</li><li><strong>Rolling Trays:</strong> Keep your space tidy with our variety of rolling trays, designed for convenience and style.</li></ul><p>We focus on quality and performance, ensuring that every item in our store is carefully selected. Whether you're a beginner or a seasoned connoisseur, we have something for everyone.</p><h2>Visit Us Today!</h2><p>Located in the heart of San Diego, The Smoking Bee is easily accessible for all your smoking accessory needs. Our friendly and knowledgeable staff are always ready to assist you in finding the perfect products to suit your preferences. Come visit us and see why we're considered one of the top head shops in the city!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide variety of bongs, grinders, rolling trays, and accessories."}, {"q": "Are your products high quality?", "a": "Yes! We carefully select each product for quality and performance."}, {"q": "Do you have products for beginners?", "a": "Absolutely! We have options suitable for both beginners and experienced users."}, {"q": "What are your store hours?", "a": "We are open daily; please check our website for specific hours."}, {"q": "Is The Smoking Bee located in downtown San Diego?", "a": "Yes, we are conveniently located in the heart of downtown San Diego."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "San Diego’s Best Head Shop | The Smoking Bee", path: "/head-shop-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/11.JPG" />
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
