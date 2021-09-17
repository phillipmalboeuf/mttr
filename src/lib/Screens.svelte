<script lang="ts">
  import { onMount } from 'svelte'

	import Document from '$lib/document/Document.svelte';
  import type { Asset, Entry, RichTextContent } from 'contentful';
  import Picture from './Picture.svelte';

	export let screens: Entry<{
    // title: string,
    // identifier: string,
    screens: Entry<{
      title: string,
      identifier: string,
      body: RichTextContent,
      media: Asset
    }>[]
  }>
</script>

<section>

  {#each screens.fields.screens as screen}
  {#if screen.fields.media}
  <figure>
    <Picture media={screen.fields.media} />
  </figure>
  {/if}
  <article id={screen.fields.identifier}>
    <h2>{screen.fields.title}</h2>
    <Document body={screen.fields.body} />
  </article>
  {/each}

</section>

<style>
  article {
    min-height: 100vh;
  }

    article > h2,
    article > :global(p) {
      margin-left: 0;
    }

    article:nth-of-type(2n) > h2,
    article:nth-of-type(2n) > :global(p) {
      margin-left: auto;
      margin-right: 0;
    }

    article h2 {
      margin-bottom: 0.2em;
      width: 66%;
    }

    article :global(p) {
      font-size: 30px;
      font-weight: normal;
      width: 33%;
    }

    figure {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      margin: 0 0 2vh;
    }

      figure :global(img),
      figure :global(video) {
        height: 100%;
        padding: 10%;
        object-fit: contain;
      }
</style>
