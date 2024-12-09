<script lang="ts">
  import type { Edition, Version, VersionType } from '../edition';
  import Year from './Year.svelte';

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

  let { edition, types }: { edition: Edition; types: VersionType[] } = $props();
  let years = $derived(calculateYears(edition));
</script>
<div class="timeline">
  <div class="ruler-base"></div>
  <div class="years">
    {#each Object.entries(years).sort((a, b) => Number(a[0]) - Number(b[0])) as entry, i}
      <Year
        {edition}
        year={Number(entry[0])}
        versions={entry[1]
          .filter((pair) => types.includes(pair.version.type))
          .sort(
            (a, b) =>
              new Date(a.version.date).getTime() -
              new Date(b.version.date).getTime(),
          )}
        first={i === 0}
        last={i === Object.keys(years).length - 1}
      />
    {/each}
  </div>
</div>

<style>
  .timeline {
    position: relative;
  }
  .ruler-base {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background:
      url('backgrounds/ruler_old.png') repeat-x left top,
      url('backgrounds/ruler.png') repeat left top,
      #54442a;
  }
</style>
