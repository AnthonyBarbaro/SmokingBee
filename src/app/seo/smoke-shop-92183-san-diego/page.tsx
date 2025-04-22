import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92183 | Southeastern Encanto",
    description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
    keywords: "smoke shop 92183, encanto, hookah flavors, delta-8, glass pipes, head shop near me, smoke shop open now, 420 shop in 92183, delta 8 92183, cheap glass pipes 92183",
    openGraph: {
      title: "Smoke Shop 92183 | Southeastern Encanto",
      description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
      url: "https://thesmokingbee.com/smoke-shop-92183-san-diego",
      images: [{ url: "/images/about/4.JPG", alt: "Smoke Shop 92183 | Southeastern Encanto" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92183 | Southeastern Encanto",
      description: "Near Southeastern Encanto (92183)? The Smoking Bee has top hookah flavors, Delta-8, and glass pipes.",
      images: ["/images/about/4.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92183 | Southeastern Encanto", "item": "https://thesmokingbee.com/smoke-shop-92183-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92183_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Southeastern Encanto!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you're in the Southeastern Encanto area (92183), look no further than The Smoking Bee for all your smoking needs. We pride ourselves on offering a diverse selection of high-quality products to enhance your experience. Whether you're a seasoned smoker or new to the scene, our friendly staff is here to help you find exactly what you need.</p><h2>Our Offerings</h2><ul><li><strong>Glass Pipes:</strong> We have an extensive collection of glass pipes that cater to various styles and preferences. From classic designs to unique pieces, you're sure to find something that speaks to you.</li><li><strong>Hookah Flavors:</strong> Indulge in our range of flavorful hookah options. We stock a variety of blends to suit every taste, ensuring your hookah sessions are enjoyable and memorable.</li><li><strong>Delta-8 Products:</strong> Explore our potent Delta-8 offerings for a smooth and relaxing experience. Perfect for those looking to unwind after a long day.</li><li><strong>E-liquids:</strong> Don't miss our new e-liquid lines. From fruity to minty, there's a flavor for everyone!</li><li><strong>Rolling Papers:</strong> We carry classic rolling paper brands for your convenience, ensuring you have everything you need for your daily rituals.</li></ul><h2>Why Choose Us?</h2><p>At The Smoking Bee, we are more than just a smoke shop; we are a part of the Encanto community. Our knowledgeable staff loves sharing recommendations and helping customers discover fresh and exciting options. We believe in providing top-notch customer service and ensuring that your visit is enjoyable and fulfilling.</p><p>Visit us today to see what makes The Smoking Bee the go-to smoke shop in Southeastern Encanto. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a variety of products including glass pipes, hookah flavors, Delta-8 products, e-liquids, and rolling papers."}, {"q": "Is The Smoking Bee located near Southeastern Encanto?", "a": "Yes, we are conveniently located in the Southeastern Encanto area (92183)."}, {"q": "Can your staff help with product recommendations?", "a": "Absolutely! Our friendly staff is always happy to provide recommendations based on your preferences."}, {"q": "Do you have new products regularly?", "a": "Yes, we frequently update our inventory with new and exciting products."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92183 | Southeastern Encanto", path: "/smoke-shop-92183-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/4.JPG" />
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
