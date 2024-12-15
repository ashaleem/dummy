import { d as attr, e as escape_html, f as stringify, g as ensure_array_like, c as pop, p as push, h as head } from "../../chunks/index2.js";
function HeaderLink($$payload, $$props) {
  let { title, href } = $$props;
  $$payload.out += `<a${attr("href", href)}${attr("class", `svelte-k9nehx ${stringify([""].filter(Boolean).join(" "))}`)}>${escape_html(title)}</a>`;
}
function Header($$payload, $$props) {
  let { publicationName, navigation } = $$props;
  const each_array = ensure_array_like(navigation);
  $$payload.out += `<header class="svelte-1jjxs9g"><a href="/" class="svelte-1jjxs9g"><h1 class="svelte-1jjxs9g">${escape_html(publicationName)}</h1></a> <nav class="svelte-1jjxs9g"><ul class="svelte-1jjxs9g"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let { label, url, subNav } = each_array[$$index_1];
    $$payload.out += `<li class="svelte-1jjxs9g">`;
    HeaderLink($$payload, { title: label, href: url });
    $$payload.out += `<!----> `;
    if (subNav) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(subNav);
      $$payload.out += `<ul class="sub-nav svelte-1jjxs9g"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let { label: label2, url: url2 } = each_array_1[$$index];
        $$payload.out += `<li><a${attr("href", url2)} class="svelte-1jjxs9g">${escape_html(label2)}</a></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></nav></header>`;
}
function Footer($$payload, $$props) {
  push();
  let { yearFounded, parentOrg } = $$props;
  $$payload.out += `<footer class="svelte-5or5zs"><div>© ${escape_html(yearFounded)} - ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} • ${escape_html(parentOrg)}</div> <div class="gonzo-plug svelte-5or5zs">Powered by <a href="https://gonzo.engineering" class="svelte-5or5zs">Gonzo Engineering</a></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children, data } = $$props;
  const { publication, ads } = data;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="icon"${attr("href", data.publication.faviconUrl)}>`;
  });
  Header($$payload, {
    publicationName: publication.name,
    navigation: publication.navigation
  });
  $$payload.out += `<!----> <main class="svelte-4bk12b">`;
  children($$payload);
  $$payload.out += `<!----></main> `;
  Footer($$payload, {
    yearFounded: publication.yearFounded,
    parentOrg: publication.parentOrganization
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
