'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getIndustryById } from '@lib/api';
import { PortfolioItem } from '@/types/types';
import { useState } from 'react';

export default function IndustryPage() {
  const { id } = useParams();
  const industry = getIndustryById(id as string);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (!industry) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 900 }}>Industry Not Found</h1>
      </div>
    );
  }

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
          <Link href="/portfolio" style={{ color: '#aaa', textDecoration: 'none' }}>Success Stories</Link>
        </div>
        <h1 style={{ fontSize: '72px', fontWeight: 900, margin: 0, lineHeight: 1.1 }}>Success Stories</h1>
        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#ff6b00', marginTop: '16px' }}>{industry.title}</h2>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '100px 80px' }}>
        {/* Section Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ color: '#ff6b00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>
              metaverse and gaming projects showcase
            </p>
            <h2 style={{ fontSize: '52px', fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
              Explore our metaverse<br /> and gaming projects
            </h2>
          </div>
          <Link href="/portfolio" style={{
            background: '#ff6b00',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            View All Work
          </Link>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {industry.portfolio.map((project: PortfolioItem, idx: number) => (
            <Link
              key={project.id}
              href={`/industries/metaverse-gaming/portfolio/${getSlug(project.id)}`}
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
                  transition: 'all 0.3s',
                }}>
                  <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '22px',
                    fontWeight: 800,
                    margin: 0,
                    lineHeight: 1.2,
                    transition: 'color 0.3s',
                  }}>
                    {project.title}
                  </h3>
                  <div style={{
                    marginTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ff6b00',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    opacity: hoveredIdx === idx ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}>
                    Know More <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{
        background: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
        padding: '80px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '14px', color: '#aaa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '24px' }}>
          Let's start working together
        </p>
        <a href="mailto:hello@bzanalytics.ai" style={{
          color: '#fff',
          fontSize: '48px',
          fontWeight: 900,
          textDecoration: 'none',
          borderBottom: '3px solid #ff6b00',
          paddingBottom: '8px',
          transition: 'color 0.3s',
        }}>
          hello@bzanalytics.ai
        </a>
      </section>
    </div>
  );
}

function getSlug(id: string): string {
  const slugMap: Record<string, string> = {
    '01': 'digital-twin-dubai',
    '02': 'bznftmart-decentralized-nft-marketplace',
    '03': 'learning-with-minecraft',
    '04': 'virtual-treasure-hunt-game',
    '05': 'virtual-hub',
    '06': 'augmented-reality',
  };
  return slugMap[id] ?? id;
}
