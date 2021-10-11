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
    <h3>{screen.fields.title}</h3>
    <Document body={screen.fields.body} />
  </article>
  {/each}

</section>

<section class="mobile">

  {#each screens.fields.screens as screen}
  <article id={screen.fields.identifier}>
    <h3>{screen.fields.title}</h3>
    <Document body={screen.fields.body} />
  </article>
  {#if screen.fields.media}
  <figure>
    <Picture media={screen.fields.media} />
  </figure>
  {/if}
  {/each}

</section>

<style>
  section {
    margin-top: calc(var(--gutter) * -3);
  }

  section.mobile {
    display: none;
  }

  @media (max-width: 900px) {
    section:not(.mobile) {
      display: none;
    }

    section.mobile {
      display: block;
    }
  }

  article {
    min-height: 100vh;
  }

  article:first-of-type {
    margin-top: calc((var(--gutter) * 3) - 100vh);
  }

    article > h3,
    article > :global(p) {
      margin-left: 0;
    }

    article:nth-of-type(2n) > h3,
    article:nth-of-type(2n) > :global(p) {
      margin-left: auto;
      margin-right: 0;
    }

    article h3 {
      font-size: 5vw;
      margin-bottom: 0.2em;
      width: 33%;
    }

    article :global(p) {
      font-size: 30px;
      font-weight: normal;
      width: 33%;
    }

    @media (max-width: 900px) {
      article {
        min-height: auto;
      }

      article:first-of-type {
        margin-top: calc((var(--gutter) * 3));
      }

      article h3 {
        width: 90%;
      }

      article :global(p) {
        width: 90%;
        font-size: 20px;
      }
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
        width: 100%;
        padding: 10% 33%;
        object-fit: contain;
      }

    @media (max-width: 1400px) {
      figure :global(img),
      figure :global(video) {
        /* padding: 15% 0; */
      }
    }

    @media (max-width: 900px) {
      article h3 {
        font-size: 8vw;
      }

      figure {
        position: relative;
      }

      figure :global(img),
      figure :global(video) {
        padding: 15% 0;
      }
    }
</style>
