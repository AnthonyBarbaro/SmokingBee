import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Shop Disposable Vapes | The Smoking Bee",
    description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
    keywords: "shop disposable vapes, best disposable vapes, vape shop, vapes near me, head shop near me, smoke shop open now, 420 shop near me, buy vapes near me",
    openGraph: {
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
      url: "https://thesmokingbee.com/shop-disposable-vapes",
      images: [{ url: "/images/about/3.JPG", alt: "Shop Disposable Vapes | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop Disposable Vapes | The Smoking Bee",
      description: "Find a wide range of top-brand disposable vapes at The Smoking Bee. Enjoy flavorful hits and premium convenience.",
      images: ["/images/about/3.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Shop Disposable Vapes | The Smoking Bee", "item": "https://thesmokingbee.com/shop-disposable-vapes"}]}`
    }
  };
}

export default async function shop_disposable_vapes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Perfect Disposable Vape Today!`;
  const htmlContent = `<h2>Why Choose Disposable Vapes?</h2><p>At The Smoking Bee, we understand that convenience and flavor are key when it comes to vaping. Our selection of disposable vapes provides you with a hassle-free experience, allowing you to enjoy flavorful hits without the need for maintenance. Whether you're a seasoned vaper or trying it for the first time, our products cater to all preferences.</p><h2>Top Brands and Flavors</h2><p>We carry a wide range of top-brand disposable vapes, ensuring that you have access to only the best. From fruity flavors to classic tobacco, there's something for everyone. Each vape is designed for smooth hits and consistent quality, making your experience enjoyable every time.</p><ul><li>Fruity Flavors: Perfect for a sweet escape!</li><li>Classic Tobacco: For those who prefer traditional tastes.</li><li>Minty Fresh: A refreshing option for a cool finish.</li></ul><p>Whether you’re traveling, at work, or just out and about, disposable vapes from The Smoking Bee offer the ultimate convenience. Just grab one, enjoy, and dispose of it when you’re done—no refills or chargers needed!</p><h2>Shop with Us Today</h2><p>Ready to find your favorite disposable vape? Visit The Smoking Bee and explore our extensive collection. Our friendly staff is always here to help you choose the perfect vape to suit your needs. Experience the blend of quality and convenience today!</p>`;
  const faqItems = [{"q": "What are disposable vapes?", "a": "Disposable vapes are pre-filled, single-use vape devices that require no maintenance, offering a convenient way to enjoy vaping."}, {"q": "How long does a disposable vape last?", "a": "The lifespan of a disposable vape varies by brand and usage, but they typically provide around 200-400 puffs."}, {"q": "Can I refill a disposable vape?", "a": "No, disposable vapes are designed for single use and cannot be refilled."}, {"q": "What flavors do you offer?", "a": "We offer a wide range of flavors, including fruity, minty, and classic tobacco options to suit every preference."}, {"q": "Where can I buy disposable vapes?", "a": "You can shop our selection of disposable vapes at The Smoking Bee, where we provide quality products and excellent customer service."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Shop Disposable Vapes | The Smoking Bee", path: "/shop-disposable-vapes" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/3.JPG" />
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
