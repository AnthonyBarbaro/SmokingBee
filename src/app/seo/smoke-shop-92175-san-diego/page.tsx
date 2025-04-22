import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92175 | Encanto / Emerald Hills",
    description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
    keywords: "smoke shop 92175, encanto, hookah flavors, rolling trays, accessories, head shop near me, smoke shop open now, 420 shop in 92175, delta 8 92175, buy vapes in 92175",
    openGraph: {
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      url: "https://thesmokingbee.com/smoke-shop-92175-san-diego",
      images: [{ url: "/images/about/4.JPG", alt: "Smoke Shop 92175 | Encanto / Emerald Hills" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92175 | Encanto / Emerald Hills",
      description: "Encanto area (92175) shops The Smoking Bee for hookah flavors, rolling trays, and top smoking accessories.",
      images: ["/images/about/4.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92175 | Encanto / Emerald Hills", "item": "https://thesmokingbee.com/smoke-shop-92175-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92175_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Encanto & Emerald Hills!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the vibrant Encanto area (92175), The Smoking Bee is your go-to smoke shop for all your smoking needs. We pride ourselves on offering an extensive selection of premium hookah flavors, reliable rolling trays, and the latest smoking accessories to enhance your sessions.</p> <h2>Our Products</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That's why we carry a wide variety of products to suit every taste:</p><ul><li><strong>Flavorful Hookah Products:</strong> Discover a range of delicious hookah flavors that will elevate your smoking experience.</li><li><strong>Quality Rolling Trays:</strong> Keep your smoking area tidy with our durable and stylish rolling trays.</li><li><strong>Disposable Vapes:</strong> For something different, explore our selection of disposable vapes – perfect for on-the-go enjoyment.</li><li><strong>Delta-8 Tinctures:</strong> Try our latest delta-8 tinctures for a unique twist on your usual smoking routine.</li></ul><h2>Why Choose Us?</h2><p>Our friendly and knowledgeable staff are here to help you find exactly what you need. Whether you're a seasoned smoker or just starting out, we aim to provide you with all the information you need to enjoy the best smoking experience possible. We believe that every visit to The Smoking Bee should be enjoyable and informative.</p><p>So, if you're in the Encanto or Emerald Hills area, stop by The Smoking Bee today and discover why we are the top choice for smoking enthusiasts!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of hookah flavors, rolling trays, disposable vapes, and delta-8 tinctures."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we proudly serve the Encanto and Emerald Hills community."}, {"q": "Can I get advice on smoking products?", "a": "Absolutely! Our knowledgeable staff is here to help you find the perfect products for your needs."}, {"q": "Do you offer any special promotions?", "a": "Yes, we have regular promotions and discounts, so be sure to check in often!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92175 | Encanto / Emerald Hills", path: "/smoke-shop-92175-san-diego" }
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
