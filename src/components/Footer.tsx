import Image from 'next/image';
import Link from 'next/link';

const left = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: 'https://www.bzanalytics.ai/services', external: true },
  { label: 'Success Stories', href: '/portfolio' },
];

const right = [
  { label: 'Blogs', href: 'https://www.bzanalytics.ai/blogs', external: true },
  { label: 'Careers', href: 'https://www.bzanalytics.ai/careers', external: true },
  { label: 'Contact Us', href: 'https://www.bzanalytics.ai/contact', external: true },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-[#0b0b0b] bg-cover bg-top bg-no-repeat px-6 py-20 md:px-12 xl:px-20"
      style={{ backgroundImage: 'url(/assets/images/backgrounds/footer-bg-1.png)' }}
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.35fr_0.95fr]">
        <div>
          <p className="text-[18px] text-white/90">Let&apos;s start working together</p>
          <a href="mailto:hello@bzanalytics.ai" className="mt-4 inline-block text-[48px] font-black leading-none text-white md:text-[58px]">
            hello@bzanalytics.ai
          </a>

          <div className="mt-10 border-t border-white/10 pt-10">
            <div className="grid gap-10 md:grid-cols-[290px_1fr]">
              <Image src="/assets/bz/bq.png" alt="BzAnalytics" width={220} height={92} className="h-20 w-auto" />

              <div className="grid gap-10 sm:grid-cols-2">
                <ul className="space-y-4 text-[18px] text-white/82">
                  {left.map((item) => (
                    <li key={item.label}>
                      {item.external ? <a href={item.href}>{item.label}</a> : <Link href={item.href}>{item.label}</Link>}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 text-[18px] text-white/82">
                  {right.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-self-end rounded-[2px] border border-white/10 bg-black/50 p-7 lg:w-[300px]">
          <div className="mb-6 flex justify-center">
            <Image src="/assets/images/digital-marketing/dm-external/footer-logo-new.png" alt="Subscribe" width={112} height={112} className="h-28 w-28 object-contain" />
          </div>
          <h4 className="text-[24px] font-bold text-white">Subscribe now</h4>
          <p className="mt-3 text-[18px] text-white/65">Empower Every Mind</p>
          <div className="mt-8 border border-white/10 bg-[#141414] px-4 py-5 text-[18px] text-white/65">Email</div>
        </div>
      </div>
    </footer>
  );
}

