export interface PublicationDetails {
  name: string;
  description: string;
  yearFounded: number;
  url: string;
  logoUrl: string;
  faviconUrl: string;
  navigation: NavSection[];
}

export interface NavSection {
  label: string;
  url: string;
  subNav?: NavLink[];
}

interface NavLink {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publicationDate: Date;
  content: string;
  tags: string[];
  authors?: string[];
  featuredImageUrl?: string;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
}

export interface Ad {
  name: string;
  img: string;
  url: string;
}
