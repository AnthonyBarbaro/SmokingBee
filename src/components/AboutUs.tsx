import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side (Image) */}
        <div className="relative w-full h-64 md:h-[400px]">
          <Image
            src="/images/about-us.jpg"
            alt="Inside The Smoking Bee"
            fill
            className="object-cover rounded shadow"
          />
        </div>
        {/* Right Side (Text) */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About The Smoking Bee</h2>
          <p className="text-lg mb-4">
            Located in the heart of La Mesa, we’re dedicated to providing a
            curated selection of top-quality smoking accessories. Whether you’re
            a seasoned enthusiast or new to the scene, our friendly staff is
            here to help.
          </p>
          <p className="text-lg">
            We believe in quality, community, and exceptional customer service.
            Come discover why The Smoking Bee is the buzz of La Mesa!
          </p>
        </div>
      </div>
    </section>
  );
}
