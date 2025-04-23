import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92147 | Point Loma Naval",
    description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
    keywords: "smoke shop 92147, point loma, delta-8, rolling trays, smoking gear, head shop near me, smoke shop open now, 420 shop in 92147, delta 8 92147",
    openGraph: {
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92147-san-diego",
      images: [{ url: "/images/about/12.JPG", alt: "Smoke Shop 92147 | Point Loma Naval" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92147 | Point Loma Naval",
      description: "Point Loma (92147) smokers choose The Smoking Bee for premium Delta-8, rolling trays, and more.",
      images: ["/images/about/12.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92147-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92147 | Point Loma Naval", "item": "https://thesmokingbee.com/smoke-shop-92147-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92147_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Point Loma!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee - Smoke Shop 92147</h2>
<p>In the heart of Point Loma (92147), The Smoking Bee is your go-to destination for all your smoking needs. We specialize in premium Delta-8 products, rolling trays, and an extensive range of smoking accessories. Whether you are a seasoned smoker or just starting out, we have something for everyone.</p>
<h2>Explore Our Range of Products</h2>
<ul>
    <li><strong>Delta-8 Products:</strong> Discover the uplifting effects of our top-quality Delta-8 THC products, crafted to enhance your smoking experience.</li>
    <li><strong>Rolling Trays:</strong> Keep your sessions organized with our stylish and functional rolling trays.</li>
    <li><strong>Accessories:</strong> From lighters to storage solutions, we offer all the essentials to elevate your setup.</li>
</ul>
<p>At The Smoking Bee, we pride ourselves on providing friendly advice in a laid-back atmosphere. Our knowledgeable staff is always ready to help you explore new hardware or restock your daily essentials. We understand that each customer is unique, which is why we focus on personalized service to ensure you find exactly what you need.</p>
<h2>Why Choose Us?</h2>
<p>Choosing The Smoking Bee means supporting a local business that values community and quality. We are committed to bringing you the best products available while fostering a welcoming environment for all. Whether you’re local or just passing through, you’ll find plenty to love about our smoke shop.</p>
<p>Visit us today and elevate your smoking experience!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a variety of Delta-8 products, rolling trays, and smoking accessories."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we are proud to be a local smoke shop serving the Point Loma community."}, {"q": "Can I get advice on products?", "a": "Absolutely! Our friendly staff is here to provide personalized recommendations."}, {"q": "Do you offer any special promotions?", "a": "Yes, we frequently have promotions. Be sure to check our website or visit us for the latest deals!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92147 | Point Loma Naval", path: "/smoke-shop-92147-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/12.JPG" />
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
