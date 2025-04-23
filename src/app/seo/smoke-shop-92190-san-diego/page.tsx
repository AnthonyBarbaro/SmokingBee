import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92190 | Central Coast SD",
    description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
    keywords: "smoke shop 92190, central coast, delta-8 edibles, vape devices, smoking shop, head shop near me, smoke shop open now, 420 shop in 92190, delta 8 92190, buy vapes in 92190",
    openGraph: {
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      url: "https://thesmokingbee.com/smoke-shop-92190-san-diego",
      images: [{ url: "/images/about/21.JPG", alt: "Smoke Shop 92190 | Central Coast SD" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92190 | Central Coast SD",
      description: "Serving 92190 with top-level vape devices, Delta-8 edibles, and more at The Smoking Bee. Experience premium smoking.",
      images: ["/images/about/21.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92190-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92190 | Central Coast SD", "item": "https://thesmokingbee.com/smoke-shop-92190-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92190_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in 92190, San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of 92190, The Smoking Bee is your go-to destination for top-quality vape devices, Delta-8 edibles, and a wide array of smoking accessories. Whether you’re a seasoned smoker or just starting out, we have everything you need to elevate your experience.</p><h2>Our Products</h2><p>At The Smoking Bee, we pride ourselves on offering the best products available on the market. Our selection includes:</p><ul><li><strong>High-Quality Vape Gear:</strong> Explore our collection of the latest vape devices, from sleek disposables to advanced mods.</li><li><strong>Delta-8 Edibles:</strong> Discover our range of flavorful Delta-8 edibles that deliver a smooth and enjoyable experience.</li><li><strong>Smoking Accessories:</strong> From rolling papers to glass bongs, we have all the accessories you need to enhance your smoking sessions.</li></ul><h2>Why Choose Us?</h2><p>Our friendly and knowledgeable staff at The Smoking Bee is always ready to assist you in finding the perfect products. Whether you’re looking for advice on the best vape device or need tips on building your ideal smoking toolkit, we’re here to help. With our commitment to quality and customer satisfaction, you can trust that you’re getting the best of the best.</p><h2>Visit Us Today!</h2><p>Stop by The Smoking Bee and experience the vibrant atmosphere of our smoke shop. We’re located conveniently in San Diego, making it easy for you to access all your smoking needs. Join our community of satisfied customers and let us help you find exactly what you’re looking for!</p>`;
  const faqItems = [{"q": "What types of vape devices do you carry?", "a": "We offer a wide range of vape devices, including disposables, pods, and advanced mods."}, {"q": "Do you sell Delta-8 edibles?", "a": "Yes, we have a variety of Delta-8 edibles in different flavors and strengths."}, {"q": "Can I get advice on products?", "a": "Absolutely! Our knowledgeable staff is here to help you find the right products for your needs."}, {"q": "What other smoking accessories do you offer?", "a": "We carry everything from rolling papers and filters to glass bongs and pipes."}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open daily to serve all your smoking needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92190 | Central Coast SD", path: "/smoke-shop-92190-san-diego" }
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
