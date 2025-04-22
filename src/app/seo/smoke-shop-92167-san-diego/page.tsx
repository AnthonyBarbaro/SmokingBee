import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92167 | Loma Portal",
    description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
    keywords: "smoke shop 92167, loma portal, kratom, vape pens, glass pipes, head shop near me, smoke shop open now, 420 shop in 92167, best kratom shop, buy vapes in 92167, cheap glass pipes 92167",
    openGraph: {
      title: "Smoke Shop 92167 | Loma Portal",
      description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92167-san-diego",
      images: [{ url: "/images/about/15.JPG", alt: "Smoke Shop 92167 | Loma Portal" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92167 | Loma Portal",
      description: "In 92167? The Smoking Bee provides premium kratom, vape pens, and glass for Loma Portal smokers.",
      images: ["/images/about/15.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92167 | Loma Portal", "item": "https://thesmokingbee.com/smoke-shop-92167-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92167_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Premium Smoke Supplies in Loma Portal!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Loma Portal</h2><p>If you're in the 92167 area, The Smoking Bee is your go-to smoke shop for all your smoking needs. We pride ourselves on offering a wide selection of premium products that cater to both novice and experienced smokers alike. Our store is stocked with high-quality kratom, sleek vape pens, and elegant glass pipes, ensuring you find exactly what you're looking for.</p><h2>Our Offerings</h2><ul><li><strong>Kratom:</strong> Explore our potent varieties that are perfect for enhancing your smoking experience. We carefully select our kratom to ensure quality and potency.</li><li><strong>Vape Pens:</strong> Our collection of vape pens includes the latest models designed for convenience and style. Whether you’re looking for something compact or a more advanced coil setup, we’ve got you covered.</li><li><strong>Glass Pipes:</strong> Browse our range of quality glass pipes that not only serve as functional tools but also as pieces of art. Each piece is selected for its design and durability.</li><li><strong>Delta-8 Cartridges:</strong> Check out our new Delta-8 cartridges, a favorite among locals for their unique effects and smooth experience.</li></ul><p>At The Smoking Bee, we are dedicated to helping you discover new ways to enjoy your favorite herbs in style. Our knowledgeable staff is always ready to assist you with product recommendations and tips, making your visit enjoyable and informative.</p><h2>Why Choose Us?</h2><p>Not only do we offer a wide variety of products, but we also focus on providing a friendly and welcoming atmosphere. We understand the local community and strive to meet the needs of Loma Portal smokers. Whether you’re a regular or a first-time visitor, you will always feel at home at The Smoking Bee.</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer premium kratom, vape pens, glass pipes, and Delta-8 cartridges."}, {"q": "Is The Smoking Bee a local store?", "a": "Yes, we are proud to serve the Loma Portal community in the 92167 area."}, {"q": "Can I get recommendations for products?", "a": "Absolutely! Our knowledgeable staff is here to help you find the best products for your needs."}, {"q": "Do you have any special deals?", "a": "Yes, we often have promotions on select products. Be sure to ask during your visit!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92167 | Loma Portal", path: "/smoke-shop-92167-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/15.JPG" />
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
