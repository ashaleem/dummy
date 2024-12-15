import { d as attr, e as escape_html, c as pop, p as push } from "./index2.js";
import { A as ArticleCardImage, a as ArticleCardGrid } from "./ArticleCardGrid.js";
function ArticleCardFeatured($$payload, $$props) {
  push();
  let {
    link,
    headline,
    description,
    authors,
    featuredImage
  } = $$props;
  $$payload.out += `<a${attr("href", link)} class="svelte-cqwciw"><div class="card svelte-cqwciw">`;
  if (featuredImage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="card-image svelte-cqwciw">`;
    ArticleCardImage($$payload, { src: featuredImage, alt: headline });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="card-details svelte-cqwciw"><h3 class="svelte-cqwciw">${escape_html(headline)}</h3> <div>${escape_html(description)}</div> `;
  if (authors) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="byline svelte-cqwciw">By ${escape_html(authors.map((author) => author.name).join(", "))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></a>`;
  pop();
}
function FrontBasic($$payload, $$props) {
  push();
  let { heading, articles } = $$props;
  const mostRecentArticle = articles[0];
  const allOtherArticles = articles.slice(1);
  $$payload.out += `<div class="page-container svelte-1abxkm2">`;
  if (heading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="svelte-1abxkm2">${escape_html(heading)}</h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  ArticleCardFeatured($$payload, {
    link: `/${mostRecentArticle.section}/${mostRecentArticle.slug}`,
    headline: mostRecentArticle.title,
    authors: mostRecentArticle.authors,
    description: mostRecentArticle.description,
    featuredImage: mostRecentArticle.featuredImage
  });
  $$payload.out += `<!----> `;
  ArticleCardGrid($$payload, { heading: "Latest", articles: allOtherArticles });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  FrontBasic as F
};
