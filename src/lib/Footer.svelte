<footer>
  <div class="content">
    <ul class="links">
      <li>
        Created by <a href="http://github.com/henriquecolini">Henrique Colini</a
        >
      </li>
      <li>
        Contribute on
        <a
          href="http://github.com/minecraft-timeline/minecraft-timeline.github.io"
          >GitHub</a
        >
      </li>
      <li>
        <a
          href="https://old.reddit.com/r/Minecraft/comments/akco1t/seeing_as_a_lot_of_redditors_are_coming_back_to/"
          >Original Reddit Post</a
        >
      </li>
    </ul>
    <div class="disclaimers">
      <p>
        <span class="line">This is not an official Minecraft website.</span>
        <span class="line">We are not associated with Mojang or Microsoft.</span
        >
      </p>
      <p>
        <span class="line"
          >Any of the trademarks, copyrights or similar rights</span
        >
        <span class="line">are the property of their respective owners.</span>
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: url('backgrounds/stone_dark.png');
    height: 100%;
    width: 100%;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  }

  .content {
    outline: 4px solid rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .links {
    flex-shrink: 0;
    margin-bottom: 1em;
  }

  p {
    color: gray;
  }

  li,
  a {
    color: lightgray;
  }

  li {
    margin-bottom: 0.25em;
  }

  ul,
  p {
    margin: 0;
    padding: 0.25em 0;
  }

  ul {
    padding-left: 0.5em;
  }

  li {
    list-style: none;
  }

  li::before {
    content: '• ';
  }

  
  @media (min-width: 768px) {
    .content {
      align-items: center;
      flex-direction: row;
      padding: 1.5em 1em;
    }
    .links {
      margin-right: 2em;
      margin-bottom: 0;
    }
    p {
      text-align: end;
    }
  }
  @media (min-width: 1024px) {
    .content {
      padding: 2em 4em;
    }
    .line {
      display: block;
    }
  }
</style>
