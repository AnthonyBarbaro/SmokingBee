  // src/app/contact/page.tsx
export const metadata = {
    title: "Contact | The Smoking Bee",
    description: "Contact The Smoking Bee for premium smoking accessories in La Mesa.",
  };
  
  export default function ContactPage() {
    return (
      <section className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="mb-4 text-center">We’d love to hear from you!</p>
        <ul className="list-disc list-inside text-lg">
          <li>
          <li><strong>Address:</strong> 7584 University Ave Suite B, La Mesa, CA 91942</li>
          </li>
          <li>
            <strong>Phone:</strong> (555) 123-4567
          </li>
          <li>
            <strong>Email:</strong> info@thesmokingbee.com
          </li>
        </ul>
      </section>
    );
  }
  