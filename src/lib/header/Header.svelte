<script lang="ts">
	import { onMount } from 'svelte'

	import Logo from './Logo.svelte';
	import AlternateLogo from './AlternateLogo.svelte'
	import Menu from './Menu.svelte';
	import Progress from './Progress.svelte';

	export let media

	let white = false

	onMount(() => {
		const observer = new IntersectionObserver( 
			(entries) => {
				white = !!entries.find(entry => entry.isIntersecting)
			},
			{ threshold: [0], rootMargin: '-8% 0px -92% 0px' }
		)

		document.querySelectorAll('section.white').forEach(element => observer.observe(element))
	})
</script>

<header class:white>
	<Progress />

	<div class="corner">
		<a href="/">
			{#if white}
			<AlternateLogo />
			{:else}
			<Logo />
			{/if}
		</a>
	</div>

	<div class="corner">
		<Menu {media} />
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 10;
	}

	.corner {
		padding: var(--gutter);
	}

	header.white {
		color: var(--black);
	}
</style>
