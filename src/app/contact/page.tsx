// src/app/contact/page.tsx (Server Component)
export const metadata = {
  title: "Contact | The Smoking Bee",
  description: "Contact The Smoking Bee for premium smoking accessories in La Mesa.",
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    // Use min-h-screen to fill the whole viewport,
    // and a consistent bg color for the entire section
    <section className="bg-dark text-white min-h-screen py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gold mb-8">Contact The Smoking Bee</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10">
          We’d love to hear from you! Fill out the form below and our team will get in touch shortly.
        </p>

        <ContactForm />

        <p className="text-xl md:text-2xl text-gray-100 mt-10">
          Or reach us directly at <strong>info@thesmokingbee.com</strong> or call us at <strong>(619) 467-7055</strong>.
        </p>
      </div>
    </section>
  );
}
