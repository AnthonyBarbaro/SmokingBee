import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92105 | City Heights",
    description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
    keywords: "smoke shop 92105, city heights, rolling papers, kratom near me, head shop near me, smoke shop open now, 420 shop in 92105, rolling paper brands, best kratom shop, buy vapes in 92105",
    openGraph: {
      title: "Smoke Shop 92105 | City Heights",
      description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92105",
      images: [{ url: "/images/about/10.JPG", alt: "Smoke Shop 92105 | City Heights" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92105 | City Heights",
      description: "City Heights’ best smoke shop for rolling papers, kratom, and more in 92105. Discover premium products at The Smoking Bee.",
      images: ["/images/about/10.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92105",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92105 | City Heights", "item": "https://thesmokingbee.com/smoke-shop-92105"}]}`
    }
  };
}

export default async function smoke_shop_92105_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in City Heights!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located in the heart of City Heights, The Smoking Bee is your go-to smoke shop for all your smoking needs in the 92105 area. We pride ourselves on offering a wide selection of premium products, including rolling papers, potent kratom strains, and an array of accessories that cater to both beginners and enthusiasts alike.</p><h2>What We Offer</h2><ul><li><strong>Rolling Papers:</strong> Choose from a variety of top brands and sizes to find the perfect fit for your smoking style.</li><li><strong>Kratom:</strong> Explore our potent kratom strains sourced from trusted suppliers, designed to provide you with the best experience.</li><li><strong>Vape Pens:</strong> Discover the latest vape pens and cartridges that offer smooth, flavorful hits.</li><li><strong>Glass Pipes:</strong> Check out our local glass pipes, crafted by skilled artisans for a unique touch.</li><li><strong>Wrap Flavors:</strong> Enjoy our selection of sweet and aromatic wrap flavors to enhance your smoking experience.</li></ul><p>At The Smoking Bee, we understand that each customer has unique preferences and budgets. Our friendly staff is always ready to assist you in customizing your smoke experience. Whether you’re a seasoned smoker or just getting started, we’re here to help you find exactly what you need.</p><h2>Visit Us Today!</h2><p>Stop by The Smoking Bee in City Heights and discover why we are the best smoke shop in 92105. Our commitment to quality products and outstanding customer service sets us apart from the rest. We can't wait to serve you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling papers, kratom, vape pens, glass pipes, and more."}, {"q": "Is there parking available?", "a": "Yes, we have convenient parking available for our customers."}, {"q": "What are your store hours?", "a": "We are open daily from 10 AM to 8 PM."}, {"q": "Do you offer any discounts?", "a": "Yes, we have special promotions and discounts for our loyal customers."}, {"q": "Can you help me choose the right products?", "a": "Absolutely! Our knowledgeable staff is here to assist you with any questions."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92105 | City Heights", path: "/smoke-shop-92105" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/10.JPG" />
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
