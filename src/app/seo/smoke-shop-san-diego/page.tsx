import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
    description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
    keywords: "smoke shop san diego, best smoke shop, glass pipes, delta-8, smoking accessories, head shop near me, smoke shop open now, 420 shop in san diego, delta 8 san diego, cheap glass pipes san diego, buy vapes in san diego",
    openGraph: {
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
      url: "https://thesmokingbee.com/smoke-shop-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "San Diego’s Premier Smoke Shop | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "San Diego’s Premier Smoke Shop | The Smoking Bee",
      description: "The Smoking Bee in San Diego offers top-tier glass pipes, vapes, Delta-8, and more. Experience premium smoking accessories today.",
      images: ["/images/about/11.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "San Diego\u2019s Premier Smoke Shop | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your New Favorite Smoke Shop in San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located in the heart of San Diego, <strong>The Smoking Bee</strong> is your go-to destination for all things smoking. We proudly offer a curated selection of high-quality glass pipes, vapes, and Delta-8 products that cater to both seasoned enthusiasts and newcomers alike. Our mission is to provide each customer with an exceptional shopping experience, showcasing the best products and knowledgeable staff ready to assist you.</p><h2>Our Products</h2><p>At <strong>The Smoking Bee</strong>, we understand that every smoker has unique preferences. That's why we offer a diverse range of smoking accessories:</p><ul><li><strong>Glass Pipes:</strong> Explore our collection of beautiful and functional glass pipes, crafted by local artisans.</li><li><strong>Vapes:</strong> Choose from the latest vape devices and a variety of e-liquids to enhance your smoking experience.</li><li><strong>Delta-8:</strong> Discover the benefits of Delta-8 products, known for their milder psychoactive properties.</li><li><strong>Rolling Accessories:</strong> Find everything you need for rolling, including papers, tips, and more.</li></ul><h2>Why Choose Us?</h2><p>What sets <strong>The Smoking Bee</strong> apart from other smoke shops in San Diego? Our commitment to quality and customer satisfaction. We carefully select our products, ensuring that you receive only the best. Our friendly staff is knowledgeable about the latest trends and products, making us a trusted resource for all your smoking needs.</p><h2>Visit Us Today!</h2><p>Conveniently located within easy reach of downtown, The Smoking Bee invites you to visit us and explore our extensive selection. Whether you're looking for a new glass piece or simply want to chat about the latest vape technology, we’re here to help. Experience the vibrant smoking culture of San Diego with us!</p>`;
  const faqItems = [{"q": "What types of products does The Smoking Bee offer?", "a": "We offer a variety of glass pipes, vapes, Delta-8 products, and rolling accessories."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in downtown San Diego, making us easily accessible."}, {"q": "Is The Smoking Bee staff knowledgeable about products?", "a": "Absolutely! Our friendly staff is well-informed and ready to assist you with any questions."}, {"q": "Do you carry local artisan glass pieces?", "a": "Yes, we showcase unique glass pieces crafted by local artists."}, {"q": "Can I find Delta-8 products at The Smoking Bee?", "a": "Yes, we have a wide selection of Delta-8 products available for you to explore."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "San Diego’s Premier Smoke Shop | The Smoking Bee", path: "/smoke-shop-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/11.JPG" />
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
