import type { PublicationDetails } from "@gonzo-engineering/libs";
import publicationDetails from "../../../data/site-details.json";
import siteNavigation from "../../../data/navigation.json";
import { json } from "@sveltejs/kit";

export async function GET() {
  const hydratedDetails: PublicationDetails = {
    ...publicationDetails,
    navigation: {
      header: siteNavigation.header ? siteNavigation.header : [],
      footer: siteNavigation.footer ? siteNavigation.footer : [],
    },
  };
  return json(hydratedDetails);
}
