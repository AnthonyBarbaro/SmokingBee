//src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#C49A02] text-white px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Logo / Brand */}
      <Link href="/">
        <span className="text-3xl font-black cursor-pointer tracking-wide hover:underline transition">
          THE SMOKING BEE
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          menuOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile & Desktop Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#C49A02] text-white z-50 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:relative md:w-auto md:h-auto md:bg-transparent md:shadow-none md:transform-none`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 text-3xl md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col items-center mt-16 space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 text-lg">
          {["Home", "About", "Shop", "Contact","Review"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block py-2 font-extrabold hover:underline transition text-center"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
