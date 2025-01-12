<script lang="ts">
  import type { Edition } from '../edition';
  import EDITIONS from '../editions';

  let isBig = $state(false);
  let {
    chosenEdition = $bindable(EDITIONS[0]),
    enableMajors = $bindable(),
    enableMinors = $bindable(),
    enableDrops = $bindable(),
    enableEvents = $bindable(),
    isVertical = $bindable(false),
  }: {
    chosenEdition: Edition;
    enableMajors: boolean;
    enableMinors: boolean;
    enableDrops: boolean;
    enableEvents: boolean;
    isVertical: boolean;
  } = $props();
  let toolbox = $state(false);
  let editionIndex = $state(0);
  handleResize();
  function handleResize() {
    isBig = window.matchMedia('(min-width: 768px)').matches;
  }
</script>

{#snippet editionToggle()}
  <button
    onclick={() => {
      editionIndex = (editionIndex + 1) % EDITIONS.length;
      chosenEdition = EDITIONS[editionIndex];
    }}>{chosenEdition.title}</button
  >
{/snippet}

<header>
  <div class="toolbox {toolbox ? 'visible' : 'hidden'}">
    {#if !isBig}
      {@render editionToggle()}
    {/if}
    <button onclick={() => (enableMajors = !enableMajors)}
      >Major Versions: {enableMajors ? 'ON' : 'OFF'}</button
    >
    <button onclick={() => (enableMinors = !enableMinors)}
      >Minor Versions: {enableMinors ? 'ON' : 'OFF'}</button
    >
    <button onclick={() => (enableDrops = !enableDrops)}
      >Drop Versions: {enableDrops ? 'ON' : 'OFF'}</button
    >
    <button onclick={() => (enableEvents = !enableEvents)}
      >Events: {enableEvents ? 'ON' : 'OFF'}</button
    >
    <button onclick={() => (isVertical = !isVertical)}
      >Layout: {isVertical ? 'Vertical' : 'Horizontal'}</button
    >
  </div>
  <div class="content">
    <img class="logo" src="/logo.png" alt="Minecraft Timeline Logo" />
  </div>
  <div class="button-box">
    {#if isBig}
      {@render editionToggle()}
    {/if}
    <button
      class="hamburger"
      aria-label="hamburger"
      onclick={() => (toolbox = !toolbox)}
    ></button>
  </div>
</header>

<svelte:window onresize={handleResize} />

<style>
  header {
    position: sticky;
    top: 0;
    height: 80px;
    color: white;
    z-index: 1000;
  }

  .content {
    background: url('/backgrounds/stone_dark.png');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .logo {
    height: 40px;
    margin: 0 20px;
  }

  .button-box {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  button {
    border: 4px solid transparent;
    border-bottom: 6px solid transparent;
    outline: none;
    background: none;
    border-image-source: url('/borders/button.png');
    border-image-slice: 4 4 6 4 fill;
    border-image-repeat: repeat repeat;
    color: white;
    font-size: 16px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    padding: 4px 6px;
    /* margin: 3px 2px; */
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
  }

  .button-box button {
    height: 48px;
    margin-left: 16px;
  }

  .hamburger {
    width: 48px;
    height: 48px;
    padding: 0;
    position: relative;
  }

  .hamburger::after {
    position: absolute;
    content: '';
    background: url('/icons/ui/button_hamburger.png');
    left: -4px;
    right: -4px;
    top: -4px;
    bottom: -4px;
    pointer-events: none;
  }

  button:hover {
    border-image-source: url('/borders/button_pressed.png');
    color: #ffffa0;
  }

  .toolbox {
    position: absolute;
    top: 80px;
    right: 0;
    display: flex;
    flex-direction: column;
    background: url('/backgrounds/stone_dark.png');
    /* border: 4px solid rgba(0, 0, 0, 0.5); */
    border-top: none;
    z-index: -1000;
    transition: transform 0.2s;
    transform: translateY(-110%);
    pointer-events: none;
    padding: 16px;
    padding-top: 16px;
  }

  .toolbox.visible {
    transform: translateY(0);
    pointer-events: auto;
  }

  .toolbox button:first-child {
    margin-top: 0;
  }

  .toolbox button {
    height: 48px;
    width: 15em;
    margin-top: 16px;
  }

  .content,
  .toolbox {
    outline: 4px solid rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    .toolbox {
      top: 96px;
    }
    header {
      height: 96px;
    }

    .logo {
      height: 60px;
      margin: 0 20px;
    }

    .button-box {
      margin-right: 16px;
    }
  }
</style>
