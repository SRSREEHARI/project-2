import Link from 'next/link';
import Hero from '@/components/Hero';
import type { PortfolioItem } from '@/types/types';\nconst portfolioData: Record<string, PortfolioItem> = {\n  // Data from lib/api\n  "digital-twin-dubai": { id: "01", title: "Digital Twin of Dubai", image: "/assets/images/project/dubai.jpg" },\n  "learning-with-minecraft": { id: "03", title: "Minecraft Game", image: "/assets/images/project/minecraft.jpg" },\n  "virtual-treasure-hunt-game": { id: "04", title: "Treasure Hunt Game", image: "/assets/images/project/hunt.jpg" },\n  "virtual-hub": { id: "05", title: "Virtual Hub", image: "/assets/images/project/virtualhub.jpg" },\n  "bznftmart-decentralized-nft-marketplace": { id: "02", title: "BzNFTMart", image: "/assets/images/project/bzmart.jpg" },\n  "augmented-reality": { id: "06", title: "Augmented Reality", image: "/assets/images/project/ar.jpg" },\n};

export default function PortfolioPage() {
  const projects = Object.values(portfolioData);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        title="Success Stories"
        subtitle="Success Stories"
        height="70vh"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories" }
        ]}
      />
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h5 className="text-lg text-[#ff6b00] uppercase tracking-wider font-bold mb-4">our work showcase</h5>
          <h2 className="text-5xl md:text-6xl font-black">Explore our metaverse and gaming projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.slice(0, 6).map((project) => (
            <Link key={project.id} href={`/industries/metaverse-gaming/portfolio/${project.id}`} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-900 hover:scale-105 transition-all duration-500">
                <img 
                  src={project.image.replace('/assets/', '/assets/')} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/industries/metaverse-gaming" className="inline-block bg-[#ff6b00] text-black font-bold uppercase px-12 py-6 rounded-full text-lg hover:bg-white transition-all duration-300">
            View All Work
          </Link>
        </div>
      </section>
    </div>
  );
}

