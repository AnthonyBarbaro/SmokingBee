import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92164 | Mission Valley",
    description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
    keywords: "smoke shop 92164, mission valley, glass pipes, vapes, hookah supplies, head shop near me, smoke shop open now, 420 shop in 92164, cheap glass pipes 92164, buy vapes in 92164, hookah flavors 92164",
    openGraph: {
      title: "Smoke Shop 92164 | Mission Valley",
      description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
      url: "https://thesmokingbee.com/smoke-shop-92164-san-diego",
      images: [{ url: "/images/about/8.JPG", alt: "Smoke Shop 92164 | Mission Valley" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92164 | Mission Valley",
      description: "Mission Valley’s choice for glass pipes, premium vapes, and hookah supplies at The Smoking Bee (92164).",
      images: ["/images/about/8.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92164-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92164 | Mission Valley", "item": "https://thesmokingbee.com/smoke-shop-92164-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92164_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Ultimate Smoke Shop in Mission Valley!`;
  const htmlContent = `<h2>Discover The Smoking Bee in 92164</h2><p>Welcome to The Smoking Bee, Mission Valley’s premier smoke shop! Located in the heart of the 92164 area, we pride ourselves on providing a vast selection of high-quality smoking products tailored for every enthusiast. Whether you're a seasoned smoker or just starting out, our knowledgeable staff is here to help you find exactly what you need.</p><h2>Our Product Range</h2><p>At The Smoking Bee, you’ll find a curated inventory that includes:</p><ul><li><strong>Glass Pipes:</strong> Explore our stunning collection of glass pipes, meticulously crafted for both aesthetics and functionality.</li><li><strong>Premium Vapes:</strong> Choose from an extensive range of vapes and e-liquids, featuring unique flavors that cater to all preferences.</li><li><strong>Hookah Supplies:</strong> We offer everything you need for a perfect hookah experience, from bowls to shisha.</li><li><strong>Kratom:</strong> Discover high-grade kratom sourced from reputable suppliers, perfect for those seeking natural alternatives.</li><li><strong>Delta-8 Cartridges:</strong> Try out the latest in cannabis extracts with our selection of delta-8 cartridges.</li></ul><h2>Why Choose Us?</h2><p>What sets The Smoking Bee apart is our commitment to customer satisfaction. We understand that each customer has unique needs and preferences. That’s why we strive to exceed your expectations with personalized service and expert advice. Our friendly staff is always ready to assist you in finding the perfect product for your lifestyle.</p><h2>Visit Us Today!</h2><p>If you’re in the 92164 area, make sure to stop by The Smoking Bee. We’re dedicated to being your go-to smoke shop in Mission Valley. Whether you’re stocking up for the week or looking for something new to try, we have everything you need under one roof. Experience the difference at The Smoking Bee!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a variety of glass pipes, premium vapes, hookah supplies, kratom, and delta-8 cartridges."}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open seven days a week to serve our customers!"}, {"q": "Can I find unique flavors of e-liquids?", "a": "Absolutely! We have a wide selection of unique and flavorful e-liquids to choose from."}, {"q": "Do you offer any discounts?", "a": "Yes, we frequently have promotions and discounts. Be sure to ask our staff for details!"}, {"q": "Is there parking available?", "a": "Yes, we have ample parking available for our customers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92164 | Mission Valley", path: "/smoke-shop-92164-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/8.JPG" />
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
