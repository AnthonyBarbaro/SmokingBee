import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92178 | Coronado Island",
    description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
    keywords: "smoke shop 92178, coronado island, vape juices, glass bongs, smoking shop, head shop near me, smoke shop open now, 420 shop in 92178, buy vapes in 92178, cheap glass pipes 92178",
    openGraph: {
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92178-san-diego",
      images: [{ url: "/images/about/22.JPG", alt: "Smoke Shop 92178 | Coronado Island" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92178 | Coronado Island",
      description: "Coronado Island (92178) counts on The Smoking Bee for top vape juices, glass bongs, and more.",
      images: ["/images/about/22.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92178 | Coronado Island", "item": "https://thesmokingbee.com/smoke-shop-92178-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92178_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Ultimate Smoke Shop on Coronado Island!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Coronado Island!</h2><p>If you're in the 92178 area, look no further than The Smoking Bee for all your smoking needs. We pride ourselves on offering the finest selection of products to enhance your smoking experience. Whether you're searching for smooth vape juices, stylish glass bongs, or other smoking accessories, we have everything you need.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we understand that each smoker has unique preferences. That's why we curate a diverse range of products, including:</p><ul><li><strong>Vape Juices:</strong> Explore our collection of premium vape juices available in various flavors, perfect for every palate.</li><li><strong>Glass Bongs:</strong> Find stylish and functional glass bongs that not only look great but also provide a superior smoking experience.</li><li><strong>Rolling Papers:</strong> We offer a variety of rolling papers and natural wraps to suit every smoking style.</li><li><strong>Delta-8 Edibles:</strong> Try our range of delta-8 edibles for a new and exciting way to unwind.</li></ul><p>Our team is dedicated to helping you discover your ideal setup. Whether you're a seasoned smoker or just starting out, we’re here to guide you in choosing the best products for your needs. Our friendly staff is always available to answer your questions and provide recommendations based on your preferences.</p><h2>Visit Us Today!</h2><p>When you’re in the 92178 area, make sure to stop by The Smoking Bee for a warm welcome and an incredible selection of smoking products. Experience the difference that quality and customer service can make. We’re excited to help you find exactly what you’re looking for!</p>`;
  const faqItems = [{"q": "What products does The Smoking Bee offer?", "a": "We offer a variety of vape juices, glass bongs, rolling papers, natural wraps, and delta-8 edibles."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Absolutely! Our friendly staff can help beginners find the right products and setup."}, {"q": "Can I find unique smoking accessories at The Smoking Bee?", "a": "Yes! We curate a selection of stylish and functional smoking accessories."}, {"q": "What are delta-8 edibles?", "a": "Delta-8 edibles are a new and exciting way to enjoy a relaxing experience with cannabis."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located on Coronado Island, serving the 92178 area."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92178 | Coronado Island", path: "/smoke-shop-92178-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/22.JPG" />
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
