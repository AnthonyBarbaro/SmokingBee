import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92131 | Scripps Ranch",
    description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
    keywords: "smoke shop 92131, scripps ranch, rolling trays, vape, delta-8, head shop near me, smoke shop open now, 420 shop in 92131, buy vapes in 92131, delta 8 92131",
    openGraph: {
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      url: "https://thesmokingbee.com/smoke-shop-92131-san-diego",
      images: [{ url: "/images/about/7.JPG", alt: "Smoke Shop 92131 | Scripps Ranch" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92131 | Scripps Ranch",
      description: "Scripps Ranch (92131) relies on The Smoking Bee for premium rolling trays, vape products, and Delta-8.",
      images: ["/images/about/7.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92131-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92131 | Scripps Ranch", "item": "https://thesmokingbee.com/smoke-shop-92131-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92131_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in Scripps Ranch!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of Scripps Ranch (92131), The Smoking Bee is your go-to destination for all your smoking needs. Whether you are looking for premium rolling trays, an extensive selection of vape products, or the latest Delta-8 offerings, we have you covered. Our shop is designed to provide you with a one-stop shopping experience, ensuring you find everything you need in one convenient location.</p><h2>Our Product Range</h2><p>At The Smoking Bee, we pride ourselves on our carefully curated selection of products. Explore our top-tier rolling trays that combine functionality with style. For those who enjoy vaping, our range of vape products includes various brands and flavors to suit every preference. And if you’re curious about Delta-8, we offer a variety of options that are perfect for both beginners and seasoned users.</p><h2>Unique Glass Collection</h2><p>Don’t miss our unique glass section, featuring pieces you won’t find anywhere else. Each item is handpicked to ensure quality and uniqueness, making it easy for you to find that perfect addition to your collection. Our knowledgeable staff is always on hand to help you navigate through our selection and find the best products that suit your style and needs.</p><h2>Expert Recommendations</h2><p>Not sure where to start? Our friendly team is ready to assist you with expert recommendations, ensuring you have the best setup for a smooth and flavorful session. We believe in creating a welcoming environment where you can ask questions and learn more about our products. Your satisfaction is our priority, and we’re here to help you every step of the way!</p><h2>Visit Us Today!</h2><p>If you’re in Scripps Ranch, stop by The Smoking Bee today. Experience our top-notch service and discover why we are the preferred smoke shop in the area. Whether you’re a local or just passing through, we can’t wait to serve you!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer premium rolling trays, vape products, Delta-8, and a unique glass collection."}, {"q": "Can I get recommendations on products?", "a": "Absolutely! Our knowledgeable staff is here to help you find the best products for your needs."}, {"q": "Is The Smoking Bee a local business?", "a": "Yes, we are proud to be a local smoke shop serving the Scripps Ranch community."}, {"q": "Do you have unique items that I can't find elsewhere?", "a": "Yes! Our carefully curated glass section features unique pieces that are hard to find."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92131 | Scripps Ranch", path: "/smoke-shop-92131-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/7.JPG" />
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
