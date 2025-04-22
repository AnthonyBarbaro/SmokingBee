import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91941 | La Mesa’s Best",
    description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
    keywords: "smoke shop 91941, la mesa smoke shop, vapes near 91941, delta-8, head shop near me, smoke shop open now, 420 shop in 91941, buy vapes in 91941, delta 8 91941",
    openGraph: {
      title: "Smoke Shop 91941 | La Mesa’s Best",
      description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-91941-la-mesa",
      images: [{ url: "/images/about/20.JPG", alt: "Smoke Shop 91941 | La Mesa’s Best" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91941 | La Mesa’s Best",
      description: "Discover The Smoking Bee in 91941 La Mesa for vapes, glass pipes, Delta-8, and premium smoking accessories.",
      images: ["/images/about/20.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-91941-la-mesa",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 91941 | La Mesa\u2019s Best", "item": "https://thesmokingbee.com/smoke-shop-91941-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_91941_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in La Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 91941 area of La Mesa, look no further than The Smoking Bee for all your smoking needs. We pride ourselves on offering a wide range of products, from premium Delta-8 to exquisite glass pipes that are perfect for both beginners and seasoned enthusiasts.</p><h2>Our Products</h2><ul><li><strong>Vapes:</strong> Discover the latest in vape technology with our high-quality devices and e-liquids.</li><li><strong>Glass Pipes:</strong> Browse our collection of top-shelf glass pipes, each one a work of art.</li><li><strong>Delta-8:</strong> Explore our selection of Delta-8 products, known for their unique effects and quality.</li><li><strong>Smoking Accessories:</strong> We carry a variety of premium smoking accessories to enhance your experience.</li></ul><h2>Why Choose Us?</h2><p>Conveniently located just off major bus routes, The Smoking Bee is easily accessible for all. Our knowledgeable staff is always on hand to help you find the perfect product tailored to your needs. Whether you are a novice trying out smoking for the first time or a connoisseur in search of the finest pieces, we have something for everyone.</p><p>We also take pride in our local artisan pieces, which are carefully curated to impress and inspire. At The Smoking Bee, we believe in supporting local artisans and providing our customers with unique products that cannot be found anywhere else.</p><h2>Visit Us Today!</h2><p>Come visit The Smoking Bee in La Mesa and discover why we are the best smoke shop in the 91941 area. We look forward to helping you find your next favorite smoking accessory!</p>`;
  const faqItems = [{"q": "What types of products does The Smoking Bee offer?", "a": "We offer a variety of products including vapes, glass pipes, Delta-8, and premium smoking accessories."}, {"q": "Is The Smoking Bee easily accessible?", "a": "Yes, we are conveniently located just off major bus routes in La Mesa."}, {"q": "Do you have products for beginners?", "a": "Absolutely! We cater to both beginners and connoisseurs, with products tailored to all experience levels."}, {"q": "Are there unique items available at The Smoking Bee?", "a": "Yes, we offer local artisan pieces that are curated to impress our customers."}, {"q": "Can I get help selecting a product?", "a": "Of course! Our knowledgeable staff is here to assist you in finding the perfect product."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 91941 | La Mesa’s Best", path: "/smoke-shop-91941-la-mesa" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/20.JPG" />
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
