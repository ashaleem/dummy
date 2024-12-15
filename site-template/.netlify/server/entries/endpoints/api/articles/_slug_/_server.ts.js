import { A as AUTHORS } from "../../../../../chunks/constants.js";
import { j as json } from "../../../../../chunks/index.js";
import { r as render } from "../../../../../chunks/index2.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function GET({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../data/articles/figurative-coruption-probes-to-be-replaced-with-very-real-anal-probes.md": () => import("../../../../../chunks/figurative-coruption-probes-to-be-replaced-with-very-real-anal-probes.js").then((n) => n._), "../../../../data/articles/local-man-mistakes-being-bright-for-being-exceptional.md": () => import("../../../../../chunks/local-man-mistakes-being-bright-for-being-exceptional.js").then((n) => n._), "../../../../data/articles/man-bites-dog.md": () => import("../../../../../chunks/man-bites-dog.js").then((n) => n._), "../../../../data/articles/person-learns-from-mistake.md": () => import("../../../../../chunks/person-learns-from-mistake.js").then((n) => n._) }), `../../../../data/articles/${params.slug}.md`, 7);
    const content = render(post.default).body;
    const postsWithAuthorObjects = {
      ...post.metadata,
      authors: post.metadata.authorIds.map((authorId) => {
        return AUTHORS.find((author) => author.id === authorId);
      }),
      content
    };
    return json(postsWithAuthorObjects);
  } catch {
    return json({ error: "Not found" }, { status: 404 });
  }
}
export {
  GET
};
