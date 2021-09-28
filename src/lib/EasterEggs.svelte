<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition';

	import Document from '$lib/document/Document.svelte';
  import type { Entry, RichTextContent } from 'contentful';

	export let eggs: Entry<{
    title: string,
    identifier: string,
    icon: string,
    body: RichTextContent,
    top: string,
    left: string,
  }>[]

  let current: number
</script>

{#if eggs}
{#each eggs as egg, i}
<button on:click={() => current = i} style={(egg.fields.top && egg.fields.left) && `top: ${egg.fields.top}; left: calc(${egg.fields.left} - 10vw);`}>
  {egg.fields.icon}
</button>
{/each}

{#if current !== undefined}
<article transition:fade>
  <button on:click={() => current = undefined} />
  <div>
    <button on:click={() => current = undefined}>
      <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.16467 1.05957L18.9224 18.8173M36.6802 36.5751L18.9224 18.8173M18.9224 18.8173L36.6802 1.05957M18.9224 18.8173L1.16467 36.5751" stroke="white"/>
      </svg>
    </button>
    <Document body={eggs[current].fields.body} />
  </div>
</article>
{/if}
{/if}


<style>
  button {
    border: none;
    background: transparent;
    padding: 0;
  }

  button[style] {
    position: absolute;
    font-size: 5vw;
    font-family: 'GT Alpina';
  }

  @media (max-width: 900px) {
    button[style] {
      font-size: 10vh;
      right: 0;
    }
  }

  article {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 333;

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
  }

    article > button {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: transparent;
      /* backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px); */
    }

    article div {
      position: relative;
      background: var(--blue);
      padding: var(--gutter);
      max-width: 66%;
      max-height: 90vh;
      overflow-y: auto;
    }

    @media (max-width: 900px) {
      article div {
        padding: calc(var(--gutter) * 2);
        max-width: 100%;
      }
    }

    article div :global(p) {
      font-weight: normal;
      max-width: 366px;
    }

    article div > button  {
      position: absolute;
      top: calc(var(--gutter) / 3);
      right: calc(var(--gutter) / 3);
    }
</style>
