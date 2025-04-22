import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92161 | North San Diego",
    description: "Find Delta-8, rolling papers, and hookah tobacco in 92161 at The Smoking Bee, your north SD smoke shop.",
    keywords: "smoke shop 92161, north san diego, delta-8, rolling papers, hookah tobacco, head shop near me, smoke shop open now, 420 shop in 92161, delta 8 92161, rolling paper brands, hookah flavors 92161",
    openGraph: {
      title: "Smoke Shop 92161 | North San Diego",
      description: "Find Delta-8, rolling papers, and hookah tobacco in 92161 at The Smoking Bee, your north SD smoke shop.",
      url: "https://thesmokingbee.com/smoke-shop-92161-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92161 | North San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92161 | North San Diego",
      description: "Find Delta-8, rolling papers, and hookah tobacco in 92161 at The Smoking Bee, your north SD smoke shop.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92161 | North San Diego", "item": "https://thesmokingbee.com/smoke-shop-92161-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92161_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in North San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92161 area of North San Diego, look no further than The Smoking Bee for all your smoking needs. We pride ourselves on offering a wide selection of high-quality products, including <strong>Delta-8</strong>, rolling papers, and hookah tobacco.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That's why we stock a diverse range of products to cater to all tastes. Whether you enjoy the mellow effects of Delta-8 or prefer the classic experience of traditional tobacco, we have something for you.</p><ul><li><strong>Delta-8:</strong> Experience the unique effects of Delta-8 with our top-tier selection.</li><li><strong>Rolling Papers:</strong> Choose from a variety of specialty papers to enhance your smoking experience.</li><li><strong>Hookah Supplies:</strong> Enjoy your favorite flavors with our premium hookah tobacco.</li></ul><h2>Expert Staff at Your Service</h2><p>Our friendly and knowledgeable staff are always on hand to assist you. Whether you have questions about our products or want to know about the latest arrivals and special promotions, we're here to help you find exactly what you need.</p><h2>Your Local Smoke Shop</h2><p>As a local smoke shop, The Smoking Bee is committed to providing a superior experience for our customers in North San Diego. We believe in connecting each smoker with the perfect products to suit their individual tastes, whether they prefer something mild or bold. Stop by and see what we have to offer!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer Delta-8, rolling papers, hookah tobacco, and more!"}, {"q": "Are your staff knowledgeable about smoking products?", "a": "Yes, our staff is friendly and well-informed to assist you."}, {"q": "Do you have any special promotions?", "a": "Yes, we frequently have promotions on various products, so check back often!"}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open daily to serve our customers in the 92161 area."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92161 | North San Diego", path: "/smoke-shop-92161-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/16.JPG" />
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
