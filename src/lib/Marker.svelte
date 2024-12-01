<script lang="ts" module>
  let mouseX = $state(0);
  let mouseY = $state(0);
  document.addEventListener(
    "mousemove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    false,
  );
</script>

<script lang="ts">
  import type { Version } from "../edition";
  let { version }: { version: Version } = $props();
  let selfReference: Element | null = $state(null);
  function selfX() {
    if (!selfReference) return 0;
    return selfReference.getBoundingClientRect().x;
  }
  function selfY() {
    if (!selfReference) return 0;
    return selfReference.getBoundingClientRect().y;
  }
</script>

<div class="version" bind:this={selfReference}>
  <span
    class="tooltip"
    style="left: {mouseX - selfX()}px; top: {mouseY - selfY()}px;"
  >
    {version.title}<br />{version.subtitle}
  </span>
</div>

<style>
  .version {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%; /* Example styling */

    /* Default placement on the horizontal axis */
    /* left: var(--position); */
    /* top: 50%; */
    /* transform: translate(-50%, -50%); */
  }
  .tooltip {
    display: none;
    pointer-events: none;
    background: #c8c8c8;
    padding: 10px;
    position: absolute;
    z-index: 1000000000;
    width: 200px;
    height: 100px;
  }

  .version:hover .tooltip {
    display: block;
  }

  @media (max-width: 600px) {
    /* Switch to positioning along the vertical axis */
    .version {
      left: 50%; /* Center horizontally */
      top: var(--position); /* Use custom vertical position */
    }
  }
</style>
