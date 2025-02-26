// src/app/about/page.tsx
import AboutSlideshow from "@/components/AboutSlideshow";

export default function AboutPage() {
  return (
    <section className="bg-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gold mb-8">About The Smoking Bee</h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10">
          Located in the heart of La Mesa, we offer the best smoking accessories,
          glass pipes, and vapes. Whether you're a seasoned enthusiast or new to
          the scene, we’re here to help.
        </p>

        {/* Slideshow */}
        <AboutSlideshow />

        {/* Optional additional content below the slideshow */}
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mt-10">
          Learn more about our staff, our story, and our commitment to providing
          the highest quality products.
        </p>
      </div>
    </section>
  );
}
