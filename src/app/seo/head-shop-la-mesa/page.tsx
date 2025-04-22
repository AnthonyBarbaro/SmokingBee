import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "La Mesa’s #1 Head Shop | The Smoking Bee",
    description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
    keywords: "head shop la mesa, glass bongs, rolling trays, smoking accessories, smoke shop, head shop near me, smoke shop open now, 420 shop in la mesa, cheap glass pipes la mesa",
    openGraph: {
      title: "La Mesa’s #1 Head Shop | The Smoking Bee",
      description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
      url: "https://thesmokingbee.com/head-shop-la-mesa",
      images: [{ url: "/images/about/1.JPG", alt: "La Mesa’s #1 Head Shop | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "La Mesa’s #1 Head Shop | The Smoking Bee",
      description: "Explore premium glass bongs, rolling trays, and smoking accessories at The Smoking Bee—La Mesa’s top head shop.",
      images: ["/images/about/1.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "La Mesa\u2019s #1 Head Shop | The Smoking Bee", "item": "https://thesmokingbee.com/head-shop-la-mesa"}]}`
    }
  };
}

export default async function head_shop_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Experience at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to La Mesa’s Premier Head Shop</h2><p>At <strong>The Smoking Bee</strong>, we pride ourselves on being La Mesa’s top destination for all your smoking needs. Whether you’re searching for high-quality bongs, unique rolling trays, or an assortment of smoking accessories, we have everything you need to enhance your smoking experience.</p><h2>Our Quality Offerings</h2><p>We specialize in premium glass bongs that not only provide a smooth smoking experience but also serve as beautiful pieces of art. Our collection includes handcrafted pieces made by skilled artisans, ensuring you get the best quality available. Additionally, we stock modern vape hardware for those looking for a different kind of experience, along with the finest rolling papers to suit all preferences.</p><h2>Conveniently Located</h2><p>The Smoking Bee is conveniently situated just off major bus routes, making it easy for local smokers to stop by and explore our extensive range of products. We’re dedicated to providing a welcoming atmosphere where you can browse and find exactly what you need without any pressure.</p><h2>Why Choose Us?</h2><ul><li><strong>Expert Knowledge:</strong> Our friendly staff are knowledgeable and ready to assist you in finding the perfect item.</li><li><strong>Quality Products:</strong> We only stock items that meet our high standards of quality and functionality.</li><li><strong>Community Focused:</strong> We love being part of the La Mesa community and strive to support our local customers.</li></ul><p>Visit <strong>The Smoking Bee</strong> today and discover why we are La Mesa’s favorite head shop. We’re here to help you elevate your smoking game!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a variety of glass bongs, rolling trays, vape hardware, and smoking accessories."}, {"q": "Is The Smoking Bee located near public transportation?", "a": "Yes, we are conveniently located just off major bus routes for easy access."}, {"q": "Do you have knowledgeable staff to assist customers?", "a": "Absolutely! Our friendly staff are always ready to help you find the right products."}, {"q": "Can I find handcrafted glass pieces at your shop?", "a": "Yes, we specialize in premium handcrafted glass bongs that are both functional and artistic."}, {"q": "What makes The Smoking Bee different from other head shops?", "a": "We focus on quality products, expert knowledge, and a welcoming community atmosphere."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "La Mesa’s #1 Head Shop | The Smoking Bee", path: "/head-shop-la-mesa" }
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
