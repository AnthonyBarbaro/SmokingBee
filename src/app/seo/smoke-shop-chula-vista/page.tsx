import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
    description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
    keywords: "smoke shop chula vista, kratom near me, vapes, rolling accessories, glass pipes, head shop near me, smoke shop open now, 420 shop in chula vista, buy vapes in chula vista, best kratom shop, cheap glass pipes chula vista, rolling paper brands",
    openGraph: {
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      url: "https://thesmokingbee.com/smoke-shop-chula-vista",
      images: [{ url: "/images/about/11.JPG", alt: "Top Smoke Shop in Chula Vista | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Top Smoke Shop in Chula Vista | The Smoking Bee",
      description: "Chula Vista’s go-to smoke shop for vapes, glass, kratom, and rolling accessories. Visit The Smoking Bee for quality smoking products.",
      images: ["/images/about/11.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Top Smoke Shop in Chula Vista | The Smoking Bee", "item": "https://thesmokingbee.com/smoke-shop-chula-vista"}]}`
    }
  };
}

export default async function smoke_shop_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Chula Vista!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Chula Vista, The Smoking Bee is your go-to smoke shop, offering a vast range of products to satisfy all your smoking needs. Whether you’re a seasoned smoker or just starting out, we have everything from high-quality glass pipes to a variety of flavorful vapes.</p><h2>Our Extensive Product Range</h2><p>At The Smoking Bee, we pride ourselves on our extensive selection. Our shelves are stocked with:</p><ul><li><strong>Glass Pipes:</strong> Choose from intricate designs and quality materials.</li><li><strong>Kratom:</strong> Explore our range of kratom strains, perfect for relaxation and wellness.</li><li><strong>Vapes:</strong> Discover a variety of e-liquids and vaping devices that cater to your preferences.</li><li><strong>Rolling Accessories:</strong> From rolling papers to unique trays, we have all the essentials.</li></ul><p>We prioritize quality and customer satisfaction, ensuring that every product we offer meets our high standards. Our knowledgeable staff is always ready to help you find exactly what you need, making your shopping experience enjoyable and hassle-free.</p><h2>Why Choose Us?</h2><p>The Smoking Bee is conveniently located near major thoroughfares, making it easy for you to drop in and grab your favorite products. We are committed to serving the Chula Vista community with the best smoking supplies, and our friendly atmosphere keeps customers coming back. Whether you’re looking for something specific or just browsing, we guarantee a welcoming environment.</p><p>Visit us today at The Smoking Bee, where quality meets convenience!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide range of glass pipes, vapes, kratom, and rolling accessories."}, {"q": "Is The Smoking Bee located near major roads?", "a": "Yes, we are conveniently located near major thoroughfares in Chula Vista."}, {"q": "Are your products of high quality?", "a": "Absolutely! We pride ourselves on offering only top-tier smoking products."}, {"q": "Can I get help choosing the right product?", "a": "Yes! Our knowledgeable staff is always here to assist you with any questions."}, {"q": "Do you have unique items in stock?", "a": "Yes, we have a variety of unique items, including custom rolling trays and exclusive e-liquids."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Top Smoke Shop in Chula Vista | The Smoking Bee", path: "/smoke-shop-chula-vista" }
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
