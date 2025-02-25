export default function Footer() {
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
            <p className="text-sm text-gray-300">Phone: (555) 123-4567</p>
          </div>
  
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition">Instagram</a>
              <a href="#" className="hover:text-gold transition">Facebook</a>
              <a href="#" className="hover:text-gold transition">Twitter</a>
            </div>
          </div>
        </div>
  
        <div className="border-t border-white/20 pt-4 text-center text-sm">
          <p>© {currentYear} The Smoking Bee. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  