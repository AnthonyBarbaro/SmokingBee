import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92132 | Central San Diego",
    description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
    keywords: "smoke shop 92132, central san diego, glass pipes, delta-8, smoking supplies, head shop near me, smoke shop open now, 420 shop in 92132, cheap glass pipes 92132, delta 8 92132",
    openGraph: {
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      url: "https://thesmokingbee.com/smoke-shop-92132-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92132 | Central San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92132 | Central San Diego",
      description: "Visit The Smoking Bee in 92132 for premium glass pipes, Delta-8, and top-tier smoking supplies in central SD.",
      images: ["/images/about/16.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92132-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92132 | Central San Diego", "item": "https://thesmokingbee.com/smoke-shop-92132-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92132_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Central San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of 92132, The Smoking Bee is your go-to destination for all your smoking needs. We pride ourselves on offering a diverse selection of premium products, including high-quality glass pipes, Delta-8 products, and essential smoking accessories. Whether you're an experienced smoker or just starting out, we have something for everyone.</p><h2>Our Product Range</h2><ul><li><strong>Glass Pipes:</strong> Explore our exquisite collection of handcrafted glass pipes, perfect for any occasion.</li><li><strong>Delta-8 Products:</strong> Experience the latest in cannabis innovation with our top-tier Delta-8 selections.</li><li><strong>Vape Accessories:</strong> From discreet vape pods to advanced mods, find everything you need to enhance your vaping experience.</li></ul><p>At The Smoking Bee, we believe in providing not just products but also a friendly atmosphere where customers feel welcome. Our knowledgeable staff is always ready to help you find the perfect item for your needs. Plus, we offer competitive pricing without compromising quality, ensuring that you get the best value for your money.</p><h2>Visit Us Today!</h2><p>Stop by The Smoking Bee in central San Diego and discover why we are a favorite among locals. Whether you need smoking supplies for a special occasion or just want to explore new products, we invite you to come in and check out our offerings. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a variety of glass pipes, Delta-8 products, and smoking accessories."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we are proudly based in central San Diego!"}, {"q": "Do you have a loyalty program?", "a": "Yes, we offer a loyalty program for our regular customers with exciting rewards!"}, {"q": "What are your store hours?", "a": "We are open daily from 10 AM to 9 PM. Come visit us!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92132 | Central San Diego", path: "/smoke-shop-92132-san-diego" }
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
