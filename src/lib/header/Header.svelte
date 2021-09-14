<script lang="ts">
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	import Progress from './Progress.svelte';
</script>

<header>
	<Progress />

	<div class="corner">
		<a href="/">
			<Logo />
		</a>
	</div>

	<div class="corner">
		<Menu />
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
</style>
