<script lang="ts">
  import { PUBLICATION_DETAILS } from "$lib/constants";
</script>

<footer>
  <div>
    © {PUBLICATION_DETAILS.yearFounded} - {new Date().getFullYear()}
    {PUBLICATION_DETAILS.name}
  </div>
  <div>
    Powered by <a href="https://gonzo.engineering">Gonzo Engineering</a>
  </div>
</footer>
