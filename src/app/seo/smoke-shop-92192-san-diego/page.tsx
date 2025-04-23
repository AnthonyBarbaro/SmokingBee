import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92192 | Torrey Pines",
    description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
    keywords: "smoke shop 92192, torrey pines, kratom powders, hookah flavors, vaping gear, head shop near me, smoke shop open now, 420 shop in 92192, best kratom shop, buy vapes in 92192",
    openGraph: {
      title: "Smoke Shop 92192 | Torrey Pines",
      description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92192-san-diego",
      images: [{ url: "/images/about/21.JPG", alt: "Smoke Shop 92192 | Torrey Pines" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92192 | Torrey Pines",
      description: "Torrey Pines (92192) finds quality vaping gear, kratom powders, and hookah flavors at The Smoking Bee.",
      images: ["/images/about/21.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92192-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92192 | Torrey Pines", "item": "https://thesmokingbee.com/smoke-shop-92192-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92192_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Ultimate Smoke Shop in Torrey Pines!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Torrey Pines</h2><p>Located in the heart of Torrey Pines (92192), The Smoking Bee is your go-to destination for all things smoke-related. Whether you’re an experienced smoker or just curious about exploring new options, we have a diverse range of products to cater to your needs. From premium <strong>kratom powders</strong> to an extensive selection of <strong>hookah flavors</strong>, our shop is designed to enhance your smoking experience.</p><h2>What We Offer</h2><ul><li><strong>Vaping Gear:</strong> Discover the latest in vaping technology with our cutting-edge devices. We stock everything from discreet pens for on-the-go vaping to advanced setups for the enthusiast.</li><li><strong>Kratom Products:</strong> Explore our variety of quality kratom powders sourced from the best regions. Whether you’re looking for energy or relaxation, we have the right strain for you.</li><li><strong>Hookah Supplies:</strong> Enjoy our wide array of hookah blends that will tantalize your taste buds and elevate your smoking sessions. We have something for everyone!</li><li><strong>Delta-8 Products:</strong> Unwind with our potent delta-8 options that are perfect for relaxation after a long day. Our knowledgeable staff can help you choose the right product for your needs.</li></ul><h2>Why Choose The Smoking Bee?</h2><p>At The Smoking Bee, we pride ourselves on providing a welcoming atmosphere and expert advice to help you find exactly what you need. Our team is passionate about smoking culture and is always ready to answer your questions. After a scenic hike in Torrey Pines, stop by to reward yourself with the finest smoking essentials. We ensure that our products are of the highest quality so you can enjoy a satisfying experience every time.</p><p>Visit us today and discover why The Smoking Bee is the premier smoke shop in Torrey Pines!</p>`;
  const faqItems = [{"q": "What types of products do you sell?", "a": "We offer a wide range of vaping gear, kratom powders, hookah flavors, and delta-8 products."}, {"q": "Is there parking available at your location?", "a": "Yes, we have convenient parking options available for our customers."}, {"q": "Can I get advice on which product to choose?", "a": "Absolutely! Our knowledgeable staff is here to help you find the perfect product for your needs."}, {"q": "Do you offer any discounts or loyalty programs?", "a": "Yes, we have special promotions and a loyalty program to reward our valued customers."}, {"q": "What are your store hours?", "a": "We are open daily from 10 AM to 8 PM. Come visit us!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92192 | Torrey Pines", path: "/smoke-shop-92192-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/21.JPG" />
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
