<script lang="ts">
  import type { Edition, Version } from "../edition";
  import Year from "./Year.svelte";

  function calculateYears(e: Edition) {
    let years: { [key: number]: { version: Version; ratio: number }[] } = {};
    e.versions.forEach((version) => {
      const date = new Date(version.date);
      const year = date.getFullYear();
      const start = new Date(year, 0, 0);
      const diff = date.getTime() - start.getTime();
      const ratio = diff / (1000 * 60 * 60 * 24 * 365);
      if (!years[year]) {
        years[year] = [];
      }
      years[year].push({ version, ratio: ratio });
    });
    return years;
  }

  let { edition }: { edition: Edition } = $props();
  let years = $derived(calculateYears(edition));
</script>

<h2>{edition.title} - {edition.description}</h2>

{#each Object.entries(years).sort((a, b) => Number(a[0]) - Number(b[0])) as entry}
  <Year year={Number(entry[0])} versions={entry[1]} />
{/each}
