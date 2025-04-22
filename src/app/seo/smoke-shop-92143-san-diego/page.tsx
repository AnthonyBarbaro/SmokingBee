import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92143 | Border Area",
    description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
    keywords: "smoke shop 92143, border area, vapes, kratom, glass pipes, head shop near me, smoke shop open now, 420 shop in 92143, buy vapes in 92143, best kratom shop, cheap glass pipes 92143",
    openGraph: {
      title: "Smoke Shop 92143 | Border Area",
      description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
      url: "https://thesmokingbee.com/smoke-shop-92143-san-diego",
      images: [{ url: "/images/about/6.JPG", alt: "Smoke Shop 92143 | Border Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92143 | Border Area",
      description: "Between San Diego and Chula Vista? Swing by The Smoking Bee (92143) for vapes, kratom, and glass pipes.",
      images: ["/images/about/6.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92143-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92143 | Border Area", "item": "https://thesmokingbee.com/smoke-shop-92143-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92143_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop Near the Border!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located conveniently between San Diego and Chula Vista, The Smoking Bee is your premier smoke shop in the 92143 area. We pride ourselves on offering a wide selection of high-quality products that cater to both seasoned smokers and newcomers alike. Whether you're searching for the latest vape devices, premium kratom, or stylish glass pipes, we have something for everyone.</p><h2>Our Products</h2><ul><li><strong>Vapes:</strong> Discover an array of vapes and e-liquids, from classic flavors to innovative blends.</li><li><strong>Kratom:</strong> Experience the benefits of kratom with our carefully sourced varieties, perfect for relaxation and wellness.</li><li><strong>Glass Pipes:</strong> Browse our collection of unique and artistic glass pipes that are both functional and beautiful.</li></ul><p>At The Smoking Bee, we understand the importance of quality and selection. Our knowledgeable staff is always on hand to help you find exactly what you need, whether you're seeking advice on the best products for your lifestyle or looking to try something new. We are committed to providing a friendly and welcoming environment for all our customers.</p><h2>Why Choose Us?</h2><p>When you stop by The Smoking Bee, you can expect:</p><ul><li>A wide range of premium products to suit every preference.</li><li>Competitive prices and regular promotions to help you save.</li><li>A passionate team that cares about your experience.</li></ul><p>So, whether you’re commuting between cities or just looking to explore, make sure to swing by The Smoking Bee for all your smoking needs. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a variety of vapes, kratom, and glass pipes."}, {"q": "Are your products high quality?", "a": "Yes, we pride ourselves on providing top-shelf products for our customers."}, {"q": "Can I get recommendations from your staff?", "a": "Absolutely! Our knowledgeable staff is here to help you find the right products."}, {"q": "What are your store hours?", "a": "We are open daily, check our website for specific hours."}, {"q": "Do you have any promotions?", "a": "Yes, we regularly offer promotions. Visit us to find out more!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92143 | Border Area", path: "/smoke-shop-92143-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/6.JPG" />
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
