'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  subtitle: string;
  title: string;
  description?: string;
  sideElement?: ReactNode;
}

export default function SectionHeader({ subtitle, title, description, sideElement }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="text-[#ff6b00] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 italic">
          {title}
        </h2>
        {description && (
          <p className="text-gray-500 text-lg leading-relaxed">{description}</p>
        )}
      </motion.div>
      
      {sideElement && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-auto"
        >
          {sideElement}
        </motion.div>
      )}
    </div>
  );
}
