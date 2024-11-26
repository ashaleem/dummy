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
            <ul class="sub-nav">
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

<style>
  header {
    text-align: center;
    padding: 1rem;
  }
  nav {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: 0.5rem;
  }
  .sub-nav {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    padding: 0;
  }
  li:hover .sub-nav {
    display: block;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
