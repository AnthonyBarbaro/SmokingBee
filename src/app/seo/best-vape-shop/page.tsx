import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Vape Shop Near You | The Smoking Bee",
    description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
    keywords: "best vape shop, disposable vapes, e-liquids, vape store, vapes near me, head shop near me, smoke shop open now, 420 shop near me, buy vapes near me",
    openGraph: {
      title: "Best Vape Shop Near You | The Smoking Bee",
      description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
      url: "https://thesmokingbee.com/best-vape-shop",
      images: [{ url: "/images/about/14.JPG", alt: "Best Vape Shop Near You | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Vape Shop Near You | The Smoking Bee",
      description: "Get premium disposable vapes, e-liquids, and accessories at The Smoking Bee, your best local vape shop.",
      images: ["/images/about/14.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/best-vape-shop",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Vape Shop Near You | The Smoking Bee", "item": "https://thesmokingbee.com/best-vape-shop"}]}`
    }
  };
}

export default async function best_vape_shop_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Hub for Premium Vaping Needs!`;
  const htmlContent = `<h2>Discover The Best Vapes at The Smoking Bee</h2><p>Welcome to <strong>The Smoking Bee</strong>, the best vape shop near you! We pride ourselves on offering a wide selection of premium disposable vapes, e-liquids, and accessories that cater to both beginners and seasoned vapers. Whether you’re on the hunt for nicotine salts, classic flavors, or the latest coil setups, we’ve got you covered!</p><h2>Why Choose Us?</h2><ul><li><strong>Quality Products:</strong> We source only the finest vaping products to ensure you have an exceptional experience.</li><li><strong>Expert Staff:</strong> Our knowledgeable team is always here to help you find exactly what you need.</li><li><strong>Variety:</strong> From fruity flavors to rich desserts, our extensive range of e-liquids guarantees something for everyone.</li></ul><p>At The Smoking Bee, we understand that every vaper has unique preferences. That’s why we carry a diverse inventory designed to meet the needs of all types of vapers. Enjoy flavorful hits and the convenience of top-tier vaping selections that enhance your experience.</p><h2>Visit Us Today!</h2><p>If you’re searching for the best vape shop experience, look no further. Our welcoming atmosphere and dedicated staff make The Smoking Bee a standout choice in the community. Come in today to explore our products and find your new favorite vape!</p>`;
  const faqItems = [{"q": "What types of vapes do you offer?", "a": "We offer a variety of disposable vapes, e-liquids, and accessories to suit all preferences."}, {"q": "Are your products high quality?", "a": "Yes, we pride ourselves on sourcing only premium products for our customers."}, {"q": "Do you have staff to help me choose?", "a": "Absolutely! Our friendly and knowledgeable staff are here to assist you."}, {"q": "Can I find unique flavors at your shop?", "a": "Definitely! We have an extensive range of unique and classic e-liquid flavors."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Yes! We offer products and guidance for both beginners and advanced vapers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Vape Shop Near You | The Smoking Bee", path: "/best-vape-shop" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/14.JPG" />
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
