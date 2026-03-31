import { Industry, PortfolioItem } from '@/types/types';

const BASE = '';

export const portfolioData: Record<string, PortfolioItem> = {
  'digital-twin-dubai': {
    id: '01',
    title: 'Digital Twin of Dubai',
    image: `${BASE}/assets/images/project/protfoliodetails/dubai/dubai.jpg`,
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
          "BzAnalytics has meticulously recreated Dubai's iconic landmarks, infrastructure, and cityscape in virtual reality. Users can explore the city in detail and learn about Dubai's rich culture and heritage. The realistic representation was achieved through advanced technologies, which made the virtual environment nearly identical to the real-world city.",
      },
      {
        heading: 'Interactive Elements with the Monoverse and Decentraland',
        content:
          "BzAnalytics used the capabilities of Monoverse and Decentraland to incorporate interactive elements into Dubai's Digital Twin. Users can learn about the city by taking virtual tours, accessing historical information, and integrating real-time data.",
      },
      {
        heading: 'Community Engagement',
        content:
          'BzAnalytics has created a thriving virtual community within the Digital Twin of Dubai. Users can interact, socialize, and collaborate to improve their knowledge of the city. The platform enables virtual events, conferences, and exhibitions, increasing user engagement and knowledge sharing.',
      },
    ],
    conclusion:
      "Discover BzAnalytics' groundbreaking achievement with the Digital Twin of Dubai. Immerse yourself in an unparalleled digital experience in which data is brought to life most realistically. With interactive elements and community engagement, the project has already established a new standard for virtual environments.",
    prev: '/industries/metaverse-gaming',
    next: '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace',
    relatedProjects: [
      {
        title: 'Minecraft Game',
        image: `${BASE}/assets/images/project/minecraft.jpg`,
        link: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
      },
      {
        title: 'AI Medical Imaging',
        image: `${BASE}/assets/images/project/ai-medical.jpg`,
        link: '/industries/metaverse-gaming',
      },
    ],
  },

  'bznftmart-decentralized-nft-marketplace': {
    id: '02',
    title: 'BzNFTMart: Promoting Decentralization',
    image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart.jpg`,
    intro:
      'The introduction of blockchain technology has dramatically impacted the gaming industry. BzNFTMart is a new decentralized marketplace that intends to capitalize on this trend by providing a secure and user-friendly platform for gamers, developers, and collectors.',
    sections: [
      {
        heading: '1. BzNFTMart Architecture',
        content:
          'BzNFTMart is built with Next.js, Solidity, and Node.js — three powerful technologies that work together to create a reliable, scalable, and secure platform. Next.js powers the front-end, Solidity handles smart contracts, and Node.js manages the back-end.',
        image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart1.png`,
      },
      {
        heading: '2. Key Features of BzNFTMart',
        content:
          'BzNFTMart offers several key features: a User-Friendly Interface, Secure Transactions via Solidity, Instant Bidding and Trading via Node.js real-time communication, and Community Features including user profiles, social sharing, and comments.',
      },
      {
        heading: '3. Benefits of BzNFTMart',
        content:
          'BzNFTMart empowers Game Developers by providing a platform to monetize their creations, enriches the Gaming Experience by allowing users to own and trade in-game assets, and promotes Decentralization by creating a peer-to-peer marketplace.',
      },
    ],
    conclusion:
      "Take the plunge into the world of decentralized gaming today! Connect with us to become a valued member of BzNFTMart and access a secure and easy-to-use platform. Don't hesitate — reach out to us now.",
    prev: '/industries/metaverse-gaming/portfolio/digital-twin-dubai',
    next: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
    relatedProjects: [
      {
        title: 'Minecraft Game',
        image: `${BASE}/assets/images/project/minecraft.jpg`,
        link: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
      },
      {
        title: 'Treasure Hunt Game',
        image: `${BASE}/assets/images/project/hunt.jpg`,
        link: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
      },
    ],
  },

  'learning-with-minecraft': {
    id: '03',
    title: 'The Future of Learning with Minecraft',
    image: `${BASE}/assets/images/project/protfoliodetails/minecraft/minecraft.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/minecraft/minecraft.jpg`,
    intro:
      "Minecraft is a popular sandbox game where players can explore a blocky, procedurally generated 3D world and build anything imaginable. BzAnalytics recognizes Minecraft's potential as a learning and development tool.",
    sections: [
      {
        heading: 'Objective: Gamify the Minecraft Experience for Education',
        content:
          'The client, an educational institution, wanted to gamify the Minecraft experience. BzAnalytics delivered by combining our data science and technology expertise with the popular Minecraft universe to create a unique gaming experience.',
      },
      {
        heading: 'Customized Game Modes: Tailored to Specific Educational Objectives',
        content:
          'BzAnalytics used 3.js and Babylon.js to create custom Minecraft game modes that were tailored to specific educational goals. These game modes made interactive learning environments possible while preserving the familiar and beloved Minecraft environment.',
      },
      {
        heading: 'Immersive Learning Environments',
        content:
          "BzAnalytics designed immersive virtual learning environments within Minecraft that incorporated educational content, quizzes, and challenges. This made learning fun and exciting for students, improving their retention of the material.",
      },
      {
        heading: 'Collaboration and Multiplayer',
        content:
          'BzAnalytics implemented multiplayer and collaborative features that allowed students to collaborate on projects, solve puzzles, and explore virtual learning environments — promoting teamwork, communication, and critical thinking abilities.',
      },
    ],
    conclusion:
      'BzAnalytics has revolutionized the Minecraft experience with its gamified and interactive platform. By joining us, you will be a part of an innovative approach to education that is changing the future of learning for generations to come.',
    prev: '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace',
    next: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
    relatedProjects: [
      {
        title: 'Treasure Hunt Game',
        image: `${BASE}/assets/images/project/hunt.jpg`,
        link: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
      },
      {
        title: 'Virtual Hub',
        image: `${BASE}/assets/images/project/virtualhub.jpg`,
        link: '/industries/metaverse-gaming/portfolio/virtual-hub',
      },
    ],
  },

  'virtual-treasure-hunt-game': {
    id: '04',
    title: 'Virtual Treasure Hunt Game',
    image: `${BASE}/assets/images/project/protfoliodetails/hunt/hunt.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/hunt/hunt.jpg`,
    intro:
      "BzAnalytics is a cutting-edge technology company that has ventured into gaming, creating an exhilarating treasure hunt experience that requires players to navigate virtual worlds, solve puzzles, and discover hidden treasures.",
    sections: [
      {
        heading: 'Objective',
        content:
          "The primary objective of BzAnalytics' treasure hunt game was to engage visitors through an exciting treasure hunt experience in a virtual environment — designed for the tourism and hospitality industry.",
      },
      {
        heading: 'High-Resolution Visuals for Immersive Experience',
        content:
          'BzAnalytics used high-resolution 3.js graphics to create detailed virtual landscapes for the treasure hunt game. The immersive visuals enhanced the sense of adventure and excitement for participants.',
      },
      {
        heading: 'Challenging Puzzles and Quests for Engagement',
        content:
          "BzAnalytics created challenging puzzles and quests that required participants to use their problem-solving skills. The engaging gameplay kept participants interested and motivated to find out the secrets of the virtual world.",
      },
      {
        heading: 'Real-Time Leaderboards for Competition and Participation',
        content:
          "BzAnalytics implemented real-time leaderboards that tracked participants' progress and scores. This feature drove engagement and encouraged repeat participation, making the game more competitive and exciting.",
      },
    ],
    conclusion:
      'Treasure Hunt is an exciting game gaining widespread popularity in the gaming industry. Join us and experience the thrill of the Treasure Hunt game, which promises to be a game-changer in the gaming industry.',
    prev: '/industries/metaverse-gaming/portfolio/learning-with-minecraft',
    next: '/industries/metaverse-gaming/portfolio/virtual-hub',
    relatedProjects: [
      {
        title: 'Virtual Hub',
        image: `${BASE}/assets/images/project/virtualhub.jpg`,
        link: '/industries/metaverse-gaming/portfolio/virtual-hub',
      },
      {
        title: 'Augmented Reality',
        image: `${BASE}/assets/images/project/ar.jpg`,
        link: '/industries/metaverse-gaming/portfolio/augmented-reality',
      },
    ],
  },

  'virtual-hub': {
    id: '05',
    title: "Create Your Ultimate Virtual Space with BzAnalytics' Innovative Virtual Hub",
    image: `${BASE}/assets/images/project/protfoliodetails/virtualhub/virtualhub.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/virtualhub/virtualhub.jpg`,
    intro:
      "Welcome to the world of Virtual Hubs! You can build your virtual land with a range of amenities in this virtual world, including shops, entertainment halls, and restaurants, all meticulously designed to provide users with an authentic, engaging, and enjoyable experience.",
    sections: [
      {
        heading: 'Objective',
        content:
          "BzAnalytics developed a highly immersive and customizable virtual land with multiplayer functionality for a real estate development company — featuring shops, entertainment halls, restaurants, and virtual office spaces.",
      },
      {
        heading: 'Immersive Environments - Using Unity to Create a 3D World',
        content:
          'BzAnalytics has developed highly immersive 3D environments for various establishments within the Virtual Hub using Unity. The attention to detail is impeccable, and users can enjoy a lifelike shopping, dining, or working experience.',
      },
      {
        heading: 'Multiplayer Functionality - Real-time Interaction with Other Users',
        content:
          "BzAnalytics has integrated multiplayer functionality, enabling users to interact in real-time, facilitating virtual socializing, networking, and collaboration within the virtual land.",
      },
      {
        heading: 'Customization Options - Personalizing Virtual Office Spaces',
        content:
          "BzAnalytics has added customization options for virtual office spaces. Businesses can personalize their virtual workspaces to establish a consistent brand presence, instilling a sense of ownership and identity.",
      },
    ],
    conclusion:
      "The future of virtual experiences lies with Virtual Hubs. At BzAnalytics, we are committed to helping you design your own unique online space that offers endless possibilities for networking, socializing, and conducting business.",
    prev: '/industries/metaverse-gaming/portfolio/virtual-treasure-hunt-game',
    next: '/industries/metaverse-gaming/portfolio/augmented-reality',
    relatedProjects: [
      {
        title: 'Augmented Reality',
        image: `${BASE}/assets/images/project/ar.jpg`,
        link: '/industries/metaverse-gaming/portfolio/augmented-reality',
      },
      {
        title: 'Digital Twin of Dubai',
        image: `${BASE}/assets/images/project/protfoliodetails/dubai/dubai.jpg`,
        link: '/industries/metaverse-gaming/portfolio/digital-twin-dubai',
      },
    ],
  },

  'augmented-reality': {
    id: '06',
    title: 'Augmented Reality & Voice Recognition',
    image: `${BASE}/assets/images/project/protfoliodetails/ar/ar.jpg`,
    mainImage: `${BASE}/assets/images/project/protfoliodetails/ar/ar.jpg`,
    intro:
      "Augmented Reality (AR) is a rapidly developing technology. BzAnalytics combined the technologies of AR, Automatic Speech Recognition (ASR), and Text-to-Speech Synthesis (TTS) to create a new system that converts narrator's speech into readable text and displays it on AR displays.",
    sections: [
      {
        heading: 'Augmented Reality and Voice Recognition — The Best of Both Worlds',
        content:
          "This revolutionary system is taking the world by storm. By merging augmented reality and speech recognition, we are opening up new possibilities — translating voice to text using ASR and TTS and displaying it on AR displays.",
      },
      {
        heading: 'The Benefits of Using AR and Voice Recognition',
        content:
          "The advantages of AR and speech recognition together are numerous — enabling more intuitive customer experiences, allowing AR to perceive things in real time, and delivering more personalized experiences via portable communication devices.",
      },
      {
        heading: 'Improving Accuracy with Audio-Visual Speech Recognition (AVSR)',
        content:
          "We use Audio-Visual Speech Recognition (AVSR) to enhance system accuracy as a backup to the ASR engine in noisy conditions — ensuring the system is always precise and trustworthy regardless of the noise level.",
      },
      {
        heading: 'Scope',
        content:
          "The scope of this technology is enormous. We can design AR apps with a distinct system architecture for speech recognition. AR-based shopping assistants are frequently employed by clothing and other companies. We can also use the system as an assistant in portable communication devices.",
      },
    ],
    conclusion:
      "The combination of ASR, TTS, and AR has brought us closer to a future in which technology is effortlessly incorporated into our lives. BzAnalytics is continually looking for new methods to incorporate cutting-edge technologies into our products and services.",
    prev: '/industries/metaverse-gaming/portfolio/virtual-hub',
    next: '/industries/metaverse-gaming',
    relatedProjects: [
      {
        title: 'Digital Twin of Dubai',
        image: `${BASE}/assets/images/project/protfoliodetails/dubai/dubai.jpg`,
        link: '/industries/metaverse-gaming/portfolio/digital-twin-dubai',
      },
      {
        title: 'BzNFTMart',
        image: `${BASE}/assets/images/project/protfoliodetails/bzmart/bzmart.jpg`,
        link: '/industries/metaverse-gaming/portfolio/bznftmart-decentralized-nft-marketplace',
      },
    ],
  },
};

export const industries: Industry[] = [
  {
    id: 'metaverse-gaming',
    title: 'Metaverse and Gaming',
    link: '/industries/metaverse-gaming',
    image: `${BASE}/assets/images/resources/metaverse-bg.jpg`,
    portfolio: Object.values(portfolioData),
  },
];

export const getIndustryById = (id: string): Industry | undefined =>
  industries.find((ind) => ind.id === id);

export const getPortfolioItemById = (id: string): PortfolioItem | undefined =>
  portfolioData[id];
