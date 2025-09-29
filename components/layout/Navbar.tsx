"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-black text-white text-center text-sm py-3">
        <span className="font-medium">$47 New Patient Special</span>
      </div>
      <div>
        <header className="w-full">
          {/* Navbar Section */}
          <div className="max-w-[1640px] mx-auto px-8 py-4 flex items-start justify-between relative z-50 ">
            {/* Logo - Desktop */}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/images/hero/logo.png" // Replace with your logo
                alt="Logo"
                width={1000}
                height={800}
                className="h-full w-[200px]"
              />
            </div>

            {/* Logo - Mobile (Centered) */}
            <div
              className={`md:hidden flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/images/hero/logo.png" // Replace with your logo
                alt="Logo"
                width={1000}
                height={1000}
                className="h-auto w-auto"
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex gap-6 text-gray-800  font-medium items-center rounded-full bg-gray-200 p-2">
              <Link
                href="#"
                className="px-3 py-1 text-black hover:text-primary hover:underline hover:decoration-primary"
              >
                Home
              </Link>

              {/* Dropdown with Icon */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary">
                  Let us help you <ChevronDown size={16} />
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 hidden w-48 rounded-lg bg-white shadow-lg group-hover:block">
                  <Link href="#" className="block px-4 py-2 ">
                    Option 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 ">
                    Option 2
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary">
                  Weight Loss Services <ChevronDown size={16} />
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 hidden w-48 rounded-lg bg-white shadow-lg group-hover:block">
                  <Link href="#" className="block px-4 py-2 ">
                    Option 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 ">
                    Option 2
                  </Link>
                </div>
              </div>

              <Link
                href="#"
                className="px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary"
              >
                Meet The Team
              </Link>
              <Link
                href="#"
                className="px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary"
              >
                The Wellness Journal
              </Link>
            </nav>

            {/* Phone button (desktop) */}
            <div className="hidden md:flex">
              <Link
                href="tel:8139602225"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium"
              >
                <Phone size={18} />
                813.960.2225
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg px-8 py-4 space-y-4">
              <Link
                href="#"
                className="block px-3 py-2 rounded-full bg-gray-100 text-primary font-semibold"
              >
                Home
              </Link>

              {/* Dropdown (toggleable on mobile) */}
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-full bg-gray-100"
                >
                  Let us help you <ChevronDown size={16} />
                </button>
                {dropdownOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      Option 1
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      Option 2
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#"
                className="block px-3 py-2 rounded-full bg-gray-100"
              >
                Weight Loss Services
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-full bg-gray-100"
              >
                Meet The Team
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-full bg-gray-100"
              >
                The Wellness Journal
              </Link>

              {/* Phone button */}
              <Link
                href="tel:8139602225"
                className="block text-center px-5 py-3 rounded-full bg-black text-white font-medium"
              >
                813.960.2225
              </Link>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
