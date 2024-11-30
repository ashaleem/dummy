<script lang="ts">
  import FrontBasic from "$lib/components/front-layouts/FrontBasic.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.section.label} | {data.publication.name}</title>
  <meta property="og:type" content="article" />
</svelte:head>

<FrontBasic heading={data.section.label} articles={data.articlesInSection} />
