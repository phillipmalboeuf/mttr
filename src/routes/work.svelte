<script context="module">
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/work.json`)

		return {
			props: {
				page: (await res.json()).page.fields
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
	section {
		background: var(--blue);
		padding: calc(var(--gutter) * 3) calc(var(--gutter) * 2) calc(var(--gutter) * 1);
	}

	:global(h2) {
		font-weight: normal;
	}
</style>