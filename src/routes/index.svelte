<script >
  import { destination, chapter } from './morocco.js';
  export let showModal = false;

</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";
  .hero {
    background-color: white;
  }

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

  .shoes,
  .home-pic {
    background-image: url("../images/shoes.jpg") !important;
    background-size: cover;
    background-position: center;
  }


  // bottom nav

  .hero-foot {
    margin-bottom: 2rem;
  }

  .hero .tabs ul,
  .hero .hero-foot .tabs ul, {
    padding-left: 14rem;
    padding-right: 14rem;
  }

  .hero .hero-foot .tabs ul {
    padding-top: 3rem;
  }

  .hero-foot .hero-body h1 {
    margin-top: auto;
  }

  .hero .hero-foot .tabs a {
    color: $black;
    font-size: 1rem;
    font-weight: bold;
  }

  .hero .hero-foot .tabs a:hover {
    color: $grey;
  }

  .chapter-close h3 {
    color: $grey;
    text-align: center;
    font-family: 'Engagement';
    font-size: 4rem;
    line-height: 4rem;
    margin: 10rem 5rem;
  }

  // Responisve sizes

  @media screen and (max-width: 768px) {

    .hero-image {
      margin: auto 2rem;
    }

    .navbar-brand {
      padding: 1rem;
    }

    .navbar-burger {
      color: $black !important;
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

</style>

<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand is-hidden-tablet">
          <a class="navbar-item">
            <img src="wanderlust.svg" alt='logomark' width="112" height="28">
          </a>
          <span on:click={() => showModal = true} class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div>

      </div>
    </header>

    <!-- modal -->
        <div class:is-active={showModal} class="modal is-clipped">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="container">
                <div class="columns has-text-centered">
                  <div class="column">
                    <a href="pages/morocco.html">{destination.one}</a>
                  </div>
                  <div class="column">
                    <a href="pages/morocco.html">{destination.two}</a>
                  </div>
                  <div class="column">
                    <a href="pages/morocco.html">Peru</a>
                  </div>
                  <div class="column">
                    <a href="pages/morocco.html">Russia</a>
                  </div>
                </div>
              </div>
              <button on:click={() => showModal = false} class="modal-close is-large" aria-label="close"></button>
            </div>
          </div>

  </div>

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
          <li><a href="travel">{destination.one}</a></li>
          <li><a href="travel">{destination.two}</a></li>
          <li><a href="travel">Russia</a></li>
          <li><a href="travel">Peru</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
