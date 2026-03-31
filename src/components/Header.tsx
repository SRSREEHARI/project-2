'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${showScroll ? 'bg-black/90' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-5 transition-all duration-300`}>
      <Link href="/">
        <img src="/assets/bz_logo.png" alt="Logo" className="h-11 w-auto" 
             onError={(e) => (e.currentTarget.src = "https://bzanalytics.ai/assets/images/logo/logo.png")} />
      </Link>
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#ff6b00]">Home</Link>
        <Link href="/about" className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#ff6b00]">About Us</Link>
        <Link href="/services" className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#ff6b00]">Services</Link>
        <Link href="/portfolio" className="text-sm font-semibold uppercase tracking-widest text-[#ff6b00] transition-colors">Success Stories</Link>
        <Link href="/blogs" className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#ff6b00]">Blogs</Link>
        <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:text-[#ff6b00]">Contact Us</Link>
        <div className="flex items-center gap-2 ml-5 cursor-pointer">
          <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-5 h-auto rounded" />
          <span className="text-xs font-bold text-white">EN</span>
        </div>
      </nav>
      <Link href="/contact" className="bg-[#ff6b00] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95">
        Schedule a consultation
      </Link>
    </header>
  );
}
