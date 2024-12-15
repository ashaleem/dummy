import { d as attr, e as escape_html, c as pop, p as push, h as head } from "../../../../chunks/index2.js";
import { p as prettifyDate, a as ArticleCardGrid } from "../../../../chunks/ArticleCardGrid.js";
import { h as html, a as makeArticleSchema } from "../../../../chunks/schema.js";
function ArticleFeaturedImage($$payload, $$props) {
  let { src, altText, caption } = $$props;
  $$payload.out += `<figure class="svelte-sku13x"><img${attr("src", src)}${attr("alt", altText)} class="svelte-sku13x"> `;
  if (caption) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<figcaption class="svelte-sku13x">${escape_html(caption)}</figcaption>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></figure>`;
}
function ArticleHead($$payload, $$props) {
  push();
  let {
    title,
    description,
    publicationDate,
    authors
  } = $$props;
  $$payload.out += `<div class="article-header svelte-1jzsb4q"><h2 class="svelte-1jzsb4q">${escape_html(title)}</h2> <div class="article-standfirst svelte-1jzsb4q">${escape_html(description)}</div> <div class="details svelte-1jzsb4q">`;
  if (authors) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="byline svelte-1jzsb4q">By ${escape_html(authors.map((author) => author.name).join(", "))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div>${escape_html(prettifyDate(publicationDate))}</div></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { article } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(article.title)} | ${escape_html(data.publication.name)}</title>`;
    $$payload2.out += `<meta property="og:type" content="article"> ${html(`<script type="application/ld+json">${JSON.stringify(makeArticleSchema(data.publication, article))}<\/script>`)}`;
  });
  $$payload.out += `<div class="container svelte-45ivip"><article class="svelte-45ivip">`;
  ArticleHead($$payload, {
    title: article.title,
    description: article.description,
    publicationDate: article.publicationDate,
    authors: article.authors
  });
  $$payload.out += `<!----> `;
  if (article.featuredImage && article.featuredImageAltText) {
    $$payload.out += "<!--[-->";
    ArticleFeaturedImage($$payload, {
      src: article.featuredImage,
      altText: article.featuredImageAltText,
      caption: article.featuredImageCaption
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div>${html(article.content)}</div></article> `;
  ArticleCardGrid($$payload, {
    heading: "Related articles",
    articles: data.otherArticles
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
