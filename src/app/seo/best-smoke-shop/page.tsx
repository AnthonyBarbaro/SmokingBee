import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop Near You | The Smoking Bee",
    description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
    keywords: "best smoke shop, head shop near me, premium glass bongs, delta-8, smoking accessories, smoke shop open now, 420 shop near me, delta 8 near me, cheap glass pipes near me",
    openGraph: {
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
      url: "https://thesmokingbee.com/best-smoke-shop",
      images: [{ url: "/images/about/19.JPG", alt: "Best Smoke Shop Near You | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop Near You | The Smoking Bee",
      description: "Visit The Smoking Bee for top-quality glass bongs, vapes, Delta-8, and premium accessories—your best local smoke shop.",
      images: ["/images/about/19.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Smoke Shop Near You | The Smoking Bee", "item": "https://thesmokingbee.com/best-smoke-shop"}]}`
    }
  };
}

export default async function best_smoke_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Haven for Premium Smoking Essentials!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Searching for the best smoke shop experience? Look no further! At The Smoking Bee, we pride ourselves on offering a curated selection of top-quality glass bongs, vapes, Delta-8 products, and premium accessories. Our mission is to ensure that every customer finds exactly what they need to enhance their smoking experience.</p><h2>Why Choose Us?</h2><ul><li><strong>Curated Selection:</strong> We offer only the finest products, from flavorful hookah shisha to stunning local glass masterpieces.</li><li><strong>Knowledgeable Staff:</strong> Our friendly and experienced team is always on hand to help you find the perfect smoking accessory.</li><li><strong>Great Atmosphere:</strong> Enjoy a welcoming and relaxed environment while you browse our extensive inventory.</li></ul><p>At The Smoking Bee, we understand that every smoker has unique preferences. That’s why we take pride in offering a wide array of options to cater to all tastes and needs. Whether you're a novice or a seasoned enthusiast, our smoke shop is designed to provide a standout shopping experience.</p><h2>Visit Us Today!</h2><p>Come see why customers call The Smoking Bee their favorite one-stop destination for smoking essentials. We guarantee that you’ll leave with exactly what you’re looking for and perhaps even discover something new! Explore our collection, ask questions, and enjoy the best in customer service.</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide range of products including glass bongs, vapes, Delta-8, and premium smoking accessories."}, {"q": "Is your staff knowledgeable?", "a": "Absolutely! Our friendly and experienced staff are here to help you find the perfect products for your needs."}, {"q": "Do you have any special promotions?", "a": "Yes, we frequently run promotions and discounts. Be sure to check our website or visit us for the latest deals!"}, {"q": "What makes The Smoking Bee different from other smoke shops?", "a": "We focus on providing a curated selection of high-quality products and an exceptional shopping experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Smoke Shop Near You | The Smoking Bee", path: "/best-smoke-shop" }
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
