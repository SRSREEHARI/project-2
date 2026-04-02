export type Section = {
  heading: string;
  content: string;
  image?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  mainImage?: string;
  bottomImage?: string;
  intro?: string;
  sections: Section[];
  conclusion?: string;
  prev: string;
  next: string;
  relatedProjects?: {
    title: string;
    image: string;
    link: string;
  }[];
};

export type Industry = {
  id: string;
  title: string;
  link: string;
  image: string;
  subtitle?: string;
  description?: string;
  portfolio: PortfolioItem[];
};
