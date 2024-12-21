<script lang="ts">
	import '$lib/styles/reset.css';

	let {
		title,
		href
	}: {
		title: string;
		href: string;
	} = $props();
</script>

<!-- <a {href} class:active={$page.url.pathname.includes(href)}>{title}</a> -->
<a {href} class:active={false}>{title}</a>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	a.active {
		text-decoration: underline;
		text-decoration-thickness: 0.2em;
		text-underline-offset: 0.2em;
		text-decoration-style: solid;
	}
</style>
