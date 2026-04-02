import Hero from "@/components/Hero";
import FooterCTA from "@/components/FooterCTA";
import { PortfolioItem, Section } from "@/types/types";

export default function ProjectDetail({ project }: { project: PortfolioItem }) {
  return (
    <div className="bg-[#050505] text-white">
      <Hero
        title={project.title}
        backgroundImage={project.mainImage || project.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories", href: "/portfolio" },
          { label: project.title },
        ]}
      />
      <section className="section-padding grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8">
          {project.intro && (
            <p className="text-gray-400 text-xl leading-relaxed italic mb-16 first-letter:text-5xl first-letter:font-black first-letter:text-[#ff6b00] first-letter:mr-3 first-letter:float-left">
              {project.intro}
            </p>
          )}
          <div className="space-y-24">
            {project.sections.map((sec: Section, idx: number) => (
              <div
                key={idx}
                className="group border-l-2 border-[#ff6b00]/10 pl-10 hover:border-[#ff6b00]/30 transition-all"
              >
                <span className="text-[#ff6b00] text-xs font-black uppercase mb-4 block">
                  Phase 0{idx + 1}
                </span>
                <h3 className="text-4xl font-black mb-8 italic">
                  {sec.heading}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {sec.content}
                </p>
                {sec.image && (
                  <img
                    src={sec.image}
                    className="rounded-2xl border border-white/5 group-hover:scale-[1.02] transition-transform duration-500"
                    alt={sec.heading}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterCTA />
    </div>
  );
}
