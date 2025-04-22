import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92171 | Grantville Area",
    description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
    keywords: "smoke shop 92171, grantville, kratom, vape mods, rolling papers, head shop near me, smoke shop open now, 420 shop in 92171, best kratom shop, buy vapes in 92171, rolling paper brands",
    openGraph: {
      title: "Smoke Shop 92171 | Grantville Area",
      description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
      url: "https://thesmokingbee.com/smoke-shop-92171-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92171 | Grantville Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92171 | Grantville Area",
      description: "Grantville (92171) smokers find kratom, vape mods, and rolling papers at The Smoking Bee. Elevate your smoke.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92171 | Grantville Area", "item": "https://thesmokingbee.com/smoke-shop-92171-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92171_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Smoke Experience in Grantville!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Grantville!</h2><p>If you're in the 92171 area and looking for the finest smoking products, look no further than The Smoking Bee. We pride ourselves on being the go-to smoke shop for locals, providing a wide array of products tailored to enhance your smoking experience. Whether you’re an avid smoker or just starting, we have something for everyone.</p><h2>Our Product Offerings</h2><ul><li><strong>Kratom:</strong> Our selection of potent kratom is sourced from the best suppliers, ensuring quality and effectiveness. Perfect for those seeking natural alternatives.</li><li><strong>Vape Mods:</strong> Upgrade your vaping game with our advanced vape mods. We carry the latest models and accessories to suit your preferences.</li><li><strong>Rolling Essentials:</strong> From rolling papers to tips, we have all the essentials you need to enjoy your smoke.</li><li><strong>Specialty Glass:</strong> Explore our unique selection of glass pieces that not only elevate your smoking sessions but also serve as stunning decor.</li><li><strong>Delta-8 Gummies:</strong> Looking for a smoother experience? Our delta-8 gummies offer a delightful way to unwind.</li></ul><p>At The Smoking Bee, our friendly staff is always ready to assist you. Whether you need help selecting the right product or want recommendations based on your routine, we’re here for you. Our goal is to create a welcoming atmosphere where you can find exactly what you need.</p><h2>Why Choose Us?</h2><p>We understand that every smoker has unique preferences, and that’s why we offer such a diverse range of products. Customer satisfaction is our top priority, and we strive to ensure every visit is a pleasant one. Join our community of satisfied customers and discover why we’re the best smoke shop in the Grantville area.</p>`;
  const faqItems = [{"q": "What types of kratom do you offer?", "a": "We offer a variety of kratom strains, all sourced from reputable suppliers to ensure quality."}, {"q": "Can I get recommendations for vape mods?", "a": "Absolutely! Our knowledgeable staff can help you find the perfect vape mod based on your preferences."}, {"q": "Do you sell rolling papers?", "a": "Yes, we carry a wide selection of rolling papers, including organic and flavored options."}, {"q": "What are delta-8 gummies?", "a": "Delta-8 gummies are a cannabis-derived product that provides a smoother experience compared to traditional THC."}, {"q": "Is there a loyalty program at The Smoking Bee?", "a": "Yes! We offer a loyalty program that rewards frequent customers with discounts and special offers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92171 | Grantville Area", path: "/smoke-shop-92171-san-diego" }
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
