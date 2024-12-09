<script lang="ts">
  import type { VersionType } from './edition.js';
  import EDITIONS from './editions.js';
  import Timeline from './lib/Timeline.svelte';
  import Tooltip from './lib/Tooltip.svelte';
  import { hoveredVersions } from './lib/tooltip.svelte.js';

  let currentEdition = $state(EDITIONS[0]);
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
  <h1>Available editions</h1>
  <ul>
    {#each EDITIONS as edition}
      <li>
        <button
          onclick={() => {
            currentEdition = edition;
          }}>{edition.title}</button
        >
      </li>
    {/each}
  </ul>
  <h1>Settings</h1>
  <label>
    <input type="checkbox" bind:checked={enableMajors} />
    Major versions
  </label>
  <label>
    <input type="checkbox" bind:checked={enableMinors} />
    Minor versions
  </label>
  <label>
    <input type="checkbox" bind:checked={enableEvents} />
    Events
  </label>
  <label>
    <input type="checkbox" bind:checked={enableMemories} />
    Memories
  </label>
  <Timeline edition={currentEdition} types={getEnabledTypes()} />
  {#each hoveredVersions as version}
    <Tooltip {version} />
  {/each}
</main>

