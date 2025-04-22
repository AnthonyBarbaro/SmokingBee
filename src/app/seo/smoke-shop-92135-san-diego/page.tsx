import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92135 | Coronado Naval Area",
    description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
    keywords: "smoke shop 92135, coronado, glass pipes, kratom, smoking accessories, head shop near me, smoke shop open now, 420 shop in 92135, best kratom shop, cheap glass pipes 92135",
    openGraph: {
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      url: "https://thesmokingbee.com/smoke-shop-92135-san-diego",
      images: [{ url: "/images/about/12.JPG", alt: "Smoke Shop 92135 | Coronado Naval Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92135 | Coronado Naval Area",
      description: "In 92135 near Coronado? The Smoking Bee has premium glass, kratom, and essentials for all your smoking needs.",
      images: ["/images/about/12.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92135 | Coronado Naval Area", "item": "https://thesmokingbee.com/smoke-shop-92135-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92135_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Friendly Neighborhood Smoke Shop in 92135!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you find yourself in the 92135 area, especially near Coronado Naval Area, The Smoking Bee is your go-to destination for all things smoking-related. We pride ourselves on providing an extensive selection of premium glass pipes, kratom, and essential smoking accessories that cater to both novice and experienced smokers alike.</p><h2>Our Products</h2><p>At The Smoking Bee, we understand that quality matters. That's why we stock only the best brands in the industry. You can browse our impressive collection of glass pipes, ranging from intricate hand-blown designs to sleek, modern pieces that fit your style. Additionally, our kratom selection offers various strains to suit your preferences, whether you're looking for relaxation or an energy boost.</p><ul><li><strong>Premium Glass Pipes:</strong> Beautifully crafted and durable.</li><li><strong>Kratom:</strong> Wide variety of strains available.</li><li><strong>E-liquids:</strong> Top reputable brands for your vaping needs.</li><li><strong>Delta-8 Cartridges:</strong> Unique alternatives for a different experience.</li></ul><p>We also carry a variety of e-liquid brands that are perfect for vapers looking for a new favorite flavor. Our Delta-8 cartridges provide a unique experience for those interested in exploring alternative options. Whatever your smoking needs, The Smoking Bee has you covered!</p><h2>Why Choose Us?</h2><p>Not only do we offer a fantastic selection of products, but we also focus on providing a friendly, welcoming atmosphere. Our knowledgeable staff is always on hand to help you find exactly what you're looking for, and we love sharing our passion for smoking culture with our customers. When you walk into The Smoking Bee, you can expect a personalized shopping experience that makes you feel right at home.</p><p>So next time you're in the 92135 area, make sure to stop by The Smoking Bee. We can't wait to help you find everything you need for your smoking journey!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer premium glass pipes, kratom, e-liquids, and Delta-8 cartridges."}, {"q": "Is The Smoking Bee located near Coronado?", "a": "Yes, we are conveniently located in the 92135 area near Coronado Naval Area."}, {"q": "Do you have knowledgeable staff?", "a": "Absolutely! Our friendly team is here to help you with any questions."}, {"q": "What are Delta-8 cartridges?", "a": "Delta-8 cartridges are a unique alternative to traditional products, offering a different experience."}, {"q": "Can I find kratom at your shop?", "a": "Yes, we have a wide variety of kratom strains available for your needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92135 | Coronado Naval Area", path: "/smoke-shop-92135-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/12.JPG" />
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
