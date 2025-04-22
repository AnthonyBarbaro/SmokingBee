import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Head Shop 92020 | El Cajon’s Finest",
    description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
    keywords: "head shop 92020, el cajon, rolling trays, glass pipes, vapes, head shop near me, smoke shop open now, 420 shop in 92020, buy vapes in 92020, cheap glass pipes 92020",
    openGraph: {
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      url: "https://thesmokingbee.com/head-shop-92020-el-cajon",
      images: [{ url: "/images/about/2.JPG", alt: "Head Shop 92020 | El Cajon’s Finest" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Head Shop 92020 | El Cajon’s Finest",
      description: "El Cajon’s top head shop for glass pipes, vapes, and rolling trays. Explore the 92020 area’s best smoking selection at The Smoking Bee.",
      images: ["/images/about/2.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/head-shop-92020-el-cajon",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Head Shop 92020 | El Cajon\u2019s Finest", "item": "https://thesmokingbee.com/head-shop-92020-el-cajon"}]}`
    }
  };
}

export default async function head_shop_92020_el_cajon_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `El Cajon's Premier Head Shop Awaits You!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Located in the heart of El Cajon’s 92020 area, The Smoking Bee is your go-to destination for all things smoking. Our head shop boasts an extensive selection of high-quality glass pipes, rolling trays, and premium vape products that cater to both casual smokers and connoisseurs alike.</p><p>At The Smoking Bee, we take pride in offering locally blown glass that showcases the artistry and craftsmanship of our talented artisans. Whether you're looking for a classic piece or something more unique, our collection is curated to ensure you find exactly what you need.</p><h2>What We Offer</h2><ul><li><strong>Glass Pipes:</strong> Explore a variety of styles, colors, and sizes!</li><li><strong>Vape Products:</strong> Choose from the latest devices and e-liquids.</li><li><strong>Rolling Trays:</strong> Keep your essentials organized with our stylish trays.</li><li><strong>Accessories:</strong> From grinders to cleaning supplies, we've got you covered.</li></ul><p>Whether you’re restocking your favorite items or discovering new styles, The Smoking Bee is dedicated to providing you with the best products available. Our knowledgeable staff is always on hand to help you find exactly what you’re looking for, ensuring a friendly and informative shopping experience every time you visit.</p><h2>Why Choose Us?</h2><p>Not only do we offer a wide range of products, but we also prioritize customer satisfaction. Our commitment to quality and service sets us apart as El Cajon’s finest head shop. Stop by today and see why The Smoking Bee is a favorite among locals!</p>`;
  const faqItems = [{"q": "What types of products do you sell?", "a": "We offer glass pipes, vapes, rolling trays, and various accessories."}, {"q": "Is your glass locally made?", "a": "Yes! We specialize in locally blown glass that showcases local artisans."}, {"q": "Do you have a loyalty program?", "a": "Yes, we offer a loyalty program for our regular customers to enjoy discounts!"}, {"q": "Can I find unique items at The Smoking Bee?", "a": "Absolutely! Our collection includes unique and one-of-a-kind pieces."}, {"q": "What are your store hours?", "a": "We are open Monday through Saturday from 10 AM to 8 PM and Sunday from 12 PM to 6 PM."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Head Shop 92020 | El Cajon’s Finest", path: "/head-shop-92020-el-cajon" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/2.JPG" />
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
