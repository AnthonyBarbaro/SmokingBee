import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92173 | San Ysidro",
    description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
    keywords: "smoke shop 92173, san ysidro, vape pens, delta-8, smoking shop, head shop near me, smoke shop open now, 420 shop in 92173, buy vapes in 92173, delta 8 92173",
    openGraph: {
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      url: "https://thesmokingbee.com/smoke-shop-92173-san-diego",
      images: [{ url: "/images/about/13.JPG", alt: "Smoke Shop 92173 | San Ysidro" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92173 | San Ysidro",
      description: "San Ysidro (92173) trusts The Smoking Bee for top-quality vape pens, Delta-8, and more. Discover premium products.",
      images: ["/images/about/13.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92173 | San Ysidro", "item": "https://thesmokingbee.com/smoke-shop-92173-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92173_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in San Ysidro!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in San Ysidro</h2><p>At The Smoking Bee, we are proud to serve the 92173 community with an exceptional selection of vape pens, Delta-8 products, and more. Our commitment to quality means you can trust us to provide only the best items that enhance your smoking experience.</p><h2>Explore Our Unique Offerings</h2><p>We offer a hand-picked assortment of products tailored to meet your preferences. Whether you're looking for flavorful vape pods or potent Delta-8 cartridges, we have something that fits your style. Our knowledgeable team is always available to help you find the perfect match for your needs.</p><ul><li><strong>Vape Pens:</strong> Discover a variety of vape pens designed for every user, from beginners to experienced vapers.</li><li><strong>Delta-8 Products:</strong> Experience the smooth and enjoyable effects of our top-quality Delta-8 items.</li><li><strong>Glass Pieces:</strong> Check out our collection of stylish glass pieces that elevate your smoking experience.</li><li><strong>Rolling Papers:</strong> We stock the best rolling papers to ensure you have everything needed for a great smoke.</li></ul><h2>Why Choose Us?</h2><p>At The Smoking Bee, our goal is to provide a friendly and informative shopping experience. We understand the unique preferences of our San Ysidro customers, and our staff is eager to assist you in finding the best products. Whether you need advice on new items or recommendations for accessories, we're here to help!</p><p>Come visit us today and discover why The Smoking Bee is the go-to smoke shop in San Ysidro. We promise you'll leave with a smile and the perfect products for your needs.</p>`;
  const faqItems = [{"q": "What type of products do you offer?", "a": "We offer a variety of vape pens, Delta-8 products, glass pieces, and rolling papers."}, {"q": "Is your staff knowledgeable about the products?", "a": "Absolutely! Our friendly team is here to help you choose the right products for your needs."}, {"q": "Do you have any new arrivals?", "a": "Yes, we frequently update our inventory with the latest and greatest products in the market."}, {"q": "Can I get recommendations for vape pens?", "a": "Definitely! Our staff can guide you in selecting the perfect vape pen based on your preferences."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in San Ysidro, making it easy for locals to visit us."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92173 | San Ysidro", path: "/smoke-shop-92173-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/13.JPG" />
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
