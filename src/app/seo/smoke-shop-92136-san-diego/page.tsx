import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92136 | Barrio Logan",
    description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
    keywords: "smoke shop 92136, barrio logan, hookah, delta-8, vapes, head shop near me, smoke shop open now, 420 shop in 92136, hookah flavors 92136, delta 8 92136, buy vapes in 92136",
    openGraph: {
      title: "Smoke Shop 92136 | Barrio Logan",
      description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
      url: "https://thesmokingbee.com/smoke-shop-92136-san-diego",
      images: [{ url: "/images/about/2.JPG", alt: "Smoke Shop 92136 | Barrio Logan" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92136 | Barrio Logan",
      description: "Barrio Logan (92136) smokers find hookah, Delta-8, and top-tier vapes at The Smoking Bee. Explore our selection now.",
      images: ["/images/about/2.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92136 | Barrio Logan", "item": "https://thesmokingbee.com/smoke-shop-92136-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92136_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Barrio Logan Awaits!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Barrio Logan</h2><p>At <strong>The Smoking Bee</strong>, we are proud to serve the vibrant community of Barrio Logan (92136) with an exceptional selection of smoking essentials. Whether you’re a seasoned smoker or just starting your journey, we have everything you need to enhance your experience.</p><h2>Explore Our Top Products</h2><p>Dive into our comprehensive range of products designed for all your smoking needs:</p><ul><li><strong>Hookah Essentials:</strong> Discover a variety of hookahs, flavors, and accessories that will elevate your smoking sessions.</li><li><strong>Delta-8 Products:</strong> Experience the unique effects of Delta-8 with our curated selection of edibles and tinctures.</li><li><strong>Vapes Galore:</strong> Choose from top-tier vape devices and a wide range of e-liquids that cater to every palate.</li><li><strong>Glass Pieces:</strong> Browse beautiful glass pieces crafted by local artisans, each with its own unique flair.</li><li><strong>Rolling Supplies:</strong> From rolling trays to wraps, we have everything you need to roll your own.</li></ul><p>Our friendly staff is always available to help you find the right products and answer any questions you may have. At <strong>The Smoking Bee</strong>, we strive to create an inviting atmosphere that inspires you to explore and enjoy.</p><h2>Why Choose Us?</h2><p>We are more than just a smoke shop; we are a community hub for enthusiasts. Our goal is to provide high-quality products at unbeatable prices while ensuring a welcoming environment for all. Each visit to our shop is designed to leave you feeling inspired and satisfied, whether you’re picking up an old favorite or trying something new.</p><p>Stop by <strong>The Smoking Bee</strong> today and experience the best smoke shop in Barrio Logan. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of hookah essentials, Delta-8 products, vapes, glass pieces, and rolling supplies."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Absolutely! We welcome everyone, from beginners to seasoned smokers, and our staff is happy to help you find what you need."}, {"q": "Do you carry local brands?", "a": "Yes, we proudly showcase glass pieces and products from local artisans and brands."}, {"q": "Can I find accessories for my hookah?", "a": "Yes, we have a variety of hookah accessories including flavors, hoses, and more."}, {"q": "What are your store hours?", "a": "We are open daily, but please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92136 | Barrio Logan", path: "/smoke-shop-92136-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/2.JPG" />
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
