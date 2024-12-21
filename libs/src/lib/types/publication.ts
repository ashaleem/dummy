export interface PublicationDetails {
  name: string;
  parentOrganization: string;
  description: string;
  yearFounded: number;
  url: string;
  supportLink: string;
  logoUrl: string;
  emblemUrl: string;
  faviconUrl: string;
  sections: SiteSection[];
  navigation: {
    header: NavSection[];
    footer: NavSection[];
  };
}

export interface SiteSection {
  label: string;
  slug: string;
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
