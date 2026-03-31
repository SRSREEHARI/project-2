'use client';
import Link from 'next/link';
import { portfolioData } from '@lib/api';
import { PortfolioItem } from '@/types/types';
import { useState } from 'react';

const slugMap: Record<string, string> = {
  '01': 'digital-twin-dubai',
  '02': 'bznftmart-decentralized-nft-marketplace',
  '03': 'learning-with-minecraft',
  '04': 'virtual-treasure-hunt-game',
  '05': 'virtual-hub',
  '06': 'augmented-reality',
};

export default function PortfolioPage() {
  const projects = Object.values(portfolioData);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", minHeight: '100vh' }}>
      {/* PAGE HEADER */}
      <section style={{
        position: 'relative',
        padding: '180px 80px 80px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(https://bzanalytics.ai/assets/images/backgrounds/page-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#aaa' }}>
          <Link href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: '#ff6b00' }}>·</span>
          <span style={{ color: '#aaa' }}>Success Stories</span>
        </div>
        <h1 style={{ fontSize: '72px', fontWeight: 900, margin: 0, lineHeight: 1.1 }}>Success Stories</h1>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '100px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {projects.map((project: PortfolioItem, idx: number) => (
            <Link
              key={project.id}
              href={`/industries/metaverse-gaming/portfolio/${slugMap[project.id]}`}
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: '#111',
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    transform: hoveredIdx === idx ? 'scale(1.08)' : 'scale(1)',
                  }}
                  onError={(e) => { e.currentTarget.src = 'https://bzanalytics.ai/assets/images/project/dubai.jpg'; }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '30px',
                }}>
                  <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
