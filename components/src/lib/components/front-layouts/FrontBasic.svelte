<script lang="ts">
	import '$lib/styles/reset.css';
	import type { ArticleMetadata } from '@gonzo-engineering/libs';
	import ArticleCardGrid from '../ArticleCardGrid.svelte';
	import ArticleCardFeatured from '../cards/ArticleCardFeatured.svelte';

	let { heading, articles }: { heading?: string; articles: ArticleMetadata[] } = $props();

	const mostRecentArticle = articles[0];
	const allOtherArticles = articles.slice(1);
</script>

<div class="page-container">
	{#if heading}
		<h2>{heading}</h2>
	{/if}

	<ArticleCardFeatured
		link={`/${mostRecentArticle.section}/${mostRecentArticle.slug}`}
		headline={mostRecentArticle.title}
		authors={mostRecentArticle.authors}
		description={mostRecentArticle.description}
		featuredImage={mostRecentArticle.featuredImage}
	/>

	<ArticleCardGrid heading="Latest" articles={allOtherArticles} />
</div>

<style>
	h2 {
		font-size: 2rem;
		text-align: center;
	}
	.page-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
