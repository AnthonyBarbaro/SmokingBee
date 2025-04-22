import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92162 | Normal Heights",
    description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
    keywords: "smoke shop 92162, normal heights, glass bongs, kratom, vapes, head shop near me, smoke shop open now, 420 shop in 92162, cheap glass pipes 92162, best kratom shop, buy vapes in 92162",
    openGraph: {
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      url: "https://thesmokingbee.com/smoke-shop-92162-san-diego",
      images: [{ url: "/images/about/5.JPG", alt: "Smoke Shop 92162 | Normal Heights" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92162 | Normal Heights",
      description: "In 92162? The Smoking Bee offers glass bongs, premium kratom, and more near Normal Heights.",
      images: ["/images/about/5.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92162 | Normal Heights", "item": "https://thesmokingbee.com/smoke-shop-92162-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92162_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Friendly Neighborhood Smoke Shop in 92162!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Normal Heights</h2>
<p>If you’re in the 92162 area, look no further than The Smoking Bee for all your smoking needs! We pride ourselves on offering a diverse selection of products that cater to every preference, whether you’re a seasoned connoisseur or just starting out.</p>
<h2>What We Offer</h2>
<ul>
  <li><strong>Glass Bongs:</strong> Explore our extensive collection of glass bongs, perfect for enhancing your smoking experience.</li>
  <li><strong>Premium Kratom:</strong> Discover our range of kratom strains, sourced for quality and potency, to suit your wellness needs.</li>
  <li><strong>Vaping Supplies:</strong> We carry a variety of vapes and accessories for those who prefer a smoother alternative.</li>
  <li><strong>Rolling Papers & Accessories:</strong> Need quick rolling papers? We’ve got you covered! Plus, find advanced accessories to elevate your sessions.</li>
</ul>
<h2>Why Choose Us?</h2>
<p>At The Smoking Bee, we believe in providing not just products, but also knowledge and support. Our friendly staff is always on hand to share tips and recommend the best items based on your needs. We love to keep our customers informed about new arrivals and special promotions. Your satisfaction is our top priority!</p>
<h2>Visit Us Today!</h2>
<p>Whether you're a local or just passing through Normal Heights, make sure to stop by The Smoking Bee. We are conveniently located in the heart of the 92162 area, ready to serve you with a smile. Join our community of smoke enthusiasts and let us help you find exactly what you’re looking for!</p>`;
  const faqItems = [{"q": "What products do you offer at The Smoking Bee?", "a": "We offer glass bongs, premium kratom, vapes, rolling papers, and various smoking accessories."}, {"q": "Is The Smoking Bee located near Normal Heights?", "a": "Yes! We are conveniently located in the 92162 area, close to Normal Heights."}, {"q": "Can I get tips on using kratom?", "a": "Absolutely! Our knowledgeable staff is always happy to share tips and recommendations."}, {"q": "Do you have any promotions or discounts?", "a": "Yes! We regularly have promotions and discounts. Be sure to check in with us for the latest deals."}, {"q": "What are your store hours?", "a": "We are open daily! Please check our website for specific hours."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92162 | Normal Heights", path: "/smoke-shop-92162-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/5.JPG" />
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
