<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition';
  import { enhance } from '$lib/form'

	import Document from '$lib/document/Document.svelte';
  import type { Entry, RichTextContent } from 'contentful';

	export let form: Entry<{
    cta: string,
    body: RichTextContent,
    formUrl: string,
    formSecret: string
    successText: string
  }>

  let success = false
  let pending = false
  let error: string
</script>


<article>
  <Document body={form.fields.body} />
  {#if success}
  <p><strong>{form.fields.successText}</strong></p>
  {:else}
  <form action={form.fields.formUrl} method="POST" use:enhance={{
    pending: () => {
      pending = true
      error = undefined
    },
    error: async (res) => {
      const result = await res.text()
      pending = false
      error = result
    },
    result: async (res, form) => {
      const result = await res.text()
      pending = false
      success = true
    }
  }}>
    <input type="email" name="EMAIL" required placeholder="your.email@gmail.com" />
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name={form.fields.formSecret} tabindex="-1" value=""></div>
    <button type="submit" disabled={pending}>{form.fields.cta}</button>
  </form>
  {#if error}<p><strong>{error}</strong></p>{/if}
  {/if}
</article>


<style>
  article {
    position: absolute;
    top: 90%;
    right: 0;

    padding: calc(var(--gutter) / 2);
    color: var(--black);
    background: var(--fluo);
    width: 420px;
    margin: -50vh var(--gutter) 0 auto;
    /* transform: translate3d(0, calc(var(--slow) * -0.5), 0); */
  }

  @media (max-width: 900px) {
    article {
      position: relative;
      top: auto;
      width: 100%;
      padding: var(--gutter);
      transform: none;
      margin: 0;
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

    button[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
</style>
