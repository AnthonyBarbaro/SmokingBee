import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92172 | Poway Vicinity",
    description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
    keywords: "smoke shop 92172, poway area, glass, e-liquids, smoking accessories, head shop near me, smoke shop open now, 420 shop in 92172, buy vapes in 92172, cheap glass pipes 92172",
    openGraph: {
      title: "Smoke Shop 92172 | Poway Vicinity",
      description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
      url: "https://thesmokingbee.com/smoke-shop-92172-san-diego",
      images: [{ url: "/images/about/13.JPG", alt: "Smoke Shop 92172 | Poway Vicinity" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92172 | Poway Vicinity",
      description: "Near Poway? The Smoking Bee at 92172 stocks premium glass, e-liquids, and smoking accessories for locals.",
      images: ["/images/about/13.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92172 | Poway Vicinity", "item": "https://thesmokingbee.com/smoke-shop-92172-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92172_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop Near Poway!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92172 area, The Smoking Bee is your go-to smoke shop offering a wide range of premium products. We pride ourselves on being the local hotspot for all your smoking needs, whether you're a casual user or a dedicated connoisseur.</p><h2>Our Product Offerings</h2><ul><li><strong>Glassware:</strong> Explore our extensive collection of high-quality glass pieces, perfect for any smoking enthusiast.</li><li><strong>E-Liquids:</strong> Discover delicious flavors that will elevate your vaping experience.</li><li><strong>Smoking Accessories:</strong> From rolling trays to specialized hookah hoses, we have everything you need to enhance your smoking journey.</li><li><strong>Kratom Strains:</strong> Check out our selection of top kratom strains for a unique and enjoyable experience.</li></ul><p>At The Smoking Bee, our friendly staff is dedicated to providing personalized service to help you find exactly what you're looking for. We believe in creating a welcoming atmosphere for everyone who walks through our doors.</p><h2>Why Choose Us?</h2><p>Conveniently located near Poway, The Smoking Bee not only offers quality products but also a community vibe that makes shopping enjoyable. Whether you're visiting us for the first time or you're a regular, we ensure you leave satisfied with your experience.</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer premium glassware, e-liquids, kratom strains, and various smoking accessories."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Absolutely! We cater to both casual visitors and experienced users, providing guidance and recommendations."}, {"q": "Do you have any special deals?", "a": "Yes, we often have promotions on select items. Be sure to ask our staff for current offers!"}, {"q": "What are your store hours?", "a": "We are open daily. Please check our website for specific hours."}, {"q": "Can I find unique items at your shop?", "a": "Definitely! We stock specialized items that you won't find in typical stores."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92172 | Poway Vicinity", path: "/smoke-shop-92172-san-diego" }
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
