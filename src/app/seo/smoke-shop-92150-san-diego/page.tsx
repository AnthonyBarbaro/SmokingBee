import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92150 | Rancho Santa Fe",
    description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
    keywords: "smoke shop 92150, rancho santa fe, delta-8, smoking accessories, vapes, head shop near me, smoke shop open now, 420 shop in 92150, delta 8 92150, buy vapes in 92150",
    openGraph: {
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92150-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "Smoke Shop 92150 | Rancho Santa Fe" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92150 | Rancho Santa Fe",
      description: "Rancho Santa Fe (92150) smokers enjoy premium Delta-8, smoking accessories, and more at The Smoking Bee.",
      images: ["/images/about/11.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92150-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92150 | Rancho Santa Fe", "item": "https://thesmokingbee.com/smoke-shop-92150-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92150_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Elevate Your Smoking Experience in Rancho Santa Fe!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Rancho Santa Fe (92150), The Smoking Bee is your go-to smoke shop for all things related to premium smoking experiences. Our mission is to offer smokers a diverse selection of top-tier Delta-8 products, vapes, and essential accessories, ensuring you have everything you need for an enjoyable session.</p><h2>Why Choose Us?</h2><p>At The Smoking Bee, we understand that every smoker has unique preferences. That’s why we carry an extensive range of products, including:</p><ul><li>Premium Delta-8 products</li><li>An assortment of vapes and e-liquids</li><li>Decorative and functional rolling trays</li><li>High-quality smoking accessories</li></ul><p>Whether you're a seasoned smoker or just starting out, our knowledgeable staff is here to guide you. We take pride in providing a comfortable setting where you can explore different products and find the perfect match for your smoking style.</p><h2>Discover New Flavors</h2><p>One of the highlights of visiting The Smoking Bee is the opportunity to try our range of fresh e-liquid flavors. From fruity to minty, we have something for everyone. Our staff is always excited to share recommendations and help you find your new favorite flavor.</p><h2>Your Local Smoke Shop</h2><p>Conveniently located in Rancho Santa Fe, we are proud to serve our local community. When you visit The Smoking Bee, you're not just a customer; you're part of our family. We strive to create a welcoming atmosphere where everyone feels at home.</p><p>Come by today to explore our selection and elevate your smoking experience!</p>`;
  const faqItems = [{"q": "What types of Delta-8 products do you offer?", "a": "We offer a variety of Delta-8 products, including edibles, tinctures, and vape cartridges."}, {"q": "Do you have flavored e-liquids?", "a": "Yes! We carry a wide range of flavored e-liquids to suit all taste preferences."}, {"q": "Can I find smoking accessories at your shop?", "a": "Absolutely! We have a variety of smoking accessories, including rolling trays, pipes, and more."}, {"q": "Is there someone to help me choose products?", "a": "Yes, our knowledgeable staff is always ready to assist you in finding the perfect products for your needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92150 | Rancho Santa Fe", path: "/smoke-shop-92150-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/11.JPG" />
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
