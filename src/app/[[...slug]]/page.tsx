// Temporarily disabled catch-all route to fix conflict with page.tsx\n// "use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// API & Types
import {
  portfolioData,
  industries,
  getIndustryById,
  getPortfolioItemById,
} from "@lib/api";
import { PortfolioItem, Industry, Section } from "@/types/types";

// Components
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FooterCTA from "@/components/FooterCTA";
import ProjectCard from "@/components/ProjectCard";
import AboutModule from "@/components/About/About";
import PortfolioGallery from "@/components/PortfolioGallery";
import ProjectDetail from "@/components/ProjectDetail";

/**
 * MASTER PAGE - The core logic for the entire website.
 * Handles Home, About, Portfolio Gallery, Industry-specific Gallery, and Project Detail.
 */
export default function MasterPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug : [];

  // 1. ROUTE DETERMINATION
  const isHome = slug.length === 0;
  const isAbout = slug.length === 1 && slug[0] === "about";
  const isPortfolio = slug.length === 1 && slug[0] === "portfolio";
  const isIndustry = slug.length === 2 && slug[0] === "industries";
  const isDetail =
    slug.length === 4 && slug[0] === "industries" && slug[2] === "portfolio";

  // 2. PAGE RENDERING LOGIC

  // A. HOME VIEW
  if (isHome) {
    return <HomeView />;
  }

  // B. ABOUT VIEW
  if (isAbout) {
    return <AboutView />;
  }

  // C. PORTFOLIO GALLERY VIEW
  if (isPortfolio) {
    return (
      <PortfolioGallery
        title="Success Stories"
        subtitle="Our Full Portfolio"
        description="A curated showcase of our most impactful digital transformations."
      />
    );
  }

  // D. INDUSTRY-SPECIFIC GALLERY VIEW
  if (isIndustry) {
    const industryId = slug[1];
    const industry = getIndustryById(industryId as string);
    if (!industry) return <NotFound />;

    return (
      <PortfolioGalleryView
        title={industry.title}
        subtitle={industry.subtitle || "Success Stories"}
        description={
          industry.description ||
          `Our ${industry.title} solutions for your digital transformation.`
        }
        // Pass the entire industry object to allow for dynamic content in the component
        industry={industry}
      />
    );
  }

  // E. PROJECT DETAIL VIEW
  if (isDetail) {
    const projectId = slug[3];
    const project = getPortfolioItemById(projectId as string);
    if (!project) return <NotFound />;

    return <ProjectDetail project={project} />;
  }

  return <NotFound />;
}

/* -------------------------------------------------------------------------- */
/*                                 VIEW MODULES                               */
/* -------------------------------------------------------------------------- */

const HomeView = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      bg: "https://bzanalytics.ai/assets/images/slideshow/image1.jpeg",
      title: "Future Tech",
      desc: "AI-driven solutions tailored to innovate and transform digital landscapes.",
      to: "/about",
    },
    {
      bg: "https://bzanalytics.ai/assets/images/slideshow/image2.jpeg",
      title: "Smart Minds",
      desc: "Crafting seamless UI experiences that elevate user interactions worldwide.",
      to: "/contact",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center px-10 md:px-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 z-10" />
            <img
              src={slides[slide]?.bg}
              alt="Slide"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 max-w-4xl">
          <motion.h1
            key={slides[slide]?.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[100px] font-black leading-[0.9] mb-10 tracking-tighter italic"
          >
            {slides[slide]?.title}
          </motion.h1>
          <motion.p
            key={slides[slide]?.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#ccc] text-xl md:text-2xl mb-12 max-w-2xl font-light"
          >
            {slides[slide]?.desc}
          </motion.p>
          <Link href={slides[slide]?.to || "/"} className="btn-primary">
            Learn more
          </Link>
        </div>
      </section>
      <AboutModule />
      <section className="section-padding bg-black border-t border-white/5">
        <SectionHeader
          subtitle="Our work showcase"
          title="Explore Our Digital Achievements."
          sideElement={
            <Link
              href="/portfolio"
              className="text-[#ff6b00] text-sm font-black uppercase border-b-2 border-[#ff6b00]/20 pb-1"
            >
              View All Projects →
            </Link>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.values(portfolioData)
            .slice(0, 3)
            .map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={idx}
                industryId="metaverse-gaming"
              />
            ))}
        </div>
      </section>
      <FooterCTA />
    </div>
  );
};

const AboutView = () => (
  <div className="bg-black text-white">
    <Hero
      title="Empowering Every Mind"
      height="80vh"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
    <AboutModule />
    <section className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-16 bg-black rounded-3xl border border-white/5 italic"
        >
          <h3 className="text-3xl font-black mb-6 text-[#ff6b00]">
            Our Mission
          </h3>
          <p className="text-[#aaa] text-lg leading-relaxed">
            Our mission is to empower organizations with innovative technology
            solutions that drive efficiency, growth, and meaningful
            transformation in the digital age.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-16 bg-black rounded-3xl border border-white/5 italic"
        >
          <h3 className="text-3xl font-black mb-6 text-[#ff6b00]">
            Our Vision
          </h3>
          <p className="text-[#aaa] text-lg leading-relaxed">
            We envision a future where technology seamlessly integrates with
            human potential, creating a global ecosystem of innovation and
            sustainable progress.
          </p>
        </motion.div>
      </div>
    </section>
    <FooterCTA />
  </div>
);

const PortfolioGalleryView = ({
  title,
  subtitle,
  description,
  industry,
}: {
  title: string;
  subtitle: string;
  description: string;
  industry?: Industry;
}) => (
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
        subtitle="Explore our metaverse and gaming projects"
        title="METAVERSE AND GAMING PROJECTS SHOWCASE"
        description="A curated showcase of our most impactful Metaverse and Gaming transformations."
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
        {(industry ? industry.portfolio : Object.values(portfolioData)).map(
          (p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={idx}
              industryId={industry?.id || "metaverse-gaming"}
            />
          ),
        )}
      </div>
      <section className="mt-20 bg-[#0d0d0d] border border-white/10 p-10 rounded-2xl">
        <h3 className="text-4xl font-black mb-4">
          Let’s start working together
        </h3>
        <p className="text-gray-400 text-lg mb-8">
          Get in touch with BzAnalytics to bring your metaverse and gaming ideas
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
    </section>
    <FooterCTA />
  </div>
);

const NotFound = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center font-black italic">
    <h1 className="text-4xl">404 - Page Not Found</h1>
  </div>
);
