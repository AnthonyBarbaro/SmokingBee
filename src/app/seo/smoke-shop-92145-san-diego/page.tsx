import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92145 | Miramar Air Base",
    description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
    keywords: "smoke shop 92145, miramar, hookah, glass bongs, disposable vapes, head shop near me, smoke shop open now, 420 shop in 92145, hookah flavors 92145, cheap glass pipes 92145, buy vapes in 92145",
    openGraph: {
      title: "Smoke Shop 92145 | Miramar Air Base",
      description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92145-san-diego",
      images: [{ url: "/images/about/18.JPG", alt: "Smoke Shop 92145 | Miramar Air Base" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92145 | Miramar Air Base",
      description: "Serving 92145 near MCAS Miramar with quality hookah, glass bongs, and disposable vapes at The Smoking Bee.",
      images: ["/images/about/18.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92145 | Miramar Air Base", "item": "https://thesmokingbee.com/smoke-shop-92145-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92145_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop Near Miramar Air Base!`;
  const htmlContent = `<h2>Discover Quality Smoking Products at The Smoking Bee</h2><p>Welcome to The Smoking Bee, your go-to smoke shop located conveniently near MCAS Miramar in the 92145 area. We pride ourselves on offering a wide selection of premium smoking products that cater to all your needs. Whether you're a seasoned smoker or just starting out, we have something for everyone!</p><h2>Our Extensive Inventory</h2><p>At The Smoking Bee, you'll find an impressive variety of products including:</p><ul><li><strong>Hookah</strong> - Explore our range of popular hookah flavors that will tantalize your taste buds.</li><li><strong>Glass Bongs</strong> - Choose from top-quality glass bongs that enhance your smoking experience.</li><li><strong>Disposable Vapes</strong> - Enjoy the convenience of disposable vapes for on-the-go use.</li><li><strong>Delta-8 Edibles</strong> - Sample our new delta-8 edibles for a unique and enjoyable experience.</li></ul><p>We also carry essential accessories such as coils, novelty lighters, and more to ensure that you’re fully stocked up on everything you need for your smoking sessions.</p><h2>Friendly and Knowledgeable Staff</h2><p>Our team at The Smoking Bee is dedicated to providing you with the best service possible. We are here to answer your questions, help you choose the right products, and ensure that you have the ultimate smoking experience every time you visit. Whether you need recommendations or just want to browse, our welcoming atmosphere will make you feel right at home.</p><h2>Visit Us Today!</h2><p>If you're near MCAS Miramar and in search of quality smoking products, stop by The Smoking Bee. We’re committed to serving the 92145 community with the finest selection and customer service. Come experience the difference today!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a variety of hookah flavors, glass bongs, disposable vapes, and delta-8 edibles."}, {"q": "Is The Smoking Bee family-friendly?", "a": "While we welcome everyone, our products are intended for adult customers aged 21 and over."}, {"q": "Can I find smoking accessories at your shop?", "a": "Yes, we carry a wide range of smoking accessories including coils and novelty lighters."}, {"q": "What are delta-8 edibles?", "a": "Delta-8 edibles are a cannabis product that provides a milder psychoactive effect than traditional THC."}, {"q": "What are your store hours?", "a": "We are open seven days a week to serve all your smoking needs!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92145 | Miramar Air Base", path: "/smoke-shop-92145-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/18.JPG" />
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
