'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MetaverseList from "@/components/MetaverseList";
import About from "@/components/About/About";
import { portfolioData } from "@lib/api";

const slides = [
  { 
    bg: "https://bzanalytics.ai/assets/images/slideshow/image1.jpeg", 
    title: "Future Tech", 
    desc: "AI-driven solutions tailored to innovate and transform digital landscapes.", 
    btn: "Learn more about us", 
    to: "/about" 
  },
  { 
    bg: "https://bzanalytics.ai/assets/images/slideshow/image2.jpeg", 
    title: "Smart Minds", 
    desc: "Crafting seamless UI experiences that elevate user interactions worldwide.", 
    btn: "Work with us", 
    to: "/contact" 
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-black">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-10 md:px-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10" />
            <img src={slides[slide]!.bg} alt="Slide" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 max-w-4xl">
          <motion.h1 
            key={slides[slide]!.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-[100px] font-black leading-[0.9] mb-10"
          >
            {slides[slide]!.title}
          </motion.h1>
          <motion.p 
            key={slides[slide]!.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#ccc] text-xl md:text-2xl mb-12 max-w-2xl font-light"
          >
            {slides[slide]!.desc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href={slides[slide]!.to} className="btn-primary">
              {slides[slide]!.btn}
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 right-20 z-30 flex gap-4">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setSlide(i)}
              className={`w-12 h-1 rounded-full transition-all duration-500 ${i === slide ? 'bg-[#ff6b00] w-20' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* PORTFOLIO SHOWCASE */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h5 className="text-[#ff6b00] font-bold uppercase tracking-[0.3em] mb-10">Our work showcase</h5>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Explore Our Digital Achievements.
            </h2>
          </div>
          <Link href="/portfolio" className="text-white text-sm font-black uppercase tracking-widest border-b border-[#ff6b00] pb-2 transition-transform hover:translate-x-2">
            View All Projects →
          </Link>
        </div>
        
        <MetaverseList projects={Object.values(portfolioData)} />
      </section>
    </div>
  );
}
