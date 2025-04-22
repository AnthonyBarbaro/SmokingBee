import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92163 | University Heights / Hillcrest",
    description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
    keywords: "smoke shop 92163, hillcrest, delta-8, rolling papers, vape gear, head shop near me, smoke shop open now, 420 shop in 92163, delta 8 92163, rolling paper brands, buy vapes in 92163",
    openGraph: {
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92163-san-diego",
      images: [{ url: "/images/about/4.JPG", alt: "Smoke Shop 92163 | University Heights / Hillcrest" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92163 | University Heights / Hillcrest",
      description: "Serving 92163 with premium rolling papers, Delta-8, and vape gear in Hillcrest and University Heights.",
      images: ["/images/about/4.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92163-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92163 | University Heights / Hillcrest", "item": "https://thesmokingbee.com/smoke-shop-92163-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92163_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Premium Smoke Essentials at The Smoking Bee!`;
  const htmlContent = `<h2>Your Local Smoke Shop in 92163</h2><p>Welcome to The Smoking Bee, your go-to smoke shop serving the vibrant neighborhoods of University Heights and Hillcrest! We are proud to supply the 92163 area with the latest Delta-8 products, high-quality rolling papers, and top-tier vape accessories. Whether you’re a seasoned smoker or just starting, we have everything you need to elevate your experience.</p><h2>Our Products</h2><ul><li><strong>Delta-8 Products:</strong> Explore our diverse range of Delta-8 options, known for their unique effects and pleasant experiences.</li><li><strong>Rolling Papers:</strong> Choose from a variety of premium rolling papers that suit your style and enhance your smoking ritual.</li><li><strong>Vape Gear:</strong> Discover chic vape devices and a wide selection of e-liquids that will keep your sessions exciting.</li><li><strong>Glass Pieces:</strong> Check out our collection of stylish glass pieces that not only look great but also provide an exceptional smoking experience.</li></ul><p>At The Smoking Bee, we believe that shopping for smoking essentials should be enjoyable. Our friendly and knowledgeable staff is here to assist you in finding the perfect products tailored to your preferences. You can browse our extensive selection at your own pace, learn about new items, and even ask questions to enhance your smoking habits.</p><h2>Why Choose Us?</h2><p>We’re more than just a smoke shop; we’re a community hub for enthusiasts in the area. Our commitment to quality and customer satisfaction sets us apart from the rest. We continuously update our inventory to ensure you have access to the latest trends and innovations in the smoking world.</p><p>Whether you’re looking for a gift for a fellow smoker or want to treat yourself, The Smoking Bee has something special for everyone. Visit us today and experience the difference!</p>`;
  const faqItems = [{"q": "What products do you carry?", "a": "We carry Delta-8 products, rolling papers, vape gear, and glass pieces."}, {"q": "Is The Smoking Bee a friendly environment?", "a": "Absolutely! Our staff is knowledgeable and ready to help you find what you need."}, {"q": "Where are you located?", "a": "We are located in the heart of University Heights and Hillcrest."}, {"q": "Do you offer any discounts or promotions?", "a": "Yes, we frequently have promotions! Check our website or visit us for the latest deals."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92163 | University Heights / Hillcrest", path: "/smoke-shop-92163-san-diego" }
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
