import Link from 'next/link';

export default function SuccessStoriesHero({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 md:px-10 md:pb-36 md:pt-40 lg:px-16">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg-1-1.jpg)' }} />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute bottom-0 left-0 right-0 h-[186px] bg-cover bg-bottom" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg-overlay.png)' }} />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-3 text-base font-semibold text-white/85 md:text-xl">
          <Link href="/" className="transition-colors hover:text-[#ff6b00]">Home</Link>
          <span>.</span>
          <span>Success Stories</span>
        </div>
        <h1 className="text-5xl font-black leading-none text-white md:text-7xl">{title}</h1>
      </div>
    </section>
  );
}
