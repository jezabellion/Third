<script>
  import { destination } from '../routes/data.js';
  import ModalNav from '../components/ModalNav.svelte';
  export let showModal = false;
</script>

<style media="screen" lang="scss">
  @import "./style/theme.scss";
  .navbar-burger span {
    color: white;
  }
  .navbar-item {
    color: white;
    font-family: 'Lato', sans-serif;
  }

  .navbar-item a:hover {
    opacity: 70%;
  }

  .navbar-item .is-active {
    opacity: 70%;
    text-decoration:line-through !important;
  }

  @media screen and (max-width: 768px) {
    .navbar-brand {
      padding: 1rem;
    }
  }
</style>

<ModalNav bind:showModal/>

<div class="hero-head">
  <nav class="navbar is-transparent is-spaced">
    <div class="navbar-brand">
      <a class="navbar-item" href="./">
        <img  alt='logomark' src="../wanderlust-white.svg" width="112" height="28">
      </a>
      <a on:click={() => showModal = true} role="button" class="navbar-burger is-hidden-tablet" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end is-hidden-mobile">
      <div class="navbar-item">
        <div class="field is-grouped">
          <a class="navbar-item is-active" href='morocco'>{destination.one}</a>
          <a class="navbar-item" href='istanbul'>{destination.two}</a>
          <a class="navbar-item" href='peru'>{destination.three}</a>
          <a class="navbar-item" href='russia'>{destination.four}</a>
        </div>
      </div>
    </div>
  </nav>
</div>
