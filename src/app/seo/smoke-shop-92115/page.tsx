import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92115 | Near SDSU",
    description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
    keywords: "smoke shop 92115, sdsu, glass bongs, vapes near me, delta-8, head shop near me, smoke shop open now, 420 shop in 92115, vape store near SDSU, delta 8 92115, buy vapes in 92115",
    openGraph: {
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      url: "https://thesmokingbee.com/smoke-shop-92115",
      images: [{ url: "/images/about/23.JPG", alt: "Smoke Shop 92115 | Near SDSU" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92115 | Near SDSU",
      description: "The Smoking Bee serves 92115 with top-tier glass bongs, vapes, and Delta-8. Perfect for SDSU students and locals.",
      images: ["/images/about/23.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92115",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92115 | Near SDSU", "item": "https://thesmokingbee.com/smoke-shop-92115"}]}`
    }
  };
}

export default async function smoke_shop_92115_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop Near SDSU!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located just minutes from San Diego State University, The Smoking Bee is your premier smoke shop in the 92115 area. We pride ourselves on offering a wide selection of top-tier glass bongs, vapes, and Delta-8 products that cater to both seasoned enthusiasts and curious beginners alike.</p><p>Our shop features a variety of high-quality bongs and pipes that are perfect for enhancing your smoking experience. We carefully curate our collection to ensure that every customer finds something they love. Whether you’re looking for sleek handheld pipes or intricate bongs, we have something for everyone.</p><h2>Explore Our Products</h2><ul><li><strong>Glass Bongs:</strong> Discover a range of styles and sizes to suit your preferences.</li><li><strong>Vape Flavors:</strong> Choose from an extensive selection of flavors to elevate your vaping experience.</li><li><strong>Delta-8 Edibles:</strong> Experience the benefits of Delta-8 with our delicious and convenient edibles.</li></ul><p>We also understand that convenience is key for our customers. That’s why we encourage you to grab a snack from nearby eateries and stop in to browse our new arrivals. Our friendly staff is always ready to assist you in finding the perfect product to meet your needs.</p><p>At The Smoking Bee, we are committed to providing excellent customer service and a welcoming atmosphere. Whether you're a local or a student at SDSU, we invite you to visit us and discover your new favorite smoke shop!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a variety of glass bongs, vapes, Delta-8 products, and more."}, {"q": "Is The Smoking Bee near SDSU?", "a": "Yes, we are just minutes away from San Diego State University!"}, {"q": "Can beginners find products suitable for them?", "a": "Absolutely! We have a wide range of products for both beginners and experienced users."}, {"q": "Do you have any special deals or promotions?", "a": "Yes, we frequently have promotions on various products. Be sure to check our shop!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92115 | Near SDSU", path: "/smoke-shop-92115" }
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
