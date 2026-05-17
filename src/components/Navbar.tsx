"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-[#F2ECE4] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#2D2A26]">
              Blush &amp; Linen
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#2D2A26] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-[#D4B4AF] hover:bg-[#C49B95] text-[#2D2A26] px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 font-bold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D2A26] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#F2ECE4]"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-sans tracking-widest uppercase text-[#2D2A26] py-2 border-b border-[#F2ECE4]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-4 bg-[#2D2A26] text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
