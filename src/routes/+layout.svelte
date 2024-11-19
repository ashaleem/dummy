<script lang="ts">
  import "$lib/styles/reset.css";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Ad from "$lib/components/Ad.svelte";

  let { children, data } = $props();

  const { publication, ads } = data;
</script>

<Ad ad={ads.banner} />

<Header
  publicationName={publication.name}
  navigation={publication.navigation}
/>

<main>
  {@render children()}
</main>

<Ad ad={ads.sideA} />
<Ad ad={ads.sideB} />

<Footer />
