<script lang="ts">
  import { prettifyDate } from "$lib/scripts/index";

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

<!-- TODO: Better fix for articles not updating on link click -->
<a data-sveltekit-reload href={path}>
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
