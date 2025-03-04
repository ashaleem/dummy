<script lang="ts">
	import '$lib/styles/reset.css';
	import { prettifyDate } from '@gonzo-engineering/libs';

	let {
		title,
		standfirst,
		publicationDate,
		authors
	}: {
		title: string;
		standfirst?: string;
		publicationDate: string;
		authors?: {
			name: string;
			link?: string;
		}[];
	} = $props();
</script>

<div class="article-header">
	<h2>{title}</h2>
	{#if standfirst}
		<div class="article-standfirst">
			{standfirst}
		</div>
	{/if}
	<div class="details">
		{#if authors}
			<div class="byline">
				By {#each authors as author, i}
					{#if author.link}
						<a href={author.link}>{author.name}</a>
					{:else}
						{author.name}
					{/if}{#if i < authors.length - 2 && authors.length > 1},
					{/if}
					{#if i === authors.length - 2}
						and{' '}
					{/if}
				{/each}
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
