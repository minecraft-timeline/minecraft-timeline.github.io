<script lang="ts">
  import { onMount } from 'svelte';
  import type { Version } from '../edition';

  function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  let { version }: { version: Version } = $props();
  let { mouseX, mouseY } = $state({
    mouseX: 0,
    mouseY: 0,
  });
  let docWidth = $state(0);
  let docHeight = $state(0);
  let docTop = $state(0);
  let docLeft = $state(0);
  let tipWidth = $state(0);
  let tipHeight = $state(0);
  let windowScrollX = $state(0);
  let windowScrollY = $state(0);
  let { x, y }: { x: number; y: number } = $derived({
    x:
      clamp(
        mouseX,
        windowScrollX + tipWidth / 2,
        windowScrollX + docWidth - tipWidth / 2,
      ) + docLeft,
    y:
      clamp(
        mouseY + tipHeight / 2 + 16,
        windowScrollY + tipHeight / 2,
        windowScrollY + docHeight - tipHeight / 2,
      ) + docTop,
  });
  onMount(() => {
    docWidth = document.documentElement.clientWidth;
    docHeight = document.documentElement.clientHeight;
    docTop = document.documentElement.scrollTop;
    docLeft = document.documentElement.scrollLeft;
  });
</script>

<div
  bind:offsetWidth={tipWidth}
  bind:offsetHeight={tipHeight}
  class="tooltip"
  style="left: {x}px; top: {y}px;"
>
  {#if version.title && version.subtitle}
    <div class="title">{version.title}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
    <div class="subtitle">{version.subtitle}</div>
  {/if}
  {#if version.title && !version.subtitle}
    <div class="title">{version.title}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
  {/if}
  {#if !version.title && version.subtitle}
    <div class="title">{version.subtitle}</div>
    {#if version.description}
      <div class="description">{version.description}</div>
    {/if}
  {/if}
</div>

<svelte:body
  onmousemove={(mouseEvent) => {
    mouseX = mouseEvent.clientX;
    mouseY = mouseEvent.clientY;
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
    transform: translate(-50%, -50%);
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
