import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92155 | North Island NAS",
    description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
    keywords: "smoke shop 92155, north island, vapes, delta-8, smoking accessories, head shop near me, smoke shop open now, 420 shop in 92155, buy vapes in 92155, delta 8 92155",
    openGraph: {
      title: "Smoke Shop 92155 | North Island NAS",
      description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      url: "https://thesmokingbee.com/smoke-shop-92155-san-diego",
      images: [{ url: "/images/about/19.JPG", alt: "Smoke Shop 92155 | North Island NAS" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92155 | North Island NAS",
      description: "Near 92155? The Smoking Bee offers top-tier vapes, Delta-8, and smoking accessories for Naval Air Station communities.",
      images: ["/images/about/19.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92155 | North Island NAS", "item": "https://thesmokingbee.com/smoke-shop-92155-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92155_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop Near North Island NAS!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92155 area, particularly near North Island NAS, The Smoking Bee is your go-to smoke shop for all your vaping and smoking needs. We pride ourselves on offering a wide selection of premium products tailored to both military personnel and local residents.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we understand that quality matters. That's why we stock top-tier vapes and Delta-8 products that provide a satisfying experience. Whether you're looking for something to unwind after a long day or simply want to try something new, we have something for everyone.</p><ul><li><strong>Vapes:</strong> Explore our range of high-quality vapes that cater to every preference and style.</li><li><strong>Delta-8 Products:</strong> Enjoy the benefits of Delta-8 with our selection that’s both safe and enjoyable.</li><li><strong>Smoking Accessories:</strong> From durable rolling trays to specialty glass pipes, we have all the accessories you need.</li><li><strong>Hookah Tobacco:</strong> Discover our smooth and flavorful hookah tobacco that’s perfect for relaxing with friends.</li></ul><h2>Convenience and Variety</h2><p>We know that balancing a busy lifestyle can be challenging, which is why The Smoking Bee aims to provide convenience and variety in one location. Our friendly staff is always ready to assist you in finding the right products that fit your needs. Whether you are a seasoned smoker or just starting out, our staff is here to help you navigate your options and ensure a pleasant shopping experience.</p><h2>Visit Us Today!</h2><p>Conveniently located near the Naval Air Station, The Smoking Bee is committed to serving our community by providing not just products, but a welcoming atmosphere for all. Stop by today and see why we are the preferred smoke shop in the area!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of vapes, Delta-8 products, smoking accessories, and hookah tobacco."}, {"q": "Is The Smoking Bee open to everyone?", "a": "Yes, we cater to both military personnel and local residents."}, {"q": "Do you have a loyalty program?", "a": "Yes, we offer a loyalty program for our regular customers to enjoy exclusive discounts."}, {"q": "What are Delta-8 products?", "a": "Delta-8 products are cannabis-derived items that provide a milder psychoactive effect compared to Delta-9 THC."}, {"q": "Can I get recommendations from your staff?", "a": "Absolutely! Our knowledgeable staff is here to help you find the perfect products for your needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92155 | North Island NAS", path: "/smoke-shop-92155-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/19.JPG" />
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
