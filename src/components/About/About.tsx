'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-10 md:px-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h5 className="text-[#ff6b00] font-bold uppercase tracking-[0.3em] mb-10">Empowering Every Mind</h5>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
            Pioneering the Digital Frontier with Innovation.
          </h2>
          <p className="text-[#ccc] text-xl leading-relaxed mb-10 max-w-lg">
            BzAnalytics is a global technology and IT consulting company that helps businesses accelerate their transformation through AI, Metaverse, and Data-driven strategies.
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#ff6b00]">10+</span>
              <span className="text-sm uppercase tracking-widest opacity-50 mt-2">Years of Excellence</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#ff6b00]">50+</span>
              <span className="text-sm uppercase tracking-widest opacity-50 mt-2">Global Projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
             <img src="https://bzanalytics.ai/assets/images/resources/about-one-img-1.jpg" alt="About BzAnalytics" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ff6b00]/10 rounded-full blur-[100px] z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
