import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92122 | Near UTC",
    description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
    keywords: "smoke shop 92122, utc area, rolling papers, kratom, glass bongs, head shop near me, smoke shop open now, 420 shop in 92122, rolling paper brands, best kratom shop, cheap glass pipes 92122, buy vapes in 92122",
    openGraph: {
      title: "Smoke Shop 92122 | Near UTC",
      description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92122-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "Smoke Shop 92122 | Near UTC" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92122 | Near UTC",
      description: "In 92122 near UTC? Get top-tier rolling papers, kratom, and glass bongs at The Smoking Bee.",
      images: ["/images/about/11.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92122 | Near UTC", "item": "https://thesmokingbee.com/smoke-shop-92122-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92122_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your One-Stop Smoke Shop Near UTC!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in 92122</h2><p>If you're in the 92122 area near UTC, The Smoking Bee is your go-to smoke shop for all your needs! We pride ourselves on offering a top-tier selection of products, ensuring that you find exactly what you're looking for.</p><h2>Our Extensive Range of Products</h2><p>At The Smoking Bee, we understand that every customer has unique preferences. That's why we carry a curated selection of:</p><ul><li><strong>Rolling Papers:</strong> Explore our variety of flavored wraps and traditional rolling papers, perfect for any smoking experience.</li><li><strong>Kratom:</strong> Discover the benefits of kratom with our high-quality options, ideal for relaxation and wellness.</li><li><strong>Glass Bongs:</strong> Choose from an impressive range of glass bongs that combine style and functionality, perfect for enhancing your smoking ritual.</li><li><strong>Vape Devices:</strong> For on-the-go convenience, check out our discreet vape devices. They’re user-friendly and perfect for a quick puff anywhere!</li></ul><h2>Why Choose The Smoking Bee?</h2><p>Our knowledgeable team is always on hand to help you find the perfect product that fits your personal preferences. Whether you're a seasoned smoker or new to the scene, we're here to make your shopping experience enjoyable and informative. We believe in building a community around our shared love for quality smoking products.</p><h2>Visit Us Today!</h2><p>Stop by The Smoking Bee in 92122 near UTC and see for yourself why we’re the top choice for local residents. We look forward to welcoming you to our shop!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling papers, kratom, glass bongs, and vape devices."}, {"q": "Is The Smoking Bee staff knowledgeable?", "a": "Absolutely! Our team is trained to help you find the best products for your needs."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in the 92122 area near UTC."}, {"q": "Do you have flavored rolling papers?", "a": "Yes, we have a variety of flavored wraps available!"}, {"q": "Can I find discreet vape devices at your shop?", "a": "Yes, we carry a selection of discreet and portable vape devices."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92122 | Near UTC", path: "/smoke-shop-92122-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/11.JPG" />
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
