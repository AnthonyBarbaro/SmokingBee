import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92179 | Skyline/Jamacha",
    description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
    keywords: "smoke shop 92179, skyline, hookah tobacco, kratom, rolling papers, head shop near me, smoke shop open now, 420 shop in 92179, hookah flavors 92179, best kratom shop, rolling paper brands",
    openGraph: {
      title: "Smoke Shop 92179 | Skyline/Jamacha",
      description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
      url: "https://thesmokingbee.com/smoke-shop-92179-san-diego",
      images: [{ url: "/images/about/17.JPG", alt: "Smoke Shop 92179 | Skyline/Jamacha" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92179 | Skyline/Jamacha",
      description: "In 92179? The Smoking Bee offers rolling papers, hookah tobacco, and great kratom deals in Skyline area.",
      images: ["/images/about/17.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92179 | Skyline/Jamacha", "item": "https://thesmokingbee.com/smoke-shop-92179-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92179_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Neighborhood Smoke Shop in Skyline/Jamacha!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located in the vibrant 92179 area, The Smoking Bee is your go-to smoke shop for all things related to smoking and vaping. We are proud to serve the Skyline/Jamacha community with an extensive selection of products tailored to meet your needs.</p><h2>Our Products</h2><ul><li><strong>Rolling Papers:</strong> We have a variety of rolling papers to suit any preference, whether you're a seasoned pro or just starting out.</li><li><strong>Hookah Tobacco:</strong> Enjoy our top-notch hookah flavors that will elevate your smoking experience. From fruity to minty, we have something for everyone!</li><li><strong>Kratom Deals:</strong> Looking for budget-friendly kratom? We've got you covered! Our quality kratom is available at competitive prices.</li><li><strong>Vapes:</strong> Explore our wide array of portable vapes that are perfect for on-the-go enjoyment.</li><li><strong>Delta-8 Carts:</strong> Discover our discreet delta-8 carts that provide a smooth experience without drawing attention.</li></ul><p>At The Smoking Bee, we pride ourselves on offering a diverse selection of products that cater to your smoking and vaping preferences. Our knowledgeable staff is always available to assist you in finding the perfect combination of products that suit your taste and style. We understand that each customer has unique needs, and we are here to help you navigate our offerings with ease.</p><h2>Community Focus</h2><p>As a local business in the Skyline/Jamacha area, we are dedicated to supporting our community. We strive to create a welcoming atmosphere where everyone feels at home. Whether you’re a regular customer or visiting us for the first time, you can expect friendly service and expert advice.</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling papers, hookah tobacco, vapes, kratom, and delta-8 carts."}, {"q": "Is The Smoking Bee budget-friendly?", "a": "Yes! We provide a variety of products at competitive prices, especially our kratom."}, {"q": "Can I get help choosing products?", "a": "Absolutely! Our friendly staff is here to guide you to the right products for your needs."}, {"q": "Do you have a loyalty program?", "a": "Yes, we have a loyalty program that rewards our regular customers with discounts and special offers."}, {"q": "Where are you located?", "a": "We are located in the Skyline/Jamacha area, conveniently serving the 92179 community."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92179 | Skyline/Jamacha", path: "/smoke-shop-92179-san-diego" }
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
