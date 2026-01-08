<script lang="ts">
  import type { VersionType } from '$lib/editions';
  import { editions } from '$lib/editions';
  import Book from '$lib/components/Book.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';
  import { hoveredVersions } from '$lib/tooltip.svelte';
  import Cookies from 'js-cookie';

  function getCookieFlag(name: string, defaultValue: boolean): boolean {
    let cookie = Cookies.get(name);
    if (cookie) {
      return cookie == 'true';
    }
    return defaultValue;
  }

  function getCookieEdition(): number {
    let cookie = Cookies.get('chosenEdition');
    if (cookie) {
      let index = Number(cookie);
      if (index >= 0 && index < editions.length) {
        return index;
      }
    }
    return 0;
  }

  let chosenEdition = $state(editions[getCookieEdition()]);
  let enableMajors = $state(getCookieFlag('enableMajors', true));
  let enableMinors = $state(getCookieFlag('enableMinors', false));
  let enableDrops = $state(getCookieFlag('enableDrops', true));
  let enableEvents = $state(getCookieFlag('enableEvents', true));
  let isVertical = $state(getCookieFlag('isVertical', false));

  function getEnabledTypes(): VersionType[] {
    let types: VersionType[] = [];
    if (enableMajors) types.push('major');
    if (enableMinors) types.push('minor');
    if (enableDrops) types.push('drop');
    if (enableEvents) types.push('event');
    return types;
  }

  $effect(() => {
    Cookies.set(
      'chosenEdition',
      editions
        .findIndex((edition) => edition.id === chosenEdition.id)
        .toString(),
    );
  });
  $effect(() => {
    Cookies.set('enableMajors', enableMajors.toString());
  });
  $effect(() => {
    Cookies.set('enableMinors', enableMinors.toString());
  });
  $effect(() => {
    Cookies.set('enableDrops', enableDrops.toString());
  });
  $effect(() => {
    Cookies.set('enableEvents', enableEvents.toString());
  });
  $effect(() => {
    Cookies.set('isVertical', isVertical.toString());
  });
</script>

<main>
  <Header
    bind:chosenEdition
    bind:enableMajors
    bind:enableMinors
    bind:enableDrops
    bind:enableEvents
    bind:isVertical
  />
  <Timeline edition={chosenEdition} types={getEnabledTypes()} {isVertical} />
  <Footer />
  {#each hoveredVersions as version}
    <Tooltip {version} />
  {/each}
  <Book />
</main>
