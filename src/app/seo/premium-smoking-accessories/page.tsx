import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Premium Smoking Accessories | The Smoking Bee",
    description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
    keywords: "smoking accessories, rolling trays, grinders, premium bongs, smoke shop, head shop near me, smoke shop open now, 420 shop near me, cheap glass pipes near me",
    openGraph: {
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
      url: "https://thesmokingbee.com/premium-smoking-accessories",
      images: [{ url: "/images/about/8.JPG", alt: "Premium Smoking Accessories | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium Smoking Accessories | The Smoking Bee",
      description: "Find top-tier grinders, trays, bongs, and more at The Smoking Bee. Upgrade your smoking experience today.",
      images: ["/images/about/8.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/premium-smoking-accessories",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Premium Smoking Accessories | The Smoking Bee", "item": "https://thesmokingbee.com/premium-smoking-accessories"}]}`
    }
  };
}

export default async function premium_smoking_accessories_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Smoking Experience with The Smoking Bee!`;
  const htmlContent = `<h2>Discover Our Premium Smoking Accessories</h2><p>At <strong>The Smoking Bee</strong>, we believe that the right accessories can transform your smoking experience. That's why we offer a wide selection of premium smoking accessories tailored to suit every preference and style. Whether you're a seasoned smoker or just starting out, our products are designed to enhance your enjoyment and convenience.</p><h2>Top-Quality Products</h2><p>Explore our collection of top-tier grinders, which are perfect for achieving the perfect consistency. Our grinders are built to last, featuring durable materials and innovative designs. Additionally, our selection of bongs includes stunning glass pieces that not only perform exceptionally but also serve as eye-catching decor.</p><h2>Stylish and Functional Trays</h2><p>Rolling your own cigarettes or joints has never been easier with our stylish rolling trays. Choose from various designs and sizes to find the perfect match for your setup. Our trays are designed to keep your materials organized and your workspace clean, allowing you to focus on what matters most—enjoying your smoke.</p><h2>Expert Recommendations</h2><p>Not sure where to start? Our knowledgeable staff at <strong>The Smoking Bee</strong> is here to help! We can recommend the perfect accessories based on your individual needs and preferences. Whether you need a simple rolling tool or a complete setup, we have you covered.</p><h2>Why Choose The Smoking Bee?</h2><ul><li>Wide selection of premium brands</li><li>Durable and stylish accessories</li><li>Expert guidance and recommendations</li><li>Exceptional customer service</li></ul><p>Upgrade your smoking experience today with our top-quality accessories. Visit <strong>The Smoking Bee</strong> and discover the perfect additions to your setup!</p>`;
  const faqItems = [{"q": "What types of smoking accessories do you offer?", "a": "We offer a range of smoking accessories including grinders, bongs, trays, and rolling tools."}, {"q": "Are your products suitable for beginners?", "a": "Yes, we have products that cater to both beginners and experienced smokers."}, {"q": "Can I get recommendations for smoking accessories?", "a": "Absolutely! Our staff is always ready to help you find the perfect accessories for your needs."}, {"q": "Do you carry specific brands?", "a": "Yes, we stock top-tier brands known for their quality and durability."}, {"q": "How can I contact The Smoking Bee for questions?", "a": "You can reach us through our website or visit us in-store for any inquiries."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Premium Smoking Accessories | The Smoking Bee", path: "/premium-smoking-accessories" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/8.JPG" />
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
