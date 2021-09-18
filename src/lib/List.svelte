<script lang="ts">
  import { onMount } from 'svelte'

	import Document from '$lib/document/Document.svelte';
  import type { Entry, RichTextContent } from 'contentful';

	export let list: Entry<{
    title: string,
    identifier: string,
    items: Entry<{
      title: string,
      identifier: string,
      body: RichTextContent
    }>[]
  }>
</script>

<section>
  <h4>{list.fields.title}</h4>

  {#each list.fields.items as item}
  <a href="#{item.fields.identifier}" id={item.fields.identifier}>
    <h2>{item.fields.title}</h2>
    <blockquote>
      <Document body={item.fields.body} />
    </blockquote>
  </a>
  {/each}
</section>

<style>
  section {
    padding: calc(var(--gutter) * 3) var(--gutter);
    background: var(--black);
    margin: calc(var(--gutter) * 2) calc(var(--gutter) * -1) 0 calc(var(--gutter) * -1);
  }

  h4 {
    font-size: 22px;
    letter-spacing: 0.225em;
    text-decoration-line: underline;
    text-transform: uppercase;
  }

	h2 {
    color: var(--grey);
    margin-bottom: 0;
    white-space: nowrap;
  }

  h2:hover {
  }

  a {
    display: block;
    position: relative;
  }

    a blockquote {
      position: absolute;
      z-index: 1;
      right: 20%;
      top: -20%;
      opacity: 0;
      transition: opacity 666ms;
    }

    a:hover blockquote,
    a:focus blockquote {
      opacity: 1;
    }

    @media (max-width: 900px) {
      h2 {
        white-space: normal;
      }

      a blockquote {
        position: relative;
        top: 0;
        right: auto;
        opacity: 1;
      }
    }
</style>
