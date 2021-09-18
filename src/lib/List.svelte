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

  let visible: string

  onMount(() => {
		const observer = new IntersectionObserver( 
			(entries) => {
				visible = entries.find(entry => entry.isIntersecting)?.target.id
			},
			{ threshold: [0], rootMargin: '-50% 0px' }
		)

		list.fields.items.forEach(item => observer.observe(document.getElementById(item.fields.identifier)))

    return () => {
      observer.disconnect()
    }
	})
</script>

<section>
  <h4>{list.fields.title}</h4>

  {#each list.fields.items as item}
  <a on:pointerenter={() => visible = item.fields.identifier} href="#{item.fields.identifier}" id={item.fields.identifier} class:visible={visible === item.fields.identifier}>
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

  a {
    display: block;
    position: relative;
  }

  a.visible h2 {
    color: var(--fluo);
  }

    a blockquote {
      position: absolute;
      z-index: 1;
      right: 20%;
      bottom: -50%;
      opacity: 0;
      transition: opacity 666ms;
      max-width: 666px;
      font-size: 20px;
    }

    a blockquote :global(strong) {
      font-size: 20px;
    }

    a.visible blockquote {
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
