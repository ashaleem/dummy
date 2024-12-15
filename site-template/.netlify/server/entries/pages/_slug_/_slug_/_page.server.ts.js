const load = async ({ fetch, params, url }) => {
  const articleResponse = await fetch(`/api/articles/${params.slug}`);
  const article = await articleResponse.json();
  const otherArticlesResponse = await fetch(`/api/articles`);
  const otherArticles = await otherArticlesResponse.json();
  const otherArticlesFilteredAndTrimmed = otherArticles.filter((a) => a.slug !== params.slug).slice(0, 3);
  if (!article || !url.pathname.includes(`/${article.section}/`)) {
    throw new Error("Not found");
  }
  return {
    article,
    otherArticles: otherArticlesFilteredAndTrimmed
  };
};
export {
  load
};
