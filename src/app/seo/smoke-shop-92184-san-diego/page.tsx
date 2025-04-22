import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
    description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
    keywords: "smoke shop 92184, serra mesa, vaping mods, kratom capsules, smoking shop, head shop near me, smoke shop open now, 420 shop in 92184, buy vapes in 92184, best kratom shop",
    openGraph: {
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92184-san-diego",
      images: [{ url: "/images/about/17.JPG", alt: "Smoke Shop 92184 | Serra Mesa / Mission Heights" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92184 | Serra Mesa / Mission Heights",
      description: "Serra Mesa smokers (92184) get vaping mods, kratom capsules, and more from The Smoking Bee.",
      images: ["/images/about/17.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92184 | Serra Mesa / Mission Heights", "item": "https://thesmokingbee.com/smoke-shop-92184-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92184_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Hub for Quality Smoking Essentials!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Serra Mesa!</h2><p>If you’re in the 92184 area, look no further than The Smoking Bee for all your smoking and vaping needs. Our shop is dedicated to providing a wide variety of products that cater to both novice and seasoned smokers alike. From advanced vaping mods to high-quality kratom capsules, we have everything you need to enhance your smoking experience.</p><h2>Explore Our Wide Range of Products</h2><ul><li><strong>Advanced Vaping Mods:</strong> Whether you're looking for powerful devices that produce intense vapor or simpler, user-friendly options, we’ve got you covered.</li><li><strong>E-Liquids:</strong> Pair your new mod with our selection of delicious e-liquids to find the perfect flavor for you.</li><li><strong>Kratom Capsules:</strong> Discover the benefits of kratom with our high-quality capsules, perfect for those looking for natural alternatives.</li><li><strong>Delta-8 Edibles:</strong> Check out our top picks for delta-8 edibles for a complete and satisfying experience.</li></ul><p>At The Smoking Bee, we pride ourselves on our knowledgeable staff who are always ready to help you find exactly what you need. Whether you’re new to the vaping world or a seasoned expert, our team is here to answer any questions you may have and guide you in the right direction.</p><h2>Why Choose The Smoking Bee?</h2><p>Our commitment to quality and customer satisfaction sets us apart from other smoke shops in the area. We source our products from reputable manufacturers to ensure you receive the best. Plus, our friendly atmosphere makes shopping with us a pleasant experience. Stop by today and discover why we are Serra Mesa’s favorite smoke shop!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of products including vaping mods, e-liquids, kratom capsules, and delta-8 edibles."}, {"q": "Are your staff knowledgeable about smoking products?", "a": "Yes, our staff is well-trained and ready to assist you with any questions or product recommendations."}, {"q": "Do you have any promotions or discounts?", "a": "We frequently offer promotions, so make sure to check our website or visit the shop for the latest deals!"}, {"q": "Is there parking available at your location?", "a": "Yes, we have convenient parking available for our customers."}, {"q": "Can I find quality e-liquids at your shop?", "a": "Absolutely! We carry a variety of e-liquids in different flavors to satisfy all preferences."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92184 | Serra Mesa / Mission Heights", path: "/smoke-shop-92184-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/17.JPG" />
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
