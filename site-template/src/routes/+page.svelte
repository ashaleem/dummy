<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";
  import { makePublicationSchema } from "$lib/scripts/schema.js";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.publication.name}</title>
  <meta name="description" content={data.publication.description} />
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(makePublicationSchema(data.publication))}</script>`}

<div class="container">
  {#each data.articles as article}
    <ArticleCard
      headline={article.title}
      description={article.description}
      path={`/${article.section}/${article.slug}`}
      publicationDate={article.publicationDate}
      featuredImage={article.featuredImage}
    />
  {/each}
</div>

<SupportPrompt
  message={"Power journalism by and for the people."}
  link={data.publication.supportLink}
  linkText={"Become a patron"}
  image={{
    src: data.publication.emblemUrl,
    alt: "A hand holding a pen, writing on a piece of paper.",
  }}
/>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
</style>
