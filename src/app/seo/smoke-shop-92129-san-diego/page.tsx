import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import AnimatedCategorySection from "@/components/AnimatedCategorySection";
import CTASection from "@/components/CTASection";
import { getCollections, getAllProducts } from "@/lib/shopify";
import GeoMapWrapper from "@/components/GeoMapWrapper";
import BreadcrumbClientWrapper from "@/components/SEO/BreadcrumbClientWrapper";

export async function generateMetadata() {
  return {
    title: "Smoke Shop 92129 | Rancho Peñasquitos",
    description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
    keywords: "smoke shop 92129, rancho penasquitos, hookah tobacco, disposable vapes, head shop near me, smoke shop open now, 420 shop in 92129, hookah flavors 92129, buy vapes in 92129",
    openGraph: {
      title: "Smoke Shop 92129 | Rancho Peñasquitos",
      description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
      url: "https://thesmokingbee.com/smoke-shop-92129-san-diego",
      images: [{ url: "/images/about/3.JPG", alt: "Smoke Shop 92129 | Rancho Peñasquitos" }]
    },
    twitter: {
      card: "summary_large_image",
      title: "Smoke Shop 92129 | Rancho Peñasquitos",
      description: "Rancho Peñasquitos (92129) smokers find hookah tobacco, disposable vapes, and more at The Smoking Bee.",
      images: ["/images/about/3.JPG"]
    },
    alternates: {
      canonical: "https://thesmokingbee.com/smoke-shop-92129-san-diego",
    },
    other: {
      "application/ld+json": `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://thesmokingbee.com/"}, {"@type": "ListItem", "position": 2, "name": "Smoke Shop 92129 | Rancho Pe\u00f1asquitos", "item": "https://thesmokingbee.com/smoke-shop-92129-san-diego"}]}`
    }
  };
}

export default async function smoke_shop_92129_san_diego_Page() {
  const [categories, products] = await Promise.all([
    getCollections(),
    getAllProducts(),
  ]);
  const safeCategories = (categories ?? []).filter(c => c?.node?.id);

  const heroTag = `Your Local Smoke Shop in Rancho Peñasquitos!`;
  const htmlContent = `<h2>Welcome to The Smoking Bee</h2>
<p>Located in the heart of Rancho Peñasquitos (92129), The Smoking Bee is your one-stop shop for all smoking needs. Whether you are a seasoned smoker or just starting, we have everything you need to enhance your experience. Our commitment to the local community ensures that we provide the finest selection of products tailored to meet the diverse preferences of our customers.</p>
<h2>Our Product Range</h2>
<ul>
  <li><strong>Hookah Tobacco:</strong> Explore a vast selection of hookah flavors that will satisfy any palate. From fruity to minty, we have something for everyone!</li>
  <li><strong>Disposable Vapes:</strong> Perfect for those on-the-go, our disposable vape pens come in various flavors and strengths, making it easy to find your perfect match.</li>
  <li><strong>Top-Brand Accessories:</strong> We offer a wide range of accessories, including rolling trays, lighters, and more, to enhance your smoking experience.</li>
</ul>
<h2>Why Choose The Smoking Bee?</h2>
<p>At The Smoking Bee, we strive to make smoking not just a habit, but a delightful experience. Our knowledgeable staff is always on hand to help you choose the right products that suit your needs. We believe in offering quality over quantity, ensuring that all our products are sourced from reputable brands.</p>
<p>With a friendly atmosphere and a passion for the smoking culture, we aim to create a welcoming environment for everyone in the 92129 community. Whether you’re looking for a quick purchase or want to explore new flavors, we’ve got you covered!</p>
<p>Visit us today and discover why The Smoking Bee is the go-to smoke shop in Rancho Peñasquitos!</p>`;
  const faqItems = [{"q": "What types of products do you offer?", "a": "We offer a wide range of hookah tobacco, disposable vapes, and smoking accessories."}, {"q": "Are your products suitable for beginners?", "a": "Absolutely! We have products for all experience levels, including beginner-friendly options."}, {"q": "Can I find specific brands at The Smoking Bee?", "a": "Yes, we stock top brands to ensure quality and variety in your choices."}, {"q": "Is there a loyalty program available?", "a": "Yes, we offer a loyalty program to reward our regular customers with discounts and special offers."}];

  return (
    <>
      <BreadcrumbClientWrapper
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Smoke Shop 92129 | Rancho Peñasquitos", path: "/smoke-shop-92129-san-diego" }
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
