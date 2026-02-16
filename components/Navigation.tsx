import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container-main mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - B&W */}
        <Link href="/" className="flex flex-col items-center">
          <Image 
            src="/images/logo.png" 
            alt="Company Theatre" 
            width={120} 
            height={32} 
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
        <button className="md:hidden text-white p-2">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
