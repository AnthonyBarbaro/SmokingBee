import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92191 | North City",
    description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
    keywords: "smoke shop 92191, north city, glass bongs, e-juices, rolling trays, head shop near me, smoke shop open now, 420 shop in 92191, cheap glass pipes 92191, buy vapes in 92191",
    openGraph: {
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92191-san-diego",
      images: [{ url: "/images/about/23.JPG", alt: "Smoke Shop 92191 | North City" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92191 | North City",
      description: "North City (92191) smokers choose The Smoking Bee for premium glass bongs, e-juices, and rolling trays.",
      images: ["/images/about/23.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92191-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92191 | North City", "item": "https://thesmokingbee.com/smoke-shop-92191-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92191_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in North City!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in North City</h2><p>If you're in the 92191 area and looking for the best smoke shop, look no further than The Smoking Bee. Our store is dedicated to providing smokers with a premium selection of products to enhance your smoking experience. From elegant glass bongs to flavorful e-juices, we have everything you need to enjoy your hobby.</p><h2>Explore Our Diverse Collection</h2><p>At The Smoking Bee, we pride ourselves on our diverse collection of smoking accessories. Whether you prefer the classic style of glass bongs or the latest in vaping technology, we have something for everyone:</p><ul><li><strong>Glass Bongs:</strong> Choose from a wide range of designs, including sleek and modern options or colorful and artistic pieces.</li><li><strong>E-Juices:</strong> Enjoy a variety of flavors that will satisfy any palate, from fruity to dessert-inspired.</li><li><strong>Rolling Trays:</strong> Keep your smoking area tidy with our sturdy and stylish rolling trays.</li></ul><p>Our knowledgeable staff is always on hand to assist you in finding the perfect products that suit your style and needs. If you’re exploring delta-8 options or advanced vaping mods, don’t hesitate to ask for a personalized recommendation.</p><h2>Why Choose The Smoking Bee?</h2><p>We understand that smoking is not just a hobby; it's a lifestyle. That's why we strive to create a welcoming environment where everyone feels comfortable exploring our selection. Our commitment to quality ensures that you'll find only the best products at competitive prices. Plus, our friendly staff is eager to share their expertise and help you make informed choices.</p><p>So, whether you're a seasoned smoker or just starting out, The Smoking Bee in North City has everything you need to elevate your smoking experience. Visit us today and see why we are the go-to smoke shop for 92191 residents!</p>`;
  const faqItems = [{"q": "What types of products does The Smoking Bee offer?", "a": "We offer a wide selection of glass bongs, e-juices, rolling trays, and more."}, {"q": "Can I get personalized recommendations?", "a": "Absolutely! Our knowledgeable staff is here to help you find the perfect products."}, {"q": "Do you carry delta-8 products?", "a": "Yes, we have a range of delta-8 options available for you to explore."}, {"q": "Is The Smoking Bee a good choice for beginners?", "a": "Definitely! We cater to all experience levels and are happy to guide new smokers."}, {"q": "What are your store hours?", "a": "We're open daily to serve all your smoking needs. Check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92191 | North City", path: "/smoke-shop-92191-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/23.JPG" />
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
