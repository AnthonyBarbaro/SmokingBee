import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92181 | Premium Vapes & Glass",
    description: "In 92181? The Smoking Bee features a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
    keywords: "smoke shop 92181, disposable vapes, glass bongs, delta-8, premium shop, head shop near me, smoke shop open now, 420 shop in 92181, buy vapes in 92181, cheap glass pipes 92181, delta 8 92181",
    openGraph: {
      title: "Smoke Shop 92181 | Premium Vapes & Glass",
      description: "In 92181? The Smoking Bee features a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
      url: "https://thesmokingbee.com/smoke-shop-92181-san-diego",
      images: [{ url: "/images/about/21.JPG", alt: "Smoke Shop 92181 | Premium Vapes & Glass" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92181 | Premium Vapes & Glass",
      description: "In 92181? The Smoking Bee features a huge selection of disposable vapes, glass bongs, and Delta-8 products.",
      images: ["/images/about/21.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92181-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92181 | Premium Vapes & Glass", "item": "https://thesmokingbee.com/smoke-shop-92181-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92181_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Hub for Vapes and Glass in 92181!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in 92181!</h2><p>If you're in the 92181 area and searching for premium vapes and glass products, look no further than The Smoking Bee. We pride ourselves on offering a massive selection that caters to all your smoking needs. Whether you're a seasoned enthusiast or just starting your journey, our shop has something for everyone.</p><h2>Our Product Range</h2><ul><li><strong>Disposable Vapes:</strong> Explore our wide variety of disposable vapes that come in numerous flavors. Perfect for on-the-go convenience!</li><li><strong>Glass Bongs:</strong> Discover our collection of beautifully crafted glass bongs that enhance your smoking experience.</li><li><strong>Delta-8 Products:</strong> We offer a range of Delta-8 products that are gaining popularity for their unique effects.</li><li><strong>Kratom Strains:</strong> Not sure which strain to choose? Our knowledgeable staff is here to help you find the right kratom for your needs.</li></ul><p>At The Smoking Bee, we understand that quality and affordability go hand in hand. That's why we strive to provide an excellent balance of both, ensuring that our customers leave satisfied every time.</p><h2>Why Choose Us?</h2><p>Our friendly and informed staff is dedicated to providing you with a personalized shopping experience. Whether you have questions about our products or need assistance in making a selection, we're here to help! Come visit us in 92181 and see for yourself why The Smoking Bee is the go-to smoke shop in the area.</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of disposable vapes, glass bongs, Delta-8 products, and various kratom strains."}, {"q": "Do you have flavored disposable vapes?", "a": "Yes! We have a huge selection of flavors for our disposable vapes to suit every taste."}, {"q": "Is your staff knowledgeable about the products?", "a": "Absolutely! Our staff is trained to help you find the right products and answer any questions you may have."}, {"q": "Where are you located in 92181?", "a": "You can find us conveniently located in the heart of 92181, ready to serve you!"}, {"q": "Are your prices competitive?", "a": "Yes, we strive to offer the best quality products at affordable prices."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92181 | Premium Vapes & Glass", path: "/smoke-shop-92181-san-diego" }
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
