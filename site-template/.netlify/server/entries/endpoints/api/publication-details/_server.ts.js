import { P as PUBLICATION_DETAILS } from "../../../../chunks/constants.js";
import { j as json } from "../../../../chunks/index.js";
async function GET() {
  return json(PUBLICATION_DETAILS);
}
export {
  GET
};
