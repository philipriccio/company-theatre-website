"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container-main mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - B&W */}
        <Link href="/" className="flex flex-col items-center" onClick={closeMenu}>
          <Image 
            src="/images/logo.svg" 
            alt="Company Theatre" 
            width={200} 
            height={52} 
            className="h-8 w-auto brightness-0 invert" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#productions" className="nav-link text-white/80 hover:text-white">
            Productions
          </Link>
          <Link href="/#about" className="nav-link text-white/80 hover:text-white">
            About
          </Link>
          <Link href="/#contact" className="nav-link text-white/80 hover:text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="container-main mx-auto px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/#productions" 
              className="nav-link text-white/80 hover:text-white py-2"
              onClick={closeMenu}
            >
              Productions
            </Link>
            <Link 
              href="/#about" 
              className="nav-link text-white/80 hover:text-white py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/#contact" 
              className="nav-link text-white/80 hover:text-white py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
