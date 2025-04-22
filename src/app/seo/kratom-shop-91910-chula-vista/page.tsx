import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Kratom Shop 91910 | Premium in Chula Vista",
    description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
    keywords: "kratom shop 91910, chula vista kratom, vapes near me, glass accessories, head shop near me, smoke shop open now, 420 shop in 91910, best kratom shop, buy vapes in 91910, cheap glass pipes 91910",
    openGraph: {
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      url: "https://thesmokingbee.com/kratom-shop-91910-chula-vista",
      images: [{ url: "/images/about/14.JPG", alt: "Kratom Shop 91910 | Premium in Chula Vista" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Kratom Shop 91910 | Premium in Chula Vista",
      description: "Need kratom near 91910? The Smoking Bee provides top-quality kratom, plus vapes and glass accessories in Chula Vista.",
      images: ["/images/about/14.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Kratom Shop 91910 | Premium in Chula Vista", "item": "https://thesmokingbee.com/kratom-shop-91910-chula-vista"}]}`
    }
  };
}

export default async function kratom_shop_91910_chula_vista_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover Premium Kratom at The Smoking Bee!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Chula Vista</h2><p>If you're searching for quality kratom near the 91910 area, look no further than The Smoking Bee. We pride ourselves on offering a wide selection of top-notch kratom, ensuring that you find the perfect strain for your needs. Whether you’re looking for an energetic boost to kickstart your day or a mellow variety to unwind, we’ve got you covered.</p><h2>Why Choose Our Kratom?</h2><ul><li><strong>Quality Assurance:</strong> We source our kratom from trusted growers to guarantee potency and purity.</li><li><strong>Variety of Strains:</strong> From green to red and everything in between, our diverse range caters to all preferences.</li><li><strong>Expert Guidance:</strong> Our knowledgeable staff is here to help you choose the right strain for your desired effects.</li></ul><p>In addition to our kratom selection, The Smoking Bee also offers a range of vapes and glass accessories, perfect for enhancing your experience. Whether you’re a seasoned user or new to kratom, our shop is designed to meet all your needs. Don’t forget to check out our rolling papers and other accessories to complete your setup!</p><h2>Your Local Kratom Destination</h2><p>Located conveniently in Chula Vista, we invite you to visit The Smoking Bee and explore our offerings. We are committed to providing not just products but also community education about kratom and its benefits. Our goal is to ensure that every customer leaves satisfied and informed.</p><p>So, if you're in the 91910 area and in need of quality kratom, come down to The Smoking Bee today and experience the difference!</p>`;
  const faqItems = [{"q": "What types of kratom do you offer?", "a": "We offer various strains including red, green, and white kratom to suit your needs."}, {"q": "Is your kratom sourced ethically?", "a": "Yes, we source our kratom from trusted growers committed to ethical practices."}, {"q": "Can I get advice on which kratom to choose?", "a": "Absolutely! Our knowledgeable staff is always ready to help you find the right strain."}, {"q": "Do you sell other products besides kratom?", "a": "Yes, we also offer vapes, glass accessories, rolling papers, and more!"}, {"q": "Where is The Smoking Bee located?", "a": "We are conveniently located in Chula Vista, close to the 91910 area."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Kratom Shop 91910 | Premium in Chula Vista", path: "/kratom-shop-91910-chula-vista" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/14.JPG" />
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
