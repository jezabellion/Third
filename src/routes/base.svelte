<script>
  import { destination, chapter } from './morocco.js';
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";

  .hero {
    background-color: pink;
  }

  .hero-body h1,
  .hero-body h2 {
    color: white;
  }


  .hero-body h1 {
  font-family: 'Engagement';
  font-size: 150px;
  color: #FFFFFF;
  letter-spacing: -6.25px;
  text-align: center;
  margin-top: -70px;
  font-weight: normal;
  }

  .hero-body h1 {
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

  .hero-foot .hero-body {
      padding-top: 8rem;
      padding-bottom: 8rem;
  }

  .shoes,
  .home-pic {
    background-image: url("../images/shoes.jpg") !important;
    background-size: cover;
    background-position: center;
    margin-left: 8rem;
    margin-right: 8rem;
  }


  // bottom nav
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

</style>

<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="wanderlust.svg" alt='logomark' width="112" height="28">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->

  <div class="hero-image">
    <div class="shoes hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Wanderlust
        </h1>
      </div>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot is-hidden-mobile">
    <nav class="tabs is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Home</a></li>
          <li><a>Morocco</a></li>
          <li><a>Istanbul</a></li>
          <li><a>Russia</a></li>
          <li><a>Peru</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
