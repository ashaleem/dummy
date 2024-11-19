// Temporary as a proof of concept before moving out of the template

import type { Author, PublicationDetails } from "./types";

export const PUBLICATION_DETAILS: PublicationDetails = {
  name: "My Publication",
  description: "A publication about everything",
  yearFounded: 2017,
  url: "https://example.com",
  logoUrl: "/logo.png",
  faviconUrl: "/favicon.ico",
  navigation: [
    {
      label: "Old Town",
      url: "/old-town",
      subNav: [
        { label: "Council", url: "/tags/council" },
        { label: "Planning", url: "/tags/planning" },
      ],
    },
    {
      label: "Business District",
      url: "/business-district",
      subNav: [{ label: "Culture", url: "/tags/culture" }],
    },
    { label: "New Town", url: "/new-town" },
    { label: "East Town", url: "/east-town" },
  ],
};

export const AUTHORS: Author[] = [
  {
    id: "j-w-marceau",
    name: "J. W. Marceau",
    bio: "J. W. Marceau means well.",
  },
];
