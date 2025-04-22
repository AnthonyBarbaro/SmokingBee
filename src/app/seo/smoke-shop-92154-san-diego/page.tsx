import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92154 | South San Diego",
    description: "South SD’s top smoke shop for glass pipes, kratom, and premium accessories in 92154. Visit The Smoking Bee.",
    keywords: "smoke shop 92154, south san diego, kratom, glass pipes, accessories, head shop near me, smoke shop open now, 420 shop in 92154, best kratom shop, cheap glass pipes 92154, buy vapes in 92154",
    openGraph: {
      title: "Smoke Shop 92154 | South San Diego",
      description: "South SD’s top smoke shop for glass pipes, kratom, and premium accessories in 92154. Visit The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92154-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92154 | South San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92154 | South San Diego",
      description: "South SD’s top smoke shop for glass pipes, kratom, and premium accessories in 92154. Visit The Smoking Bee.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92154 | South San Diego", "item": "https://thesmokingbee.com/smoke-shop-92154-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92154_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in South San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of South San Diego, The Smoking Bee is your premier smoke shop in the 92154 area. We pride ourselves on offering an extensive selection of smoking accessories, from high-quality glass pipes to a variety of kratom products. Our mission is to provide our customers with the best options available, ensuring you have everything you need for an enjoyable smoking experience.</p><h2>Our Products</h2><ul><li><strong>Glass Pipes:</strong> Explore our impressive collection of glass pipes, crafted for both functionality and style.</li><li><strong>Kratom:</strong> Discover our range of potent kratom strains, perfect for both new users and seasoned enthusiasts.</li><li><strong>Vape Accessories:</strong> Check out the latest in vape technology, including devices and premium e-liquids.</li></ul><p>At The Smoking Bee, we understand that every customer has unique preferences. That's why our knowledgeable staff is always on hand to answer your questions and help you find the perfect products to suit your needs. Whether you're restocking your favorites or looking to try something new, we make it easy and enjoyable.</p><h2>Visit Us Today!</h2><p>Conveniently located, The Smoking Bee is the ideal stop for all your smoking needs in the 92154 area. We invite you to come in and browse our collection, or simply ask our staff for recommendations. Experience the friendly atmosphere and expert advice that keeps our customers coming back!</p>`;
  const faqItems = [{"q": "What types of products does The Smoking Bee offer?", "a": "We offer a wide range of products including glass pipes, kratom, vape accessories, and more."}, {"q": "Is The Smoking Bee located in South San Diego?", "a": "Yes, we are conveniently located in the 92154 area of South San Diego."}, {"q": "Can I get recommendations for new products?", "a": "Absolutely! Our knowledgeable staff is always ready to help you discover new favorites."}, {"q": "Do you carry premium vape products?", "a": "Yes, we have a selection of top-quality vape devices and e-liquids."}, {"q": "What are your store hours?", "a": "We are open every day; please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92154 | South San Diego", path: "/smoke-shop-92154-san-diego" }
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
