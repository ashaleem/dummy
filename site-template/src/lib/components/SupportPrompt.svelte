<script lang="ts">
  let {
    link,
    message,
  }: {
    link: string;
    message: string;
  } = $props();
</script>

<div class="support-prompt">
  <p>{message}</p>
  <a href={link}>Support us</a>
</div>
