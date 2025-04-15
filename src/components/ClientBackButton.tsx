"use client";

import { useRouter } from "next/navigation";

export default function ClientBackButtonOverlay() {
  const router = useRouter();

  return (
    /* A fixed container that sits on top */
    <div className="fixed mid-10 right-4 z-50">
      <button
        onClick={() => router.back()}
        className="px-4 py-2 text-white bg-black bg-opacity-60 rounded hover:bg-opacity-80"
      >
        &larr;
      </button>
    </div>
  );
}
