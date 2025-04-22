import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92189 | Skyline Hills",
    description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
    keywords: "smoke shop 92189, skyline hills, rolling papers, kratom, vape mods, head shop near me, smoke shop open now, 420 shop in 92189, rolling paper brands, best kratom shop, buy vapes in 92189",
    openGraph: {
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
      url: "https://thesmokingbee.com/smoke-shop-92189-san-diego",
      images: [{ url: "/images/about/5.JPG", alt: "Smoke Shop 92189 | Skyline Hills" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92189 | Skyline Hills",
      description: "Skyline Hills (92189) relies on The Smoking Bee for rolling papers, kratom, and quality vape mods.",
      images: ["/images/about/5.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92189 | Skyline Hills", "item": "https://thesmokingbee.com/smoke-shop-92189-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92189_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Skyline Hills!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Skyline Hills</h2><p>If you’re in the 92189 area, look no further than The Smoking Bee for all your smoking essentials. Our smoke shop is dedicated to providing the Skyline Hills community with the highest quality products, from rolling papers to kratom and vape mods.</p><h2>Explore Our Product Range</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That’s why we offer a diverse selection of:</p><ul><li><strong>Rolling Papers:</strong> Perfect for the ideal roll, our rolling papers come in various sizes and styles to suit your needs.</li><li><strong>Kratom:</strong> Fresh and potent, our kratom selection is carefully sourced to ensure quality and effectiveness.</li><li><strong>Vape Mods:</strong> Upgrade your vaping experience with our robust vape mods, designed for maximum flavor and comfort.</li><li><strong>Delta-8 Edibles:</strong> Looking to spice up your routine? Try our delta-8 edibles for a new twist on relaxation.</li><li><strong>Glass Attachments:</strong> Enhance your setup with our new glass attachments for a smooth and enjoyable experience.</li></ul><h2>Why Choose Us?</h2><p>At The Smoking Bee, we pride ourselves on offering not only exceptional products but also a welcoming atmosphere. Our knowledgeable staff is always ready to assist you in finding exactly what you need or suggesting new items to try. We believe in fostering a community where everyone feels comfortable exploring their preferences in smoking culture.</p><h2>Visit Us Today!</h2><p>Come by our Skyline Hills shop and discover the best smoke shop experience in 92189. Whether you're looking for rolling papers, kratom, or the latest vape mods, The Smoking Bee has you covered. Join our community and enhance your smoking journey with us!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling papers, kratom, vape mods, delta-8 edibles, and glass attachments."}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open every day to serve the Skyline Hills community!"}, {"q": "Can I get advice on which products to choose?", "a": "Absolutely! Our friendly staff is here to help you find the perfect products for your needs."}, {"q": "Do you have any promotions or discounts?", "a": "Yes, we regularly run promotions. Be sure to ask about current deals when you visit!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92189 | Skyline Hills", path: "/smoke-shop-92189-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/5.JPG" />
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
