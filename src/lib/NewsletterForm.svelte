<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition';
  import { enhance } from '$lib/form'

	import Document from '$lib/document/Document.svelte';
  import type { Entry, RichTextContent } from 'contentful';

	export let form: Entry<{
    cta: string,
    body: RichTextContent,
    formUrl: string
  }>
</script>


<article>
  <Document body={form.fields.body} />
  <form action={form.fields.formUrl} target="_blank">
    <input type="email" name="EMAIL" placeholder="your.email@gmail.com" />
    <button type="submit">{form.fields.cta}</button>
  </form>
</article>


<style>
  article {
    padding: calc(var(--gutter) / 2);
    color: var(--black);
    background: var(--fluo);
    width: 420px;
    margin: 0 var(--gutter) 0 auto;
    transform: translateY(calc(var(--slow) * -1.33));
  }

  @media (max-width: 900px) {
    article {
      width: 100%;
      padding: var(--gutter);
      transform: none;
    }
  }

  form {
    border: 1px solid;
    border-radius: 7px;
    padding: 0.25em;
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    input {
      line-height: 1;
      border: none;
      background: transparent;
      padding: 0.5em;
    }

    button {
      font-size: 12px;
      line-height: 1;
      font-weight: bold;
      color: var(--white);
      background: var(--black);
      padding: 1.5em;
      border-radius: 9px;
    }
</style>
