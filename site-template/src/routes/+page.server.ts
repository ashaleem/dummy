import type { ArticleMetadata } from "@gonzo-engineering/libs";

export async function load({ fetch }) {
  const articlesResponse = await fetch("/api/articles");
  const articles: ArticleMetadata[] = await articlesResponse.json();
  return { articles };
}
