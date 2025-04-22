import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92141 | Kearny Mesa",
    description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
    keywords: "smoke shop 92141, kearny mesa, delta-8, vape refills, glass bongs, head shop near me, smoke shop open now, 420 shop in 92141, delta 8 92141, buy vapes in 92141, cheap glass pipes 92141",
    openGraph: {
      title: "Smoke Shop 92141 | Kearny Mesa",
      description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92141-san-diego",
      images: [{ url: "/images/about/17.JPG", alt: "Smoke Shop 92141 | Kearny Mesa" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92141 | Kearny Mesa",
      description: "Kearny Mesa’s #1 smoke shop for Delta-8, vape refills, and premium glass bongs. Check out The Smoking Bee.",
      images: ["/images/about/17.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92141 | Kearny Mesa", "item": "https://thesmokingbee.com/smoke-shop-92141-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92141_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Kearny Mesa!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Kearny Mesa, our smoke shop is your go-to destination for all things cannabis and vaping. At <strong>The Smoking Bee</strong>, we pride ourselves on offering an extensive selection of products tailored to elevate your experience.</p><h2>Explore Our Offerings</h2><p>In the 92141 area, we are renowned for our premium quality Delta-8 products, vape refills, and an impressive collection of glass bongs. Whether you are a seasoned connoisseur or just starting your journey, our diverse inventory is sure to meet your needs. Here’s what you can expect when you visit:</p><ul><li><strong>Delta-8 Products:</strong> Experience the unique effects of Delta-8 with our carefully curated selection.</li><li><strong>Vape Refills:</strong> Choose from a variety of flavors and strengths to keep your sessions fresh.</li><li><strong>Glass Bongs:</strong> Browse our premium glass bongs that combine artistry with functionality.</li></ul><p>Our knowledgeable and friendly staff is always available to answer your questions and help you find exactly what you’re looking for. Curious about new flavors or the latest coil technology? Don’t hesitate to ask!</p><h2>Convenient Location</h2><p>Our Kearny Mesa shop is strategically located to ensure you can easily stop by after work or during the weekend. We understand that your time is valuable, which is why we strive to make your shopping experience as pleasant and efficient as possible.</p><h2>Join Our Community</h2><p>At The Smoking Bee, we believe in fostering a welcoming community. Join us for exclusive promotions and events where you can meet fellow enthusiasts and learn more about the world of cannabis and vaping.</p><p>Come visit us today and discover why we are Kearny Mesa’s #1 smoke shop!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer a wide range of products including Delta-8, vape refills, and premium glass bongs."}, {"q": "Is your staff knowledgeable about the products?", "a": "Absolutely! Our friendly staff is always ready to help you find the perfect product for your needs."}, {"q": "What are your store hours?", "a": "We are open 7 days a week, making it convenient for you to visit anytime."}, {"q": "Do you host events or promotions?", "a": "Yes! We frequently host events and special promotions for our customers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92141 | Kearny Mesa", path: "/smoke-shop-92141-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/17.JPG" />
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
