"use client";
import Link from "next/link";

// API & Types
import { portfolioData } from "@lib/api";
import { Industry } from "@/types/types";

// Components
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FooterCTA from "@/components/FooterCTA";
import ProjectCard from "@/components/ProjectCard";

interface PortfolioGalleryProps {
  title: string;
  subtitle: string;
  description: string;
  industry?: Industry;
}

export default function PortfolioGallery({
  title,
  subtitle,
  description,
  industry,
}: PortfolioGalleryProps) {
  const projectsToDisplay = industry ? industry.portfolio : Object.values(portfolioData);
  const industryId = industry?.id || "metaverse-gaming"; // Default to metaverse-gaming if no specific industry

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        height="70vh"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <section className="section-padding !pt-0">
        <SectionHeader
          subtitle={industry ? `Explore our ${industry.title.toLowerCase()} projects` : "Explore our work showcase"}
          title={industry ? `${industry.title} Projects Showcase` : "Our Full Portfolio Showcase"}
          description={industry ? `A curated showcase of our most impactful ${industry.title} transformations.` : "A curated showcase of our most impactful digital transformations."}
          sideElement={
            <Link
              href="/portfolio"
              className="text-[#ff6b00] text-sm font-black uppercase border-b-2 border-[#ff6b00]/20 pb-1"
            >
              View All Work →
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectsToDisplay.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={idx}
              industryId={industryId}
            />
          ))}
        </div>
        {industry && ( // Only show this section if a specific industry is provided
          <section className="mt-20 bg-[#0d0d0d] border border-white/10 p-10 rounded-2xl">
            <h3 className="text-4xl font-black mb-4">
              Let’s start working together
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Get in touch with BzAnalytics to bring your {industry.title.toLowerCase()} ideas
              to life. Our team builds end-to-end immersive experiences, blockchain
              marketplaces, and educational gamification platforms.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="mailto:hello@bzanalytics.ai" className="btn-primary">
                hello@bzanalytics.ai
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            <div className="mt-8 text-gray-500 text-sm tracking-wide">
              Connect with us:
              <Link
                href="https://www.linkedin.com/company/bzanalytics/"
                className="text-[#ff6b00] hover:underline"
              >
                LinkedIn
              </Link>{" "}
              •
              <Link
                href="https://twitter.com/Bzanalytics_AI"
                className="text-[#ff6b00] hover:underline"
              >
                Twitter
              </Link>{" "}
              •
              <Link
                href="https://www.facebook.com/BzAnalytics-Private-Limited-108397978722176"
                className="text-[#ff6b00] hover:underline"
              >
                Facebook
              </Link>{" "}
              •
              <Link
                href="https://www.instagram.com/bzanalytics/"
                className="text-[#ff6b00] hover:underline"
              >
                Instagram
              </Link>{" "}
              •
              <Link
                href="https://www.youtube.com/@bzanalytics8849"
                className="text-[#ff6b00] hover:underline"
              >
                YouTube
              </Link>
            </div>
          </section>
        )}
      </section>
      <FooterCTA />
    </div>
  );
}