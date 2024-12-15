function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const makePublicationSchema = (publicationDetails) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: publicationDetails.name,
    description: publicationDetails.description,
    url: publicationDetails.url,
    logo: publicationDetails.logoUrl,
    image: publicationDetails.emblemUrl,
    sameAs: publicationDetails.supportLink,
    potentialAction: {
      "@type": "DonateAction",
      name: "Support",
      target: publicationDetails.supportLink
    }
  };
};
const makeArticleSchema = (publicationDetails, article) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${publicationDetails.url}/${article.section}/${article.slug}`
    },
    headline: article.title,
    image: article.featuredImage,
    datePublished: article.publicationDate,
    description: article.description,
    author: article.authors?.map((author) => {
      return {
        "@type": "Person",
        name: author.name
      };
    }),
    publisher: {
      "@type": "Organization",
      name: publicationDetails.name,
      logo: {
        "@type": "ImageObject",
        url: publicationDetails.logoUrl
      }
    },
    keywords: article.tags.join(", ")
  };
};
export {
  makeArticleSchema as a,
  html as h,
  makePublicationSchema as m
};
