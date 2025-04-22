import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92195 | College Area",
    description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
    keywords: "smoke shop 92195, college area, hookah, glass bongs, e-liquids, head shop near me, smoke shop open now, 420 shop in 92195, hookah flavors 92195, cheap glass pipes 92195, buy vapes in 92195",
    openGraph: {
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      url: "https://thesmokingbee.com/smoke-shop-92195-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92195 | College Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92195 | College Area",
      description: "College area (92195) smokers head to The Smoking Bee for hookah, glass bongs, and premium e-liquids.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92195 | College Area", "item": "https://thesmokingbee.com/smoke-shop-92195-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92195_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in 92195!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in College Area</h2><p>If you're in the 92195 area and looking for a top-notch smoke shop, look no further than The Smoking Bee. We pride ourselves on being the favorite destination for smokers in the College Area. Our shop is stocked with an extensive selection of premium products that cater to all your smoking needs.</p><h2>Our Products</h2><ul><li><strong>Hookah Essentials:</strong> Discover a variety of hookahs, shisha flavors, and accessories that will elevate your smoking experience.</li><li><strong>Glass Bongs:</strong> We offer high-quality glass bongs that are not only functional but also stylish.</li><li><strong>Premium E-Liquids:</strong> Choose from vibrant e-liquids that come in a multitude of flavors, perfect for any vape enthusiast.</li><li><strong>Delta-8 Tinctures:</strong> Explore our selection of delta-8 tinctures for a unique experience.</li><li><strong>Rolling Supplies:</strong> Don’t forget to grab your rolling papers and accessories before heading to class!</li></ul><p>At The Smoking Bee, we believe in providing a friendly and welcoming environment for our customers. Our knowledgeable staff is always on hand to help you find the perfect product to suit your needs. With our rotating stock, there's always something new to discover, whether you're a seasoned smoker or just starting out.</p><h2>Why Choose Us?</h2><p>Convenience is key, and we're centrally located in the College Area, making it easy for you to pop in and grab what you need. Plus, our shop is designed to create an enjoyable shopping experience. With competitive prices and an ever-changing selection, The Smoking Bee is the place to visit for all your smoking essentials.</p><p>So next time you're in the 92195 area, stop by The Smoking Bee and see what we have in store for you!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of hookah essentials, glass bongs, premium e-liquids, delta-8 tinctures, and rolling supplies."}, {"q": "Is The Smoking Bee located conveniently in 92195?", "a": "Yes, we are centrally located in the College Area, making it easy for you to visit us."}, {"q": "Do you have a variety of flavors for e-liquids?", "a": "Absolutely! We have a vibrant selection of e-liquids in many flavors to suit every taste."}, {"q": "Can I find accessories for my hookah here?", "a": "Yes, we have a variety of hookah accessories including shisha flavors and more."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92195 | College Area", path: "/smoke-shop-92195-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/16.JPG" />
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
