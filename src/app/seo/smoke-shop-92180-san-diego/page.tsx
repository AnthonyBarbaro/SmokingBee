import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92180 | Kearny Mesa",
    description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
    keywords: "smoke shop 92180, kearny mesa, e-liquids, rolling trays, glass accessories, head shop near me, smoke shop open now, 420 shop in 92180, buy vapes in 92180, cheap glass pipes 92180",
    openGraph: {
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-92180-san-diego",
      images: [{ url: "/images/about/9.JPG", alt: "Smoke Shop 92180 | Kearny Mesa" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92180 | Kearny Mesa",
      description: "Check out The Smoking Bee (92180) for e-liquids, rolling trays, and glass accessories in Kearny Mesa.",
      images: ["/images/about/9.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92180-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92180 | Kearny Mesa", "item": "https://thesmokingbee.com/smoke-shop-92180-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92180_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Destination for Smoky Delights!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Kearny Mesa</h2><p>If you're searching for the best smoke shop in the 92180 area, look no further than The Smoking Bee. We pride ourselves on offering an extensive range of products that cater to all your vaping and smoking needs. Located in the heart of Kearny Mesa, our shop is designed to provide you with a friendly and informative shopping experience.</p><h2>What We Offer</h2><ul><li><strong>E-liquids:</strong> Our selection of e-liquids is unmatched. We carry a variety of flavors to satisfy every palate, from fruity to dessert-inspired.</li><li><strong>Rolling Trays:</strong> Discover our high-quality rolling trays that make your smoking experience not only easier but also more enjoyable.</li><li><strong>Glass Accessories:</strong> We feature a range of sturdy glass pieces that enhance your sessions, ensuring durability and style.</li><li><strong>Vape Mods:</strong> For advanced smokers, we offer cutting-edge vape mods that deliver thick clouds and rich flavors.</li><li><strong>Delta-8 Edibles:</strong> Explore our rotating selection of delta-8 edibles for a unique way to unwind and relax.</li></ul><p>At The Smoking Bee, we understand the importance of quality and variety. Our knowledgeable staff is always on hand to help you find exactly what you need. Whether you're a seasoned smoker or new to the scene, we’ll guide you through our offerings to ensure you leave satisfied.</p><h2>Visit Us Today!</h2><p>Come on down to The Smoking Bee in Kearny Mesa and discover our amazing selection. We're committed to providing the best products at competitive prices, making your shopping experience a breeze. Don’t miss out on the latest trends and products in the smoking community!</p>`;
  const faqItems = [{"q": "What types of e-liquids do you offer?", "a": "We have a wide variety of e-liquids, including fruity, dessert, and menthol flavors."}, {"q": "Do you sell rolling trays?", "a": "Yes, we offer high-quality rolling trays in various designs and sizes."}, {"q": "What kind of glass accessories can I find?", "a": "Our shop features a range of durable glass pieces, perfect for enhancing your smoking experience."}, {"q": "Are there any delta-8 products available?", "a": "Absolutely! We have a rotating selection of delta-8 edibles for you to explore."}, {"q": "Can I get help with choosing vape mods?", "a": "Yes, our knowledgeable staff is here to help you find the perfect vape mod to suit your needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92180 | Kearny Mesa", path: "/smoke-shop-92180-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/9.JPG" />
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
