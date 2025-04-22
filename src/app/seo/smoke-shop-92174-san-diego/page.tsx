import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92174 | Southeastern SD",
    description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
    keywords: "smoke shop 92174, southeastern san diego, disposable vapes, glass bongs, head shop near me, smoke shop open now, 420 shop in 92174, buy vapes in 92174, cheap glass pipes 92174",
    openGraph: {
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92174-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "Smoke Shop 92174 | Southeastern SD" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92174 | Southeastern SD",
      description: "Southeastern SD (92174) finds disposable vapes, glass bongs, and premium smoking gear at The Smoking Bee.",
      images: ["/images/about/11.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92174-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92174 | Southeastern SD", "item": "https://thesmokingbee.com/smoke-shop-92174-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92174_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Southeastern SD!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Southeastern San Diego, our smoke shop is your one-stop destination for all your smoking needs. At The Smoking Bee, we pride ourselves on offering an extensive range of products, from top-quality disposable vapes to stunning glass bongs that cater to every taste.</p><h2>Our Product Range</h2><p>Whether you're looking for something portable for on-the-go use or a statement piece for your home, we have you covered. Our selection includes:</p><ul><li>Premium disposable vapes</li><li>Intricate glass bongs</li><li>Delta-8 products</li><li>Unique rolling trays</li></ul><p>Our knowledgeable staff is always ready to assist you in choosing the perfect items that fit your lifestyle. If you're curious about delta-8 or need help picking out the latest rolling tray art, just ask! We are here to ensure you have a satisfying shopping experience.</p><h2>Quality You Can Trust</h2><p>At The Smoking Bee, we focus on providing quality brands that you can rely on. We understand that our customers deserve the best, which is why we carefully curate our inventory to feature only the finest products available. You’ll never leave disappointed!</p><p>Visit us today and discover the perfect smoking accessories tailored just for you. Experience the friendly atmosphere and expert advice that make The Smoking Bee stand out from the rest!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of products including disposable vapes, glass bongs, delta-8 items, and unique rolling trays."}, {"q": "Is The Smoking Bee knowledgeable about their products?", "a": "Absolutely! Our staff is well-trained and ready to help you find the best products for your needs."}, {"q": "Do you have any special deals?", "a": "Yes, we often have promotions and discounts. Be sure to check our store or website for the latest offers!"}, {"q": "Can I find quality brands at your shop?", "a": "Yes, we focus on quality brands to ensure you get the best smoking experience possible."}, {"q": "What are your store hours?", "a": "We are open seven days a week. Please check our website for specific hours of operation."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92174 | Southeastern SD", path: "/smoke-shop-92174-san-diego" }
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
