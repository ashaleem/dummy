<script lang="ts">
  import { PUBLICATION_DETAILS } from "$lib/constants";

  let { data } = $props();
</script>

<svelte:head>
  <title>{PUBLICATION_DETAILS.name}</title>
  <meta name="description" content={PUBLICATION_DETAILS.description} />
</svelte:head>

<h2>Posts</h2>
<ul>
  {#each data.articles as article}
    <a href={`/${article.slug}`}
      ><div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div>{article.publicationDate}</div>
      </div></a
    >
  {/each}
</ul>

<!-- <aside>
  <img
    src={data.ads.sideA.img}
    alt={`Advertisement for ${data.ads.sideA.name}`}
  />
</aside> -->
