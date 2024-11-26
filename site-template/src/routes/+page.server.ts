import type { ArticleMetadata } from "$lib/types";

export async function load({ fetch }) {
  const articlesResponse = await fetch("/api/articles");
  const articles: ArticleMetadata[] = await articlesResponse.json();
  return { articles };
}
