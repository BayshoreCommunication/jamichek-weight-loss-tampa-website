"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="">

            
            <div className="bg-black text-white text-center text-sm py-3">
                <span className="font-medium">$47 New Patient Special</span>
            </div>
            <div className="px-8 bg-[url('/images/hero/bg.png')] bg-center bg-cover">
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
                        <div className={`md:hidden flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
                            <Image
                                src="/images/hero/logo.png" // Replace with your logo
                                alt="Logo"
                                width={120}
                                height={120}
                                className="h-auto w-auto"
                            />
                        </div>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex gap-6 text-gray-800  font-medium items-center rounded-full bg-gray-200 p-2">
                            <a
                                href="#"
                                className="px-3 py-1 text-black hover:text-primary hover:underline hover:decoration-primary"
                            >
                                Home
                            </a>

                            {/* Dropdown with Icon */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary">
                                    Let us help you <ChevronDown size={16} />
                                </button>
                                {/* Dropdown */}
                                <div className="absolute left-0 mt-2 hidden w-48 rounded-lg bg-white shadow-lg group-hover:block">
                                    <a href="#" className="block px-4 py-2 ">
                                        Option 1
                                    </a>
                                    <a href="#" className="block px-4 py-2 ">
                                        Option 2
                                    </a>
                                </div>
                            </div>

                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary">
                                    Weight Loss Services <ChevronDown size={16} />
                                </button>
                                {/* Dropdown */}
                                <div className="absolute left-0 mt-2 hidden w-48 rounded-lg bg-white shadow-lg group-hover:block">
                                    <a href="#" className="block px-4 py-2 ">
                                        Option 1
                                    </a>
                                    <a href="#" className="block px-4 py-2 ">
                                        Option 2
                                    </a>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary"
                            >
                                Meet The Team
                            </a>
                            <a
                                href="#"
                                className="px-3 py-1 text-black hover:underline hover:decoration-primary hover:text-primary"
                            >
                                The Wellness Journal
                            </a>
                        </nav>

                        {/* Phone button (desktop) */}
                        <div className="hidden md:flex">
                            <a
                                href="tel:8139602225"
                                className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium"
                            >
                                <Phone size={18} />
                                813.960.2225
                            </a>
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
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-full bg-gray-100 text-primary font-semibold"
                            >
                                Home
                            </a>

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
                                        <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                                            Option 1
                                        </a>
                                        <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                                            Option 2
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block px-3 py-2 rounded-full bg-gray-100">
                                Weight Loss Services
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-full bg-gray-100">
                                Meet The Team
                            </a>
                            <a href="#" className="block px-3 py-2 rounded-full bg-gray-100">
                                The Wellness Journal
                            </a>

                            {/* Phone button */}
                            <a
                                href="tel:8139602225"
                                className="block text-center px-5 py-3 rounded-full bg-black text-white font-medium"
                            >
                                813.960.2225
                            </a>
                        </div>
                    )}
                </header>

                {/* hero section  */}
                <section className="max-w-[1640px] mx-auto px-8 py-12  text-center mt-[100px] md:mt-0">
                    {/* Profile Images */}
                    <div className="flex justify-center">
                        <div className="flex -space-x-4">
                            <Image
                                src="/images/hero/group1.png" // replace with your image
                                alt="Doctor 1"
                                width={70}
                                height={70}
                                className=""
                            />
                            <Image
                                src="/images/hero/group3.png" // replace with your image
                                alt="Doctor 1"
                                width={70}
                                height={70}
                                className=" z-10"
                            />
                            <Image
                                src="/images/hero/group2.png" // replace with your image
                                alt="Doctor 1"
                                width={70}
                                height={70}
                                className=""
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug md:py-12">
                        Lose Weight,{" "}
                        <span className="text-primary">Gain Energy</span> and Confidence
                        <br />
                        Guided by Tampa Bay Professionals
                    </h1>

                    {/* Subtext */}
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        Our expert doctor will tailor a treatment program to address your unique
                        needs, ensuring you achieve peak wellness.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
                        >
                            Not a patient yet? Book Now!
                        </a>
                    </div>
                </section>
            </div>
        </div >
    );
}
