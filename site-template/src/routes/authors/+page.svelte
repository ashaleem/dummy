<script>
  import { allAuthors } from "../../data/authors/allAuthors";
</script>

<h1>Authors</h1>

<ul>
  {#each allAuthors as author}
    <li>
      <a href={`authors/${author.slug}`}>{author.name}</a>
    </li>
  {/each}
</ul>
