<script lang="ts">
  import type { NaiveVersion, Version } from '../edition';
  import { setReadingVersion } from './book.svelte.js';
  import { hoveredVersions } from './tooltip.svelte.js';
  let { version }: { version: Version | NaiveVersion } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  class="version {version.type}"
  role="contentinfo"
  onclick={() => {
    setReadingVersion(version);
  }}
  onmouseenter={() => {
    hoveredVersions.push(version);
  }}
  onmouseleave={() => {
    for (let i = 0; i < hoveredVersions.length; i++) {
      if (hoveredVersions[i] === version) {
        hoveredVersions.splice(i, 1);
        break;
      }
    }
  }}
>
  <img class="icon" src="versions/{version.icon}" alt="" />
</div>

<style>
  .version {
    flex: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
  .version.major, .version.drop {
    border-image: url('/timeline/icon_update_major.png') 4 fill repeat;
    border-image-width: 4px;
    border-image-outset: 0px;
    padding: 4px 4px 6px 4px;
    min-width: 48px;
    min-height: 48px;
  }
  .version.minor {
    border-image: url('/timeline/icon_update_minor.png') 4 fill repeat;
    border-image-width: 4px;
    border-image-outset: 0px;
    min-width: 20px;
    min-height: 20px;
  }
  .version.event {
    border-image: url('/timeline/icon_update_event.png') 12 fill repeat;
    border-image-width: 12px;
    border-image-outset: 0px;
    padding: 0;
    min-width: 48px;
    min-height: 48px;
  }
  .version .icon {
    margin: 0 auto;
  }
</style>
