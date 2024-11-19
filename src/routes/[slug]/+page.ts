import type { Article } from "$lib/types/index.js";
import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  try {
    const articleResponse = await fetch(`api/articles/${params.slug}`);
    const article: Article = await articleResponse.json();

    return {
      article,
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
