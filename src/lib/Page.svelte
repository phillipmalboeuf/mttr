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
	<title>{page.title}</title>
</svelte:head>

<svelte:window bind:scrollY />

<section class:white={!page.background} style="--slow: {scrollY / offsetHeight * 100}%;" id={page.identifier}>
  <Background media={page.background} />
	<Document body={page.body} />
</section>

<style>
	:global(h1) {
		color: var(--fluo);
	}

	:global(.slow) {
		transform: translateY(var(--slow));
		position: relative;
		z-index: -1;
	}
</style>
