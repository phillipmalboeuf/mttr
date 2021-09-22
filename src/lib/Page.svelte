<script lang="ts">
  import { onMount } from 'svelte'

	import Document from '$lib/document/Document.svelte'
  import Background from './Background.svelte'
	import EasterEggs from './EasterEggs.svelte'

	let scrollY: number
	let offsetHeight: number

	onMount(() => {
		offsetHeight = (document.body.offsetHeight / 3)
	})

	export let page
	export let noWhite = false
</script>

<svelte:head>
	<title>Mean Time to Repair – {page.fields.title}</title>
</svelte:head>

<svelte:window bind:scrollY />

<section class:white={!noWhite && !page.fields.background} style="--slow: {scrollY / offsetHeight * -100}%;" id={page.fields.identifier}>
  <Background media={page.fields.background} />
	<div><Document body={page.fields.body} /></div>
	<EasterEggs eggs={page.fields.easterEggs} />
</section>

<style>
	section {
		position: relative;
	}

	div {
		padding: calc(var(--gutter) * 3) var(--gutter) calc(var(--gutter) * 3);
	}

	section.white {
		color: var(--black);
		background: var(--white);
	}

		section.white :global(a) {
			color: var(--blue);
		}

	:global(h1) {
		color: var(--fluo);
	}

	@media (max-width: 900px) {
		div {
			overflow: hidden;
		}
	}

	section :global(div:not(.items) > blockquote) {
		transform: translate3d(0, calc(-222vh + 100%), 0);
		margin-bottom: 20vh;
	}

	:global(.slow) {
		/* margin-bottom: -200vh; */
		min-height: 200vh;
	}


	:global(.slow > div) {
		position: sticky;
		top: 50%;
		transform: translateY(-50%);
		z-index: -1;
	}
	
	@media (max-width: 900px) {
		:global(.slow) {
			min-height: auto;
		}

		:global(.slow > div) {
			position: relative;
			top: 0;
			transform: none;
			z-index: 0;
		}

		section :global(div:not(.items) > blockquote) {
			transform: none;
		}
	}

	:global(blockquote:nth-of-type(2n)) {
		margin-right: auto;
	}

	:global(blockquote:nth-of-type(2n - 1)) {
		margin-left: auto;
	}
</style>
