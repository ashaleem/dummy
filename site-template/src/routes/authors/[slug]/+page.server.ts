import { allAuthors } from "../../../data/authors/allAuthors";
import { allArticlesMetadata } from "../../../data/articles/allArticlesMeta";

export const load = async ({ params }) => {
  const author = allAuthors.find((author) => {
    return author.slug === params.slug;
  });

  if (!author) {
    return {
      status: 404,
      error: `Author with slug ${params.slug} not found`,
    };
  }

  const allArticlesByAuthor = allArticlesMetadata.filter((article) => {
    if (!article.authors) {
      return false;
    }
    return article.authors.some((author) => author.slug === params.slug);
  });

  return {
    author,
    allArticlesByAuthor,
  };
};
