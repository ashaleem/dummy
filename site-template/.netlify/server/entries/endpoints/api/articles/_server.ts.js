import { _ as __vite_glob_0_0 } from "../../../../chunks/figurative-coruption-probes-to-be-replaced-with-very-real-anal-probes.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/local-man-mistakes-being-bright-for-being-exceptional.js";
import { _ as __vite_glob_0_2 } from "../../../../chunks/man-bites-dog.js";
import { _ as __vite_glob_0_3 } from "../../../../chunks/person-learns-from-mistake.js";
import { j as json } from "../../../../chunks/index.js";
import { A as AUTHORS } from "../../../../chunks/constants.js";
async function getPosts() {
  let rawPosts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/data/articles/figurative-coruption-probes-to-be-replaced-with-very-real-anal-probes.md": __vite_glob_0_0, "/src/data/articles/local-man-mistakes-being-bright-for-being-exceptional.md": __vite_glob_0_1, "/src/data/articles/man-bites-dog.md": __vite_glob_0_2, "/src/data/articles/person-learns-from-mistake.md": __vite_glob_0_3 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata;
      const post = { ...metadata, slug };
      rawPosts.push(post);
    }
  }
  rawPosts = rawPosts.sort(
    (first, second) => new Date(second.publicationDate).getTime() - new Date(first.publicationDate).getTime()
  );
  const postsWithAuthorObjects = rawPosts.map(
    (post) => {
      const authorObjects = post.authorIds?.map((authorId) => {
        return AUTHORS.find((author) => author.id === authorId);
      });
      return {
        ...post,
        authors: authorObjects
      };
    }
  );
  return postsWithAuthorObjects;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
