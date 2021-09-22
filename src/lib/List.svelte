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
			{ threshold: 0.5, rootMargin: '0px 0px' }
		)

		list.fields.items.forEach(item => observer.observe(document.getElementById(item.fields.identifier)))

    return () => {
      observer.disconnect()
    }
	})
</script>

<section>
  <nav>
    <div>
      <h4>{list.fields.title}</h4>

      {#each list.fields.items as item}
      <a href="#{item.fields.identifier}" class:visible={visible === item.fields.identifier}>
        <h2>{item.fields.title}</h2>
      </a>
      {/each}
    </div>
  </nav>

  <div class="items">
    {#each list.fields.items as item}
    <blockquote id={item.fields.identifier}>
      <Document body={item.fields.body} />
    </blockquote>
    {/each}
  </div>
</section>

<section class="mobile">
  <nav>
    <div>
      <h4>{list.fields.title}</h4>

      {#each list.fields.items as item}
      <a href="#{item.fields.identifier}" class:visible={visible === item.fields.identifier}>
        <h2>{item.fields.title}</h2>

        <blockquote>
          <Document body={item.fields.body} />
        </blockquote>
      </a>
      {/each}
    </div>
  </nav>
</section>

<style>
  section {
    position: relative;
    margin: calc(var(--gutter) * 2) calc(var(--gutter) * -1) 0 calc(var(--gutter) * -1);
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

  h4 {
    font-size: 22px;
    letter-spacing: 0.225em;
    text-decoration-line: underline;
    text-transform: uppercase;
  }

	h2 {
    font-size: 10vw;
    color: var(--grey);
    margin-bottom: 0;
    white-space: nowrap;
  }

  a {
    display: block;
  }

  a.visible h2 {
    color: var(--fluo);
  }

  nav {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    padding: calc(var(--gutter) * 2) var(--gutter);
    background: var(--black);
    width: 100vw;
    min-height: 100vh;

    display: flex;
    align-items: center;
  }

  .items {
    position: relative;
    z-index: 1;
    padding-bottom: 33vh;
  }

    blockquote {
      max-width: 666px;
      font-size: 20px;
      margin-bottom: 40vw;
    }

    blockquote:nth-of-type(2n) {
      margin-left: auto;
    }

    blockquote :global(strong) {
      font-size: 20px;
    }

    @media (max-width: 900px) {
      h2 {
        font-size: 8.88vh;
        white-space: normal;
      }

      blockquote {
        max-width: 100%;
        margin-right: 0;
      }
    }
</style>
