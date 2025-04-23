import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92168 | Midway District",
    description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
    keywords: "smoke shop 92168, midway district, delta-8, rolling trays, glass bongs, head shop near me, smoke shop open now, 420 shop in 92168, delta 8 92168, cheap glass pipes 92168",
    openGraph: {
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
      url: "https://thesmokingbee.com/smoke-shop-92168-san-diego",
      images: [{ url: "/images/about/9.JPG", alt: "Smoke Shop 92168 | Midway District" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92168 | Midway District",
      description: "Midway District’s top shop for rolling trays, Delta-8, and glass bongs. Visit The Smoking Bee at 92168.",
      images: ["/images/about/9.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92168-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92168 | Midway District", "item": "https://thesmokingbee.com/smoke-shop-92168-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92168_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Experience at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Midway District</h2><p>Located in the heart of the Midway District, our smoke shop at 92168 is your ultimate destination for all things smoking-related. We pride ourselves on offering a wide selection of products to cater to every smoker's needs. From rolling trays to Delta-8 products and premium glass bongs, we have it all!</p><h2>Our Product Range</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That's why we stock a diverse range of items:</p><ul><li><strong>Rolling Trays:</strong> Perfect for organizing your smoking essentials.</li><li><strong>Delta-8 Products:</strong> Explore our selection for a unique experience.</li><li><strong>Glass Bongs:</strong> Choose from a variety of styles and sizes.</li><li><strong>Vape Pens:</strong> Discreet options for on-the-go enjoyment.</li></ul><p>Whether you're a seasoned connoisseur or a casual smoker, our knowledgeable staff is here to assist you in finding the right products to enhance your smoking experience.</p><h2>Why Choose Us?</h2><p>What sets The Smoking Bee apart from other smoke shops in the area? It's our commitment to quality and customer satisfaction. We source our products from trusted brands to ensure you receive only the best. Plus, we take the time to educate our customers on the various products we offer, helping you make informed choices.</p><p>Visit us today at our 92168 location and discover how we can help you elevate your smoking rituals. We look forward to welcoming you to The Smoking Bee!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling trays, Delta-8 products, glass bongs, vape pens, and more."}, {"q": "Is The Smoking Bee open every day?", "a": "Yes, we are open seven days a week for your convenience."}, {"q": "Do you offer discounts for bulk purchases?", "a": "Yes, we provide discounts on bulk purchases. Ask our staff for details!"}, {"q": "Can I find accessories for my smoking needs?", "a": "Absolutely! We have a wide range of accessories available in-store."}, {"q": "Is there parking available at your location?", "a": "Yes, we have ample parking available for our customers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92168 | Midway District", path: "/smoke-shop-92168-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/9.JPG" />
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
