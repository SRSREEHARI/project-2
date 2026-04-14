import { Industry, PortfolioItem } from '@/types/types';

const BASE = '';

export const portfolioData: Record<string, PortfolioItem> = {
  'digital-twin-dubai': {
    id: '01',
    slug: 'digital-twin-dubai',
    title: 'Digital Twin of Dubai: The Next Phase of the AI Revolution',
    listTitle: 'Digital Twin of Dubai',
    image: `${BASE}/assets/images/project/dubai.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/dubai/dubai.jpg`,
    intro:
      "BzAnalytics has accomplished an incredible feat in digital technology by creating a virtual replica of Dubai, known as the Digital Twin of Dubai. BzAnalytics has transformed how users explore and learn about the iconic city by leveraging cutting-edge technology and innovative ideas.",
    sections: [
      {
        heading: 'Objective: Replicating the Real-World Dubai',
        content:
          'The Dubai Government desired a virtual environment to simulate real-world Dubai for immersive exploration and interaction. BzAnalytics accepted the challenge and created the Digital Twin of Dubai to provide users with an authentic and visually stunning experience.',
      },
      {
        heading: 'Realistic Representation of Dubai',
        content:
          "BzAnalytics has meticulously recreated Dubai's iconic landmarks, infrastructure, and cityscape in virtual reality. Users can explore the city in detail and learn about Dubai's rich culture and heritage.",
      },
      {
        heading: 'Interactive Elements with the Monoverse and Decentraland',
        content:
          "BzAnalytics used the capabilities of Monoverse and Decentraland to incorporate interactive elements into Dubai's Digital Twin. Users can learn about the city by taking virtual tours, accessing historical information, and integrating real-time data.",
      },
      {
        heading: 'Community Engagement',
        content:
          'BzAnalytics has created a thriving virtual community within the Digital Twin of Dubai. Users can interact, socialize, and collaborate to improve their knowledge of the city.',
      },
    ],
    conclusion:
      "Discover BzAnalytics' groundbreaking achievement with the Digital Twin of Dubai. This innovative project has created limitless possibilities for technological advancement.",
    prev: '/industries/metaverse-gaming',
    next: '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace',
  },
  'bznftmart-decentralized-nft-marketplace': {
    id: '02',
    slug: 'bznftmart-decentralized-nft-marketplace',
    title: "Promoting Decentralization: BzNFTMart's Peer-to-Peer Marketplace for NFTs",
    listTitle: 'BzNFTMart',
    image: `${BASE}/assets/images/project/bzmart.jpg`,
    mainImage: `${BASE}/assets/images/project/bzmart-dt.jpg`,
    intro:
      'The introduction of blockchain technology has dramatically impacted the gaming industry. BzNFTMart is a decentralized marketplace that provides a secure and user-friendly platform for gamers, developers, and collectors.',
    sections: [
      {
        heading: '1. BzNFTMart Architecture',
        content:
          'BzNFTMart is built with Next.js, Solidity, and Node.js. Next.js powers the front-end, Solidity handles smart contracts, and Node.js manages the back-end.',
        image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart1.png`,
      },
      {
        heading: '2. Key Features of BzNFTMart',
        content:
          'BzNFTMart offers key features including secure transactions, instant bidding and trading, and community capabilities for users.',
        image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart2.png`,
      },
      {
        heading: '3. Benefits of BzNFTMart',
        content:
          'BzNFTMart empowers developers to monetize creations, improves the gaming experience, and promotes decentralization through peer-to-peer exchange.',
        image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart3.png`,
      },
    ],
    conclusion:
      'Connect with us to become a valued member of BzNFTMart and access a secure and easy-to-use platform.',
    prev: '/industries/metaverse-gaming/portfolio/digital-twin-dubai',
    next: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
  },
  'learning-with-minecraft': {
    id: '03',
    slug: 'learning-with-minecraft',
    title: 'The Future of Learning with Minecraft',
    listTitle: 'Minecraft Game',
    image: `${BASE}/assets/images/project/minecraft.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/minecraft/minecraft-1.jpg`,
    intro:
      'Minecraft is a popular sandbox game where players can explore a blocky 3D world and build anything imaginable.',
    sections: [
      {
        heading: 'Objective: Gamify the Minecraft Experience for Education',
        content:
          'The client, an educational institution, wanted to gamify the Minecraft experience. BzAnalytics combined technology expertise with Minecraft to create a unique educational gaming experience.',
      },
      {
        heading: 'Customized Game Modes: Tailored to Specific Educational Objectives',
        content:
          'BzAnalytics used 3.js and Babylon.js to create custom Minecraft game modes tailored to specific educational goals.',
      },
      {
        heading: 'Immersive Learning Environments',
        content:
          'BzAnalytics designed immersive learning environments that incorporated educational content, quizzes, and challenges.',
        image: `${BASE}/assets/images/project/protfoliodetails/minecraft/minecraft-2.png`,
      },
      {
        heading: 'Collaboration and Multiplayer',
        content:
          'Multiplayer and collaborative features enabled students to collaborate on projects, solve puzzles, and build critical thinking skills.',
      },
    ],
    conclusion:
      'BzAnalytics has revolutionized the Minecraft experience with a gamified and interactive educational platform.',
    prev: '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace',
    next: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
  },
  'virtual-treasure-hunt-game': {
    id: '04',
    slug: 'virtual-treasure-hunt-game',
    title: 'Treasure Hunt Game: Unleashing the Quest for Hidden Riches',
    listTitle: 'Treasure Hunt Game',
    image: `${BASE}/assets/images/project/hunt.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/treasure/treasure1.jpg`,
    intro:
      'BzAnalytics created an exhilarating treasure hunt experience where players navigate virtual worlds, solve puzzles, and discover hidden treasures.',
    sections: [
      {
        heading: 'Objective',
        content:
          'The primary objective was to engage visitors through an exciting treasure hunt experience in a virtual environment for tourism and hospitality.',
      },
      {
        heading: 'High-Resolution Visuals for Immersive Experience',
        content:
          'BzAnalytics used high-resolution 3.js graphics to create detailed virtual landscapes and immersive visuals.',
        image: `${BASE}/assets/images/project/protfoliodetails/treasure/treasure2.jpg`,
      },
      {
        heading: 'Challenging Puzzles and Quests for Engagement',
        content:
          'The game includes challenging puzzles and quests that require problem-solving and keep participants motivated.',
      },
      {
        heading: 'Real-Time Leaderboards for Competition and Participation',
        content:
          'Real-time leaderboards track progress and scores, driving engagement and healthy competition.',
      },
    ],
    conclusion:
      'Treasure Hunt delivers a thrilling immersive experience and demonstrates strong potential in the gaming industry.',
    prev: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
    next: '/industries/metaverse-gaming/portfolio/virtual-hub',
  },
  'virtual-hub': {
    id: '05',
    slug: 'virtual-hub',
    title: "Create Your Ultimate Virtual Space with BzAnalytics' Innovative Virtual Hub",
    listTitle: 'Virtual Hub',
    image: `${BASE}/assets/images/project/virtual-Land.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/virtualhub/virtual1.jpg`,
    intro:
      'BzAnalytics developed a highly immersive and customizable virtual land with multiplayer functionality for real estate use cases.',
    sections: [
      {
        heading: 'Objective',
        content:
          'The project objective was to create a virtual land with shops, entertainment halls, restaurants, and office spaces for an immersive user experience.',
      },
      {
        heading: 'Immersive Environments - Using Unity to Create a 3D World',
        content:
          'BzAnalytics used Unity to build detailed, immersive 3D environments for shopping, dining, and working experiences.',
        image: `${BASE}/assets/images/project/protfoliodetails/virtualhub/land-img2 1.png`,
      },
      {
        heading: 'Multiplayer Functionality - Real-time Interaction with Other Users',
        content:
          'Multiplayer functionality enables users to interact in real-time, supporting socializing, networking, and collaboration.',
      },
      {
        heading: 'Customization Options - Personalizing Virtual Office Spaces',
        content:
          'Businesses can personalize virtual workspaces to reinforce brand presence and a sense of ownership.',
      },
    ],
    conclusion:
      'Virtual Hubs unlock new possibilities for networking, socializing, and conducting business in immersive digital spaces.',
    prev: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
    next: '/industries/metaverse-gaming/portfolio/augmented-reality',
  },
  'augmented-reality': {
    id: '06',
    slug: 'augmented-reality',
    title: 'BzAnalytics: Pioneering the Future of AR and Speech Recognition',
    listTitle: 'Augmented Reality',
    image: `${BASE}/assets/images/project/aureality.jpg`,
    mainImage: `${BASE}/assets/images/project/aureality-dt.jpg`,
    intro:
      'BzAnalytics combined AR, Automatic Speech Recognition (ASR), and Text-to-Speech (TTS) to convert narrator speech into readable text on AR displays.',
    sections: [
      {
        heading: 'Augmented Reality and Voice Recognition - The Best of Both Worlds',
        content:
          'By merging augmented reality and speech recognition, the system enables voice-to-text translation and rich AR display experiences.',
      },
      {
        heading: 'The Benefits of Using AR and Voice Recognition',
        content:
          'The combined approach enables more intuitive customer experiences, real-time perception, and personalized interactions.',
      },
      {
        heading: 'Improving Accuracy with Audio-Visual Speech Recognition (AVSR)',
        content:
          'AVSR improves system accuracy in noisy environments and enhances reliability when ASR confidence is low.',
      },
      {
        heading: 'Scope',
        content:
          'This technology can power shopping assistants, communication tools, and many AR applications across industries.',
      },
    ],
    conclusion:
      'The combination of ASR, TTS, and AR moves us closer to seamlessly integrated technology in daily life.',
    prev: '/industries/metaverse-gaming/portfolio/virtual-hub',
    next: '/industries/metaverse-gaming',
  },
};

export const industries: Industry[] = [
  {
    id: 'metaverse-gaming',
    title: 'Metaverse and Gaming',
    link: '/industries/metaverse-gaming',
    image: `${BASE}/assets/images/industries/metaverse.jpg`,
    description: 'Immersive products, gaming ecosystems, virtual spaces, and interactive experiences.',
    eyebrow: 'Metaverse and Gaming Projects Showcase',
    portfolio: Object.values(portfolioData),
  },
];

const INDUSTRY_ALIASES: Record<string, string> = {
  'metaverse-gamingt': 'metaverse-gaming',
};

export const getIndustryById = (id: string): Industry | undefined => {
  const normalized = (id || '').trim().toLowerCase();
  const resolved = INDUSTRY_ALIASES[normalized] ?? normalized;
  return industries.find((industry) => industry.id === resolved);
};

export const getPortfolioItemById = (id: string): PortfolioItem | undefined =>
  portfolioData[id] ?? Object.values(portfolioData).find((item) => item.id === id || item.slug === id);
