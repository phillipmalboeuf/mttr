<script context="module">
	export const prerender = false;

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
	<Page {page} noWhite />
</section>

<style>
	section {
		min-height: 100vh;
		color: var(--white);
		background: var(--blue);
	}

	@media (max-width: 900px) {
		section {
			padding-top: 10vh;
		}

		section :global(h2) {
			font-size: 5vh;
		}
	}

	/* section :global(section.white) {
		color: var(--white);
		background: var(--blue);
	} */

	/* section :global(section.white a) {
		color: var(--white);
	} */

	section :global(h2) {
		font-weight: normal;
	}
</style>