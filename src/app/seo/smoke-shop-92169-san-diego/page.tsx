import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92169 | Pacific Beach",
    description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
    keywords: "smoke shop 92169, pacific beach, disposable vapes, glass accessories, hookah, head shop near me, smoke shop open now, 420 shop in 92169, buy vapes in 92169, cheap glass pipes 92169, hookah flavors 92169",
    openGraph: {
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
      url: "https://thesmokingbee.com/smoke-shop-92169-san-diego",
      images: [{ url: "/images/about/23.JPG", alt: "Smoke Shop 92169 | Pacific Beach" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92169 | Pacific Beach",
      description: "PB (92169) locals rely on The Smoking Bee for disposable vapes, glass accessories, and premium hookah supplies.",
      images: ["/images/about/23.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92169 | Pacific Beach", "item": "https://thesmokingbee.com/smoke-shop-92169-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92169_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in Pacific Beach!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Living in Pacific Beach (92169) has its perks, and when it comes to enjoying your favorite smoking essentials, The Smoking Bee is your best bet! We provide an extensive range of high-quality products that cater to all your smoking needs. Whether you’re a fan of disposable vapes, glass accessories, or premium hookah supplies, we’ve got you covered.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we pride ourselves on offering a diverse selection of products. Here’s a glimpse of what you can find in our store:</p><ul><li><strong>Disposable Vapes:</strong> Explore our collection of the latest disposable vapes, featuring a variety of flavors that will tantalize your taste buds.</li><li><strong>Glass Accessories:</strong> From pipes to bongs, our glass gear is not only stylish but also functional, ensuring you enjoy your experience to the fullest.</li><li><strong>Hookah Supplies:</strong> For hookah lovers, we offer premium tobacco and accessories that will elevate your sessions and provide an unforgettable experience.</li></ul><h2>Why Choose Us?</h2><p>What sets The Smoking Bee apart from other smoke shops in the area? It’s simple! We focus on quality and customer satisfaction. Our knowledgeable staff is always ready to help you find exactly what you need and answer any questions you may have. Plus, we make it a point to stay updated with the latest trends and products, ensuring our shelves are stocked with the best in the market.</p><p>After a day at the beach, stop by The Smoking Bee to refresh your collection or discover something new. We’re conveniently located, making it easy for you to swing by and grab your essentials. Join your fellow PB locals and experience the best smoke shop in town!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer disposable vapes, glass accessories, and premium hookah supplies."}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open daily to serve our Pacific Beach community."}, {"q": "Do you carry flavored vapes?", "a": "Absolutely! We have a wide selection of fruity and unique vape flavors."}, {"q": "Can I find hookah tobacco at your shop?", "a": "Yes, we offer a variety of premium hookah tobacco options."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in Pacific Beach, making it easy to visit after a day at the beach."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92169 | Pacific Beach", path: "/smoke-shop-92169-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/23.JPG" />
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
