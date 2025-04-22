import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Find Rolling Papers Near You | The Smoking Bee",
    description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
    keywords: "rolling papers near me, best rolling papers, cones, wraps, smoke shop, head shop near me, smoke shop open now, 420 shop near me, rolling paper brands",
    openGraph: {
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
      url: "https://thesmokingbee.com/rolling-papers-near-me",
      images: [{ url: "/images/about/2.JPG", alt: "Find Rolling Papers Near You | The Smoking Bee" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Rolling Papers Near You | The Smoking Bee",
      description: "Need rolling papers? The Smoking Bee offers top brands of papers, cones, and wraps to elevate your smoking experience.",
      images: ["/images/about/2.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/rolling-papers-near-me",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Find Rolling Papers Near You | The Smoking Bee", "item": "https://thesmokingbee.com/rolling-papers-near-me"}]}`
    }
  };
}

export default async function rolling_papers_near_me_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Source for Premium Rolling Papers!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee!</h2><p>If you're on the hunt for the best rolling papers in town, look no further! The Smoking Bee is your go-to destination for all things rolling. We pride ourselves on offering a wide selection of top-notch rolling papers, cones, and wraps to enhance your smoking experience.</p><h2>Our Premium Selection</h2><p>At The Smoking Bee, we understand that quality matters. That’s why we carry only the finest brands in the industry, including:</p><ul><li><strong>RAW:</strong> Known for their natural and unrefined rolling papers.</li><li><strong>Elements:</strong> Perfect for a smooth, clean burn.</li><li><strong>Flavored Wraps:</strong> Add a twist to your smoking session with our variety of flavors.</li></ul><p>No matter if you’re a beginner or a seasoned connoisseur, we have something for everyone. Our rolling papers come in various sizes and styles, ensuring that you can find the perfect fit for your needs.</p><h2>Why Choose Us?</h2><p>Shopping at The Smoking Bee means more than just buying rolling supplies; it’s about enhancing your overall experience. Our knowledgeable staff is here to help you choose the right products that suit your preferences. Moreover, we’re committed to providing a welcoming atmosphere where you can explore our offerings at your own pace.</p><p>So, whether you need classic papers, cones for convenience, or unique flavored wraps, The Smoking Bee has you covered. Visit us today and elevate your smoking sessions to new heights!</p>`;
  const faqItems = [{"q": "What types of rolling papers do you offer?", "a": "We offer a variety of rolling papers, including classic, flavored, and premium brands like RAW and Elements."}, {"q": "Do you have cones and wraps?", "a": "Yes, we carry a selection of cones and wraps to suit all your rolling needs."}, {"q": "Are your products suitable for beginners?", "a": "Absolutely! We have options for both beginners and experienced smokers."}, {"q": "Is The Smoking Bee a local store?", "a": "Yes, we are a local business dedicated to providing quality smoking supplies to our community."}, {"q": "Can I get recommendations for rolling papers?", "a": "Of course! Our friendly staff is always available to help you find the perfect rolling papers for your sessions."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Find Rolling Papers Near You | The Smoking Bee", path: "/rolling-papers-near-me" }
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
