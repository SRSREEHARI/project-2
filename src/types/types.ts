export type Section = {
  heading: string;
  content: string;
  image?: string;
};

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  listTitle: string;
  image: string;
  mainImage: string;
  intro: string;
  sections: Section[];
  conclusion: string;
  prev: string;
  next: string;
};

export type Industry = {
  id: string;
  title: string;
  link: string;
  image: string;
  eyebrow: string;
  description: string;
  portfolio: PortfolioItem[];
};
