import { NextRequest, NextResponse } from 'next/server';

const CLONE_ROUTES: Record<string, string> = {
  '/portfolio': '/_clones/metaverse-gaming.html',
  '/industries/metaverse-gaming': '/_clones/metaverse-gaming.html',
  '/industries/metaverse-gamingt': '/_clones/metaverse-gaming.html',
  '/industries/metaverse-gaminghere': '/_clones/metaverse-gaming.html',
  '/industries/metaverse-gaming/portfolio/digital-twin-dubai': '/_clones/digital-twin-dubai.html',
  '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace':
    '/_clones/bznftmart-decentralized-nft-marketplace.html',
  '/industries/metaverse-gaming/portfolio/learning-with-minecraft': '/_clones/learning-with-minecraft.html',
  '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game': '/_clones/virtual-treasure-hunt-game.html',
  '/industries/metaverse-gaming/portfolio/virtual-hub': '/_clones/virtual-hub.html',
  '/industries/metaverse-gaming/portfolio/augmented-reality': '/_clones/augmented-reality.html',
};

const LOCAL_REDIRECTS: Record<string, string> = {
  '/home': '/',
};

const EXTERNAL_REDIRECTS: Record<string, string> = {
  '/about': 'https://www.bzanalytics.ai/about',
  '/services': 'https://www.bzanalytics.ai/services',
  '/blogs': 'https://www.bzanalytics.ai/blogs',
  '/careers': 'https://www.bzanalytics.ai/careers',
  '/contact': 'https://www.bzanalytics.ai/contact',
  '/consult': 'https://www.bzanalytics.ai/consult',
  '/industries/finance': 'https://www.bzanalytics.ai/industries/finance',
  '/industries/energy': 'https://www.bzanalytics.ai/industries/energy',
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const target = CLONE_ROUTES[pathname];
  const localRedirect = LOCAL_REDIRECTS[pathname];
  const externalRedirect = EXTERNAL_REDIRECTS[pathname];

  if (localRedirect) {
    const url = req.nextUrl.clone();
    url.pathname = localRedirect;
    return NextResponse.redirect(url);
  }

  if (externalRedirect) {
    const url = new URL(externalRedirect);
    url.search = req.nextUrl.search;
    return NextResponse.redirect(url);
  }

  if (target) {
    const url = req.nextUrl.clone();
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

