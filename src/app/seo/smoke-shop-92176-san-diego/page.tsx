import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92176 | Normal Heights / Kensington",
    description: "Between Normal Heights and Kensington? The Smoking Bee (92176) has the best glass, vapes, and kratom for your needs.",
    keywords: "smoke shop 92176, normal heights, kensington, glass, vapes, kratom, head shop near me, smoke shop open now, 420 shop in 92176, buy vapes in 92176, best kratom shop, cheap glass pipes 92176",
    openGraph: {
      title: "Smoke Shop 92176 | Normal Heights / Kensington",
      description: "Between Normal Heights and Kensington? The Smoking Bee (92176) has the best glass, vapes, and kratom for your needs.",
      url: "https://thesmokingbee.com/smoke-shop-92176-san-diego",
      images: [{ url: "/images/about/12.JPG", alt: "Smoke Shop 92176 | Normal Heights / Kensington" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92176 | Normal Heights / Kensington",
      description: "Between Normal Heights and Kensington? The Smoking Bee (92176) has the best glass, vapes, and kratom for your needs.",
      images: ["/images/about/12.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92176-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92176 | Normal Heights / Kensington", "item": "https://thesmokingbee.com/smoke-shop-92176-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92176_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Normal Heights!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in 92176</h2><p>If you're located in the vibrant area between Normal Heights and Kensington, look no further than The Smoking Bee for all your smoking essentials. We pride ourselves on being the go-to smoke shop for the community, offering a wide array of products to suit your needs.</p><h2>Our Product Selection</h2><p>At The Smoking Bee, we understand that every customer has unique preferences. That's why we offer a diverse lineup of products, including:</p><ul><li><strong>Glass Pipes:</strong> Explore our collection of beautifully crafted glass pipes that are perfect for any occasion.</li><li><strong>Vapes:</strong> Whether you’re a beginner or a seasoned vaper, we have a variety of vapes and e-liquids to enhance your experience.</li><li><strong>Kratom:</strong> Our premium kratom selection provides natural alternatives for relaxation and wellness.</li></ul><p>We are committed to providing top-quality products and exceptional customer service. Our knowledgeable staff is always on hand to help you find exactly what you’re looking for, whether it’s broad-spectrum CBD or the latest delta-8 gummies.</p><h2>Why Choose Us?</h2><p>The Smoking Bee stands out not just for our products, but for our community-focused approach. We believe in creating a welcoming environment where everyone can feel comfortable exploring their options. Our shop is designed to be a space where you can learn, discover, and enjoy all things related to smoking and vaping.</p><p>Visit us today and see why so many in the 92176 area trust The Smoking Bee as their favorite smoke shop. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer glass pipes, vapes, kratom, CBD products, and more."}, {"q": "Is The Smoking Bee located in 92176?", "a": "Yes, we are conveniently located between Normal Heights and Kensington."}, {"q": "Do you provide recommendations for new users?", "a": "Absolutely! Our knowledgeable staff can guide you based on your preferences."}, {"q": "Are your products high quality?", "a": "Yes, we pride ourselves on offering only the best products in the market."}, {"q": "Can I find delta-8 gummies at your shop?", "a": "Yes, we carry a variety of delta-8 gummies for you to choose from."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92176 | Normal Heights / Kensington", path: "/smoke-shop-92176-san-diego" }
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
