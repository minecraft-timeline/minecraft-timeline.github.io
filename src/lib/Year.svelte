<script lang="ts">
  import type { Edition, Version, VersionType } from '../edition';
  import Marker from './Marker.svelte';

  function calculateSpaces(versions: { version: Version; ratio: number }[]) {
    let spaces: number[] = [];
    let total = 0;
    for (let i = 0; i < versions.length; i++) {
      spaces.push(versions[i].ratio - total);
      total = versions[i].ratio;
    }
    spaces.push(1 - total);
    return spaces;
  }

  let {
    year,
    versions,
    edition,
    first,
    last,
  }: {
    year: number;
    edition: Edition;
    versions: { version: Version; ratio: number }[];
    first: boolean;
    last: boolean;
  } = $props();
  let spaces = $derived(calculateSpaces(versions));
</script>

<div class="year {first ? 'first' : ''} {last ? 'last' : ''}">
  <div class="ruler">
    <div class="number">{year}</div>
    <div class="ago">{new Date().getFullYear() - year}y ago</div>
  </div>
  <div
    class="versions"
    style="--year: url({'"'}backgrounds/years/{year}.png{'"'})"
  >
    {#each versions as { version, ratio }, i}
      <div class="spacer" style="flex-grow: {spaces[i]};"></div>
      {#if first && i === 0}
        <div class="first-message"><span>{edition.firstMessage}</span></div>
        <div class="spacer" style="flex-grow: 0.05;"></div>
      {/if}
      <div class="version">
        <Marker {version} />
      </div>
    {/each}
    <div class="spacer" style="flex-grow: {spaces[spaces.length - 1]};"></div>
  </div>
</div>

<style>
  .first-message {
    border: 8px solid transparent;
    border-image: url('borders/panel_basic.png') 8 fill stretch stretch;
    padding: 8px;
    font-size: 24px;
    color: white;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    display: flex;
  }
  .year {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .ruler {
    min-width: 64px;
    color: white;
    text-align: center;
  }
  .ruler .number {
    font-size: 16px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }
  .ruler .ago {
    display: none;
    font-size: 16px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }
  .spacer {
    flex-shrink: 0;
    background: url('timeline/timeline_v.png') repeat-y;
    width: 10px;
  }
  .year.first .spacer:nth-child(1) {
    opacity: 0;
  }
  .year.last .spacer:nth-last-child(1) {
    opacity: 0;
  }
  .versions {
    min-height: 768px;
    flex-direction: column;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      var(--year), url('backgrounds/years/fallback.png');
    box-shadow: inset 20px -20px 20px -10px rgb(0 0 0 / 43%);
    align-items: center;
  }
  @media (min-width: 768px) {
    /* .first-message {
      padding: 0px;
      font-size: 32px;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
    }
    .first-message span {
      margin-top: -6px;
    } */
    .ruler {
      min-width: 128px;
    }
    .ruler .number {
      font-size: 24px;
      text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
    }
    .ruler .ago {
      display: block;
    }
    .spacer {
      background: url('timeline/timeline_h.png') repeat-x;
      width: unset;
      height: 10px;
    }
    .versions {
      min-height: 192px;
      flex-direction: row;
    }
  }
</style>
