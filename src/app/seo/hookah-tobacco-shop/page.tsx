import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Hookah & Tobacco Shop | The Smoking Bee",
    description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
    keywords: "hookah shop, tobacco store, shisha flavors, hookah accessories, smoke shop, head shop near me, smoke shop open now, 420 shop near me, hookah flavors near me",
    openGraph: {
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      url: "https://thesmokingbee.com/hookah-tobacco-shop",
      images: [{ url: "/images/about/6.JPG", alt: "Best Hookah & Tobacco Shop | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Hookah & Tobacco Shop | The Smoking Bee",
      description: "Experience premium hookahs and flavored tobacco at The Smoking Bee. Your go-to source for shisha and hookah accessories.",
      images: ["/images/about/6.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/hookah-tobacco-shop",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Hookah & Tobacco Shop | The Smoking Bee", "item": "https://thesmokingbee.com/hookah-tobacco-shop"}]}`
    }
  };
}

export default async function hookah_tobacco_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Hookah Experience at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee - Your Hookah Haven</h2><p>At The Smoking Bee, we pride ourselves on being the <strong>best hookah and tobacco shop</strong> in town. Whether you're a seasoned hookah enthusiast or a curious newcomer, our extensive selection of premium shisha and accessories is sure to impress. From smooth, rich flavors to high-quality hookahs, we've got everything you need for an unforgettable session.</p><h2>Why Choose Us?</h2><ul><li><strong>Wide Variety of Flavors:</strong> Explore our diverse range of shisha flavors, from fruity to minty and everything in between. We source our products from top brands to ensure quality and satisfaction.</li><li><strong>Quality Accessories:</strong> Our collection of hookah accessories includes everything from coals to hoses, providing you with all the essentials to enhance your smoking experience.</li><li><strong>Expert Advice:</strong> Not sure what to choose? Our knowledgeable team is always ready to assist you in finding the perfect setup for optimal clouds and flavor.</li></ul><h2>Join Us for a Flavorful Experience</h2><p>The Smoking Bee is more than just a shop; it's a community. We invite you to visit us and discover the art of hookah smoking. Our friendly staff is here to help you select the right products and offer tips for a great session. Whether you're looking to relax after a long day or gather with friends, The Smoking Bee is your go-to destination.</p><p>Come by and experience the difference that quality makes. With our premium hookahs and flavorful tobacco, you’ll elevate your hookah sessions to new heights!</p>`;
  const faqItems = [{"q": "What types of shisha flavors do you offer?", "a": "We offer a wide variety of shisha flavors, including fruity, minty, and dessert-inspired options."}, {"q": "Do you sell hookah accessories?", "a": "Yes, we have a comprehensive range of hookah accessories, including coals, hoses, and bowls."}, {"q": "Can your staff help me with my hookah setup?", "a": "Absolutely! Our knowledgeable team is always available to provide expert advice on the best bowl setups and techniques."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Yes! We cater to all experience levels, and our staff will help beginners feel comfortable and informed."}, {"q": "Do you offer any special promotions?", "a": "Yes, we regularly have promotions on shisha and accessories, so be sure to check in with us!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Hookah & Tobacco Shop | The Smoking Bee", path: "/hookah-tobacco-shop" }
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
