<script lang="ts">
  import type { Ad } from "$lib/types";

  const { ad }: { ad: Ad } = $props();
</script>

<aside>
  <img src={ad.img} alt={`Advertisement for ${ad.name}`} />
</aside>
