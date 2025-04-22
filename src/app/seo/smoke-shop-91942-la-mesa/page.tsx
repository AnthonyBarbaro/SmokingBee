import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 91942 | Top La Mesa Essentials",
    description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
    keywords: "smoke shop 91942, la mesa smoke shop, kratom near 91942, glass pipes, head shop near me, smoke shop open now, 420 shop in 91942, best kratom shop, cheap glass pipes 91942, buy vapes in 91942",
    openGraph: {
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      url: "https://thesmokingbee.com/smoke-shop-91942-la-mesa",
      images: [{ url: "/images/about/11.JPG", alt: "Smoke Shop 91942 | Top La Mesa Essentials" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 91942 | Top La Mesa Essentials",
      description: "In 91942? The Smoking Bee is your go-to shop for quality kratom, glass pipes, and smoking accessories in La Mesa.",
      images: ["/images/about/11.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-91942-la-mesa",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 91942 | Top La Mesa Essentials", "item": "https://thesmokingbee.com/smoke-shop-91942-la-mesa"}]}`
    }
  };
}

export default async function smoke_shop_91942_la_mesa_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in La Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in La Mesa!</h2><p>If you’re in the 91942 area, look no further than The Smoking Bee for all your smoking essentials. We are dedicated to providing high-quality products that cater to all your needs. Whether you’re a seasoned smoker or just starting out, we have something for everyone.</p><h2>Our Offerings</h2><p>At The Smoking Bee, we pride ourselves on our extensive range of products. Here’s what you can find in our shop:</p><ul><li><strong>Kratom:</strong> Explore our top-grade kratom, sourced from trusted suppliers to ensure quality and potency.</li><li><strong>Glass Pipes:</strong> Choose from a unique selection of beautiful glass pipes, perfect for enhancing your smoking experience.</li><li><strong>Rolling Papers:</strong> We offer a variety of rolling papers to suit every preference, including organic and flavored options.</li><li><strong>Disposable Vapes:</strong> Check out the latest flavors in disposable vapes – convenience meets choice!</li></ul><p>Our friendly staff is always ready to assist you, whether you’re looking for product recommendations or just want to chat about the latest trends. We take pride in creating a welcoming atmosphere where you can feel comfortable exploring our offerings.</p><h2>Why Choose Us?</h2><p>The Smoking Bee is not just another smoke shop; we’re a community hub for enthusiasts in La Mesa. We understand the importance of quality, which is why we meticulously curate our inventory. Plus, we frequently update our stock with new and exciting products, so there's always something fresh to discover!</p><p>Don’t miss out on exclusive deals and promotions – visit us today and see why The Smoking Bee is the go-to place for smokers in 91942 La Mesa.</p>`;
  const faqItems = [{"q": "What types of kratom do you offer?", "a": "We offer a wide variety of kratom strains, including red, green, and white varieties, all sourced for their quality."}, {"q": "Do you carry vape products?", "a": "Yes! We have the latest disposable vapes and a range of flavors to choose from."}, {"q": "Can I get advice on smoking accessories?", "a": "Absolutely! Our knowledgeable staff is here to help you find the right products for your needs."}, {"q": "Do you have rolling papers?", "a": "Yes, we carry an extensive selection of rolling papers, including organic and flavored options."}, {"q": "What are your store hours?", "a": "We’re open seven days a week! Check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 91942 | Top La Mesa Essentials", path: "/smoke-shop-91942-la-mesa" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/11.JPG" />
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
