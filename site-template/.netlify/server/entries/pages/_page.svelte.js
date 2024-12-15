import { d as attr, e as escape_html, c as pop, p as push, h as head } from "../../chunks/index2.js";
import { F as FrontBasic } from "../../chunks/FrontBasic.js";
import { h as html, m as makePublicationSchema } from "../../chunks/schema.js";
function SupportPrompt($$payload, $$props) {
  push();
  let { message, link, linkText, image } = $$props;
  $$payload.out += `<div class="support-prompt svelte-10rvfff">`;
  if (image) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", image.src)}${attr("alt", image.alt)} class="svelte-10rvfff">`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div>${escape_html(message)} <a${attr("href", link)}>${escape_html(linkText)}</a></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.publication.name)}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", data.publication.description)}> ${html(`<script type="application/ld+json">${JSON.stringify(makePublicationSchema(data.publication))}<\/script>`)}`;
  });
  FrontBasic($$payload, { articles: data.articles });
  $$payload.out += `<!----> `;
  SupportPrompt($$payload, {
    message: "Power journalism by and for the people.",
    link: data.publication.supportLink,
    linkText: "Become a patron",
    image: {
      src: data.publication.emblemUrl,
      alt: "A hand holding a pen, writing on a piece of paper."
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
