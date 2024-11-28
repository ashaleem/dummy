<script lang="ts">
  import { PUBLICATION_DETAILS } from "$lib/constants";
</script>

<footer>
  <div>
    © {PUBLICATION_DETAILS.yearFounded} - {new Date().getFullYear()}
    {PUBLICATION_DETAILS.name}
  </div>
  <div class="gonzo-plug">
    Powered by <a href="https://gonzo.engineering">Gonzo Engineering</a>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 3rem 0;
    gap: 0.5rem;
  }
  .gonzo-plug {
    font-size: 0.8rem;
  }
</style>
