<script>
  import { destination, chapter } from './morocco.js';
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";

  .shoes,
  .home-pic {
    background-image: url("../images/shoes.jpg") !important;
    background-size: cover;
    background-position: center;
    margin-left: 8rem;
    margin-right: 8rem;

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
          {destination}
        </h1>
      </div>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
