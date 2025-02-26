import type { PublicationDetails } from "@gonzo-engineering/libs";
import publicationDetails from "../../../data/site-details.json";
import { json } from "@sveltejs/kit";

export async function GET() {
  const hydratedDetails: PublicationDetails = {
    ...publicationDetails,
    sections: [
      {
        label: "Old Town",
        slug: "old-town",
      },
      {
        label: "New Town",
        slug: "new-town",
      },
      {
        label: "Business District",
        slug: "business-district",
      },
    ],
    navigation: {
      header: [
        {
          label: "Old Town",
          url: "/old-town",
          subNav: [
            {
              label: "Council",
              url: "/tags/council",
            },
            {
              label: "Planning",
              url: "/tags/planning",
            },
          ],
        },
        {
          label: "New Town",
          url: "/new-town",
        },
        {
          label: "Business District",
          url: "/business-district",
          subNav: [
            {
              label: "Culture",
              url: "/tags/culture",
            },
          ],
        },
      ],
      footer: [],
    },
  };
  return json(hydratedDetails);
}
