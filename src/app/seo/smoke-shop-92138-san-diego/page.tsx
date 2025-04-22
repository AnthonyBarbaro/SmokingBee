import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92138 | Old Town San Diego",
    description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
    keywords: "smoke shop 92138, old town san diego, vapes, glass pipes, smoking accessories, head shop near me, smoke shop open now, 420 shop in 92138, buy vapes in 92138, cheap glass pipes 92138",
    openGraph: {
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92138-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92138 | Old Town San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92138 | Old Town San Diego",
      description: "Get premium smoking accessories near 92138 in Old Town. The Smoking Bee has your vapes, glass pipes, and more.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92138 | Old Town San Diego", "item": "https://thesmokingbee.com/smoke-shop-92138-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92138_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Premium Smoking Accessories in Old Town!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you’re in the 92138 area of Old Town San Diego, look no further than The Smoking Bee for all your smoking needs. Our smoke shop is conveniently located, offering a curated selection of premium smoking accessories, including vapes, glass pipes, and more. Whether you’re a seasoned smoker or just starting your journey, we have something for everyone.</p><h2>Our Product Range</h2><ul><li><strong>Vapes:</strong> Explore our wide variety of vapes, perfect for those looking to enjoy a smooth and flavorful experience.</li><li><strong>Glass Pipes:</strong> We pride ourselves on offering unique glass creations from local artists, ensuring you find the perfect piece that resonates with your style.</li><li><strong>Smoking Accessories:</strong> From specialized papers to natural wraps, we have all the essentials to enhance your smoking experience.</li></ul><p>After a day of exploring the historic sights of Old Town, stop by The Smoking Bee to find new ways to enhance your smoke. Our friendly staff is here to help you navigate our extensive inventory and answer any questions you may have. We believe that every customer deserves a personalized experience, and we are dedicated to providing just that.</p><h2>Why Choose The Smoking Bee?</h2><p>Not only do we offer high-quality products, but we also provide a welcoming atmosphere where customers can feel at home. Our knowledgeable team is always on hand to provide recommendations and tips to ensure you get the most out of your purchases. Plus, we regularly update our inventory with the latest trends and products in the smoking industry.</p><p>Visit us today in Old Town San Diego and discover why The Smoking Bee is the go-to smoke shop in the 92138 area!</p>`;
  const faqItems = [{"q": "What types of vapes do you carry?", "a": "We offer a variety of vapes including portable, desktop, and disposable options."}, {"q": "Do you sell smoking accessories?", "a": "Yes, we have a wide range of smoking accessories including papers, wraps, and more."}, {"q": "Is there parking available near your shop?", "a": "Yes, there is ample parking available nearby for our customers."}, {"q": "What are your store hours?", "a": "We are open daily from 10 AM to 8 PM to serve you."}, {"q": "Can I find local glass creations at your shop?", "a": "Absolutely! We feature unique pieces from local glass artists."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92138 | Old Town San Diego", path: "/smoke-shop-92138-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/16.JPG" />
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
