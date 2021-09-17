<script lang="ts">
  import Picture from '$lib/Picture.svelte';

  export let media
</script>


{#if media}
<figure>
  <Picture {media} />
</figure>
{/if}

<style>
  figure {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    margin: 0;
    opacity: 0.33;
  }

  figure :global(video),
  figure :global(img) {
    height: 100%;
    object-fit: cover;
  }
</style>