import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92194 | East Mira Mesa",
    description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
    keywords: "smoke shop 92194, east mira mesa, disposable vapes, rolling papers, kratom, head shop near me, smoke shop open now, 420 shop in 92194, buy vapes in 92194, rolling paper brands, best kratom shop",
    openGraph: {
      title: "Smoke Shop 92194 | East Mira Mesa",
      description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92194-san-diego",
      images: [{ url: "/images/about/3.JPG", alt: "Smoke Shop 92194 | East Mira Mesa" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92194 | East Mira Mesa",
      description: "East Mira Mesa’s top source for disposable vapes, rolling papers, and quality kratom at The Smoking Bee.",
      images: ["/images/about/3.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92194-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92194 | East Mira Mesa", "item": "https://thesmokingbee.com/smoke-shop-92194-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92194_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Your Perfect Puff at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in East Mira Mesa</h2><p>At The Smoking Bee, we are proud to be East Mira Mesa’s top source for all your smoking needs. Whether you are a seasoned user or just starting your journey, our shop offers a diverse selection of disposable vapes, premium rolling papers, and high-quality kratom. We are committed to providing you with a comfortable and inviting shopping experience.</p><h2>Our Products</h2><ul><li><strong>Disposable Vapes:</strong> Choose from a variety of flavorful options that suit your preferences.</li><li><strong>Rolling Papers:</strong> We stock top brands that ensure a smooth and enjoyable smoke.</li><li><strong>Kratom:</strong> Our kratom is carefully sourced to provide you with the best quality available.</li></ul><p>If you're looking to experiment with delta-8 or dab rigs, our knowledgeable staff is here to help. We can recommend products that fit your taste and lifestyle. Our goal is to create a no-pressure environment that encourages exploration and discovery.</p><h2>Visit Us Today!</h2><p>Come visit The Smoking Bee in East Mira Mesa for a unique shopping experience. Whether you need supplies for a gathering or just want to treat yourself, we have something for everyone. Let us help you find exactly what you need!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer disposable vapes, rolling papers, and quality kratom."}, {"q": "Can I get recommendations for delta-8 products?", "a": "Absolutely! Our staff can help you find the perfect delta-8 options."}, {"q": "Is The Smoking Bee a friendly place for beginners?", "a": "Yes! We pride ourselves on creating a no-pressure environment for all customers."}, {"q": "Do you carry different brands of rolling papers?", "a": "Yes, we stock a variety of top rolling paper brands."}, {"q": "Where is The Smoking Bee located?", "a": "We are located in East Mira Mesa, ready to serve your smoking needs!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92194 | East Mira Mesa", path: "/smoke-shop-92194-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/3.JPG" />
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
