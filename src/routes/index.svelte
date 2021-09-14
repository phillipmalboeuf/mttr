<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte'

	let scrollY: number
	let offsetHeight: number

	onMount(() => {
		offsetHeight = document.body.offsetHeight
	})
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:window bind:scrollY />

<section style="--slow: {scrollY / offsetHeight * 100}%;">
	<!-- height: {offsetHeight}<br>
	scroll: {scrollY} -->
	<h1 class="slow">
		Discourse and understanding are broken
	</h1>

	<blockquote>
		<p>Somewhere between Twitter and Parler, between FOX and CNN, between the Times and the Post, there is a space for real discourse, good faith community, and a content experience that offers better, more nuanced understanding of the issues that matter most.</p>

		<p>We’re building MTTR to be this ‘3rd Space’</p>
	</blockquote>

	<h1 class="slow">
		Discourse and understanding are broken
	</h1>

	<blockquote>
		<p>Somewhere between Twitter and Parler, between FOX and CNN, between the Times and the Post, there is a space for real discourse, good faith community, and a content experience that offers better, more nuanced understanding of the issues that matter most.</p>

		<p>We’re building MTTR to be this ‘3rd Space’</p>
	</blockquote>

	<!-- <Counter /> -->
</section>

<style>
	section {
		margin-top: 50vh;
	}

	.slow {
		transform: translateY(var(--slow));
		position: relative;
		z-index: -1;
	}
</style>
