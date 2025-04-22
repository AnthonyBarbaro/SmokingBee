import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92185 | Naval Medical Center",
    description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
    keywords: "smoke shop 92185, naval medical center, bongs, e-juices, delta-8, head shop near me, smoke shop open now, 420 shop in 92185, cheap glass pipes 92185, buy vapes in 92185, delta 8 92185",
    openGraph: {
      title: "Smoke Shop 92185 | Naval Medical Center",
      description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92185-san-diego",
      images: [{ url: "/images/about/5.JPG", alt: "Smoke Shop 92185 | Naval Medical Center" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92185 | Naval Medical Center",
      description: "Serving 92185 near Naval Medical Center with bongs, e-juices, and Delta-8 at The Smoking Bee.",
      images: ["/images/about/5.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92185-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92185 | Naval Medical Center", "item": "https://thesmokingbee.com/smoke-shop-92185-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92185_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop Near Naval Medical Center`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2><p>Conveniently located near Naval Medical Center, The Smoking Bee is your go-to destination for a wide variety of smoking and vaping products. Whether you’re looking for the perfect bong, flavorful e-juices, or the latest in Delta-8 products, we have everything you need to enhance your experience.</p><h2>Our Extensive Product Range</h2><p>At The Smoking Bee, we pride ourselves on our diverse selection. Our inventory includes:</p><ul><li>Bongs and water pipes for smooth smoking</li><li>Flavorful e-juices in a variety of tastes</li><li>Delta-8 products for a unique experience</li><li>Kratom capsules for those seeking natural alternatives</li><li>Stylish rolling trays for the perfect setup</li></ul><p>We understand that many of our customers have busy schedules, especially those connected with the Naval Medical Center. That’s why we strive to provide high-quality products that are also convenient. You can pop in on your way to or from your appointments, ensuring you leave with exactly what you need to unwind and enjoy.</p><h2>Why Choose The Smoking Bee?</h2><p>Our friendly staff is knowledgeable and always ready to help you find the right products that suit your needs. We aim to create a welcoming atmosphere where you can explore our offerings without any pressure. Plus, we are committed to keeping our prices competitive so that you can enjoy premium products without breaking the bank.</p><p>Visit us today at The Smoking Bee and discover why we are the preferred smoke shop for those near Naval Medical Center. Your satisfaction is our priority!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer bongs, e-juices, Delta-8 products, kratom capsules, and more."}, {"q": "Is The Smoking Bee close to Naval Medical Center?", "a": "Yes, we are conveniently located near the Naval Medical Center."}, {"q": "Do you have any special promotions?", "a": "Yes, we often have promotions and discounts. Check our website for the latest deals!"}, {"q": "What are Delta-8 products?", "a": "Delta-8 products are hemp-derived and provide a milder psychoactive effect compared to Delta-9 THC."}, {"q": "Can I visit The Smoking Bee during busy hours?", "a": "Absolutely! We’re open during regular business hours and strive to serve you quickly."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92185 | Naval Medical Center", path: "/smoke-shop-92185-san-diego" }
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
