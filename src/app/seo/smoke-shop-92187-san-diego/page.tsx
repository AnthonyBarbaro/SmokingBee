import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92187 | Southeastern San Diego",
    description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
    keywords: "smoke shop 92187, disposable vapes, delta-8, glass pieces, smoking shop, head shop near me, smoke shop open now, 420 shop in 92187, buy vapes in 92187, delta 8 92187, cheap glass pipes 92187",
    openGraph: {
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92187-san-diego",
      images: [{ url: "/images/about/21.JPG", alt: "Smoke Shop 92187 | Southeastern San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92187 | Southeastern San Diego",
      description: "In 92187? The Smoking Bee provides disposable vapes, premium Delta-8, and glass pieces for local smokers.",
      images: ["/images/about/21.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92187-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92187 | Southeastern San Diego", "item": "https://thesmokingbee.com/smoke-shop-92187-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92187_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Next Favorite Smoke at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Southeastern San Diego!</h2><p>If you're in the 92187 area, look no further than The Smoking Bee for all your smoking needs. Our smoke shop is dedicated to providing a diverse range of products that cater to both seasoned smokers and newcomers alike. We pride ourselves on our extensive selection of disposable vapes, premium Delta-8 products, and unique glass pieces.</p><h2>Our Unique Offerings</h2><p>At The Smoking Bee, we understand that every smoker has their own preferences. That's why we stock a variety of items to ensure there's something for everyone:</p><ul><li><strong>Disposable Vapes:</strong> Convenient and easy to use, our disposable vapes come in an array of flavors and strengths, perfect for on-the-go enjoyment.</li><li><strong>Premium Delta-8:</strong> Experience the smooth and enjoyable effects of Delta-8 products, sourced from reputable brands that prioritize quality.</li><li><strong>Glass Pieces:</strong> From intricate water pipes to simple, travel-friendly options, our glass collection is designed to elevate your smoking experience.</li></ul><h2>Why Choose The Smoking Bee?</h2><p>We are not just a smoke shop; we are a community hub for smokers in the Southeastern San Diego area. Our knowledgeable staff is always ready to assist you in finding the right product to suit your needs. We keep our inventory fresh with new and exciting products, so every visit offers something different to discover.</p><p>Whether you're looking for a unique water pipe design or a simple vape to take on your adventures, The Smoking Bee has you covered. Stop by today and see why we are the favorite smoke shop in 92187!</p>`;
  const faqItems = [{"q": "What products does The Smoking Bee offer?", "a": "We offer disposable vapes, premium Delta-8, and a variety of glass pieces."}, {"q": "Is The Smoking Bee located in San Diego?", "a": "Yes, we are proudly located in the 92187 area of Southeastern San Diego."}, {"q": "Can I find unique glass pieces at your shop?", "a": "Absolutely! We have a wide selection of unique and travel-friendly glass pieces."}, {"q": "Do you provide recommendations for new smokers?", "a": "Yes, our knowledgeable staff is here to guide you in finding the right products."}, {"q": "What are Delta-8 products?", "a": "Delta-8 products are hemp-derived items known for their smooth effects and enjoyable experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92187 | Southeastern San Diego", path: "/smoke-shop-92187-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/21.JPG" />
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
