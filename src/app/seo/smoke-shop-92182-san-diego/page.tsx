import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92182 | SDSU Area",
    description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
    keywords: "smoke shop 92182, sdsu, rolling papers, kratom, vape pods, head shop near me, smoke shop open now, 420 shop in 92182, vape store near SDSU, rolling paper brands, best kratom shop, buy vapes in 92182",
    openGraph: {
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
      url: "https://thesmokingbee.com/smoke-shop-92182-san-diego",
      images: [{ url: "/images/about/16.JPG", alt: "Smoke Shop 92182 | SDSU Area" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92182 | SDSU Area",
      description: "SDSU students in 92182 trust The Smoking Bee for rolling papers, kratom, and vape pods near campus.",
      images: ["/images/about/16.JPG"]
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92182 | SDSU Area", "item": "https://thesmokingbee.com/smoke-shop-92182-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92182_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Go-To Smoke Shop Near SDSU!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you're a student at San Diego State University, you're in luck! The Smoking Bee is your convenient smoke shop located right in the heart of the 92182 area. Whether you're looking for rolling papers, kratom, or vape pods, we've got you covered.</p><p>Our shelves are stocked with a wide range of must-have items that cater to all your smoking needs. Need to grab something quick between classes? Stop by during your lunch break and pick up your favorite rolling papers or a fresh supply of kratom.</p><h2>Why Choose Us?</h2><ul><li><strong>Convenience:</strong> Located just a stone's throw from campus, we are easily accessible for all SDSU students.</li><li><strong>Quality Products:</strong> We carry both budget-friendly and premium gear, ensuring that you can find exactly what you're looking for.</li><li><strong>Variety:</strong> From the latest vape pods to stylish water pipes, our selection is unbeatable.</li></ul><p>Looking to enhance your dorm experience? Invest in a new water pipe from The Smoking Bee to add a touch of style to your setup. You'll find our products not only meet your expectations but exceed them!</p><p>At The Smoking Bee, we prioritize customer satisfaction and are always ready to help you find the perfect product for your needs. Whether you're a seasoned smoker or just starting out, our friendly staff is here to guide you. Visit us today and discover why so many SDSU students trust us for their smoking essentials!</p>`;
  const faqItems = [{"q": "What products do you offer?", "a": "We offer rolling papers, kratom, vape pods, water pipes, and more."}, {"q": "Are you located near SDSU?", "a": "Yes, we are conveniently located in the 92182 area, just minutes from campus."}, {"q": "Do you have budget-friendly options?", "a": "Absolutely! We carry a range of products to fit every budget."}, {"q": "Can I find premium smoking gear at your shop?", "a": "Yes! We have a selection of high-end smoking gear for those looking for quality."}, {"q": "Is The Smoking Bee open during weekends?", "a": "Yes, we are open on weekends to serve all your smoking needs!"}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92182 | SDSU Area", path: "/smoke-shop-92182-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/16.JPG" />
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
