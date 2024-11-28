<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";
  import { PUBLICATION_DETAILS } from "$lib/constants";

  let { data } = $props();
</script>

<svelte:head>
  <title>{PUBLICATION_DETAILS.name}</title>
  <meta name="description" content={PUBLICATION_DETAILS.description} />
</svelte:head>

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
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 1rem;
  }
</style>
