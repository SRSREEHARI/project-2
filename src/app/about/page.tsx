'use client';
import { motion } from "framer-motion";
import About from "@/components/About/About";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Header Banner */}
      <section className="relative pt-64 pb-32 px-10 md:px-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img src="https://bzanalytics.ai/assets/images/backgrounds/page-header-bg.jpg" alt="About BzAnalytics" className="w-full h-full object-cover" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <div className="flex items-center justify-center gap-4 text-[#ff6b00] font-bold uppercase tracking-widest text-xs mb-10">
            <a href="/">Home</a>
            <span>.</span>
            <span>About Us</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-tight">Empowering<br/>Every Mind</h1>
        </motion.div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Vision & Mission */}
      <section className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-16 bg-black rounded-3xl border border-white/5"
          >
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="text-[#aaa] leading-relaxed">
              Our mission is to empower organizations with innovative technology solutions that drive efficiency, growth, and meaningful transformation in the digital age.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-16 bg-black rounded-3xl border border-white/5"
          >
             <h3 className="text-3xl font-black mb-6">Our Vision</h3>
             <p className="text-[#aaa] leading-relaxed">
               We envision a future where technology seamlessly integrates with human potential, creating a global ecosystem of innovation and sustainable progress.
             </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
