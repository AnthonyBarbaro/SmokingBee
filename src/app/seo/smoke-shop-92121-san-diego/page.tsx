import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92121 | Sorrento Valley",
    description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
    keywords: "smoke shop 92121, sorrento valley, delta-8, glass pipes, vapes, head shop near me, smoke shop open now, 420 shop in 92121, delta 8 92121, cheap glass pipes 92121, buy vapes in 92121",
    openGraph: {
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      url: "https://thesmokingbee.com/smoke-shop-92121-san-diego",
      images: [{ url: "/images/about/7.JPG", alt: "Smoke Shop 92121 | Sorrento Valley" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92121 | Sorrento Valley",
      description: "Serving 92121 Sorrento Valley with premium glass, Delta-8, and vapes at The Smoking Bee. Elevate your smoking experience.",
      images: ["/images/about/7.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92121-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92121 | Sorrento Valley", "item": "https://thesmokingbee.com/smoke-shop-92121-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92121_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Smoking Experience in Sorrento Valley!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Sorrento Valley (92121), The Smoking Bee is your go-to smoke shop for all your premium smoking needs. Whether you’re a seasoned smoker or just starting out, we offer a wide selection of high-quality glass, potent Delta-8 products, and vapes to enhance your experience.</p><h2>Our Products</h2><p>At The Smoking Bee, we pride ourselves on our carefully curated inventory. Our shelves are stocked with:</p><ul><li><strong>Premium Glass:</strong> Explore our collection of unique glass pieces that combine functionality and artistry.</li><li><strong>Delta-8 Products:</strong> Discover the latest Delta-8 offerings that deliver a smooth and satisfying experience.</li><li><strong>Vapes:</strong> Find the best vape hardware and e-liquids that suit your preferences.</li></ul><p>We regularly update our inventory with new arrivals, so there’s always something fresh to discover. Don’t hesitate to ask our knowledgeable staff for recommendations on hardware upgrades or product pairings that can elevate your smoking sessions.</p><h2>Convenient Location</h2><p>Our smoke shop is easily accessible for professionals and residents in the Sorrento Valley area. We understand the importance of quality when it comes to your smoking experience, and we’re here to help you find the perfect products to unwind after a long day.</p><p>Stop by The Smoking Bee today and see why we’re the preferred smoke shop in 92121. Whether you’re looking to relax or elevate your sessions, we’ve got you covered!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a variety of glass pieces, Delta-8 products, and vape hardware."}, {"q": "Is The Smoking Bee a good place for beginners?", "a": "Absolutely! Our knowledgeable staff can help guide you in choosing the right products."}, {"q": "Do you have new products regularly?", "a": "Yes, we frequently update our inventory with new arrivals."}, {"q": "Where are you located?", "a": "We are conveniently located in Sorrento Valley (92121), easily accessible to all."}, {"q": "Can I ask for recommendations?", "a": "Of course! Our staff is always ready to provide personalized recommendations."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92121 | Sorrento Valley", path: "/smoke-shop-92121-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/7.JPG" />
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
