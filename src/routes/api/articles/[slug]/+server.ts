import { json } from "@sveltejs/kit";
import { render } from "svelte/server";

export async function GET({ params }) {
  try {
    const post = await import(`../../../../data/articles/${params.slug}.md`);
    const content = render(post.default).body;

    return json({
      ...post.metadata,
      content,
    });
  } catch {
    return json({ error: "Not found" }, { status: 404 });
  }
}
