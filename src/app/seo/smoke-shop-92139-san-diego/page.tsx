import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92139 | Paradise Hills",
    description: "Paradise Hills (92139) trusts The Smoking Bee for kratom, hookah tobacco, and quality smoking accessories.",
    keywords: "smoke shop 92139, paradise hills, hookah tobacco, kratom, accessories, head shop near me, smoke shop open now, 420 shop in 92139, hookah flavors 92139, best kratom shop",
    openGraph: {
      title: "Smoke Shop 92139 | Paradise Hills",
      description: "Paradise Hills (92139) trusts The Smoking Bee for kratom, hookah tobacco, and quality smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92139-san-diego",
      images: [{ url: "/images/about/19.JPG", alt: "Smoke Shop 92139 | Paradise Hills" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92139 | Paradise Hills",
      description: "Paradise Hills (92139) trusts The Smoking Bee for kratom, hookah tobacco, and quality smoking accessories.",
      images: ["/images/about/19.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92139 | Paradise Hills", "item": "https://thesmokingbee.com/smoke-shop-92139-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92139_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Neighborhood Smoke Shop in Paradise Hills!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in Paradise Hills (92139), look no further than The Smoking Bee for all your smoking needs! We are proud to be your local smoke shop, providing the community with high-quality kratom, flavorful hookah tobacco, and a wide array of smoking accessories. Our mission is to elevate your smoking experience with premium products tailored to suit every taste.</p><h2>Our Offerings</h2><ul><li><strong>Kratom:</strong> Explore our selection of fresh, potent kratom that ensures a satisfying experience every time.</li><li><strong>Hookah Tobacco:</strong> Indulge in our diverse range of hookah tobacco flavors, perfect for any gathering or solo session.</li><li><strong>Smoking Accessories:</strong> From elegant glass pipes to functional water pipes, we have everything you need to enhance your smoking experience.</li><li><strong>Hemp Wraps & Delta-8 Cartridges:</strong> Discover our collection of new hemp wraps and delta-8 cartridges that cater to your personal preference.</li></ul><h2>Why Choose Us?</h2><p>The Smoking Bee is dedicated to quality and customer satisfaction. Our knowledgeable staff is always ready to help you find the right products and answer any questions you may have. We believe in creating a welcoming environment for both new and experienced smokers alike. Plus, our selection is constantly updated, ensuring you have access to the latest and greatest in the smoking world.</p><p>Visit us today and experience the difference that a local smoke shop can make!</p>`;
  const faqItems = [{"q": "What types of kratom do you offer?", "a": "We offer a variety of kratom strains to choose from, each with unique properties."}, {"q": "Do you have flavored hookah tobacco?", "a": "Yes! We carry a wide range of delicious flavors to enhance your hookah sessions."}, {"q": "What smoking accessories do you sell?", "a": "Our shop features a variety of glass pipes, water pipes, and other essential smoking accessories."}, {"q": "Are your products safe and high-quality?", "a": "Absolutely! We prioritize quality and safety, sourcing our products from reputable suppliers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92139 | Paradise Hills", path: "/smoke-shop-92139-san-diego" }
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
