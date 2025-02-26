// src/app/about/page.tsx
import AboutSlideshow from "@/components/AboutSlideshow";

export default function AboutPage() {
  return (
    <section className="bg-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gold mb-8">About The Smoking Bee</h1>
        
        {/* Introduction Paragraph */}
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10">
          Located in the heart of La Mesa, The Smoking Bee is your go-to destination 
          for premium smoking accessories. From elegant glass pipes to top-tier vapes, 
          our curated selection and knowledgeable staff ensure you’ll find exactly 
          what you’re looking for, whether you’re a seasoned connoisseur or just beginning 
          your journey.
        </p>

        {/* Slideshow */}
        <AboutSlideshow />

        {/* Additional Content */}
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mt-10 mb-10">
          We believe in offering more than just products—we provide a welcoming environment 
          and expert guidance. Our team stays updated on the latest trends, ensuring you have 
          access to the newest designs and innovative smoking technologies. Whether you need 
          advice on maintaining your pieces or want to explore new flavors, we’re here to help 
          every step of the way.
        </p>

        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
          At The Smoking Bee, community is at the heart of what we do. We regularly host events, 
          support local artists, and invite you to join our hive. Stop by, say hello, and discover 
          why we’re La Mesa’s favorite hub for quality, authenticity, and great conversation. 
          Welcome to the family!
        </p>
      </div>
    </section>
  );
}
