<script >
  import { destination } from '../routes/data.js';
  import ModalNav from '../components/ModalNav.svelte';
  export let showModal = false;
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";

  h1 {
  font-family: 'Engagement';
  font-size: 150px;
  color: #FFFFFF;
  letter-spacing: -6.25px;
  text-align: center;
  font-weight: normal;
  margin-top: auto;
  }

  .hero-body {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .hero-image {
    margin-left: 8rem;
    margin-right: 8rem;
  }

  .shoes {
    background-image: url("../images/shoes.jpg") !important;
    background-size: cover;
    background-position: center;
  }


  // bottom nav

  .hero-foot {
    margin-bottom: 2rem;
  }

  .tabs ul,
  .hero-foot .tabs ul, {
    padding-left: 14rem;
    padding-right: 14rem;
  }

  .hero-foot .tabs ul {
    padding-top: 3rem;
  }

  .hero-foot .hero-body h1 {
    margin-top: auto;
  }
  button,
  .hero-foot .tabs a {
    color: $black;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
  }

  .hero-foot .tabs a:hover {
    color: $grey;
  }

  // Bottom Nav

  .tabs ul {
    border-bottom-color: transparent;
    border-bottom-style: none;
    // border-bottom-width: 1px;
  }


  .hero-foot .tabs .is-active {
    color: $grey;
    text-decoration: line-through;
  }

  nav,
  button {
    margin-bottom: 4rem;
  }

  button {
    margin-top: 2rem;
  }


  // Responisve sizes

  @media screen and (max-width: 768px) {

    .hero-image {
      margin: auto 2rem;
    }
    .hero-body h1 {
      visibility: hidden;
    }
    .shoes {
      background-image: url("../images/shoes-portrait.jpg") !important;
      background-size: cover;
      background-position: center;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .hero-body h1 {
      font-size: 6rem;
      letter-spacing: -4px;
    }
  }

</style>

<ModalNav bind:showModal/>

  <!-- Hero content: will be in the middle -->

  <div class="hero-image">
    <div class="shoes hero-body">
      <div class="container">
        <h1>Wanderlust</h1>
      </div>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot is-hidden-mobile">
    <nav class="tabs is-fullwidth">
      <div class="container">
        <ul>
          <!-- <li class="is-active"><a>Home</a></li> -->
          <li><a href="morocco">{destination.one}</a></li>
          <li><a href="istanbul">{destination.two}</a></li>
          <li><a href="peru">{destination.three}</a></li>
          <li><a href="russia">{destination.four}</a></li>
        </ul>
      </div>
    </nav>
  </div>

<!-- </section> -->
<div class="container is-hidden-tablet">
  <div class="column has-text-centered">
    <button class="button is-white" on:click={() => showModal = true}>Menu</button>
  </div>
</div>
