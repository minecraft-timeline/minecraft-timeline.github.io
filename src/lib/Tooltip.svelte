<script lang="ts">
  import type { Version } from '../edition';

  let { version }: { version: Version } = $props();
  let { x, y }: { x: number; y: number } = $state({ x: 0, y: 0 });
</script>

{#if version.title && version.subtitle}
  <div class="tooltip" style="left: {x}px; top: {32 + y}px;">
    <div class="title">{version.title}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
    <div class="subtitle">{version.subtitle}</div>
  </div>
{/if}
{#if version.title && !version.subtitle}
  <div class="tooltip" style="left: {x}px; top: {32 + y}px;">
    <div class="title">{version.title}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
  </div>
{/if}
{#if !version.title && version.subtitle}
  <div class="tooltip" style="left: {x}px; top: {32 + y}px;">
    <div class="title">{version.subtitle}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
  </div>
{/if}

<svelte:window
  onmousemove={(mouseEvent) => {
    x = mouseEvent.pageX;
    y = mouseEvent.pageY;
  }}
/>

<style>
  .tooltip {
    font-family: 'Minecraft', 'Minecraftia', monospace, sans-serif;
    font-size: 16px;
    color: white;
    pointer-events: none;
    position: absolute;
    border-image: url('backgrounds/tooltip.png') 6 fill repeat;
    border-image-width: 6px;
    padding: 8px 10px;
    z-index: 1000;
    transform: translate(-50%, 0);
    overflow: hidden;
    text-wrap: nowrap;
    line-height: 1.5em;
  }
  .description {
    color: #a8a8a8;
  }
  .subtitle {
    color: #5454fc;
  }
</style>
