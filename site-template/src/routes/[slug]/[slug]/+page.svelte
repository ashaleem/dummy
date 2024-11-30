<script lang="ts">
  // import Ad from "$lib/components/ads/Ad.svelte";
  import ArticleHead from "$lib/components/articles/ArticleHead.svelte";
  import { onMount } from "svelte";
  import { makeArticleSchema } from "$lib/scripts/schema.js";
  import ArticleFeaturedImage from "$lib/components/articles/ArticleFeaturedImage.svelte";
  import { injectAdInArticle } from "$lib/scripts/ads.js";
  import ArticleCard from "$lib/components/ArticleCard.svelte";

  let { data } = $props();

  const article = data.article;

  onMount(() => {
    const adImgSrc = data.ads.banner.img;
    const adAltText = `Advertisement for ${data.ads.banner.name}`;
    injectAdInArticle(adImgSrc, adAltText);
  });
</script>

<svelte:head>
  <title>{article?.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(makeArticleSchema(data.publication, article))}</script>`}

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

  <div class="related-articles">
    <h3>Other articles</h3>
    {#each data.otherArticles as otherArticle}
      <ArticleCard
        headline={otherArticle.title}
        description={otherArticle.description}
        path={`/${otherArticle.section}/${otherArticle.slug}`}
        publicationDate={otherArticle.publicationDate}
        featuredImage={otherArticle.featuredImage}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h3 {
    font-size: 1.5rem;
  }
</style>
