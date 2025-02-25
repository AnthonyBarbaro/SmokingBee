import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative py-12 px-4 bg-gray-100">
      {/* Optional background image */}
      <Image
        src="/images/testimonial-bg.jpg"
        alt="Background"
        fill
        className="object-cover opacity-20"
      />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <blockquote className="bg-white p-6 rounded shadow text-left">
            <p className="italic mb-4">
              "The Smoking Bee has the best selection and amazing customer service. 
              I always find something new to try!"
            </p>
            <p className="font-semibold">- Alex R.</p>
          </blockquote>
          {/* Testimonial 2 */}
          <blockquote className="bg-white p-6 rounded shadow text-left">
            <p className="italic mb-4">
              "Hands down my favorite smoke shop in La Mesa. Quality products and friendly staff!"
            </p>
            <p className="font-semibold">- Jordan S.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
