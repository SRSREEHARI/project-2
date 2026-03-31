'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPortfolioItemById } from '@lib/api';
import { Section } from '@/types/types';

export default function PortfolioDetailPage() {
  const { projectId } = useParams();
  const project = getPortfolioItemById(projectId as string);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 900 }}>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
      {/* PAGE HEADER */}
      <section style={{
        position: 'relative',
        padding: '180px 80px 80px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/assets/images/backgrounds/page-header-bg.jpg)',
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
      </section>

      {/* PROJECT DETAIL */}
      <section style={{ padding: '80px 80px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Main Image */}
        <div style={{ marginBottom: '60px', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src={project.mainImage || project.image}
            alt={project.title}
            onError={(e) => { e.currentTarget.src = '/assets/images/project/dubai.jpg'; }}
          />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '52px', fontWeight: 900, lineHeight: 1.2, marginBottom: '32px', color: '#fff' }}>
          {project.title}
        </h2>

        {/* Intro Paragraph */}
        {project.intro && (
          <p style={{ fontSize: '18px', color: '#ccc', lineHeight: 1.8, marginBottom: '50px', maxWidth: '900px' }}>
            {project.intro}
          </p>
        )}

        {/* Section Divider */}
        <div style={{ borderTop: '1px solid #1a1a1a', marginBottom: '50px' }} />

        {/* Detail Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '900px' }}>
          {project.sections.map((sec: Section, idx: number) => (
            <div key={idx}>
              <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                {sec.heading}
              </h4>
              <p style={{ fontSize: '17px', color: '#bbb', lineHeight: 1.9, margin: 0 }}>
                {sec.content}
              </p>
              {sec.image && (
                <div style={{ marginTop: '32px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img src={sec.image} alt={sec.heading} style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        {project.conclusion && (
          <p style={{ fontSize: '17px', color: '#bbb', lineHeight: 1.9, marginTop: '48px', maxWidth: '900px' }}>
            {project.conclusion}
          </p>
        )}

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #1a1a1a' }}>
          <Link href={project.prev} style={{ color: '#fff', fontSize: '17px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ff6b00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
          >
            ← Previous
          </Link>
          <Link href={project.next} style={{ color: '#fff', fontSize: '17px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ff6b00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
          >
            Next →
          </Link>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <section style={{ padding: '80px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#ff6b00', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>
              our work showcase
            </p>
            <h2 style={{ fontSize: '44px', fontWeight: 900, margin: 0 }}>
              Explore similar portfolio<br />you might like it
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            {project.relatedProjects.map((rp, idx: number) => (
              <Link key={idx} href={rp.link} style={{ textDecoration: 'none', display: 'block', background: '#111', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1a1a1a' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={rp.image} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onError={(e) => { e.currentTarget.src = '/assets/images/project/dubai.jpg'; }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, margin: 0 }}>{rp.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
        }}>
          hello@bzanalytics.ai
        </a>
      </section>
    </div>
  );
}
