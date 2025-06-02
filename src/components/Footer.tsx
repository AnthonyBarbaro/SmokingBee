//src/components/Footer.tsx
import Link from "next/link"
export default function Footer({ seoPages }: { seoPages: { slug: string; title: string }[] }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
        {/* Store Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">The Smoking Bee</h3>
          <p className="text-sm text-gray-300">
            La Mesa’s premier smoke shop with top-quality products and service.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>

          <p className="text-sm text-gray-300">
            7584 University Ave Suite B, La Mesa, CA 91942
          </p>

          <p className="text-sm text-gray-300">
            Phone:&nbsp;
            <a
              href="tel:+16194677055"
              aria-label="Call The Smoking Bee at (619) 467-7055"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              (619) 467-7055
            </a>
          </p>

          <p className="text-sm text-gray-300">
            Email:&nbsp;
            <a
              href="mailto:info@thesmokingbee.com"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              info@thesmokingbee.com
            </a>
          </p>
        </div>

        {/* Social or Additional Info */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/smokingbeelamesa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576696784984"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Our new Link Bag Section */}
        <div className="sm:col-span-3">
        <ul className="space-y-1 text-sm">
          {seoPages.slice(0,4).map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/${slug}`} className="text-gray-300 hover:text-gold">
                {title}
              </Link>
            </li>
          ))}
        </ul>
          <a
            href="/sitemap.html"
            className="text-sm text-gray-300 hover:text-gold transition"
          >
            HTML Sitemap
          </a>
        </div>
      </div>
      
      <div className="border-t border-white/20 pt-4 text-center text-sm">
        <p>© {currentYear} The Smoking Bee. All rights reserved.</p>
      </div>
    </footer>
  );
}
