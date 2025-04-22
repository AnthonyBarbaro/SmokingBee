import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92101 | Downtown San Diego",
    description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
    keywords: "smoke shop 92101, downtown san diego, delta-8, rolling papers, head shop near me, smoke shop open now, 420 shop in 92101, delta 8 92101, rolling paper brands, buy vapes in 92101",
    openGraph: {
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      url: "https://thesmokingbee.com/smoke-shop-92101-san-diego",
      images: [{ url: "/images/about/22.JPG", alt: "Smoke Shop 92101 | Downtown San Diego" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92101 | Downtown San Diego",
      description: "Visit The Smoking Bee in 92101 for premium Delta-8, rolling papers, and more. Downtown’s best smoke shop awaits.",
      images: ["/images/about/22.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92101-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92101 | Downtown San Diego", "item": "https://thesmokingbee.com/smoke-shop-92101-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92101_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Discover the Best Smoke Shop in Downtown San Diego!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in 92101</h2><p>Located in the heart of Downtown San Diego, The Smoking Bee is your go-to smoke shop for all things smoking. Whether you’re a local or just visiting, our 92101 location offers a wide selection of premium products to enhance your smoking experience. From Delta-8 to high-quality rolling papers, we have everything you need for a perfect session.</p><h2>Our Product Range</h2><ul><li><strong>Delta-8 Products:</strong> Explore our extensive range of Delta-8 THC options, available in various forms to suit your preferences.</li><li><strong>Rolling Papers:</strong> Choose from a variety of rolling papers, including organic and flavored options, to roll your perfect joint.</li><li><strong>Glass Artistry:</strong> Check out our collection of local glass art pieces, perfect for both functional use and display.</li><li><strong>Vape Gear:</strong> We stock the latest in advanced vape technology, ensuring you have the best tools for your vaping needs.</li><li><strong>Blunt Wraps:</strong> Discover specialty blunt wraps that will elevate your smoking experience.</li></ul><p>At The Smoking Bee, we pride ourselves on providing a friendly atmosphere and knowledgeable staff ready to help you find exactly what you’re looking for. Our shop is designed to cater to both seasoned smokers and newcomers, making it the perfect destination for anyone in need of quality smoking supplies.</p><h2>Why Choose Us?</h2><p>Convenience is key in a bustling place like downtown, and we are strategically located for easy access. Our commitment to quality ensures that you’re not just buying products; you’re investing in a superior smoking experience. Whether you’re stocking up for a night out or just need a few essentials, The Smoking Bee is here to serve you.</p>`;
  const faqItems = [{"q": "What types of Delta-8 products do you offer?", "a": "We offer a variety of Delta-8 options, including edibles, tinctures, and vape cartridges."}, {"q": "Are your rolling papers organic?", "a": "Yes, we carry a selection of organic rolling papers alongside other popular options."}, {"q": "Do you sell vape gear?", "a": "Absolutely! We have the latest vape devices, accessories, and e-liquids available."}, {"q": "Is The Smoking Bee located near public transportation?", "a": "Yes, our location is easily accessible via public transportation, making it convenient for everyone."}, {"q": "Can I find local glass art at your shop?", "a": "Yes, we feature a range of local glass artistry that showcases unique and beautiful pieces."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92101 | Downtown San Diego", path: "/smoke-shop-92101-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/22.JPG" />
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
