<script lang="ts">
  import { onMount } from "svelte";
  import type { Version } from "../edition";
  import Marker from "./Marker.svelte";

  let {
    year,
    versions,
  }: { year: number; versions: { version: Version; ratio: number }[] } =
    $props();
</script>

<div class="year">
  <h3>{year}</h3>
  <div class="versions">
    {#each versions.filter((pair) => pair.version.type == "major") as { version, ratio }}
      <div class="spacer" style="flex-grow: {ratio};"></div>
      <div class="version">
        <Marker {version} />
      </div>
    {/each}
    <div
      class="spacer"
      style="flex-grow: {1 - versions[versions.length - 1].ratio}"
    ></div>
  </div>
</div>

<style>
  .versions {
    margin: 1rem 0;
    height: 200px;
    display: flex;
  }
</style>
