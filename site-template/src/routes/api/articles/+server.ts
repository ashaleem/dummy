import { json } from "@sveltejs/kit";
import { allArticlesMetadata } from "../../../data/articles/allArticlesMeta";

export async function GET() {
  return json(allArticlesMetadata);
}
