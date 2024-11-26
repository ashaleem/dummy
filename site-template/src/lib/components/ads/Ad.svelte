<script lang="ts">
  import type { Ad } from "$lib/types";

  const { ad }: { ad: Ad } = $props();
</script>

<aside>
  <img src={ad.img} alt={`Advertisement for ${ad.name}`} />
</aside>

<style>
  img {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
