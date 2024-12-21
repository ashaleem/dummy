<script lang="ts">
	import '$lib/styles/reset.css';
	import { type Author, prettifyDate } from '@gonzo-engineering/libs';

	let {
		title,
		description,
		publicationDate,
		authors
	}: {
		title: string;
		description: string;
		publicationDate: string;
		authors?: Author[];
	} = $props();
</script>

<div class="article-header">
	<h2>{title}</h2>
	<div class="article-standfirst">
		{description}
	</div>
	<div class="details">
		{#if authors}
			<div class="byline">
				By {authors.map((author) => author.name).join(', ')}
			</div>
		{/if}
		<div>{prettifyDate(publicationDate)}</div>
	</div>
</div>

<style>
	.article-header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	h2 {
		font-size: 2rem;
	}
	.article-standfirst {
		font-family: var(--main-serif-font);
		font-style: italic;
		font-size: 1.2rem;
		color: #323232;
	}
	.details {
		font-size: 0.9rem;
	}
	.byline {
		font-weight: bold;
	}
</style>
