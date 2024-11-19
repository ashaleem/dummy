<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.article.title} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.article.title} />
</svelte:head>

<article>
  <h1>{data.article.title}</h1>
  <p>Published at {data.article.publicationDate}</p>
  <p>{data.article.authors}</p>

  {@html data.article.content}
</article>
