<script lang="ts">
  import ArticleHeader from "$lib/components/articles/ArticleHeader.svelte";
  import SupportPrompt from "$lib/components/SupportPrompt.svelte";

  let { data } = $props();

  const article = data.article;
</script>

<svelte:head>
  <title>{article?.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

{#if article}
  <ArticleHeader
    title={article.title}
    description={article.description}
    featuredImage={article.featuredImage}
    authors={article.authors}
    publicationDate={article.publicationDate}
  />
{/if}

{@html article?.content}

<SupportPrompt
  link={data.publication.supportLink}
  message={"Power grassroots journalism in your area."}
/>
