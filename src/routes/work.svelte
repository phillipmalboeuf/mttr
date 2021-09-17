<script context="module">
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/work.json`)

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
	/* section {
		
	} */

	section :global(section.white) {
		color: var(--white);
		background: var(--blue);
	}

	section :global(section.white a) {
		color: var(--white);
	}

	section :global(h2) {
		font-weight: normal;
	}
</style>