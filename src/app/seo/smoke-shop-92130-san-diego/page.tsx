import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92130 | Carmel Valley",
    description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
    keywords: "smoke shop 92130, carmel valley, glass bongs, kratom, vapes, head shop near me, smoke shop open now, 420 shop in 92130, cheap glass pipes 92130, best kratom shop, buy vapes in 92130",
    openGraph: {
      title: "Smoke Shop 92130 | Carmel Valley",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
      url: "https://thesmokingbee.com/smoke-shop-92130-san-diego",
      images: [{ url: "/images/about/18.JPG", alt: "Smoke Shop 92130 | Carmel Valley" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92130 | Carmel Valley",
      description: "Carmel Valley’s top spot for glass bongs, vapes, and kratom. Visit The Smoking Bee in 92130 today.",
      images: ["/images/about/18.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92130-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92130 | Carmel Valley", "item": "https://thesmokingbee.com/smoke-shop-92130-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92130_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Carmel Valley’s Premier Smoke Shop Awaits You!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Carmel Valley, The Smoking Bee is your go-to smoke shop in the 92130 area. We pride ourselves on offering a diverse selection of high-quality products that cater to both seasoned enthusiasts and newcomers alike.</p><h2>Our Products</h2><ul><li><strong>Glass Bongs:</strong> Explore our impressive collection of sleek and stylish glass bongs. Each piece is carefully selected to ensure durability and aesthetic appeal.</li><li><strong>Vapes:</strong> Stay up-to-date with the latest vape technology. Our shop features a wide range of vapes, from beginner-friendly devices to advanced options for seasoned users.</li><li><strong>Kratom:</strong> Discover the natural benefits of kratom. We offer a variety of strains and products to help you find the perfect match for your needs.</li></ul><h2>Convenient Location</h2><p>Whether you’re just off the 56 freeway or exploring nearby restaurants, The Smoking Bee is easily accessible. Stop by and let our knowledgeable staff assist you in finding the right products tailored to your preferences.</p><h2>Special Deals</h2><p>At The Smoking Bee, we love to provide our customers with amazing deals. Be sure to check out our latest promotions on Delta-8 products and other popular items. We’re dedicated to making your shopping experience enjoyable and affordable.</p><h2>Visit Us Today!</h2><p>If you’re in Carmel Valley or the surrounding areas, don’t miss out on visiting The Smoking Bee. We’re excited to welcome you and help you explore our fantastic range of products!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a variety of products including glass bongs, vapes, and kratom."}, {"q": "Where are you located?", "a": "We are located in Carmel Valley, easily accessible from the 56 freeway."}, {"q": "Do you have any special promotions?", "a": "Yes! We frequently have special promotions on Delta-8 and other products."}, {"q": "Can I find beginner-friendly options?", "a": "Absolutely! We have a range of products suitable for beginners."}, {"q": "What are your store hours?", "a": "Please check our website or call us for the most up-to-date store hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92130 | Carmel Valley", path: "/smoke-shop-92130-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/18.JPG" />
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
