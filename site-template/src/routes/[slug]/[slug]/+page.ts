import type { Article } from "$lib/types";

export const load = async ({ fetch, params, url }) => {
  const articleResponse = await fetch(`/api/articles/${params.slug}`);
  const article: Article = await articleResponse.json();

  if (!article || !url.pathname.includes(`/${article.section}/`)) {
    throw new Error("Not found");
  }

  return {
    article,
  };
};
