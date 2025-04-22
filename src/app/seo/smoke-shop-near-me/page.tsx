import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find a Smoke Shop Near You | The Smoking Bee",
    description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
    keywords: "smoke shop near me, head shop near me, best smoke shop, premium glass, vapes, smoke shop open now, 420 shop near me, delta 8 near me, buy vapes near me, cheap glass pipes near me",
    openGraph: {
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-near-me",
      images: [{ url: "/images/about/6.JPG", alt: "Find a Smoke Shop Near You | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find a Smoke Shop Near You | The Smoking Bee",
      description: "Searching for a great smoke shop near you? Explore The Smoking Bee for premium vapes, glass pipes, and smoking essentials in San Diego.",
      images: ["/images/about/6.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-near-me",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find a Smoke Shop Near You | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-near-me"}]}`
    }
  };
}

export default async function smoke_shop_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Destination for Premium Smoking Essentials`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Searching for a smoke shop near you? Look no further than <strong>The Smoking Bee</strong>! We pride ourselves on being your go-to destination in San Diego for all your smoking needs. Whether you're a vaping enthusiast or prefer traditional smoking methods, we have something for everyone.</p><h2>Our Extensive Selection</h2><p>At The Smoking Bee, we offer a wide range of products designed to enhance your smoking experience. From premium vapes and flavorful e-liquids to stylish glass pipes and rolling papers, our inventory is carefully curated to meet your preferences. Here’s what you can find in our store:</p><ul><li>High-quality vapes and e-cigarettes</li><li>A variety of glass pipes, bongs, and accessories</li><li>Delta-8 products for a modern twist</li><li>Rolling papers and smoking essentials</li></ul><h2>Why Choose Us?</h2><p>Convenience is key, and with numerous locations across San Diego, <strong>The Smoking Bee</strong> is always nearby. Our friendly and knowledgeable staff are always ready to assist you, ensuring you find exactly what you need, whether you're looking for the latest vaping trend or classic smoking gear.</p><h2>Visit Us Today!</h2><p>Don’t settle for less when it comes to your smoking experience. Stop by <strong>The Smoking Bee</strong> today and discover the best smoke shop near you. We’re excited to help you elevate your smoking journey with our premium products and exceptional customer service!</p>`;
  const faqItems = [{"q": "What products does The Smoking Bee offer?", "a": "We offer a variety of vapes, glass pipes, Delta-8 products, rolling papers, and other smoking essentials."}, {"q": "Where is The Smoking Bee located?", "a": "We have multiple locations throughout San Diego, making it easy for you to find us nearby."}, {"q": "Is there a knowledgeable staff available to help?", "a": "Yes! Our friendly team is always ready to assist you in finding the right products."}, {"q": "Do you offer any loyalty programs?", "a": "Absolutely! We have loyalty programs and special offers for our regular customers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Find a Smoke Shop Near You | The Smoking Bee", path: "/smoke-shop-near-me" }
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
