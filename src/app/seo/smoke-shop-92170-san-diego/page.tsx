import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92170 | Naval Base SD",
    description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
    keywords: "smoke shop 92170, naval base, bongs, vapes, delta-8, head shop near me, smoke shop open now, 420 shop in 92170, cheap glass pipes 92170, buy vapes in 92170, delta 8 92170",
    openGraph: {
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      url: "https://thesmokingbee.com/smoke-shop-92170-san-diego",
      images: [{ url: "/images/about/5.JPG", alt: "Smoke Shop 92170 | Naval Base SD" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92170 | Naval Base SD",
      description: "Serving 92170 near Naval Base with premium bongs, vapes, and Delta-8. Stop by The Smoking Bee today.",
      images: ["/images/about/5.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92170-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92170 | Naval Base SD", "item": "https://thesmokingbee.com/smoke-shop-92170-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92170_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop Near Naval Base SD!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located conveniently near the Naval Base SD, The Smoking Bee is your premier smoke shop in the 92170 area. We pride ourselves on offering a diverse selection of high-quality bongs, vapes, and Delta-8 products to cater to both newcomers and seasoned smokers alike.</p><h2>Explore Our Products</h2><ul><li><strong>Bongs:</strong> Discover a variety of unique glass pieces that not only perform well but also look great in your collection.</li><li><strong>Vapes:</strong> We carry the latest vape technology and flavors to ensure you have the best experience possible.</li><li><strong>Delta-8:</strong> For those looking for something a little different, our Delta-8 products offer a unique twist on traditional smoking.</li></ul><p>At The Smoking Bee, we understand that shopping for smoking accessories can be overwhelming. That's why our friendly staff is here to help you find exactly what you need. Whether you're stocking up on rolling supplies for your off-duty hours or looking for that perfect piece to impress your friends, we have you covered.</p><h2>Why Choose Us?</h2><ul><li><strong>Convenient Location:</strong> Just a stone's throw away from Naval Base SD, making it easy for service members and locals alike to stop by.</li><li><strong>Quality Products:</strong> We source only the best products to ensure you have a satisfying experience every time.</li><li><strong>Welcoming Atmosphere:</strong> Our shop is designed to make everyone feel comfortable, whether you're a first-time visitor or a regular.</li></ul><p>Stop by The Smoking Bee today and see why we are the preferred smoke shop in the 92170 area. Our doors are always open, and we can't wait to assist you with all your smoking needs!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of bongs, vapes, and Delta-8 products."}, {"q": "Is The Smoking Bee beginner-friendly?", "a": "Absolutely! We welcome both new smokers and seasoned enthusiasts."}, {"q": "Where are you located?", "a": "We are conveniently located near Naval Base SD in the 92170 area."}, {"q": "Do you have rolling supplies?", "a": "Yes, we stock a variety of rolling supplies for your convenience."}, {"q": "What are Delta-8 products?", "a": "Delta-8 products are a unique alternative to traditional THC, offering a different experience."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92170 | Naval Base SD", path: "/smoke-shop-92170-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/5.JPG" />
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
