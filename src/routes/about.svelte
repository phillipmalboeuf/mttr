<script context="module">
	export const prerender = false;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/about.json`)

		return {
			props: {
				page: (await res.json()).page
			}
		}
	}
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte';

	export let page
</script>

<section>
	<Page {page} />
</section>

<style>
	section :global(blockquote:nth-of-type(2n)) {
		margin-right: 0;
		margin-left: auto;
	}

	section :global(blockquote:nth-of-type(2n - 1)) {
		margin-left: 0;
		margin-right: auto;
	}
	
	@media (max-width: 900px) {
		section {
			padding-top: 10vh;
		}
	}
</style>