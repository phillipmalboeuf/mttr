<script context="module" lang="ts">
	export const prerender = false;

	export async function load({ page, fetch, session, context }) {
		const res = await fetch(`/index.json`)
		const { home, what, others, landing, mobile } = await res.json()

		return {
			props: {
				home,
				what,
				others,
				landing,
				mobile
			}
		}
	}
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte'
	import Picture from '$lib/Picture.svelte'

	export let home
	export let what
	export let others
	export let landing
	export let mobile
</script>

<figure>
	<Picture media={landing} />
</figure>

<figure class="mobile">
	<Picture media={mobile} />
</figure>

<div>
	<Page page={home} />
</div>
	<Page page={what} />
	<Page page={others} />


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

	figure.mobile {
		display: none;
	}

	@media (max-width: 900px) {
		figure:not(.mobile) {
			display: none;
		}

		figure.mobile {
			display: block;
		}
	}

	div {
		margin-top: calc(100vh + (var(--gutter) * 3));
	}

	div :global(figure) {
		position: sticky;
		top: -1px;
		height: 101vh;
		margin: calc(var(--gutter) * -3) 0 -100vh calc(var(--gutter) * -1);
	}
</style>