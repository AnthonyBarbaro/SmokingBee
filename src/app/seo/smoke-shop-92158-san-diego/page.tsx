import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92158 | Imperial Beach",
    description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
    keywords: "smoke shop 92158, imperial beach, hookah flavors, glass pipes, best smoke shop, head shop near me, smoke shop open now, 420 shop in 92158, cheap glass pipes 92158, buy vapes in 92158",
    openGraph: {
      title: "Smoke Shop 92158 | Imperial Beach",
      description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92158-san-diego",
      images: [{ url: "/images/about/11.JPG", alt: "Smoke Shop 92158 | Imperial Beach" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92158 | Imperial Beach",
      description: "Imperial Beach (92158) smokers find the best hookah flavors, glass pipes, and more at The Smoking Bee.",
      images: ["/images/about/11.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92158 | Imperial Beach", "item": "https://thesmokingbee.com/smoke-shop-92158-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92158_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in Imperial Beach!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Imperial Beach</h2><p>If you're looking for the best smoke shop in the 92158 area, you've come to the right place! At The Smoking Bee, we pride ourselves on offering an extensive selection of hookah flavors, glass pipes, and more, all tailored for the vibrant Imperial Beach community.</p><h2>Explore Our Range of Products</h2><p>Our shop is stocked with a variety of products to meet all your smoking needs. Experience our rich and diverse range of <strong>hookah flavors</strong>, perfect for both solo relaxation and social gatherings. Whether you're a fan of fruity blends or rustic tobacco flavors, we have something to delight your taste buds!</p><ul><li><strong>Glass Pipes:</strong> Our collection features unique designs and high-quality materials.</li><li><strong>New Vape Arrivals:</strong> Stay updated with the latest vape products on the market.</li><li><strong>Delta-8 Edibles:</strong> Try our selection for a new twist on your smoking experience.</li></ul><h2>Friendly Staff at Your Service</h2><p>At The Smoking Bee, we believe that great customer service is just as important as the products we offer. Our knowledgeable staff is always ready to assist you in finding the perfect items for your mellow evening by the beach or a lively gathering with friends. Don't hesitate to ask for recommendations or advice!</p><h2>Visit Us Today!</h2><p>Whether you're a local resident or just visiting Imperial Beach, make sure to stop by The Smoking Bee. We guarantee a friendly atmosphere and an enjoyable shopping experience. Discover why we are the preferred smoke shop in the 92158 area!</p>`;
  const faqItems = [{"q": "What types of hookah flavors do you offer?", "a": "We offer a wide range of hookah flavors, from fruity to traditional tobacco blends, ensuring there's something for everyone."}, {"q": "Do you have any new vape products?", "a": "Yes! We regularly update our inventory with the latest vape products and accessories."}, {"q": "Can I find delta-8 edibles at your shop?", "a": "Absolutely! We have a selection of delta-8 edibles available for you to try."}, {"q": "Is The Smoking Bee staff knowledgeable about products?", "a": "Yes, our staff is well-trained and ready to help you choose the right products for your needs."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92158 | Imperial Beach", path: "/smoke-shop-92158-san-diego" }
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
