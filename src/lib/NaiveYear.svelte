<script lang="ts">
  import type { Edition, NaiveVersion, Version, VersionType } from '../edition';
  import Marker from './Marker.svelte';

  let {
    versions,
    isVertical,
  }: {
    edition: Edition;
    versions: NaiveVersion[];
    isVertical: boolean;
  } = $props();
</script>

<div class="year {isVertical ? '' : 'horizontal'}">
  <div class="ruler">
    <div class="number">???</div>
    <div class="ago">Future</div>
  </div>
  <div class="versions" style="--year: url({'"'}/years/future.png{'"'})">
    {#each versions as version, i}
      <div class="version">
        <Marker {version} />
      </div>
    {/each}
  </div>
</div>

<style>
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
  .versions {
    padding: 60px 0;
    flex-direction: column;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      var(--year), url('/years/fallback.png');
    box-shadow: inset 20px -20px 20px -10px rgb(0 0 0 / 43%);
    align-items: center;
    justify-content: center;
  }
  .versions .version:not(:first-child) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
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
    .year.horizontal .versions {
      padding: 0;
      min-height: 192px;
      flex-direction: row;
    }
    .year.horizontal .versions .version:not(:first-child) {
      margin-top: 0;
      margin-left: 20px;
    }
  }
</style>
