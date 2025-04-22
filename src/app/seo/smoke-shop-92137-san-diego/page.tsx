import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92137 | Clairemont/Bay Park",
    description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
    keywords: "smoke shop 92137, bay park, rolling papers, glass bongs, kratom, head shop near me, smoke shop open now, 420 shop in 92137, rolling paper brands, cheap glass pipes 92137, best kratom shop",
    openGraph: {
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      url: "https://thesmokingbee.com/smoke-shop-92137-san-diego",
      images: [{ url: "/images/about/2.JPG", alt: "Smoke Shop 92137 | Clairemont/Bay Park" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92137 | Clairemont/Bay Park",
      description: "Bay Park’s top spot for rolling papers, glass bongs, and kratom. Visit The Smoking Bee at 92137 today.",
      images: ["/images/about/2.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92137 | Clairemont/Bay Park", "item": "https://thesmokingbee.com/smoke-shop-92137-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92137_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Bay Park!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you're in the Clairemont or Bay Park area, look no further than The Smoking Bee, your top destination for all your smoking needs. Whether you're an experienced connoisseur or just starting out, we have something for everyone. Our shop is stocked with a wide selection of premium products, including <strong>bongs</strong>, <strong>rolling papers</strong>, and <strong>kratom</strong> to ensure you find exactly what you need.</p><h2>Our Extensive Inventory</h2><p>At The Smoking Bee, we pride ourselves on offering a diverse range of smoking accessories. Here’s what you can expect:</p><ul><li><strong>Glass Bongs:</strong> Choose from a variety of styles and sizes that suit your preference.</li><li><strong>Rolling Papers:</strong> Find the perfect papers for your rolling needs, available in various flavors and materials.</li><li><strong>Kratom:</strong> We carry high-quality kratom sourced from trusted suppliers.</li><li><strong>Vaporizers:</strong> Explore our discreet vaporizers for a more convenient smoking experience.</li><li><strong>Artisan Pipes:</strong> Unique and handcrafted pipes that make smoking a true art form.</li></ul><h2>Why Choose Us?</h2><p>We understand that a smoke shop is more than just a place to buy products; it’s a community hub for enthusiasts. That's why we strive to create a welcoming atmosphere for all our customers. Our knowledgeable staff is always ready to help you find the perfect item or answer any questions you might have. Plus, our prices are competitive, so you can enjoy quality without breaking the bank.</p><h2>Visit Us Today!</h2><p>After a day of exploring the beautiful Bay Park area, make sure to stop by The Smoking Bee at 92137. Stock up on all your smoking essentials in one convenient location. We look forward to seeing you and helping you discover your new favorite products!</p>`;
  const faqItems = [{"q": "What types of bongs do you carry?", "a": "We offer a variety of glass bongs in different styles and sizes to fit your needs."}, {"q": "Do you have any kratom products?", "a": "Yes, we have a selection of high-quality kratom sourced from reputable suppliers."}, {"q": "Can I find rolling papers at The Smoking Bee?", "a": "Absolutely! We have a wide range of rolling papers available in various flavors and materials."}, {"q": "Are your staff knowledgeable about the products?", "a": "Yes, our friendly staff is always ready to assist you and answer any questions you have."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92137 | Clairemont/Bay Park", path: "/smoke-shop-92137-san-diego" }
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
