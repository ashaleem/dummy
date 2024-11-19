import type { Article } from "$lib/types";

export async function load({ fetch }) {
  // Content
  const articlesResponse = await fetch("api/articles");
  const articles: Article[] = await articlesResponse.json();
  return { articles };
}
