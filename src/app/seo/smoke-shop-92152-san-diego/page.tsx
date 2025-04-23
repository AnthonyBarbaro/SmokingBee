import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92152 | Silver Strand / Coronado",
    description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
    keywords: "smoke shop 92152, silver strand, glass bongs, hookah flavors, vapes, head shop near me, smoke shop open now, 420 shop in 92152, cheap glass pipes 92152, buy vapes in 92152",
    openGraph: {
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92152-san-diego",
      images: [{ url: "/images/about/17.JPG", alt: "Smoke Shop 92152 | Silver Strand / Coronado" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92152 | Silver Strand / Coronado",
      description: "Serving 92152 near Silver Strand with glass bongs, hookah flavors, and premium vapes at The Smoking Bee.",
      images: ["/images/about/17.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92152-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92152 | Silver Strand / Coronado", "item": "https://thesmokingbee.com/smoke-shop-92152-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92152_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Silver Strand!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the beautiful Silver Strand area, The Smoking Bee is your go-to smoke shop for all your vaping and smoking needs. We pride ourselves on offering a diverse selection of products, ensuring that every customer finds exactly what they are looking for. Whether you're a seasoned smoker or just starting out, we have something for everyone!</p><h2>Our Products</h2><ul><li><strong>Glass Bongs:</strong> Explore our stunning collection of glass bongs that combine artistry with functionality. Perfect for enhancing your smoking experience!</li><li><strong>Hookah Flavors:</strong> Dive into a world of flavors with our premium hookah selections, ranging from fruity to minty, satisfying every palate.</li><li><strong>Premium Vapes:</strong> Discover the latest in vaping technology with our premium vapes and e-liquids. We offer a variety of delta-8 products for those looking to try something new.</li></ul><p>At The Smoking Bee, we understand the importance of quality and variety. That's why we source our products from trusted suppliers to ensure that you get the best experience possible.</p><h2>Visit Us!</h2><p>Relax by the beach and then drop by The Smoking Bee for fresh supplies or an upgrade to your existing setup. Our friendly staff is always here to help you find the perfect product that fits your needs. We are committed to providing a welcoming atmosphere and expert advice to enhance your smoking experience.</p><p>Whether you're looking to stock up on essentials or explore new products, we invite you to stop by our smoke shop in 92152. We’re excited to serve you and help you elevate your smoking experience!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide variety of glass bongs, hookah flavors, and premium vapes."}, {"q": "Do you have delta-8 products?", "a": "Yes, we have a selection of delta-8 products for those looking to try something new."}, {"q": "Is The Smoking Bee a good place for beginners?", "a": "Absolutely! Our friendly staff can help beginners find the right products and provide guidance."}, {"q": "What are your store hours?", "a": "We are open daily, but please check our website for specific hours."}, {"q": "Can I find unique hookah flavors at your shop?", "a": "Yes, we have a wide range of unique and delicious hookah flavors to choose from!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92152 | Silver Strand / Coronado", path: "/smoke-shop-92152-san-diego" }
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
