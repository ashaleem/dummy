<script lang="ts">
  import "$lib/styles/reset.css";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Ad from "$lib/components/ads/Ad.svelte";

  let { children, data } = $props();

  const { publication, ads } = data;
</script>

<Header
  publicationName={publication.name}
  navigation={publication.navigation}
/>

<!-- <Ad ad={ads.banner} /> -->

<main>
  {@render children()}
</main>

<!-- <Ad ad={ads.sideA} />
<Ad ad={ads.sideB} /> -->

<Footer />

<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Bokor&family=Pirata+One&display=swap"); */

  :global(body) {
    --main-serif-font: "Georgia", serif;
    --main-sans-serif-font: Arial, sans-serif;

    font-family: var(--main-sans-serif-font);
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--main-serif-font);
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>
