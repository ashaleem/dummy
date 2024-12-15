import { h as head, c as pop, e as escape_html, p as push } from "../../../chunks/index2.js";
import { F as FrontBasic } from "../../../chunks/FrontBasic.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { section, articlesInSection } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(section.label)} | ${escape_html(data.publication.name)}</title>`;
    $$payload2.out += `<meta property="og:type" content="article">`;
  });
  $$payload.out += `<!---->`;
  {
    if (articlesInSection.length === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p>No articles found in this section.</p>`;
    } else {
      $$payload.out += "<!--[!-->";
      FrontBasic($$payload, {
        heading: section.label,
        articles: articlesInSection
      });
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
