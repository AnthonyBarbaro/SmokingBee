import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92166 | Roseville/Fleetridge",
    description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
    keywords: "smoke shop 92166, roseville, fleetridge, glass, vapes, accessories, head shop near me, smoke shop open now, 420 shop in 92166, cheap glass pipes 92166, buy vapes in 92166",
    openGraph: {
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
      url: "https://thesmokingbee.com/smoke-shop-92166-san-diego",
      images: [{ url: "/images/about/18.JPG", alt: "Smoke Shop 92166 | Roseville/Fleetridge" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92166 | Roseville/Fleetridge",
      description: "Roseville/Fleetridge (92166) smokers find top-tier accessories at The Smoking Bee. Shop glass, vapes, and more.",
      images: ["/images/about/18.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92166 | Roseville/Fleetridge", "item": "https://thesmokingbee.com/smoke-shop-92166-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92166_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop in 92166!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located in the heart of Roseville/Fleetridge (92166), The Smoking Bee is your premier smoke shop, offering an extensive selection of high-quality smoking accessories. Whether you are an experienced smoker or just starting your journey, we have everything you need to enhance your experience.</p><h2>Our Products</h2><p>At The Smoking Bee, we pride ourselves on our diverse inventory. Explore our impressive range of <strong>glass options</strong>, including:</p><ul><li>Bongs</li><li>Pipes</li><li>Vaporizers</li></ul><p>In addition to glassware, we also carry essential accessories. From <strong>torches</strong> for dabbing to stylish <strong>rolling trays</strong>, we ensure that each item is selected for its quality and reliability. Our knowledgeable staff is always on hand to provide friendly advice, helping you find exactly what you’re looking for.</p><h2>Why Choose Us?</h2><p>The Smoking Bee is more than just a smoke shop; it's a community hub for local smokers. We celebrate the artistry of local glassmakers and frequently showcase new pieces to keep our inventory fresh and exciting. Our commitment to customer satisfaction means that you'll always receive personalized service in a welcoming environment.</p><p>Whether you're a veteran smoker or new to the scene, The Smoking Bee is here to support you with the best products and expert advice. Come visit us today and discover why we're the top choice for smokers in the 92166 area!</p>`;
  const faqItems = [{"q": "What types of smoking accessories do you offer?", "a": "We offer a wide range of smoking accessories, including bongs, pipes, vapes, and essential tools like torches and rolling trays."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we are a proud local business serving the Roseville/Fleetridge community and showcasing local glass artistry."}, {"q": "Do you provide advice on smoking products?", "a": "Absolutely! Our friendly staff is knowledgeable and ready to help you choose the perfect products for your needs."}, {"q": "Are there any new products in stock?", "a": "We frequently update our inventory with new items, so be sure to stop by often to see what's new!"}, {"q": "Can I find unique glass pieces at your shop?", "a": "Yes, we feature an array of unique and artistic glass pieces from local artisans that you won't find anywhere else."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92166 | Roseville/Fleetridge", path: "/smoke-shop-92166-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/18.JPG" />
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
