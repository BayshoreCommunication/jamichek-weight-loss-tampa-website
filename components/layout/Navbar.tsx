"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const empowerItems = [
  { href: "/empower", label: "All Empower Services" },
  { href: "/empower/morpheus8", label: "Morpheus8" },
  { href: "/empower/vtone", label: "VTone" },
  { href: "/empower/evolve-tone", label: "Evolve Tone" },
  { href: "/empower/evolvex", label: "EvolveX" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Meet the Team" },
  { href: "/medical-weight-loss", label: "Medical Weight Loss" },
  { href: "/vitamins-peptides", label: "Vitamins & Peptides" },
  { href: "/regenerative-medicine", label: "Regenerative Medicine" },
  { href: "/empower", label: "Empower" },
  { href: "/skincare", label: "Skincare" },
  { href: "/the-wellness-journal", label: "The Wellness Journal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [empowerOpen, setEmpowerOpen] = useState(false);
  const [mobileEmpowerOpen, setMobileEmpowerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setEmpowerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isEmpowerActive = pathname.startsWith("/empower");

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-3 z-50 relative overflow-x-hidden">
        <span className="font-medium">$47 New Patient Special</span>
      </div>

      {/* Header */}
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 animate-slideDown"
            : "relative bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1640px] mx-auto px-8 py-4 flex justify-between relative z-50 transition-all duration-700 gap-10 items-center ${
            isSticky ? "items-center" : "items-start"
          } ${mobileOpen ? "items-start" : "items-start"}`}
        >
          {/* Logo - Desktop */}
          <div className="">
            <Image
              src="/images/hero/logo.png"
              alt="Logo"
              width={isSticky ? 100 : 200}
              height={isSticky ? 100 : 200}
              className={`transition-all duration-500 w-[150px] lg:w-[200px] `}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-800 font-medium bg-gray-200 px-8 py-3 rounded-2xl">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? "text-primary font-medium underline"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Empower Dropdown */}
            {/* <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setEmpowerOpen((prev) => !prev)}
                className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                  isEmpowerActive
                    ? "text-primary font-medium underline"
                    : "hover:text-primary"
                }`}
              >
                Empower
                <ChevronDown
                  size={14}
                  className={`transition-transform ${empowerOpen ? "rotate-180" : ""}`}
                />
              </button>
              {empowerOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[200px] py-2 z-50">
                  {empowerItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setEmpowerOpen(false)}
                      className={`block px-5 py-2.5 text-sm hover:bg-[#f6fff0] hover:text-primary transition-colors ${
                        pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {navItems.slice(5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? "text-primary font-medium underline"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone button (desktop) */}
          <div className="hidden lg:flex">
            <Link
              href="tel:8132697546"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium hover:bg-primary transition-colors"
            >
              <Phone size={18} />
              813.269.7546
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-gray-800 font-medium border-t shadow-sm">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Empower Accordion */}
            {/* <div>
              <button
                onClick={() => setMobileEmpowerOpen((prev) => !prev)}
                className={`flex items-center gap-1 w-full transition-colors ${
                  isEmpowerActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                Empower
                <ChevronDown
                  size={14}
                  className={`transition-transform ml-1 ${
                    mobileEmpowerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileEmpowerOpen && (
                <div className="mt-2 ml-4 flex flex-col space-y-3">
                  {empowerItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileEmpowerOpen(false);
                      }}
                      className={`text-sm transition-colors ${
                        pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {navItems.slice(5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:8132697546"
              className="bg-black text-white px-5 py-2 rounded-full text-center hover:bg-primary transition-colors"
            >
              Call: 813.269.7546
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
