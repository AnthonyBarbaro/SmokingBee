import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92193 | MCAS Miramar Region",
    description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
    keywords: "smoke shop 92193, mcas miramar, delta-8 carts, glass pipes, premium shop, head shop near me, smoke shop open now, 420 shop in 92193, delta 8 92193, cheap glass pipes 92193",
    openGraph: {
      title: "Smoke Shop 92193 | MCAS Miramar Region",
      description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92193-san-diego",
      images: [{ url: "/images/about/19.JPG", alt: "Smoke Shop 92193 | MCAS Miramar Region" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92193 | MCAS Miramar Region",
      description: "In 92193 near MCAS Miramar? Grab premium glass pipes, Delta-8 carts, and more from The Smoking Bee.",
      images: ["/images/about/19.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92193-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92193 | MCAS Miramar Region", "item": "https://thesmokingbee.com/smoke-shop-92193-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92193_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop Near MCAS Miramar!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in 92193!</h2><p>If you're in the 92193 area near MCAS Miramar, The Smoking Bee is your go-to destination for premium smoking products. We offer a wide selection of high-quality glass pipes, potent Delta-8 carts, and the latest vape gear, ensuring you have everything you need for an enjoyable experience.</p><h2>What We Offer</h2><ul><li><strong>Delta-8 Carts:</strong> Explore our potent Delta-8 cartridges that provide a smooth and enjoyable high.</li><li><strong>Glass Pipes:</strong> Our collection features beautifully crafted glass pipes perfect for any smoking enthusiast.</li><li><strong>Vape Gear:</strong> Browse our selection of the latest vape products for a modern smoking experience.</li></ul><p>Whether you're on duty or off, swing by our store to check out our new arrivals or to find the perfect water pipe for smoother sessions. We understand the needs of local personnel and enthusiasts, and we are committed to providing quality products with a friendly smile.</p><h2>Why Choose Us?</h2><p>The Smoking Bee takes pride in serving the community with respect and quality. Our knowledgeable staff is always ready to assist you in finding exactly what you need. We believe that everyone deserves a great smoking experience, and we are here to help you achieve that.</p><p>Come visit us today and discover why The Smoking Bee is the preferred smoke shop for so many in the MCAS Miramar region!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer premium glass pipes, Delta-8 carts, and a variety of vape gear."}, {"q": "Is The Smoking Bee open to military personnel?", "a": "Absolutely! We proudly serve military personnel and welcome everyone."}, {"q": "Do you have any special discounts?", "a": "Yes! We often have promotions, so be sure to ask our staff when you visit."}, {"q": "What are your store hours?", "a": "Our store hours are from 10 AM to 8 PM, seven days a week."}, {"q": "Can I find unique smoking accessories?", "a": "Yes, we carry a variety of unique smoking accessories to enhance your experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92193 | MCAS Miramar Region", path: "/smoke-shop-92193-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/19.JPG" />
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
