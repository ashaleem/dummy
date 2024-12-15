import { A as AUTHORS } from "../../../../chunks/constants.js";
import { j as json } from "../../../../chunks/index.js";
async function GET() {
  return json(AUTHORS);
}
export {
  GET
};
