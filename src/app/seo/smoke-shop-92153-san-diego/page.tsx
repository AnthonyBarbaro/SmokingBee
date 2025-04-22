import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92153 | Otay Mesa",
    description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
    keywords: "smoke shop 92153, otay mesa, rolling papers, disposable vapes, glass, head shop near me, smoke shop open now, 420 shop in 92153, rolling paper brands, buy vapes in 92153, cheap glass pipes 92153",
    openGraph: {
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92153-san-diego",
      images: [{ url: "/images/about/2.JPG", alt: "Smoke Shop 92153 | Otay Mesa" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92153 | Otay Mesa",
      description: "Otay Mesa (92153) smokers trust The Smoking Bee for rolling papers, disposable vapes, and more.",
      images: ["/images/about/2.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92153-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92153 | Otay Mesa", "item": "https://thesmokingbee.com/smoke-shop-92153-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92153_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Neighborhood Smoke Shop in Otay Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Otay Mesa!</h2><p>If you’re searching for a trusted smoke shop in the 92153 area, look no further than The Smoking Bee. We pride ourselves on being the go-to destination for all your smoking needs, whether you’re a seasoned smoker or just starting your journey. Our friendly staff is always ready to assist you in finding the right products tailored to your preferences.</p><h2>Our Wide Selection of Products</h2><p>At The Smoking Bee, we carry a diverse range of high-quality items. From popular rolling papers to convenient disposable vapes, we have everything you need for a satisfying smoking experience. Our collection doesn’t stop there; we also offer reliable glassware and unique artisan pipes that make perfect additions to your collection.</p><ul><li><strong>Rolling Papers:</strong> Choose from various brands and sizes.</li><li><strong>Disposable Vapes:</strong> Great for on-the-go enjoyment.</li><li><strong>Glassware:</strong> Durable and beautifully designed pieces.</li><li><strong>Delta-8 Products:</strong> Explore our rotating selection for something new!</li></ul><h2>Why Choose The Smoking Bee?</h2><p>We’re more than just a smoke shop; we’re a part of the Otay Mesa community. Our commitment to quality and customer satisfaction sets us apart. We understand the unique needs of our customers and strive to provide a personalized experience every time you visit. Whether you need advice on products or just want to browse, we’re here for you!</p><p>Come visit us at The Smoking Bee and discover why so many in the 92153 area trust us for their smoking supplies. We can’t wait to serve you!</p>`;
  const faqItems = [{"q": "What types of rolling papers do you carry?", "a": "We offer a variety of rolling papers from popular brands, ensuring you find the perfect fit for your smoking style."}, {"q": "Do you have disposable vapes?", "a": "Yes! We have a great selection of disposable vapes suitable for on-the-go use."}, {"q": "What makes The Smoking Bee different from other smoke shops?", "a": "Our commitment to quality products and personalized customer service makes us stand out in the Otay Mesa community."}, {"q": "Can I find delta-8 products at your shop?", "a": "Absolutely! We have a rotating selection of delta-8 products to give you new experiences every visit."}, {"q": "Is there parking available at your location?", "a": "Yes, we have convenient parking available for our customers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92153 | Otay Mesa", path: "/smoke-shop-92153-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/2.JPG" />
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
