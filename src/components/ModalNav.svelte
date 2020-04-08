<script>
  import { destination } from '../routes/morocco.js';
  export let showModal = false;
</script>

<style>
  .modal {
    margin: 1rem;
  }
  .modal-content {
    overflow: hidden;
  }
  .modal a {
    font-size: 1.25rem;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
  }
  .modal a:hover {
    opacity: 50%;
  }
  /* .modal .is-selected {
    text-decoration:line-through;
  } */
</style>

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
