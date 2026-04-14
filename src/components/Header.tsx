'use client';

import Image from 'next/image';
import Link from 'next/link';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: 'https://www.bzanalytics.ai/services', external: true },
  { label: 'Success Stories', href: '/portfolio' },
  { label: 'Blogs', href: 'https://www.bzanalytics.ai/blogs', external: true },
  { label: 'Careers', href: 'https://www.bzanalytics.ai/careers', external: true },
  { label: 'Contact Us', href: 'https://www.bzanalytics.ai/contact', external: true },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-3 py-2 md:px-6 xl:px-8">
        <Link href="/" className="shrink-0">
          <Image src="/assets/bz/bq.png" alt="BzAnalytics" width={150} height={56} className="h-12 w-auto md:h-14" priority />
        </Link>

        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center gap-5">
            {nav.map((item) => (
              <li key={item.label} className="flex items-center gap-5">
                <span className="text-sm text-white">&bull;</span>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="text-sm font-semibold text-white">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="ml-7 flex items-center gap-2 text-white">
            <Image src="/assets/images/resources/usa.png" alt="EN" width={20} height={20} className="w-5 rounded-full" />
            <span className="text-sm font-semibold">EN</span>
          </div>
        </nav>

        <a
          href="https://www.bzanalytics.ai/consult"
          target="_blank"
          rel="noreferrer"
          className="hidden min-w-[258px] justify-center border border-white/40 px-8 py-5 text-sm font-semibold text-white lg:inline-flex"
        >
          Schedule a consultation
        </a>
      </div>
    </header>
  );
}

