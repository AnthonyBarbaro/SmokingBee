//src/components/GeoMap.tsx
"use client"; // ✅ Forces this to be a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GeoMap() {
  const [mapUrl, setMapUrl] = useState<string | null>(null);
  const [useStaticImage, setUseStaticImage] = useState(false); // ✅ Controls fallback

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Ensures it's running only in the client
      const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
      if (googleApiKey) {
        const testMapUrl = `https://www.google.com/maps/embed/v1/place?q=7584+University+Ave+Suite+B,+La+Mesa,+CA+91942&key=${googleApiKey}`;

        // Try loading the API key by fetching the URL
        fetch(testMapUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Google Maps API request failed.");
            }
            setMapUrl(testMapUrl);
          })
          .catch(() => {
            console.error("❌ Google Maps API Key is invalid or missing. Using static map image.");
            setUseStaticImage(true); // ✅ Fallback to static image
          });
      } else {
        console.error("❌ Google Maps API Key is missing. Using static map image.");
        setUseStaticImage(true); // ✅ Fallback to static image
      }
    }
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gold mb-6">Visit Our Shop</h2>
      <p className="text-lg text-gray-700 mb-6">
        Stop by our store in La Mesa for premium smoking accessories and expert advice.
      </p>

      {/* Google Maps Iframe or Static Map Fallback */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {useStaticImage ? (
          <Image
            src="/images/static-map.jpg" // ✅ Fallback image
            alt="The Smoking Bee - Location Map"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        ) : (
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl!} // ✅ Safe since we only set it when valid
          />
        )}
      </div>

      {/* Address + Google Maps Link */}
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
