import Hero from '@/components/Hero';
import { portfolioData } from '@/lib/api';

export default function HomePage() {
  const featuredProjects = Object.values(portfolioData).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        title="Transform Digitally with Our Technology and IT Consulting Services"
        subtitle="BzAnalytics – Global IT Consulting &amp; Product Development"
        height="100vh"
      />
      {/* Featured Portfolio Preview */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h5 className="text-lg text-[#ff6b00] uppercase tracking-wider font-bold mb-4">our work showcase</h5>
          <h2 className="text-5xl md:text-6xl font-black">Explore similar portfolio<br />you might like it</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <a key={project.id} href={`/industries/metaverse-gaming/portfolio/${project.id}`} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-900 group-hover:scale-105 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

