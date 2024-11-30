<script lang="ts">
  import ArticleCardFeatured from "$lib/components/ArticleCardFeatured.svelte";
  import ArticleCardGrid from "$lib/components/ArticleCardGrid.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";
  import { makePublicationSchema } from "$lib/scripts/schema.js";

  let { data } = $props();

  const mostRecentArticle = data.articles[0];
  const allOtherArticles = data.articles.slice(1);
</script>

<svelte:head>
  <title>{data.publication.name}</title>
  <meta name="description" content={data.publication.description} />
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(makePublicationSchema(data.publication))}</script>`}

<ArticleCardFeatured
  link={`/${mostRecentArticle.section}/${mostRecentArticle.slug}`}
  headline={mostRecentArticle.title}
  authors={mostRecentArticle.authors}
  description={mostRecentArticle.description}
  featuredImage={mostRecentArticle.featuredImage}
/>

<ArticleCardGrid articles={allOtherArticles} />

<SupportPrompt
  message={"Power journalism by and for the people."}
  link={data.publication.supportLink}
  linkText={"Become a patron"}
  image={{
    src: data.publication.emblemUrl,
    alt: "A hand holding a pen, writing on a piece of paper.",
  }}
/>
