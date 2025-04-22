import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92127 | Rancho Bernardo",
    description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
    keywords: "smoke shop 92127, rancho bernardo, vapes, smoking accessories, delta-8, head shop near me, smoke shop open now, 420 shop in 92127, buy vapes in 92127, delta 8 92127",
    openGraph: {
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      url: "https://thesmokingbee.com/smoke-shop-92127-san-diego",
      images: [{ url: "/images/about/13.JPG", alt: "Smoke Shop 92127 | Rancho Bernardo" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92127 | Rancho Bernardo",
      description: "Rancho Bernardo (92127) gets premium vapes and smoking accessories at The Smoking Bee. Explore top-tier products today.",
      images: ["/images/about/13.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92127 | Rancho Bernardo", "item": "https://thesmokingbee.com/smoke-shop-92127-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92127_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Explore Premium Vapes at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Rancho Bernardo</h2><p>If you're in the 92127 area and looking for top-quality vapes and smoking accessories, you've come to the right place! At The Smoking Bee, we pride ourselves on providing a wide range of products to meet all your smoking needs. Our store is stocked with the latest and greatest in vaping technology and smoking essentials.</p><h2>Our Product Selection</h2><p>At our Rancho Bernardo location, you will find:</p><ul><li><strong>High-Quality Vapes:</strong> We offer a selection of premium vaping devices that cater to both beginners and seasoned users. From sleek battery mods to stylish pod systems, we have something for everyone.</li><li><strong>Delta-8 Products:</strong> Explore our range of Delta-8 options, known for their unique effects and smooth experience. Ideal for those looking for a different type of high.</li><li><strong>Accessories:</strong> Enhance your smoking routine with our variety of accessories including pre-roll cones, grinders, and more. We have everything you need to elevate your experience.</li></ul><h2>Convenient Location</h2><p>Located conveniently in Rancho Bernardo, The Smoking Bee is the perfect stop after a day of hiking or exploring the beautiful local trails. Whether you're looking to unwind or to find a refreshing pick-me-up, our friendly staff is here to help you find exactly what you need.</p><h2>Why Choose Us?</h2><p>At The Smoking Bee, we are committed to providing an exceptional shopping experience. Our knowledgeable team is always ready to assist you in finding the perfect products tailored to your preferences. Plus, our commitment to quality means you can shop with confidence knowing you’re getting the best.</p><p>Come visit us today and discover the amazing products we have in store for you!</p>`;
  const faqItems = [{"q": "What types of vapes do you offer?", "a": "We offer a wide selection of vapes including mods, pods, and disposable options."}, {"q": "Do you have Delta-8 products?", "a": "Yes, we carry a range of Delta-8 products for those interested in this unique experience."}, {"q": "Is The Smoking Bee located near hiking trails?", "a": "Absolutely! We are conveniently located near several local hiking trails, making us a great stop after your outdoor adventure."}, {"q": "What smoking accessories do you sell?", "a": "We have a variety of accessories including pre-roll cones, grinders, and more to enhance your smoking experience."}, {"q": "Can I get help selecting products?", "a": "Yes! Our friendly and knowledgeable staff are always available to help you find the perfect products."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92127 | Rancho Bernardo", path: "/smoke-shop-92127-san-diego" }
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
