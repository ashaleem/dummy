import { e as error } from "../../../chunks/index.js";
async function load({ fetch, params }) {
  try {
    const publicationDetailsResponse = await fetch("/api/publication-details");
    const publicationDetails = await publicationDetailsResponse.json();
    const section = publicationDetails.sections.find(
      (section2) => section2.slug === params.slug
    );
    if (!section) {
      throw error(404, `Could not find ${params.slug}`);
    }
    const articlesResponse = await fetch(`/api/articles`);
    const articles = await articlesResponse.json();
    const articlesInSection = articles.filter((article) => {
      return article.section === params.slug;
    });
    return {
      section,
      articlesInSection
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
export {
  load
};
