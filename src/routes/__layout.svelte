<script context="module">
	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/layout.json`)

		return {
			props: {
				media: (await res.json()).media
			}
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	export let media
</script>

<Header {media} />

<main>
	<slot />
</main>

<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
</footer>

<style>
	main {
	
	}

	footer {

	}
</style>
