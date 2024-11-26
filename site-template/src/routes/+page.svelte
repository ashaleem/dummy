<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import { PUBLICATION_DETAILS } from "$lib/constants";

  let { data } = $props();
</script>

<svelte:head>
  <title>{PUBLICATION_DETAILS.name}</title>
  <meta name="description" content={PUBLICATION_DETAILS.description} />
</svelte:head>

<div>
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

<!-- <aside>
  <img
    src={data.ads.sideA.img}
    alt={`Advertisement for ${data.ads.sideA.name}`}
  />
</aside> -->
