import type { ArticleMetadata } from "@gonzo-engineering/libs";
import { allAuthors } from "../authors/allAuthors";

let rawPosts: ArticleMetadata[] = [];

const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

for (const path in paths) {
  const file = paths[path];
  const slug = path.split("/").at(-1)?.replace(".md", "");

  if (file && typeof file === "object" && "metadata" in file && slug) {
    const post = file.metadata as ArticleMetadata;
    rawPosts.push(post);
  }
}

rawPosts = rawPosts.sort(
  (first, second) =>
    new Date(second.publicationDate).getTime() -
    new Date(first.publicationDate).getTime()
);

export const allArticlesMetadata: ArticleMetadata[] = rawPosts.map((post) => {
  // Replace author IDs with author objects
  const authorObjects = post.authors?.map(
    (rawAuthorObject: { slug: string }) => {
      const matchingAuthor = allAuthors.find(
        (author) => author.slug === rawAuthorObject.slug
      );
      if (!matchingAuthor) {
        throw new Error(
          `Author with slug ${rawAuthorObject.slug} not found in authors data`
        );
      }
      return matchingAuthor;
    }
  );
  return {
    ...post,
    authors: authorObjects,
  };
});
