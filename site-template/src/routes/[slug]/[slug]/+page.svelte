<script lang="ts">
  // import Ad from "$lib/components/ads/Ad.svelte";
  import ArticleHead from "$lib/components/articles/ArticleHead.svelte";
  import { browser } from "$app/environment";

  let { data } = $props();

  const article = data.article;

  const adHTML = `<aside style="border: 2px solid black; position: relative; margin: 2rem 0;">
    <div class="ad-label" style="font-size: 0.8rem; position: absolute; top: -23px; right: -2px; background-color: black; color: white; padding: 0.1rem 0.5rem; border-radius: 5px 5px 0 0;">Advertisement</div>
    <img src=${data.ads.banner.img} alt=${data.ads.banner.name}} style="width: 100%; max-width: 800px; margin: 0 auto;">
  </aside>`;

  const injectAd = () => {
    if (!browser) return;
    const ad = document.createElement("div");
    ad.innerHTML = adHTML;
    const articleElement = document.querySelector("article");
    if (articleElement) {
      const paragraphs = articleElement.querySelectorAll("p");
      const halfway = Math.floor(paragraphs.length / 2);
      if (paragraphs.length > 2) paragraphs[halfway].after(ad);
      else articleElement.append(ad);
    }
  };

  // Inject the ad after the article content has been rendered
  setTimeout(injectAd, 2000);
</script>

<svelte:head>
  <title>{article?.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

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
