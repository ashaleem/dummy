<script>
  import { ArticleCardGrid } from "@gonzo-engineering/dummy-ui";

  let { data } = $props();

  const author = data.author;
  const articles = data.allArticlesByAuthor;
</script>

<div class="container">
  <div class="author-details">
    <h2>{author?.name}</h2>
    {#if author?.bio}
      <div>{author.bio}</div>
    {/if}
  </div>

  {#if articles}
    <ArticleCardGrid heading="Articles" {articles} />
  {/if}
</div>

<style>
  h2 {
    margin-bottom: 0.5rem;
  }
  .container {
    max-width: 1300px;
    margin: 2rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
