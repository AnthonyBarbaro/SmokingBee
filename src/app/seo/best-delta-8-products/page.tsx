import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Delta-8 Products | The Smoking Bee",
    description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
    keywords: "best delta-8 products, delta-8 edibles, delta-8 vapes, delta-8 near me, head shop near me, smoke shop open now, 420 shop near me, buy vapes near me",
    openGraph: {
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
      url: "https://thesmokingbee.com/best-delta-8-products",
      images: [{ url: "/images/about/1.JPG", alt: "Best Delta-8 Products | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Delta-8 Products | The Smoking Bee",
      description: "Shop Delta-8 edibles, vapes, and tinctures at The Smoking Bee. Discover why we’re your go-to for quality Delta-8.",
      images: ["/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Delta-8 Products | The Smoking Bee", "item": "https://thesmokingbee.com/best-delta-8-products"}]}`
    }
  };
}

export default async function best_delta_8_products_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover the Best Delta-8 Products at The Smoking Bee!`;
  const htmlContent = `<h2>Explore Our Quality Delta-8 Selection</h2><p>At The Smoking Bee, we pride ourselves on offering the best Delta-8 products available. Our extensive lineup includes a variety of <strong>edibles</strong>, <strong>vapes</strong>, and <strong>tinctures</strong> that cater to both new users and seasoned enthusiasts alike. Each product is carefully sourced from reputable brands to ensure you receive only the highest quality and most potent options.</p><h2>Why Choose Delta-8?</h2><p>Delta-8 THC is known for its unique effects, offering a milder experience compared to Delta-9 THC. Many users report feeling relaxed and uplifted without the overwhelming high that can accompany traditional cannabis products. Whether you're interested in exploring <strong>Delta-8 gummies</strong> for a sweet treat or prefer the convenience of <strong>vape pens</strong>, The Smoking Bee has something for everyone.</p><h2>Our Commitment to Quality</h2><ul><li><strong>Potency:</strong> All our products undergo rigorous testing to ensure they meet our high standards.</li><li><strong>Purity:</strong> We prioritize transparency, providing lab results for each item to verify their quality.</li><li><strong>Knowledgeable Staff:</strong> Our team is always ready to assist you in finding the perfect Delta-8 product to suit your needs.</li></ul><p>Visit us today at The Smoking Bee and discover why we are your go-to destination for Delta-8 products. Whether you’re shopping for yourself or looking for the perfect gift, our selection will not disappoint!</p>`;
  const faqItems = [{"q": "What are Delta-8 products?", "a": "Delta-8 products are cannabis-derived items containing Delta-8 THC, known for their milder effects compared to Delta-9 THC."}, {"q": "Are Delta-8 products legal?", "a": "Yes, Delta-8 products are legal in many states, but it’s important to check local regulations as they can vary."}, {"q": "How do I use Delta-8 tinctures?", "a": "Delta-8 tinctures can be taken sublingually (under the tongue) for quick absorption, or added to food and drinks."}, {"q": "What flavors do your Delta-8 gummies come in?", "a": "We offer a variety of delicious flavors, including watermelon, blue raspberry, and mixed fruit."}, {"q": "Can I combine Delta-8 and Delta-9 products?", "a": "While some users may choose to combine them for a different experience, it's best to approach this with caution and start slow."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Delta-8 Products | The Smoking Bee", path: "/best-delta-8-products" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/1.JPG" />
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
