<script lang="ts">
	import { onMount } from 'svelte'

	let value: number = 0
	let max: number

	onMount(() => {
		max = document.documentElement.scrollHeight - document.documentElement.clientHeight
	})
</script>

<svelte:window bind:scrollY={value} />

<progress {max} {value} />

<style>
  progress {
    appearance: none;

    position: fixed;
    top: 5px;
    left: 0;

    width: 100%;
    height: 5px;
  }

  progress::-webkit-progress-bar {
    background: transparent;
  }

  progress::-webkit-progress-value {
    background: var(--blue);
  }
</style>