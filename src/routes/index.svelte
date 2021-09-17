<script context="module" lang="ts">
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/index.json`)
		const { home, what, landing } = await res.json()

		return {
			props: {
				home,
				what,
				landing
			}
		}
	}
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte'
	import Picture from '$lib/Picture.svelte'

	export let home
	export let what
	export let landing
</script>

<figure>
	<Picture media={landing} />
</figure>

<div>
	<Page page={home} />
	<Page page={what} />
</div>


<style>
	figure {
		width: 100vw;
    height: 100vh;
		margin: 0;
		position: fixed;
		top: 0;
		z-index: -10;
	}

	figure :global(video),
  figure :global(img) {
    height: 100%;
    object-fit: cover;
  }

	div {
		margin-top: 100vh;
	}

	div :global(figure) {
		position: sticky;
		margin: calc(var(--gutter) * -3) 0 calc(var(--gutter) * -3) calc(var(--gutter) * -1);
	}
</style>