import { d as attr, e as escape_html, c as pop, p as push, g as ensure_array_like } from "./index2.js";
const prettifyDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
function ArticleCardImage($$payload, $$props) {
  let { src, alt } = $$props;
  $$payload.out += `<img${attr("src", src)}${attr("alt", alt)} class="svelte-1h6z4uh">`;
}
function ArticleCardRegular($$payload, $$props) {
  push();
  let {
    headline,
    description,
    path,
    publicationDate,
    featuredImage
  } = $$props;
  $$payload.out += `<a${attr("href", path)} class="svelte-1wuibx7"><div class="card svelte-1wuibx7">`;
  if (featuredImage) {
    $$payload.out += "<!--[-->";
    ArticleCardImage($$payload, { src: featuredImage, alt: headline });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="card-details svelte-1wuibx7"><h3 class="svelte-1wuibx7">${escape_html(headline)}</h3> <div>${escape_html(description)}</div> <div class="publication-date svelte-1wuibx7">${escape_html(prettifyDate(publicationDate))}</div></div></div></a>`;
  pop();
}
function ArticleCardGrid($$payload, $$props) {
  let { heading, articles } = $$props;
  const each_array = ensure_array_like(articles);
  $$payload.out += `<div>`;
  if (heading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3 class="svelte-r5n1x6">${escape_html(heading)}</h3>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="related-articles-grid svelte-r5n1x6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    ArticleCardRegular($$payload, {
      headline: article.title,
      description: article.description,
      path: `/${article.section}/${article.slug}`,
      publicationDate: article.publicationDate,
      featuredImage: article.featuredImage
    });
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  ArticleCardImage as A,
  ArticleCardGrid as a,
  prettifyDate as p
};
