import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92149 | Paradise Valley",
    description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
    keywords: "smoke shop 92149, paradise valley, kratom, glass pipes, vape supplies, head shop near me, smoke shop open now, 420 shop in 92149, best kratom shop, cheap glass pipes 92149, buy vapes in 92149",
    openGraph: {
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      url: "https://thesmokingbee.com/smoke-shop-92149-san-diego",
      images: [{ url: "/images/about/17.JPG", alt: "Smoke Shop 92149 | Paradise Valley" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92149 | Paradise Valley",
      description: "In 92149? The Smoking Bee offers top-level kratom, glass pipes, and vape supplies for local smokers.",
      images: ["/images/about/17.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92149-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92149 | Paradise Valley", "item": "https://thesmokingbee.com/smoke-shop-92149-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92149_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Paradise Valley!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Paradise Valley!</h2><p>If you're in the 92149 area and looking for a smoke shop that truly understands your needs, look no further than The Smoking Bee. We pride ourselves on providing a wide range of high-quality products, including top-level kratom, elegant glass pipes, and an extensive selection of vape supplies. Our friendly staff is always ready to assist you in finding exactly what you need.</p><h2>Explore Our Offerings</h2><ul><li><strong>Kratom:</strong> Discover our diverse selection of kratom strains, perfect for relaxation and boosting your mood.</li><li><strong>Glass Pipes:</strong> Whether you're a beginner or an experienced smoker, our collection of glass pipes will impress you.</li><li><strong>Vape Supplies:</strong> From e-liquids to devices, we have everything you need to enjoy your vaping experience.</li></ul><p>At The Smoking Bee, we understand that every customer has unique preferences. That's why we keep our inventory fresh and rotating, ensuring there's always something new to explore. Whether you're looking for a classic favorite or eager to try a bold new flavor, we have you covered!</p><h2>Visit Us Today!</h2><p>Stop by our smoke shop in Paradise Valley for a quick pick-me-up or to browse through our sophisticated rigs. Our welcoming atmosphere and knowledgeable staff make us the go-to destination for smokers in the 92149 area. Experience the difference today at The Smoking Bee!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer kratom, glass pipes, vape supplies, and more!"}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open daily to serve your smoking needs."}, {"q": "Do you have a rewards program?", "a": "Yes! We offer a rewards program for our loyal customers."}, {"q": "Can I find new products regularly?", "a": "Absolutely! We rotate our inventory to bring you the latest and greatest."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92149 | Paradise Valley", path: "/smoke-shop-92149-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/17.JPG" />
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
