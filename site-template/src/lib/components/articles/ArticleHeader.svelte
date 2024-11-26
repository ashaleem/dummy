<script lang="ts">
  import type { Author } from "$lib/types";

  let {
    title,
    description,
    featuredImage,
    authors,
    publicationDate,
  }: {
    title: string;
    description: string;
    featuredImage: string | undefined;
    authors: Author[] | undefined;
    publicationDate: string;
  } = $props();

  const authorNames = authors?.map((author) => author.name);
</script>

<div>
  <h2>{title}</h2>
  <div class="article-standfirst">
    {description}
  </div>

  {#if featuredImage}
    <img src={featuredImage} alt={title} />
  {/if}

  {#if authorNames}
    <div>By {authorNames.join(", ")}</div>
  {/if}
  <div>{publicationDate}</div>
</div>
