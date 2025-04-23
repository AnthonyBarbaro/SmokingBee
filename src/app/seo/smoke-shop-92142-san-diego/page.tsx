import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92142 | Residential SD Area",
    description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
    keywords: "smoke shop 92142, glass pipes, rolling papers, vapes, san diego, head shop near me, smoke shop open now, 420 shop in 92142, cheap glass pipes 92142, rolling paper brands, buy vapes in 92142",
    openGraph: {
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      url: "https://thesmokingbee.com/smoke-shop-92142-san-diego",
      images: [{ url: "/images/about/4.JPG", alt: "Smoke Shop 92142 | Residential SD Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92142 | Residential SD Area",
      description: "Find top smoking gear near 92142. The Smoking Bee offers glass pipes, rolling papers, and more in San Diego.",
      images: ["/images/about/4.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92142-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92142 | Residential SD Area", "item": "https://thesmokingbee.com/smoke-shop-92142-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92142_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in 92142, San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of the 92142 area, The Smoking Bee is your premier smoke shop, providing a wide range of smoking essentials to the San Diego community. Whether you’re a seasoned smoker or just starting out, we have everything you need to enhance your experience.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we pride ourselves on offering a carefully curated selection of high-quality products. Our inventory includes:</p><ul><li><strong>Glass Pipes:</strong> Choose from a variety of designs and sizes, perfect for any smoking style.</li><li><strong>Rolling Papers:</strong> Explore our selection of rolling papers, including organic and flavored options.</li><li><strong>Vapes and E-Liquids:</strong> Discover the latest in vaping technology, along with an array of delicious e-liquid flavors.</li><li><strong>Accessories:</strong> From grinders to storage solutions, we’ve got you covered with all the essentials.</li></ul><p>We understand that every smoker has unique preferences, which is why our team is here to help you find the perfect products tailored to your needs. Whether you have questions about delta-8 products or are looking for advanced vaping accessories, our knowledgeable staff is always available for a chat.</p><h2>Community-Centric Approach</h2><p>The Smoking Bee is not just a smoke shop; we are an integral part of the 92142 community. We strive to create a welcoming atmosphere where customers can come in, relax, and explore new products. Our goal is to ensure that everyone leaves satisfied, whether they’re trying something new or stocking up on their favorites.</p><p>Visit us today and experience the best smoke shop in San Diego's 92142 area. We look forward to serving you!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a variety of smoking essentials, including glass pipes, rolling papers, vapes, and accessories."}, {"q": "Do you have options for beginners?", "a": "Absolutely! We have products suitable for both beginners and experienced smokers."}, {"q": "Can I ask for recommendations?", "a": "Yes! Our friendly staff is always ready to help you find the best products for your needs."}, {"q": "What are delta-8 products?", "a": "Delta-8 products are cannabis-derived items that provide a unique experience, and we carry a selection of them."}, {"q": "Is The Smoking Bee locally owned?", "a": "Yes, we take pride in being a locally owned smoke shop dedicated to serving the San Diego community."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92142 | Residential SD Area", path: "/smoke-shop-92142-san-diego" }
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
