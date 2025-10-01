// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Home", "Services", "Projects", "About", "Contact"];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo with Image */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <Image
                        src="/images/logo.png"
                        alt="Gigateam Solutions Logo"
                        width={48}
                        height={48}
                        className="rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300"
                        priority
                    />
                    <div
                        className={`transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"
                            }`}
                    >
                        <h1 className="text-xl font-bold leading-tight">GIGATEAM</h1>
                        <p className="text-xs font-medium opacity-90">SOLUTIONS LIMITED</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={path}
                                className={`font-semibold transition-all duration-300 hover:text-amber-500 ${isScrolled ? "text-gray-700" : "text-white"
                                    } relative group`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}


                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                                }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${isMobileMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                    {navItems.map((item) => {
                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                href={path}
                                className="text-gray-800 font-semibold py-2 hover:text-amber-500 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        );
                    })}

                </div>
            </div>
        </nav>
    );
}
