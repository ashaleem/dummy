<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ArticleHead from '../lib/components/articles/ArticleHead.svelte';

	const { Story } = defineMeta({
		title: 'Articles/Article Head',
		component: ArticleHead,
		tags: ['autodocs'],
		args: {
			title: 'Man bites dog',
			description: 'Park goers were shocked to see a game of fetch go south',
			publicationDate: '2021-09-01',
			authors: [
				{
					id: 'john-doe',
					name: 'John Doe'
				}
			]
		}
	});
</script>

<Story name="Default" />
