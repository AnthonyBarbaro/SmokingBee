// src/app/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to send message.");
      } else {
        setSuccess("Thanks for reaching out! We’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left bg-transparent p-6 rounded-md shadow-lg">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block mb-1 font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 rounded text-dark"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block mb-1 font-semibold text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 rounded text-dark"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block mb-1 font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full p-2 rounded text-dark"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gold text-dark font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Success/Error Messages */}
      {success && <p className="mt-4 text-green-400 font-semibold">{success}</p>}
      {error && <p className="mt-4 text-red-400 font-semibold">{error}</p>}
    </form>
  );
}
