<script lang="ts" module>
  let scrollY = 0;
</script>

<script lang="ts">
  import { readableType } from '../edition';

  import { clearReadingVersion, readingVersion } from './book.svelte';
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  function parseDate(str: string) {
    if (str.length === 10) {
      return Date.parse(str + 'T00:00');
    } else if (str.length === 16 || str.length === 19) {
      return Date.parse(str);
    } else {
      return Date.parse('');
    }
  }
  function formatDate(date: string) {
    return formatter.format(parseDate(date));
  }
  $effect(() => {
    if (readingVersion.version) {
      scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add('noscroll');
    } else {
      document.body.style.top = '';
      document.body.classList.remove('noscroll');
      document.documentElement.scrollTo(0, scrollY);
    }
  });
</script>

{#if readingVersion.version}
  {@const v = readingVersion.version}
  <!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_noninteractive_element_interactions -->
  <div class="page">
    <div class="background" onclick={clearReadingVersion} role="dialog"></div>
    <div class="infopanel">
      <div class="top-bar">
        <img class="icon" src={'versions/' + v.icon} alt="Icon" />
        {#if 'date' in v}
          <span class="date">{formatDate(v.date)}</span>
        {/if}
        {#if !('date' in v) && 'possibleDate' in v}
          <span class="date">{v.possibleDate}</span>
        {/if}
        <button
          class="close"
          aria-label="Close Info Panel"
          onclick={clearReadingVersion}
        ></button>
      </div>
      <section class="content">
        <header>
          {#if v.title || v.subtitle}
            <h1>
              {v.subtitle}{v.title && v.subtitle ? ' - ' : ''}
              {v.title}
            </h1>
          {/if}
        </header>
        {#if v.funFact}
          <div class="fun-fact">{v.funFact}</div>
        {/if}
        {#if v.longDescription}
          {#each v.longDescription as line}
            <p>{line}</p>
          {/each}
        {/if}
        {#if v.mainFeatures}
          <h2>The main features of this update are...</h2>
          <ul>
            {#each v.mainFeatures as feature}
              <li>{feature.text}</li>
            {/each}
          </ul>
        {/if}
        {#if v.minorFeatures}
          <h2>But it also brings...</h2>
          <ul>
            {#each v.minorFeatures as feature}
              <li>{feature.text}</li>
            {/each}
          </ul>
        {/if}
        {#if v.learnMore}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={v.learnMore.startsWith('@')
              ? 'https://minecraft.wiki/w/' + v.learnMore.slice(1)
              : v.learnMore}>Learn more about this {readableType(v.type)}</a
          >
        {/if}
      </section>
    </div>
  </div>
{/if}

<style>
  .page {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    overscroll-behavior: contain;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);
  }

  .infopanel {
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 96%;
  }
  .infopanel .top-bar {
    border: 12px solid transparent;
    border-bottom-width: 4px;
    border-image: url('borders/panel_book_top.png') 12 12 4 12 fill repeat
      repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
  .infopanel .top-bar .icon {
    height: 32px;
    margin-right: 10px;
  }
  .infopanel .top-bar .close {
    outline: none;
    border: none;
    background: url('icons/ui/button_close.png') no-repeat center center;
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin-left: auto;
    display: block;
  }
  .infopanel .top-bar .close:hover {
    filter: brightness(1.1);
  }
  .top-bar .date {
    color: #f1eccf;
    margin-bottom: -4px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }
  .infopanel .content {
    flex: 1;
    border: 48px solid transparent;
    border-top-width: 18px;
    border-image: url('borders/panel_book.png') 18 48 48 48 fill repeat repeat;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 16px;
    text-shadow: none;
    color: black;
  }
  .infopanel .content * {
    color: inherit;
    font-weight: unset;
  }
  .infopanel .content h1,
  h2,
  ul {
    font-size: 16px;
    margin: 0.5em 0;
  }
  .infopanel .content h1 {
    font-size: 24px;
  }
  .infopanel .content li {
    list-style: none;
  }
  .infopanel .content li:before {
    content: '• ';
  }
  .infopanel .content li:last-child {
    margin-bottom: 0;
  }
  .infopanel .content header {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  .infopanel .content .fun-fact {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    color: #914949;
  }
  @media (min-width: 768px) {
    .infopanel {
      max-width: 600px;
      max-height: 800px;
      min-width: 30%;
      min-height: 60%;
    }
  }
</style>
