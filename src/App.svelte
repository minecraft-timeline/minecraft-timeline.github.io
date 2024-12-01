<script lang="ts">
  import EDITIONS from "./editions.js";
  import Timeline from "./lib/Timeline.svelte";

  let currentEdition = $state(EDITIONS[0]);
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
  <Timeline edition={currentEdition} />
</main>
