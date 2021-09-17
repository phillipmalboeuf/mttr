<script lang="ts">
	import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

	import Eyes from './Eyes.svelte';
  import Background from '$lib/Background.svelte';

  export let media

  let visible = false

  function click() {
    visible = false
  }
</script>


<button on:click={() => visible = true}>
  <Eyes />
</button>

{#if visible}
<nav transition:fade>
  <Background {media} />

  <button on:click={click}>
    <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="43.5" cy="43.5" r="42.5" stroke="currentColor" stroke-width="2"/>
      <path d="M19.0977 19.0977L43.5001 43.5001M67.9025 67.9025L43.5001 43.5001M43.5001 43.5001L67.9025 19.0977M43.5001 43.5001L19.0977 67.9025" stroke="currentColor" stroke-width="2"/>
    </svg>
  </button>

  <!-- <a class:active={$page.path === '/'} sveltekit:prefetch href="/">Home</a> -->
  <a class:active={$page.path === '/about'} sveltekit:prefetch href="/about" on:click={click}>About</a>
  <a sveltekit:prefetch href="/#what" on:click={click}>What we're Building</a>
  <a class:active={$page.path === '/work'} sveltekit:prefetch href="/work" on:click={click}>Work for MTTR</a>
  <a sveltekit:prefetch href="/others" on:click={click}>Find the Others</a>
</nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: var(--black);
    color: var(--white);

    padding: var(--gutter);
  }

    nav button {display: block;
      margin-left: auto;
    }

    nav a {
      display: block;
      font-size: 10vw;
    }
</style>