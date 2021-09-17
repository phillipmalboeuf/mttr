<script lang="ts">
  import { onMount } from 'svelte'

	import Document from '$lib/document/Document.svelte'
  import Background from './Background.svelte'

	let scrollY: number
	let offsetHeight: number

	onMount(() => {
		offsetHeight = document.body.offsetHeight
	})

	export let page
</script>

<svelte:head>
	<title>{page.fields.title}</title>
</svelte:head>

<svelte:window bind:scrollY />

<section class:white={!page.fields.background} style="--slow: {scrollY / offsetHeight * 100 * 1.5}%;" id={page.fields.identifier}>
  <Background media={page.fields.background} />
	<Document body={page.fields.body} />
</section>

<style>
	section {
		padding: calc(var(--gutter) * 3) var(--gutter) calc(var(--gutter) * 3);
	}

	section.white {
		color: var(--black);
		background: var(--white);
	}

	:global(h1) {
		color: var(--fluo);
	}

	:global(.slow) {
		transform: translateY(var(--slow));
		position: relative;
		z-index: -1;
	}

	:global(blockquote:nth-of-type(2n - 1)) {
		margin-left: auto;
	}
</style>
