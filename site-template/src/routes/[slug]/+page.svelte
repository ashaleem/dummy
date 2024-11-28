<script lang="ts">
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.section.label} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

<h2>{data.section.label}</h2>

{#each data.articlesInSection as article}
  <ArticleCard
    headline={article.title}
    description={article.description}
    path={`/${data.section.slug}/${article.slug}`}
    publicationDate={article.publicationDate}
    featuredImage={article.featuredImage}
  />
{/each}
