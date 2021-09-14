<script lang="ts">
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
</script>

<header>
	<div class="corner">
		<a href="/">
			<Logo />
		</a>
	</div>

	<div class="corner">
		<nav>
			<ul>
				<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
				<li class:active={$page.path === '/work'}><a sveltekit:prefetch href="/work">Work</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
	}

	.corner {
		padding: var(--gutter);
	}

	.corner a {
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active {
		font-weight: bold;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
