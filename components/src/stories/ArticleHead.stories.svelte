<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ArticleHead from '../lib/components/articles/ArticleHead.svelte';

	const { Story } = defineMeta({
		title: 'Articles/Article Head',
		component: ArticleHead,
		tags: ['autodocs'],
		args: {
			title: 'Man bites dog',
			standfirst: 'Park goers were shocked to see a game of fetch go south',
			publicationDate: '2021-09-01',
			authors: [
				{
					name: 'John Doe',
					link: '/authors/john-doe'
				},
				{
					name: 'Jane Doe',
					link: '/authors/jane-doe'
				},
				{
					name: 'John Smith'
				}
			]
		}
	});
</script>

<Story name="Default" />
