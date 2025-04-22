import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92126 | Mira Mesa",
    description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
    keywords: "smoke shop 92126, mira mesa, delta-8, glass pipes, premium smoke shop, head shop near me, smoke shop open now, 420 shop in 92126, delta 8 92126, cheap glass pipes 92126, buy vapes in 92126",
    openGraph: {
      title: "Smoke Shop 92126 | Mira Mesa",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92126-san-diego",
      images: [{ url: "/images/about/13.JPG", alt: "Smoke Shop 92126 | Mira Mesa" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92126 | Mira Mesa",
      description: "Mira Mesa’s 92126 smoke shop for Delta-8, glass pipes, and more. Experience quality products at The Smoking Bee.",
      images: ["/images/about/13.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92126 | Mira Mesa", "item": "https://thesmokingbee.com/smoke-shop-92126-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92126_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Mira Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Mira Mesa!</h2><p>Located conveniently in the heart of Mira Mesa, our smoke shop 92126 is your go-to destination for all things smoking. At The Smoking Bee, we pride ourselves on offering a diverse selection of quality products to cater to every enthusiast's needs. Whether you're a seasoned veteran or a curious newcomer, we have something for everyone.</p><h2>Explore Our Wide Range of Products</h2><ul><li><strong>Delta-8 Products:</strong> Discover the latest in Delta-8 THC products that provide a unique experience and are rapidly gaining popularity.</li><li><strong>Premium Glass Pipes:</strong> Our collection of glass pipes is carefully curated to ensure quality and style, perfect for any occasion.</li><li><strong>Vape Flavors:</strong> Try out our exciting new vape flavors that will tantalize your taste buds and elevate your sessions.</li><li><strong>Kratom Strains:</strong> Explore our selection of kratom strains, known for their variety of effects and benefits.</li></ul><p>At The Smoking Bee, we understand that every customer is unique. That's why our knowledgeable and friendly staff is always ready to assist you in finding the perfect accessory for your next session. Whether you need help choosing a product or have questions about usage, we're here to help!</p><h2>Why Choose Us?</h2><p>We are committed to providing an exceptional shopping experience, ensuring that our customers leave satisfied with their purchases. Our shop is not just about selling products; it's about building a community where enthusiasts can come together to share their passion. Visit us today and see why The Smoking Bee is the preferred smoke shop in Mira Mesa!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a variety of products including Delta-8, glass pipes, vape flavors, and kratom strains."}, {"q": "Is your staff knowledgeable about the products?", "a": "Yes, our friendly staff is well-trained and ready to assist you with any questions."}, {"q": "Do you have any special promotions?", "a": "We frequently run promotions, so be sure to check our website or visit us in-store for the latest deals!"}, {"q": "Can I find accessories at your smoke shop?", "a": "Absolutely! We have a wide range of accessories to enhance your smoking experience."}, {"q": "What are your store hours?", "a": "We are open daily, but please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92126 | Mira Mesa", path: "/smoke-shop-92126-san-diego" }
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
