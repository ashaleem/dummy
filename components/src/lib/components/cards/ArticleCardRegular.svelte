<script lang="ts">
	import '$lib/styles/reset.css';
	import { prettifyDate } from '@gonzo-engineering/libs';
	import ArticleCardImage from './ArticleCardImage.svelte';

	let {
		headline,
		description,
		path,
		publicationDate,
		featuredImage
	}: {
		headline: string;
		description?: string;
		path: string;
		publicationDate: string;
		featuredImage?: string;
	} = $props();
</script>

<a href={path}>
	<div class="card">
		{#if featuredImage}
			<ArticleCardImage src={featuredImage} alt={headline} />
		{/if}
		<div class="card-details">
			<h3>{headline}</h3>
			{#if description}
				<div>{description}</div>
			{/if}
			<div class="publication-date">{prettifyDate(publicationDate)}</div>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.card-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	h3 {
		font-size: 1.8rem;
	}
	.publication-date {
		font-size: 0.9rem;
		font-weight: bold;
	}
</style>
