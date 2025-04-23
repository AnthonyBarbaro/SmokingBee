import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92123 | Serra Mesa’s Best",
    description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
    keywords: "smoke shop 92123, serra mesa, glass pipes, vapes, smoking accessories, head shop near me, smoke shop open now, 420 shop in 92123, cheap glass pipes 92123, buy vapes in 92123",
    openGraph: {
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92123-san-diego",
      images: [{ url: "/images/about/10.JPG", alt: "Smoke Shop 92123 | Serra Mesa’s Best" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92123 | Serra Mesa’s Best",
      description: "Discover premium smoking accessories in 92123 Serra Mesa. The Smoking Bee offers glass, vapes, and more.",
      images: ["/images/about/10.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92123-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92123 | Serra Mesa\u2019s Best", "item": "https://thesmokingbee.com/smoke-shop-92123-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92123_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Ultimate Smoke Shop in Serra Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Serra Mesa</h2><p>If you're in the 92123 area and searching for the best smoke shop, look no further than The Smoking Bee. We pride ourselves on providing a wide selection of premium smoking accessories to cater to all your needs. Whether you're a seasoned smoker or just starting out, we have something for everyone.</p><h2>Our Products</h2><ul><li><strong>Glassware:</strong> Explore our stunning range of glass pipes, bongs, and unique ashcatchers. Each piece is selected for quality and design, ensuring you find something that suits your style.</li><li><strong>Vapes:</strong> From beginner-friendly devices to advanced options, our vape selection has it all. Enjoy a smooth experience with our range of e-liquids and accessories.</li><li><strong>Accessories:</strong> We carry everything from rolling papers to herb grinders. If you're looking for flavored rolling papers to enhance your experience, we've got you covered!</li><li><strong>Edibles:</strong> Discover our Delta-8 edibles for a unique twist on your smoking routine. Our knowledgeable staff can help you choose the right product for your preferences.</li></ul><h2>Why Choose Us?</h2><p>At The Smoking Bee, we are dedicated to providing excellent customer service. Our friendly staff is always ready to assist you in finding the right products to elevate your smoking experience. We understand that every customer has unique preferences, and we aim to cater to those needs.</p><p>Conveniently located in Serra Mesa, we invite you to stop by and browse our extensive collection. Whether you’re stocking up on essentials or looking for a special gift, you’ll find everything you need at The Smoking Bee. Your satisfaction is our priority, and we strive to make your visit enjoyable!</p>`;
  const faqItems = [{"q": "What types of smoking accessories do you offer?", "a": "We offer a wide range of glassware, vapes, rolling papers, and Delta-8 edibles."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Absolutely! Our staff is knowledgeable and can help beginners find the right products."}, {"q": "Do you offer any unique items?", "a": "Yes! We have unique ashcatchers and flavored rolling papers that you won't find everywhere."}, {"q": "Can I get advice on choosing the right vape?", "a": "Definitely! Our team is here to provide recommendations based on your preferences."}, {"q": "What are your store hours?", "a": "We are open daily, but please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92123 | Serra Mesa’s Best", path: "/smoke-shop-92123-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/10.JPG" />
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
