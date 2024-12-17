<script lang="ts">
  import type { VersionType } from './edition.js';
  import EDITIONS from './editions.js';
  import Book from './lib/Book.svelte';
  import Header from './lib/Header.svelte';
  import Timeline from './lib/Timeline.svelte';
  import Tooltip from './lib/Tooltip.svelte';
  import { hoveredVersions } from './lib/tooltip.svelte.js';

  let chosenEdition = $state(EDITIONS[0]);
  let enableMajors = $state(true);
  let enableMinors = $state(false);
  let enableEvents = $state(true);
  let enableMemories = $state(false);

  function getEnabledTypes(): VersionType[] {
    let types: VersionType[] = [];
    if (enableMajors) types.push('major');
    if (enableMinors) types.push('minor');
    if (enableEvents) types.push('event');
    if (enableMemories) types.push('memory');
    return types;
  }
</script>

<main>
  <Header
    bind:chosenEdition
    bind:enableMajors
    bind:enableMinors
    bind:enableEvents
    bind:enableMemories
  />
  <Timeline edition={chosenEdition} types={getEnabledTypes()} />
  {#each hoveredVersions as version}
    <Tooltip {version} />
  {/each}
  <Book />
</main>
