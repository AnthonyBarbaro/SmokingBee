import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
    description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
    keywords: "smoke shop 92188, sorrento mesa, e-liquids, hookah flavors, best smoke shop, head shop near me, smoke shop open now, 420 shop in 92188, buy vapes in 92188",
    openGraph: {
      title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
      description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
      url: "https://thesmokingbee.com/smoke-shop-92188-san-diego",
      images: [{ url: "/images/about/19.JPG", alt: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm",
      description: "Sorrento Mesa (92188) trusts The Smoking Bee for e-liquids, hookah flavors, and more. Elevate your session.",
      images: ["/images/about/19.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92188-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92188 | Sorrento Mesa / Qualcomm", "item": "https://thesmokingbee.com/smoke-shop-92188-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92188_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Perfect Smoke Experience at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Sorrento Mesa!</h2><p>Nestled in the vibrant community of Sorrento Mesa (92188) near Qualcomm, The Smoking Bee is your go-to smoke shop for all things vaping and hookah. Our extensive selection includes crowd-favorite e-liquids, flavorful hookah blends, and a variety of smoking accessories designed to elevate your session. Whether you're a seasoned smoker or just starting out, we have something for everyone.</p><h2>Why Choose Us?</h2><ul><li><strong>Diverse Selection:</strong> From premium e-liquids to exotic hookah flavors, we pride ourselves on offering a wide range of products to suit every palate.</li><li><strong>Expert Staff:</strong> Our knowledgeable team is here to assist you with everything from mod upgrades to coil replacements, ensuring you get the best out of your smoking experience.</li><li><strong>Convenient Location:</strong> Located near Qualcomm, we are easily accessible for busy professionals looking to grab what they need on the go.</li></ul><p>At The Smoking Bee, we understand the importance of a smooth smoke session. That’s why we also stock a selection of kratom varieties, perfect for those looking to explore new experiences. Our staff is always ready to guide you towards finding the right product to match your needs.</p><h2>Join Our Community</h2><p>We believe in creating a welcoming atmosphere for all our customers. When you visit The Smoking Bee, you're not just a customer; you’re part of our community. We regularly host events and tastings, giving you the chance to meet fellow enthusiasts and discover new products. Don't miss out on the latest trends and exclusive offers!</p><p>So, whether you're looking to stock up on your favorite e-liquids, try a new hookah flavor, or get expert advice on smoking accessories, The Smoking Bee in Sorrento Mesa is here for you. Visit us today and elevate your smoke experience!</p>`;
  const faqItems = [{"q": "What types of e-liquids do you offer?", "a": "We offer a wide range of e-liquids, including popular brands and unique flavors to suit every taste."}, {"q": "Can you help with mod upgrades?", "a": "Absolutely! Our staff is knowledgeable about various mods and can assist you in finding the perfect upgrade."}, {"q": "Do you carry kratom products?", "a": "Yes, we have a selection of kratom varieties available for those interested in exploring this option."}, {"q": "Is The Smoking Bee open on weekends?", "a": "Yes, we are open on weekends to serve your smoking needs!"}, {"q": "Do you host any events?", "a": "Yes, we regularly host events and tastings; check our website for upcoming events!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92188 | Sorrento Mesa / Qualcomm", path: "/smoke-shop-92188-san-diego" }
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
