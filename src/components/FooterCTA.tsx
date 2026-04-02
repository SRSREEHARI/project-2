'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  subtitle?: string;
  title?: string;
  email?: string;
}

export default function FooterCTA({
  subtitle = "Ready to Build Your Vision?",
  title = "Innovate the Future with Us",
  email = "hello@bzanalytics.ai",
}: Props) {
  return (
    <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden text-center">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <span className="text-[#ff6b00] text-xs font-black uppercase tracking-[0.4em] mb-12 block">
          {subtitle}
        </span>
        <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter italic leading-tight">
          {title}
        </h2>
        
        <Link 
          href={`mailto:${email}`} 
          className="text-white text-3xl md:text-6xl font-black border-b-4 border-[#ff6b00] pb-2 hover:text-[#ff6b00] transition-luxury inline-block italic"
        >
          {email}
        </Link>
        
        <div className="mt-20">
          <Link href="/contact" className="btn-primary">
            Start Your Experience Today
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
