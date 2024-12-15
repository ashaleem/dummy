<script lang="ts">
  // import Ad from "$lib/components/ads/Ad.svelte";
  import {
    ArticleCardGrid,
    ArticleFeaturedImage,
    ArticleHead,
  } from "@gonzo-engineering/dummy-ui";
  import {
    injectAdInArticle,
    makeArticleSchema,
  } from "@gonzo-engineering/libs";

  let { data } = $props();

  const { article } = $derived(data);

  $effect(() => {
    injectAdInArticle(
      data.ads.banner.img,
      `Advertisement for ${data.ads.banner.name}`
    );
  });
</script>

<svelte:head>
  <title>{article.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
  {@html `<script type="application/ld+json">${JSON.stringify(makeArticleSchema(data.publication, article))}</script>`}
</svelte:head>

<div class="container">
  <article>
    <ArticleHead
      title={article.title}
      description={article.description}
      publicationDate={article.publicationDate}
      authors={article.authors}
    />
    {#if article.featuredImage && article.featuredImageAltText}
      <ArticleFeaturedImage
        src={article.featuredImage}
        altText={article.featuredImageAltText}
        caption={article.featuredImageCaption}
      />
    {/if}
    <div>
      {@html article.content}
    </div>
  </article>

  <!-- <Ad ad={data.ads.banner} /> -->

  <ArticleCardGrid heading="Related articles" articles={data.otherArticles} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  article {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
