import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92159 | Allied Gardens",
    description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
    keywords: "smoke shop 92159, allied gardens, vapes, glass bongs, rolling trays, head shop near me, smoke shop open now, 420 shop in 92159, buy vapes in 92159, cheap glass pipes 92159",
    openGraph: {
      title: "Smoke Shop 92159 | Allied Gardens",
      description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
      url: "https://thesmokingbee.com/smoke-shop-92159-san-diego",
      images: [{ url: "/images/about/18.JPG", alt: "Smoke Shop 92159 | Allied Gardens" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92159 | Allied Gardens",
      description: "Allied Gardens (92159) count on The Smoking Bee for vapes, glass bongs, and quality rolling trays.",
      images: ["/images/about/18.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92159-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92159 | Allied Gardens", "item": "https://thesmokingbee.com/smoke-shop-92159-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92159_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in Allied Gardens!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92159 area, The Smoking Bee is your premier destination for all things smoke-related. We pride ourselves on offering a wide range of products, from sturdy bongs to flavorful vapes, ensuring that you find exactly what you need for a perfect session.</p><h2>Quality Products for Every Enthusiast</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That's why we offer:</p><ul><li><strong>Durable Glass Bongs:</strong> Our bongs are crafted to last and provide the ultimate smoking experience.</li><li><strong>Vapes:</strong> Choose from a variety of flavors and styles to suit your taste.</li><li><strong>Rolling Trays:</strong> Keep your space tidy with our quality rolling trays designed for convenience.</li></ul><p>In addition to our popular products, we also have top-shelf kratom that can elevate your experience. If you’re looking for something more advanced, we stock the latest vape mods to enhance your vaping journey.</p><h2>Visit Us for Exclusive Deals!</h2><p>We pride ourselves on keeping our inventory fresh and exciting, with new shipments arriving regularly. Plus, be sure to take advantage of our rotating discounts, which offer great savings on your favorite items. There’s always a reason to stop by and see what’s new at The Smoking Bee!</p><p>Whether you're a seasoned smoker or just starting your journey, our friendly staff is here to help you find the right products and answer any questions you may have. Join our community of smoke enthusiasts in Allied Gardens and discover why The Smoking Bee is the best smoke shop in 92159!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide range of products including bongs, vapes, rolling trays, and kratom."}, {"q": "Are there any discounts available?", "a": "Yes! We have rotating discounts and special offers, so be sure to check back often."}, {"q": "Do you have a loyalty program?", "a": "We are working on a loyalty program to reward our frequent customers—stay tuned!"}, {"q": "What are your store hours?", "a": "We are open daily from 10 AM to 8 PM to serve you better."}, {"q": "Can I find high-end vape mods at your shop?", "a": "Absolutely! We stock the latest advanced vape mods for an enhanced vaping experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92159 | Allied Gardens", path: "/smoke-shop-92159-san-diego" }
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
