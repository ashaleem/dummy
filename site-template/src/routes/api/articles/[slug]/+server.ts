import type { Article, Author } from "@gonzo-engineering/libs";
import { json } from "@sveltejs/kit";
import { render } from "svelte/server";
import { allAuthors } from "../../../../data/authors/allAuthors";

export async function GET({ params }) {
  try {
    const post = await import(`../../../../data/articles/${params.slug}.md`);
    const content = render(post.default).body;
    // Replace author slugs with author objects
    const postsWithAuthorObjects: Article = {
      ...post.metadata,
      authors: post.metadata.authors.map((authorObject: Author) => {
        return allAuthors.find((author) => author.slug === authorObject.slug);
      }),
      content,
    };

    return json(postsWithAuthorObjects);
  } catch {
    return json({ error: "Not found" }, { status: 404 });
  }
}
