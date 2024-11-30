<script lang="ts">
  // import Ad from "$lib/components/ads/Ad.svelte";
  import ArticleHead from "$lib/components/articles/ArticleHead.svelte";
  import { onMount } from "svelte";
  import { makeArticleSchema } from "$lib/scripts/schema.js";
  import ArticleFeaturedImage from "$lib/components/articles/ArticleFeaturedImage.svelte";
  import { injectAdInArticle } from "$lib/scripts/ads.js";

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
      featuredImage={article.featuredImage}
      featuredImageAltText={article.featuredImageAltText}
      featuredImageCaption={article.featuredImageCaption}
      authors={article.authors}
      publicationDate={article.publicationDate}
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
    <h3>Related articles</h3>
    <div>Pending</div>
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
