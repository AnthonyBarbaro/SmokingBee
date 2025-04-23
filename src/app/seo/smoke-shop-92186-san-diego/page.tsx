import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92186 | Escondido Area",
    description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
    keywords: "smoke shop 92186, escondido area, rolling trays, glass pipes, kratom, head shop near me, smoke shop open now, 420 shop in 92186, cheap glass pipes 92186, best kratom shop, delta 8 92186",
    openGraph: {
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      url: "https://thesmokingbee.com/smoke-shop-92186-san-diego",
      images: [{ url: "/images/about/8.JPG", alt: "Smoke Shop 92186 | Escondido Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92186 | Escondido Area",
      description: "Close to Escondido at 92186? The Smoking Bee has rolling trays, glass pipes, and top kratom products.",
      images: ["/images/about/8.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92186-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92186 | Escondido Area", "item": "https://thesmokingbee.com/smoke-shop-92186-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92186_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Neighborhood Smoke Shop Awaits!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92186 area, particularly near Escondido, The Smoking Bee is your go-to destination for all your smoking needs. We pride ourselves on offering a wide selection of high-quality products that cater to both newcomers and seasoned aficionados alike.</p><h2>Our Offerings</h2><p>At The Smoking Bee, we specialize in:</p><ul><li><strong>Crafted Glass:</strong> Discover our variety of glass pipes that combine both aesthetics and functionality.</li><li><strong>Sturdy Rolling Trays:</strong> Perfect for keeping your smoking area organized and stylish.</li><li><strong>High-Quality Kratom:</strong> Explore our top kratom products for a unique experience.</li><li><strong>Delta-8 Carts:</strong> Ask our knowledgeable staff for recommendations on the best options available.</li><li><strong>Vape Flavors:</strong> Check out our latest vape flavors to elevate your smoking experience.</li></ul><p>Our friendly team is always ready to help you find exactly what you’re looking for. Whether it's a new glass piece or the latest in vaping technology, we prioritize customer satisfaction and are committed to making your shopping experience enjoyable.</p><h2>Why Choose Us?</h2><p>The Smoking Bee stands out because we not only sell products but also build a community. We understand the importance of quality and customer service, and we aim to provide both. Our store is a friendly space where you can explore, ask questions, and find the right products for you.</p><p>Whether you’re a local or just passing through, we invite you to visit The Smoking Bee in the 92186 area. Experience the best selection of smoke shop products and meet our passionate team today!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer glass pipes, rolling trays, kratom, delta-8 carts, and various vape flavors."}, {"q": "Is The Smoking Bee located near Escondido?", "a": "Yes, we are conveniently located in the 92186 area, close to Escondido."}, {"q": "Can beginners find suitable products at your shop?", "a": "Absolutely! We cater to both casual shoppers and experienced users."}, {"q": "Do you have staff available to help with product selection?", "a": "Yes, our knowledgeable staff is always ready to assist you with recommendations."}, {"q": "What makes The Smoking Bee unique?", "a": "We prioritize quality, customer service, and creating a welcoming community for all smoking enthusiasts."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92186 | Escondido Area", path: "/smoke-shop-92186-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/8.JPG" />
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
