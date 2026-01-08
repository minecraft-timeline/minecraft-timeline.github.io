<script lang="ts">
  import type { Edition, Version, VersionType } from '$lib/editions';
  import NaiveYear from './NaiveYear.svelte';
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

  let {
    edition,
    types,
    isVertical,
  }: { edition: Edition; types: VersionType[]; isVertical: boolean } = $props();
  let years = $derived(calculateYears(edition));
  let min_year = $derived(Math.min(...Object.keys(years).map(Number)));
  let max_year = $derived(Math.max(...Object.keys(years).map(Number)));
  let this_year = new Date().getFullYear();
  let all_years = $derived(
    Array.from({ length: this_year - min_year + 1 }, (_, i) => min_year + i),
  );
</script>

<div class="timeline">
  <div class="ruler-base"></div>
  <div class="years">
    {#each all_years as year}
      <Year
        {edition}
        {year}
        {isVertical}
        versions={year in years
          ? years[year]
              .filter((pair) => types.includes(pair.version.type))
              .sort(
                (a, b) =>
                  new Date(a.version.date).getTime() -
                  new Date(b.version.date).getTime(),
              )
          : []}
        first={year === min_year}
        last={year >= this_year}
      />
    {/each}
    {#if edition.upcomings.length > 0}
      <NaiveYear {edition} {isVertical} versions={edition.upcomings} />
    {/if}
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
      url('/backgrounds/ruler_old.png') repeat-x left top,
      url('/backgrounds/ruler.png') repeat left top,
      #54442a;
  }
</style>
