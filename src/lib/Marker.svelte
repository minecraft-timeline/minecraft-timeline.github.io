<script lang="ts">
  import type { Version } from '../edition';
  import { hoveredVersions } from './tooltip.svelte';
  let { version }: { version: Version } = $props();
</script>

<div
  class="version {version.type}"
  role="contentinfo"
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
  }
  .version.major {
    border-image: url('timeline/icon_update_major.png') 4 fill repeat;
    border-image-width: 4px;
    border-image-outset: 0px;
    padding: 4px 4px 6px 4px;
    min-width: 48px;
    min-height: 48px;
  }
  .version.minor {
    border-image: url('timeline/icon_update_minor.png') 4 fill repeat;
    border-image-width: 4px;
    border-image-outset: 0px;
    min-width: 20px;
    min-height: 20px;
  }
  .version.event {
    border-image: url('timeline/icon_update_event.png') 12 fill repeat;
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
