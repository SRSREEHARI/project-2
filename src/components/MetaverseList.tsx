'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioItem } from "@/types/types";

interface Props {
  projects: PortfolioItem[];
}

export default function MetaverseList({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((p, idx) => (
        <motion.div 
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group transition-colors hover:border-[#ff6b00]/30"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link href={p.next} className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs">
                View Project
              </Link>
            </div>
          </div>
          
          <div className="p-8 flex flex-col justify-between min-h-[160px]">
             <div>
               <span className="text-[#ff6b00] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Project {p.id}</span>
               <h3 className="text-white text-xl font-bold leading-snug group-hover:text-[#ff6b00] transition-colors">{p.title}</h3>
             </div>
             
             <div className="mt-8 pt-6 border-t border-white/5">
                <Link href={p.next} className="text-white text-xs font-black uppercase tracking-widest hover:underline underline-offset-8">
                  Know More →
                </Link>
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
