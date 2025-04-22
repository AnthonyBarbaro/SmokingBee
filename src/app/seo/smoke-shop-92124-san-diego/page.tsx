import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92124 | Tierrasanta",
    description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
    keywords: "smoke shop 92124, tierrasanta, bongs, vape pens, kratom, head shop near me, smoke shop open now, 420 shop in 92124, buy vapes in 92124, best kratom shop, cheap glass pipes 92124",
    openGraph: {
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      url: "https://thesmokingbee.com/smoke-shop-92124-san-diego",
      images: [{ url: "/images/about/9.JPG", alt: "Smoke Shop 92124 | Tierrasanta" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92124 | Tierrasanta",
      description: "Serving 92124 Tierrasanta with top-tier bongs, vape pens, and kratom. The Smoking Bee is your all-in-one smoke shop.",
      images: ["/images/about/9.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92124-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92124 | Tierrasanta", "item": "https://thesmokingbee.com/smoke-shop-92124-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92124_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Tierrasanta Awaits!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Tierrasanta</h2><p>At The Smoking Bee, we are proud to serve the 92124 community of Tierrasanta with a wide range of smoking products designed to elevate your experience. Whether you're a seasoned enthusiast or new to the world of smoking, our smoke shop has something for everyone.</p><h2>Our Product Range</h2><p>Explore our extensive selection of <strong>bongs</strong>, <strong>vape pens</strong>, and <strong>kratom</strong> to find the perfect match for your lifestyle. We offer:</p><ul><li><strong>High-quality bongs:</strong> Our collection includes both classic and modern designs, ensuring you find a water pipe that fits your style.</li><li><strong>Vape pens:</strong> Choose from a variety of portable devices that deliver smooth hits and convenience for on-the-go enjoyment.</li><li><strong>Kratom:</strong> Discover our premium kratom products, sourced from trusted suppliers, perfect for those seeking natural alternatives.</li></ul><p>At The Smoking Bee, we prioritize quality and customer satisfaction. Our friendly staff is here to assist you in selecting the right products, answering any questions you might have about our offerings.</p><h2>Why Choose The Smoking Bee?</h2><p>As your local smoke shop, we are committed to providing the Tierrasanta community with top-tier products and exceptional service. Our knowledgeable team is passionate about what we do and ready to share insights to enhance your smoking experience. Plus, by shopping local, you support your community and help us thrive.</p><p>Visit us today at The Smoking Bee and discover why we are the go-to smoke shop in Tierrasanta. Whether you’re preparing for a weekend gathering or simply want to elevate your daily routine, we have everything you need!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a variety of bongs, vape pens, and kratom tailored to your needs."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we are a proud local smoke shop serving the Tierrasanta community."}, {"q": "Do you provide any expert advice on products?", "a": "Absolutely! Our knowledgeable staff is here to help you choose the best products."}, {"q": "Can I find premium brands at your shop?", "a": "Yes, we stock trusted brands and local artistry to ensure quality."}, {"q": "What are your shop hours?", "a": "We are open daily; please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92124 | Tierrasanta", path: "/smoke-shop-92124-san-diego" }
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
