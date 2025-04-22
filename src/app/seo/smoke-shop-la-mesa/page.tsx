import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Smoke Shop in La Mesa | The Smoking Bee",
    description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
    keywords: "smoke shop la mesa, glass pipes la mesa, delta-8, kratom, best vapes, head shop near me, smoke shop open now, 420 shop in la mesa, delta 8 la mesa, buy vapes in la mesa, best kratom shop, cheap glass pipes la mesa",
    openGraph: {
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      url: "https://thesmokingbee.com/smoke-shop-la-mesa",
      images: [{ url: "/images/about/17.JPG", alt: "Best Smoke Shop in La Mesa | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Smoke Shop in La Mesa | The Smoking Bee",
      description: "Discover La Mesa's best smoke shop at The Smoking Bee. Shop premium glass, vapes, Delta-8, kratom, and more.",
      images: ["/images/about/17.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Smoke Shop in La Mesa | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Ultimate Smoke Shop Experience in La Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of La Mesa, <strong>The Smoking Bee</strong> stands as the premier destination for all your smoking needs. Whether you are a seasoned enthusiast or just starting your journey, we have something for everyone.</p><h2>Our Products</h2><p>At The Smoking Bee, we pride ourselves on offering a diverse selection of products to cater to all preferences. Explore our extensive range of premium glass pieces, expertly crafted to enhance your smoking experience. From local artisan glass to modern designs, there’s a perfect piece waiting for you.</p><p>If you’re into vaping, our collection of vapes and flavored disposables is unbeatable. Enjoy a variety of flavors that suit every taste, ensuring that you find just what you like. Additionally, we carry Delta-8 products that provide a unique experience for those looking to try something different.</p><h2>Why Choose Us?</h2><p>Our friendly and knowledgeable staff is always on hand to assist you. Whether you need help selecting the right product or have questions about the latest trends, we are here to guide you. We believe in creating a welcoming environment where customers can feel comfortable exploring their options.</p><h2>Convenient Location</h2><p>Conveniently located near La Mesa Boulevard, <strong>The Smoking Bee</strong> is easily accessible for all residents and visitors. Stop by to browse our selection, or just to chat with our team about your favorite products. We’re proud to serve the La Mesa community with quality smoking accessories and exceptional service.</p><h2>Join Us Today!</h2><p>Don’t miss out on the best smoke shop experience in La Mesa! Visit <strong>The Smoking Bee</strong> today and discover why we are the go-to destination for all your smoking needs.</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide range of products including glass pieces, vapes, Delta-8, kratom, and more."}, {"q": "Is your staff knowledgeable about the products?", "a": "Absolutely! Our friendly staff is well-informed and ready to help you find the perfect items."}, {"q": "Where are you located?", "a": "We are conveniently located near La Mesa Boulevard in the heart of La Mesa."}, {"q": "Do you have options for beginners?", "a": "Yes, we cater to both new and experienced enthusiasts with a variety of products."}, {"q": "Are there any special promotions?", "a": "Be sure to check our website or visit us in-store for the latest promotions and deals!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Smoke Shop in La Mesa | The Smoking Bee", path: "/smoke-shop-la-mesa" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/17.JPG" />
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
