import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92140 | MCRD Area",
    description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
    keywords: "smoke shop 92140, MCRD, vape products, glass pipes, rolling trays, head shop near me, smoke shop open now, 420 shop in 92140, buy vapes in 92140, cheap glass pipes 92140",
    openGraph: {
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92140-san-diego",
      images: [{ url: "/images/about/20.JPG", alt: "Smoke Shop 92140 | MCRD Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92140 | MCRD Area",
      description: "Serving 92140 near MCRD with top-tier vape products, glass pipes, and rolling trays at The Smoking Bee.",
      images: ["/images/about/20.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92140-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92140 | MCRD Area", "item": "https://thesmokingbee.com/smoke-shop-92140-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92140_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Premier Smoke Shop in 92140!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>Located conveniently near MCRD, The Smoking Bee is your go-to destination for all your smoking needs. We pride ourselves on offering a diverse selection of high-quality vape products, stunning glass pipes, and essential rolling trays. Whether you're a local resident, a military member stationed nearby, or just passing through, we aim to provide you with a warm and friendly shopping experience.</p><h2>Our Product Offerings</h2><ul><li><strong>Vape Products:</strong> Discover an extensive range of vape gear that caters to both beginners and experienced users. From starter kits to advanced devices, we have something for everyone.</li><li><strong>Glassware:</strong> Our collection of glass pipes includes pieces that are not only functional but also artistic. Explore local glass art and find the perfect piece to add to your collection.</li><li><strong>Rolling Trays:</strong> Keep your smoking area organized with our unique rolling trays. Choose from various designs that reflect your personality and style.</li></ul><p>At The Smoking Bee, we believe in providing more than just products. Our knowledgeable staff is always ready to assist you with any questions or recommendations. We take pride in our community and strive to create a welcoming atmosphere for all our customers.</p><h2>Why Choose Us?</h2><p>We understand that shopping for smoking accessories can be overwhelming. That’s why we carefully curate our selection to ensure we offer only the best. Our commitment to quality and customer service sets us apart from other smoke shops in the area. So, whether you’re looking for something specific or just exploring, you can count on us to help you find exactly what you need.</p><p>Visit The Smoking Bee today and experience the difference. We’re excited to serve the 92140 area and look forward to welcoming you soon!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer a wide range of vape products, glass pipes, rolling trays, and unique smoking accessories."}, {"q": "Is The Smoking Bee open to everyone?", "a": "Yes, we welcome everyone, whether you're a local or just visiting the MCRD area."}, {"q": "Do you have knowledgeable staff to assist with product choices?", "a": "Absolutely! Our friendly staff is always available to provide guidance and recommendations."}, {"q": "Can I find local glass art at your shop?", "a": "Yes, we feature a selection of local glass art pieces that are both beautiful and functional."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92140 | MCRD Area", path: "/smoke-shop-92140-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/20.JPG" />
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
