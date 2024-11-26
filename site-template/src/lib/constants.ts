// Temporary as a proof of concept before moving out of the template

import type { Author, PublicationDetails } from "./types";

export const PUBLICATION_DETAILS: PublicationDetails = {
  name: "My Publication",
  description: "A publication about everything",
  yearFounded: 2017,
  url: "https://example.com",
  supportLink: "https://example.com/support",
  logoUrl: "/logo.png",
  emblemUrl:
    "https://pbs.twimg.com/profile_images/1843210835776114688/Zz8-j1Pj_400x400.jpg",
  faviconUrl: "/favicon.ico",
  sections: [
    { label: "Old Town", slug: "old-town" },
    { label: "New Town", slug: "new-town" },
    { label: "Business District", slug: "business-district" },
  ],
  navigation: [
    {
      label: "Old Town",
      url: "/old-town",
      subNav: [
        { label: "Council", url: "/tags/council" },
        { label: "Planning", url: "/tags/planning" },
      ],
    },
    { label: "New Town", url: "/new-town" },
    {
      label: "Business District",
      url: "/business-district",
      subNav: [{ label: "Culture", url: "/tags/culture" }],
    },
  ],
};

export const AUTHORS: Author[] = [
  {
    id: "j-w-marceau",
    name: "J. W. Marceau",
    bio: "J. W. Marceau means well.",
  },
];
