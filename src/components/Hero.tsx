'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: Breadcrumb[];
  height?: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage = '/assets/images/backgrounds/page-header-bg.jpg',
  breadcrumbs,
  height = '60vh',
  children,
}: HeroProps) {
  return (
    <section 
      className="relative flex flex-col items-center justify-center overflow-hidden" 
      style={{ height }}
    >
      {/* Background with parallax-like entry */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {breadcrumbs && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8"
          >
            {breadcrumbs.map((bc, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-[#ff6b00] transition-luxury">{bc.label}</Link>
                ) : (
                  <span className="text-white">{bc.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="text-[#ff6b00] italic">//</span>}
              </span>
            ))}
          </motion.nav>
        )}

        {subtitle && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#ff6b00] text-xs font-bold uppercase tracking-[0.4em] mb-4 block animate-up"
          >
            {subtitle}
          </motion.span>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
}
