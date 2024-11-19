<script lang="ts">
  import type { NavSection } from "$lib/types";
  let {
    publicationName,
    navigation,
  }: {
    publicationName: string;
    navigation: NavSection[];
  } = $props();
</script>

<header>
  <a href="/"><h1>{publicationName}</h1></a>
  <nav>
    <ul>
      {#each navigation as { label, url, subNav }}
        <li>
          <a href={url}>{label}</a>
          {#if subNav}
            <ul>
              {#each subNav as { label, url }}
                <li>
                  <a href={url}>{label}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</header>
