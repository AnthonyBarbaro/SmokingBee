import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92134 | Near Naval Base",
    description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
    keywords: "smoke shop 92134, naval base, vapes, rolling papers, glass pipes, head shop near me, smoke shop open now, 420 shop in 92134, buy vapes in 92134, rolling paper brands, cheap glass pipes 92134",
    openGraph: {
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92134-san-diego",
      images: [{ url: "/images/about/9.JPG", alt: "Smoke Shop 92134 | Near Naval Base" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92134 | Near Naval Base",
      description: "Serving 92134 near the naval base with premium vapes, glass pipes, and rolling papers at The Smoking Bee.",
      images: ["/images/about/9.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92134-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92134 | Near Naval Base", "item": "https://thesmokingbee.com/smoke-shop-92134-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92134_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop Near Naval Base 92134!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you’re in the 92134 area, especially near the naval base, you’ve found your go-to spot for all things smoke-related! At The Smoking Bee, we pride ourselves on offering a wide variety of premium products tailored to meet your needs, whether you’re active duty or a local resident.</p><h2>Our Product Range</h2><ul><li><strong>Vapes:</strong> Discover an extensive selection of high-quality vapes perfect for any preference.</li><li><strong>Glass Pipes:</strong> Choose from our beautiful collection of glass pipes, designed for both functionality and aesthetics.</li><li><strong>Rolling Papers:</strong> We carry top-tier rolling papers to enhance your smoking experience.</li><li><strong>Delta-8 Gummies:</strong> Indulge in our delicious Delta-8 gummies, perfect for a relaxing treat.</li><li><strong>Portable Devices:</strong> We offer discreet and portable smoking devices for those on the go.</li></ul><p>At The Smoking Bee, we understand the importance of quality and customer satisfaction. Our knowledgeable staff is here to assist you in finding the right product that suits your personal preferences. Whether you’re a seasoned smoker or just starting out, we’re dedicated to providing you with the best products and service.</p><h2>Visit Us Today!</h2><p>Conveniently located near the naval base, The Smoking Bee is your friendly neighborhood smoke shop. Stop by today to explore our offerings and experience the difference of shopping with a local business that cares about its community. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a range of vapes, glass pipes, rolling papers, Delta-8 gummies, and portable devices."}, {"q": "Is The Smoking Bee close to the naval base?", "a": "Yes, we are conveniently located near the naval base in the 92134 area."}, {"q": "Do you have staff to help me choose products?", "a": "Absolutely! Our knowledgeable staff is here to assist you in finding the perfect product for your needs."}, {"q": "Are there any special deals for military personnel?", "a": "We often have special promotions, so be sure to ask about discounts for military personnel when you visit!"}, {"q": "What are your store hours?", "a": "We are open daily, but please check our website for specific hours of operation."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92134 | Near Naval Base", path: "/smoke-shop-92134-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/9.JPG" />
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
