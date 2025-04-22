import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92128 | Carmel Mountain",
    description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
    keywords: "smoke shop 92128, carmel mountain, glass bongs, rolling papers, accessories, head shop near me, smoke shop open now, 420 shop in 92128, rolling paper brands, cheap glass pipes 92128, delta 8 92128",
    openGraph: {
      title: "Smoke Shop 92128 | Carmel Mountain",
      description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92128-san-diego",
      images: [{ url: "/images/about/10.JPG", alt: "Smoke Shop 92128 | Carmel Mountain" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92128 | Carmel Mountain",
      description: "In 92128 near Carmel Mountain? Shop rolling papers, glass bongs, and more at The Smoking Bee.",
      images: ["/images/about/10.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92128 | Carmel Mountain", "item": "https://thesmokingbee.com/smoke-shop-92128-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92128_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your One-Stop Smoke Shop in Carmel Mountain!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>If you're in the 92128 area near Carmel Mountain, look no further than The Smoking Bee for all your smoking needs. Our smoke shop is stocked with a vast selection of products tailored to both beginners and seasoned enthusiasts alike. Whether you're searching for high-quality rolling papers or stunning glass bongs, we have something for everyone!</p><h2>Explore Our Products</h2><ul><li><strong>Rolling Papers:</strong> Choose from a variety of brands and flavors to enhance your smoking experience.</li><li><strong>Glass Bongs:</strong> Our collection features unique designs that ensure smooth hits and stylish aesthetics.</li><li><strong>Delta-8 Edibles:</strong> Ask about our selection of Delta-8 products for a different kind of relaxation.</li><li><strong>Stash Boxes:</strong> Keep your accessories organized and discreet with our stylish stash boxes.</li></ul><p>At The Smoking Bee, we pride ourselves on providing personalized advice to cater to your needs. Our friendly and knowledgeable staff is here to assist you, no matter if you're a novice looking for guidance or an experienced smoker searching for the latest trends. We understand that the right accessories can enhance your experience, and we’re dedicated to helping you find the perfect fit.</p><h2>Why Choose Us?</h2><p>Convenience is key, and being located in the heart of Carmel Mountain makes us easily accessible. Our smoke shop is designed to create a welcoming atmosphere where you can browse our offerings at your own pace. Plus, we frequently update our inventory to ensure you have access to the latest and greatest in smoking gear.</p><p>Don’t forget to check out our special promotions and events! We love to engage with our community and celebrate the culture surrounding smoking. Visit us today and discover why The Smoking Bee is the go-to smoke shop in the 92128 area!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of products including rolling papers, glass bongs, Delta-8 edibles, and stash boxes."}, {"q": "Is The Smoking Bee suitable for beginners?", "a": "Absolutely! Our friendly staff provides personalized advice for both beginners and experienced smokers."}, {"q": "Do you have any special promotions?", "a": "Yes! We frequently have special promotions and events, so be sure to check our store or website."}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in the Carmel Mountain area, making us easily accessible for residents."}, {"q": "Can I find unique accessories at your shop?", "a": "Yes! We have a variety of unique accessories to enhance your smoking experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92128 | Carmel Mountain", path: "/smoke-shop-92128-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/10.JPG" />
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
