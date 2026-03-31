'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          <Link href="/">
            <img src="/assets/bz_logo.png" alt="Logo" className="h-14 w-auto mb-10" 
                 onError={(e) => (e.currentTarget.src = "https://bzanalytics.ai/assets/images/logo/logo.png")} />
          </Link>
          <p className="text-[#ccc] text-lg leading-relaxed mb-10 max-w-sm">
            Empowering Every Mind. BzAnalytics is a global technology and IT consulting company.
          </p>
          <div className="flex gap-10">
            <a href="mailto:hello@bzanalytics.ai" className="text-white text-xl font-bold border-b border-[#ff6b00] pb-2 transition-transform hover:translate-y-[-5px]">hello@bzanalytics.ai</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
          <div>
            <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-10 opacity-50">Quick Links</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Home</Link></li>
              <li><Link href="/about" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">About Us</Link></li>
              <li><Link href="/services" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-10 opacity-50">Success</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/portfolio" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Cases</Link></li>
              <li><Link href="/blogs" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Blogs</Link></li>
              <li><Link href="/careers" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-10 opacity-50">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/contact" className="text-[#aaa] transition-colors hover:text-[#ff6b00]">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-10">
        <p className="text-[#666] text-sm">© {new Date().getFullYear()} BzAnalytics Inc. All Rights Reserved.</p>
        <Link href="/consult" className="text-[#ff6b00] text-sm font-bold uppercase tracking-widest hover:underline underline-offset-8">Schedule a consultation →</Link>
      </div>
    </footer>
  );
}
