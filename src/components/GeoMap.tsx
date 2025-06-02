"use client";

import Link from "next/link";
import Image from "next/image";

export default function GeoMap() {
  const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = googleApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=place_id:ChIJ1wp1kNtX2YAR8OGMnt8pyY4`
  : null;

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gold mb-6">Visit Our Shop</h2>
      <p className="text-lg text-gray-700 mb-6">
        Stop by our store in La Mesa for premium smoking accessories and expert advice.
      </p>

      {/* Google Map or Static Image Fallback */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {mapUrl ? (
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
          />
        ) : (
          <Image
            src="/images/static-map.jpg"
            alt="The Smoking Bee - Location Map"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-800">
        📍 7584 University Ave Suite B, La Mesa, CA 91942
      </p>
      <p className="mt-2 text-lg">
        <Link
          href="https://www.google.com/maps?q=7584+University+Ave+Suite+B,+La+Mesa,+CA+91942"
          target="_blank"
          className="text-gold font-bold underline hover:text-yellow-600"
        >
          Open in Google Maps
        </Link>
      </p>
    </section>
  );
}
