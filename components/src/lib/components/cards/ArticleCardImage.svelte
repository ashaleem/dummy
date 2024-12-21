<script lang="ts">
	import '$lib/styles/reset.css';

	let { src, alt }: { src: string; alt: string } = $props();
</script>

<img {src} {alt} />

<style>
	img {
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: 5px;
	}
</style>
