<script lang="ts">
  import { prettifyDate } from "$lib/utils";

  let {
    headline,
    description,
    path,
    publicationDate,
    featuredImage,
  }: {
    headline: string;
    description: string;
    path: string;
    publicationDate: string;
    featuredImage: string | undefined;
  } = $props();
</script>

<a href={path}>
  <div class="card">
    {#if featuredImage}
      <img src={featuredImage} alt={headline} />
    {/if}
    <h3>{headline}</h3>
    <div>{description}</div>
    <div>{prettifyDate(publicationDate)}</div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
