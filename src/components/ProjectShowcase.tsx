'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Industry } from '@/types/types';

export default function ProjectShowcase({ industry }: { industry: Industry }) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  return (
    <section className="px-6 py-16 md:px-10 md:py-22 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#ff9a00]">{industry.eyebrow}</p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">Explore our metaverse and gaming projects</h2>
          </div>

          <Link href="/portfolio" className="inline-flex w-fit items-center bg-[#101010] px-11 py-6 text-lg font-semibold text-white md:text-2xl">
            View All Work
          </Link>
        </div>

        <div className="relative border-y border-white/10">
          {industry.portfolio.map((project, idx) => {
            const active = hoveredIdx === idx;
            return (
              <Link
                key={project.id}
                href={`/industries/${industry.id}/portfolio/${project.slug}`}
                className="group relative block border-b border-white/10 last:border-b-0"
                onMouseEnter={() => setHoveredIdx(idx)}
              >
                <article className="grid gap-6 px-1 py-7 md:grid-cols-[150px_minmax(0,1fr)_120px] md:items-center md:px-0">
                  <span className={`relative block min-h-[60px] min-w-[150px] text-[80px] font-extrabold leading-none ${active ? 'text-[#ff9a00]' : 'text-transparent [-webkit-text-stroke:1px_#ffffff]'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <h3 className="inline w-fit bg-[linear-gradient(currentColor,currentColor)] bg-[position:0_100%] bg-no-repeat text-2xl font-extrabold leading-tight text-white transition-all duration-300 md:text-[44px]" style={{ backgroundSize: active ? '100% 2px' : '0% 2px' }}>
                    {project.listTitle}
                  </h3>

                  <div className="flex justify-end">
                    <span className="flex h-[91px] w-[91px] items-center justify-center rounded-full bg-white text-4xl text-black">{active ? '→' : '↘'}</span>
                  </div>
                </article>

                <div className={`pointer-events-none absolute right-[100px] top-1/2 hidden -translate-y-1/2 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-300 lg:block ${active ? 'z-10 h-[223px] w-[337px] rotate-[6deg] opacity-100' : 'h-0 w-0 opacity-0'}`}>
                  <Image src={project.image} alt={project.listTitle} fill sizes="337px" className="object-cover" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

