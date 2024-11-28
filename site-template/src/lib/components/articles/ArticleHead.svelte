<script lang="ts">
  import type { Author } from "$lib/types";
  import { prettifyDate } from "$lib/utils";

  let {
    title,
    description,
    featuredImage,
    featuredImageAltText,
    featuredImageCaption,
    authors,
    publicationDate,
  }: {
    title: string;
    description: string;
    featuredImage: string | undefined;
    featuredImageAltText: string | undefined;
    featuredImageCaption: string | undefined;
    authors: Author[] | undefined;
    publicationDate: string;
  } = $props();
</script>

<div class="article-header">
  <h2>{title}</h2>
  <div class="article-standfirst">
    {description}
  </div>
  <div class="details">
    {#if authors}
      <div class="byline">
        By {authors.map((author) => author.name).join(", ")}
      </div>
    {/if}
    <div>{prettifyDate(publicationDate)}</div>
  </div>
  {#if featuredImage}
    <figure>
      <img
        src={featuredImage}
        alt={featuredImageAltText
          ? featuredImageAltText
          : `Featured image for ${title}`}
      />
      {#if featuredImageCaption}
        <figcaption>{featuredImageCaption}</figcaption>
      {/if}
    </figure>
  {/if}
</div>

<style>
  .article-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  .article-standfirst {
    font-family: var(--main-serif-font);
    font-style: italic;
    font-size: 1.2rem;
    color: #323232;
  }
  .details {
    font-size: 0.9rem;
  }
  .byline {
    font-weight: bold;
  }
  img {
    border-radius: 0.5rem;
    width: 100%;
  }
  figcaption {
    font-size: 0.8rem;
    color: #666;
    text-align: right;
    margin-right: 0.2rem;
  }
  figure {
    margin-top: 1rem;
    @media (min-width: 768px) {
      width: 150%;
      margin-left: -25%;
      max-width: 150%;
    }
  }
</style>
