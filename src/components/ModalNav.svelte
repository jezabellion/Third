<script>
  import { destination } from '../routes/morocco.js';
  let showModal;
</script>

<div class:is-active={showModal} class="modal is-clipped">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="container">
        <div class="columns has-text-centered">
          <div class="column">
            <a href="morocco">{destination.one}</a>
          </div>
          <div class="column">
            <a href="morocco">{destination.two}</a>
          </div>
          <div class="column">
            <a href="peru">Peru</a>
          </div>
          <div class="column">
            <a href="russia">Russia</a>
          </div>
        </div>
      </div>
      <button on:click={() => showModal = false} class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
