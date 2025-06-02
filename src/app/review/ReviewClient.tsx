"use client";
import Head from "next/head";
import { useState } from "react";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";

const googleReviewLink = "https://g.page/r/CfDhjJ7fKcmOEBM/review"; // Replace this with your real link

export default function ReviewPage() {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviewRedirected, setReviewRedirected] = useState(false); // new state

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Anonymous Review",
          email: "info@thesmokingbee.com",
          message: `⭐ Rating: ${rating}/5\n\nFeedback:\n${feedback}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send feedback.");
      }
    } catch (err) {
      alert("Error sending feedback. Try again later.");
    }
  };

  const handleReset = () => {
    setRating(null);
    setFeedback("");
    setSubmitted(false);
    setReviewRedirected(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Head>
        <link rel="canonical" href="https://thesmokingbee.com/review" />
      </Head>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          How was your experience at{" "}
          <span className="text-gold">The Smoking Bee</span>?
        </h1>

        {rating === null && !reviewRedirected ? (
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => {
                  if (star === 5) {
                    setReviewRedirected(true);
                    window.open(googleReviewLink, "_blank");
                  } else {
                    setRating(star);
                  }
                }}
                className="text-yellow-500 hover:scale-110 transition transform text-4xl focus:outline-none"
              >
                <StarIcon className="w-8 h-8" />
              </button>
            ))}
          </div>
        ) : rating === 5 || reviewRedirected ? (
          <div className="space-y-4">
            <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto" />
            <p className="text-lg text-green-700 font-semibold">
              Thanks for leaving a 5-star review!
            </p>
            <p className="text-sm text-gray-700">
              📸 Please take a <strong>screenshot</strong> of your review to
              redeem <strong>25% off in-store</strong> (excluding tobacco products).
            </p>
            <p className="text-sm text-gray-500 italic">
              Show this at checkout or google review — offer valid through June.
            </p>
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              Leave another response
            </button>
          </div>
        ) : !submitted ? (
          <div className="text-left">
            <p className="mb-2 font-medium text-gray-700">
              We’d love to improve. What could we do better?
            </p>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring focus:ring-yellow-400 text-black"
              rows={4}
              placeholder="Your honest feedback helps us improve."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <button
                onClick={handleSubmit}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Submit Feedback
              </button>
              <button
                onClick={handleReset}
                className="text-sm text-gray-500 underline hover:text-gray-700"
              >
                Go back
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <CheckCircleIcon className="w-10 h-10 text-green-500 mx-auto" />
            <p className="text-green-600 font-semibold">
              Thanks for your feedback — we really appreciate it!
            </p>
            <p className="text-sm text-gray-700">
              📸 Please take a <strong>screenshot</strong> of your review to
              redeem <strong>25% off in-store</strong> (excluding tobacco products).
            </p>
            <p className="text-sm text-gray-500 italic">
              Show this at checkout — offer valid through June.
            </p>
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              Leave another response
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
