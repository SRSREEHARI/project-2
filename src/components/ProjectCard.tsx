'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PortfolioItem } from '@/types/types';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  project: PortfolioItem;
  index: number;
  industryId: string;
}

export default function ProjectCard({ project, index, industryId }: Props) {
  // Map index to a slug if needed, but the project data should ideally have the link.
  // Using the common mapping used in the project
  const slugMap: Record<string, string> = {
    '01': 'digital-twin-dubai',
    '02': 'bznftmart-decentralized-nft-marketplace',
    '03': 'learning-with-minecraft',
    '04': 'virtual-treasure-hunt-game',
    '05': 'virtual-hub',
    '06': 'augmented-reality',
  };
  
  const slug = slugMap[project.id] || project.id;
  const projectLink = `/industries/${industryId}/portfolio/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-zinc-900 aspect-[4/3] rounded-2xl border border-white/5 transition-luxury hover:border-orange-500/20"
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-luxury group-hover:scale-110 group-hover:opacity-40"
        onError={(e) => {
          e.currentTarget.src = '/assets/images/project/dubai.jpg';
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-luxury" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-luxury">
        <span className="text-[#ff6b00] text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-luxury">
          Case Study 0{index + 1}
        </span>
        <h3 className="text-white text-2xl font-black leading-tight mb-4 group-hover:text-[#ff6b00] transition-luxury">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-luxury overflow-hidden">
          {project.intro}
        </p>

        <div className="mt-6">
          <Link
            href={projectLink}
            className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full hover:bg-[#ff6b00] transition-luxury"
          >
            Explore Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Number Badge (Optional, added for "Wow" factor) */}
      <div className="absolute top-6 right-6 text-white/10 text-6xl font-black italic tracking-tighter opacity-0 group-hover:opacity-100 transition-luxury pointer-events-none">
        0{index + 1}
      </div>
    </motion.div>
  );
}
