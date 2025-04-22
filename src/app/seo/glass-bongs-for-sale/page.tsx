import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Glass Bongs for Sale | The Smoking Bee",
    description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
    keywords: "glass bongs for sale, water pipes, dab rigs, head shop, premium bongs, head shop near me, smoke shop open now, 420 shop near me, cheap glass pipes near me",
    openGraph: {
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
      url: "https://thesmokingbee.com/glass-bongs-for-sale",
      images: [{ url: "/images/about/13.JPG", alt: "Glass Bongs for Sale | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Glass Bongs for Sale | The Smoking Bee",
      description: "Shop premium glass bongs, water pipes, and dab rigs at The Smoking Bee. Elevate your smoking setup today.",
      images: ["/images/about/13.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Glass Bongs for Sale | The Smoking Bee", "item": "https://thesmokingbee.com/glass-bongs-for-sale"}]}`
    }
  };
}

export default async function glass_bongs_for_sale_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Smoke with Our Glass Bongs!`;
  const htmlContent = `<h2>Discover Our Premium Glass Bongs</h2><p>At <strong>The Smoking Bee</strong>, we understand that the right piece can enhance your smoking experience significantly. Our carefully curated selection of glass bongs includes everything from stylish water pipes to sophisticated dab rigs, ensuring that every smoker can find their perfect match.</p><h2>Quality You Can Trust</h2><p>We pride ourselves on offering only the best in quality. Our bongs are made from thick borosilicate glass, providing durability and resistance to thermal shock. These high-quality materials ensure that your bong not only looks great but also lasts through countless sessions.</p><h2>Variety for Every Preference</h2><p>Whether you prefer a simple design or something more intricate, The Smoking Bee has got you covered. Our collection features:</p><ul><li>Classic straight tube bongs</li><li>Curved and percolator designs</li><li>Compact dab rigs for on-the-go use</li></ul><p>No matter your style, you can find a piece that complements your smoking ritual perfectly.</p><h2>Your Smoking Journey Starts Here</h2><p>Shopping at The Smoking Bee means you’re not just buying a bong; you’re investing in a superior smoking experience. With our expert guidance, we’ll help you choose the ideal piece that will deliver cool, smooth hits every time. Elevate your smoking setup today and enjoy the quality and craftsmanship that our glass bongs offer.</p>`;
  const faqItems = [{"q": "What types of glass bongs do you offer?", "a": "We offer a variety of glass bongs including straight tube, beaker, and percolator designs."}, {"q": "Are your bongs made from high-quality materials?", "a": "Yes, all our bongs are made from thick borosilicate glass for durability and performance."}, {"q": "How can I choose the right bong for me?", "a": "Consider your smoking style and preferences; our team at The Smoking Bee can help guide you to the perfect choice."}, {"q": "Do you offer dab rigs as well?", "a": "Absolutely! We have a selection of dab rigs designed for optimal flavor and vapor production."}, {"q": "Can I find unique designs at The Smoking Bee?", "a": "Yes, we feature a range of unique and artistic designs from respected artisan brands."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Glass Bongs for Sale | The Smoking Bee", path: "/glass-bongs-for-sale" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/13.JPG" />
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
