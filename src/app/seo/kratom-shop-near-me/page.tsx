import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find Kratom Near You | The Smoking Bee",
    description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
    keywords: "kratom shop near me, kratom powder, kratom capsules, best kratom, smoke shop, head shop near me, smoke shop open now, 420 shop near me, best kratom shop",
    openGraph: {
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      url: "https://thesmokingbee.com/kratom-shop-near-me",
      images: [{ url: "/images/about/15.JPG", alt: "Find Kratom Near You | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Kratom Near You | The Smoking Bee",
      description: "Looking for top-quality kratom powders or capsules? Discover The Smoking Bee for premium kratom solutions.",
      images: ["/images/about/15.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find Kratom Near You | The Smoking Bee", "item": "https://thesmokingbee.com/kratom-shop-near-me"}]}`
    }
  };
}

export default async function kratom_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Premium Kratom at The Smoking Bee!`;
  const htmlContent = `<h2>Your Local Kratom Source</h2><p>If you're searching for high-quality kratom powders or capsules, look no further than <strong>The Smoking Bee</strong>. We are dedicated to providing our customers with the finest kratom solutions available. Our extensive selection includes a variety of strains, ensuring you find the perfect match for your needs.</p><h2>Why Choose Us?</h2><ul><li><strong>High-Quality Products:</strong> We source only the best kratom from trusted suppliers, ensuring purity and consistency in every batch.</li><li><strong>Wide Selection:</strong> Whether you prefer energizing white strains or calming red varieties, we have something for everyone.</li><li><strong>Expert Guidance:</strong> Our knowledgeable staff is here to help you navigate our offerings and find the right kratom solution tailored to your lifestyle.</li></ul><h2>What to Expect at The Smoking Bee</h2><p>Visiting <strong>The Smoking Bee</strong> means you’ll not only find premium kratom products but also enjoy a welcoming atmosphere. We believe that education is key, and our team is eager to share their knowledge about different strains and their effects. Let us assist you in making informed choices to enhance your kratom experience.</p><h2>Visit Us Today!</h2><pReady to explore the world of kratom? Stop by <strong>The Smoking Bee</strong> today and discover the quality and variety we offer. Whether you’re a seasoned user or new to kratom, we’re here to help you every step of the way.</p>`;
  const faqItems = [{"q": "What types of kratom do you offer?", "a": "We offer a wide range of kratom strains, including energizing whites and relaxing reds."}, {"q": "How do I choose the right kratom product?", "a": "Our knowledgeable staff can guide you based on your preferences and desired effects."}, {"q": "Is your kratom tested for quality?", "a": "Yes, we source high-quality kratom that is rigorously tested for purity and consistency."}, {"q": "Can I visit your store to see the products?", "a": "Absolutely! We welcome you to visit <strong>The Smoking Bee</strong> and explore our selection in person."}, {"q": "Do you offer kratom capsules as well?", "a": "Yes, we have both kratom powders and capsules available for your convenience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Find Kratom Near You | The Smoking Bee", path: "/kratom-shop-near-me" }
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
