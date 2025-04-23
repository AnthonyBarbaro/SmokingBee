import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92177 | Linda Vista",
    description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
    keywords: "smoke shop 92177, linda vista, delta-8, disposable vapes, water pipes, head shop near me, smoke shop open now, 420 shop in 92177, delta 8 92177, buy vapes in 92177, cheap glass pipes 92177",
    openGraph: {
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      url: "https://thesmokingbee.com/smoke-shop-92177-san-diego",
      images: [{ url: "/images/about/3.JPG", alt: "Smoke Shop 92177 | Linda Vista" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92177 | Linda Vista",
      description: "Linda Vista’s smoke shop for Delta-8, disposable vapes, and water pipes. Visit The Smoking Bee in 92177.",
      images: ["/images/about/3.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92177-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92177 | Linda Vista", "item": "https://thesmokingbee.com/smoke-shop-92177-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92177_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Neighborhood Smoke Shop in Linda Vista!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee in Linda Vista!</h2><p>Located right in the heart of the 92177 area, The Smoking Bee is your go-to destination for all things smoke-related. Whether you're looking for the latest Delta-8 products, sleek disposable vapes, or high-quality water pipes, we have something for everyone.</p><h2>Explore Our Product Range</h2><p>At The Smoking Bee, we pride ourselves on offering a diverse selection of products to meet your smoking needs:</p><ul><li><strong>Delta-8 Products:</strong> Experience the unique effects of Delta-8 with our carefully curated selection. From edibles to oils, we have what you need to unwind.</li><li><strong>Disposable Vapes:</strong> Perfect for on-the-go vaping, our disposable options are easy to use and come in a variety of flavors.</li><li><strong>Water Pipes:</strong> Browse our stunning collection of water pipes, designed for both functionality and style. Whether you're a novice or a seasoned smoker, we have the perfect piece for you.</li></ul><h2>Why Choose Us?</h2><p>At The Smoking Bee, we are dedicated to providing our customers with the best shopping experience possible. Our knowledgeable staff is always on hand to help you find the right products and answer any questions you may have. Plus, we regularly update our inventory to ensure you have access to the latest trends and flavors in the market.</p><p>Whether you're a local resident or just passing through Linda Vista, we invite you to drop by and see what we have to offer. Enjoy a friendly atmosphere and discover why The Smoking Bee is the top choice for smoke enthusiasts in 92177!</p>`;
  const faqItems = [{"q": "What products does The Smoking Bee offer?", "a": "We offer Delta-8 products, disposable vapes, and water pipes."}, {"q": "Is The Smoking Bee located in Linda Vista?", "a": "Yes, we are conveniently located in the Linda Vista neighborhood of San Diego."}, {"q": "Do you have travel-friendly vape options?", "a": "Absolutely! We stock a variety of disposable vapes that are perfect for on-the-go."}, {"q": "Can I find unique glass pieces at your shop?", "a": "Yes, we have a great selection of statement glass pieces for your home setup."}, {"q": "Is the product selection updated regularly?", "a": "Yes, we frequently update our inventory to bring you fresh flavors and modern hardware."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92177 | Linda Vista", path: "/smoke-shop-92177-san-diego" }
        ]}
      />

      <HeroSection tagline={heroTag} imageSrc="/images/about/3.JPG" />
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
