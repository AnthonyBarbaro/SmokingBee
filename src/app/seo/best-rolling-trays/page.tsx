import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Rolling Trays for Sale | The Smoking Bee",
    description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
    keywords: "best rolling trays, rolling trays for sale, premium smoking accessories, head shop, head shop near me, smoke shop open now, 420 shop near me",
    openGraph: {
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
      url: "https://thesmokingbee.com/best-rolling-trays",
      images: [{ url: "/images/about/19.JPG", alt: "Best Rolling Trays for Sale | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Rolling Trays for Sale | The Smoking Bee",
      description: "Elevate your rolling game with premium trays from The Smoking Bee. Shop top-quality rolling trays and accessories.",
      images: ["/images/about/19.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/best-rolling-trays",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Rolling Trays for Sale | The Smoking Bee", "item": "https://thesmokingbee.com/best-rolling-trays"}]}`
    }
  };
}

export default async function best_rolling_trays_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Perfect Rolling Tray Today!`;
  const htmlContent = `<h2>Elevate Your Rolling Experience</h2><p>At The Smoking Bee, we believe that rolling should be an enjoyable and effortless experience. That’s why we offer a wide selection of the best rolling trays available. Our trays are designed not only for functionality but also to enhance your personal style. Whether you're a casual user or a seasoned connoisseur, we have something for everyone.</p><h2>Stylish and Functional Designs</h2><p>From minimalist metal trays that provide a sleek look to vibrant art prints that express your personality, our collection caters to all tastes. Here are a few reasons why our rolling trays stand out:</p><ul><li><strong>Durability:</strong> Made from high-quality materials, our trays are built to last.</li><li><strong>Variety:</strong> Choose from a range of sizes, colors, and designs to fit your needs.</li><li><strong>Easy to Clean:</strong> Our trays are designed for easy maintenance, ensuring a hassle-free experience.</li></ul><p>Keeping your herb organized and your surfaces tidy is essential for a smooth rolling process. With The Smoking Bee's rolling trays, you can enjoy a cleaner and more efficient setup. Each tray is crafted with attention to detail, making it a perfect addition to your smoking accessories.</p><h2>Shop with Us</h2><p>Ready to elevate your rolling game? Explore our collection of premium rolling trays for sale at The Smoking Bee. We’re committed to providing you with top-quality products that enhance your smoking experience. Visit our website today and find the perfect tray that suits your style!</p>`;
  const faqItems = [{"q": "What materials are your rolling trays made from?", "a": "Our rolling trays are made from high-quality metal and durable plastic, ensuring longevity and ease of use."}, {"q": "Do you offer different sizes of rolling trays?", "a": "Yes, we have a variety of sizes to accommodate different preferences and rolling styles."}, {"q": "How do I clean my rolling tray?", "a": "Cleaning is simple! Just use a damp cloth or paper towel to wipe down the surface, and for tougher stains, a gentle cleaner can be used."}, {"q": "Are your rolling trays portable?", "a": "Absolutely! Many of our trays are lightweight and designed for easy transport, making them perfect for on-the-go use."}, {"q": "Can I find unique designs at The Smoking Bee?", "a": "Yes! We pride ourselves on offering a wide range of unique and artistic designs to fit your personal style."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Rolling Trays for Sale | The Smoking Bee", path: "/best-rolling-trays" }
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
