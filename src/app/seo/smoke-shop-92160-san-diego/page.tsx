import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92160 | Central SD",
    description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
    keywords: "smoke shop 92160, central sd, premium smoking supplies, vapes, kratom, head shop near me, smoke shop open now, 420 shop in 92160, buy vapes in 92160, best kratom shop",
    openGraph: {
      title: "Smoke Shop 92160 | Central SD",
      description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-92160-san-diego",
      images: [{ url: "/images/about/15.JPG", alt: "Smoke Shop 92160 | Central SD" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92160 | Central SD",
      description: "In 92160? The Smoking Bee provides premium smoking supplies—vapes, kratom, glass, and more for central San Diego.",
      images: ["/images/about/15.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92160 | Central SD", "item": "https://thesmokingbee.com/smoke-shop-92160-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92160_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in Central San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92160 area, look no further than The Smoking Bee for all your smoking needs! Our smoke shop offers a wide array of premium smoking supplies tailored to meet the preferences of every smoker. From vapes to kratom, glass pieces, and beyond, we have everything you need to elevate your smoking experience.</p><h2>What We Offer</h2><ul><li><strong>Vapes:</strong> Explore our selection of specialized vape coils and devices from top brands.</li><li><strong>Kratom:</strong> Discover our carefully sourced kratom products for a unique herbal experience.</li><li><strong>Glass Art:</strong> Check out our local glass artistry, featuring beautiful and functional pieces.</li><li><strong>Accessories:</strong> Find all the accessories you need to enhance your smoking sessions.</li></ul><p>At The Smoking Bee, we pride ourselves on providing high-quality products that are reliable and affordable. Our knowledgeable staff is always ready to assist you in finding the perfect items for your needs. Whether you're a seasoned smoker or new to the scene, we are here to help you every step of the way.</p><h2>Why Choose Us?</h2><p>We believe that everyone deserves access to premium smoking supplies, which is why we curate our inventory with only the best products. Our commitment to quality ensures that you receive the best value for your money. Plus, we offer a friendly, welcoming atmosphere that makes shopping with us a pleasure.</p>`;
  const faqItems = [{"q": "What types of products does The Smoking Bee offer?", "a": "We offer vapes, kratom, glass pieces, and various smoking accessories."}, {"q": "Is there a loyalty program?", "a": "Yes, we have a loyalty program that rewards our regular customers with discounts and exclusive offers."}, {"q": "Can I find local glass artists' work at your shop?", "a": "Absolutely! We feature a selection of unique pieces from talented local glass artists."}, {"q": "Do you provide recommendations for beginners?", "a": "Yes, our knowledgeable staff is happy to provide recommendations tailored to your experience level."}, {"q": "What are your shop hours?", "a": "We are open Monday to Saturday from 10 AM to 8 PM and Sunday from 12 PM to 6 PM."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92160 | Central SD", path: "/smoke-shop-92160-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/15.JPG" />
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
