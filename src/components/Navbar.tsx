"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <nav className="bg-dark text-white px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold cursor-pointer tracking-wide">
          The Smoking Bee
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        ☰
      </button>

      {/* Menu Items */}
      <div className={`${menuOpen ? "block" : "hidden"} md:flex md:space-x-8 text-lg mt-4 md:mt-0`}>
        {["Home", "About", "Shop", "Contact"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`}>
            <span className="hover:text-gold block py-2 md:py-0 transition">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
