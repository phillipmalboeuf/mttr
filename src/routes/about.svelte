<script context="module">
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/about.json`)

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

<Page {page} />
