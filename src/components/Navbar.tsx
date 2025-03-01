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
        {/* Using text-3xl + font-black for extra emphasis */}
        <span className="text-3xl font-black cursor-pointer tracking-wide hover:underline transition">
          The Smoking Bee
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:space-x-8 text-lg mt-4 md:mt-0`}
      >
        {["Home", "About", "Shop", "Contact"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
            <span className="block py-2 md:py-0 font-extrabold hover:underline transition">
              {item}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
