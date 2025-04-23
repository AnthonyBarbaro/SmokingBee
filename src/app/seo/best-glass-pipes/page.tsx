import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Best Glass Pipes for Sale | The Smoking Bee",
    description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
    keywords: "best glass pipes, buy glass pipes, water bongs, premium glassware, smoke shop, head shop near me, smoke shop open now, 420 shop near me, cheap glass pipes near me",
    openGraph: {
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
      url: "https://thesmokingbee.com/best-glass-pipes",
      images: [{ url: "/images/about/14.JPG", alt: "Best Glass Pipes for Sale | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Glass Pipes for Sale | The Smoking Bee",
      description: "Shop handcrafted glass pipes and water bongs at The Smoking Bee. Experience the highest quality in smoking glassware.",
      images: ["/images/about/14.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/best-glass-pipes",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Best Glass Pipes for Sale | The Smoking Bee", "item": "https://thesmokingbee.com/best-glass-pipes"}]}`
    }
  };
}

export default async function best_glass_pipes_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover the Finest Glass Pipes at The Smoking Bee!`;
  const htmlContent = `<h2>Why Choose Glass Pipes?</h2><p>At The Smoking Bee, we understand that a quality smoking experience starts with the right tools. Our selection of handcrafted glass pipes is designed to enhance your enjoyment, providing smooth hits and vibrant flavors. Each piece is not only functional but also a work of art, showcasing the beauty and creativity of glassblowing.</p><h2>Our Unique Collection</h2><p>Whether you're seeking a simple, classic design or a more intricate, heady glass piece, we have something for everyone. Our pipes are made from high-quality materials, ensuring durability and a clean smoking experience. Explore options that reflect your personal style and preferences.</p><ul><li><strong>Handcrafted Quality:</strong> Every piece is crafted by skilled artisans.</li><li><strong>Diverse Styles:</strong> From minimalist to elaborate designs, find your ideal match.</li><li><strong>Accessories Available:</strong> Don't forget to check out our selection of unique accessories to complement your smoking experience.</li></ul><h2>Elevate Your Sessions</h2><p>In addition to glass pipes, The Smoking Bee offers a variety of water bongs and dab rigs. These pieces are designed for smooth inhalation and exceptional filtration, making them perfect for enjoying your favorite herbs and concentrates. Our products are selected for their quality and performance, ensuring you get the best out of every puff.</p><p>At The Smoking Bee, we are passionate about providing our customers with the highest quality glassware. Our knowledgeable staff is here to help you find the perfect piece for your needs. Visit us today and elevate your smoking sessions with our exquisite collection!</p>`;
  const faqItems = [{"q": "What types of glass pipes do you offer?", "a": "We offer a wide variety of handcrafted glass pipes, including simple designs and intricate heady art."}, {"q": "Are your glass pipes durable?", "a": "Yes, all our glass pipes are made from high-quality materials to ensure durability and longevity."}, {"q": "Do you sell accessories for smoking?", "a": "Absolutely! We have a range of unique accessories to enhance your smoking experience."}, {"q": "Can I find water bongs at The Smoking Bee?", "a": "Yes, we carry a selection of water bongs designed for smooth hits and exceptional filtration."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Best Glass Pipes for Sale | The Smoking Bee", path: "/best-glass-pipes" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/14.JPG" />
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
