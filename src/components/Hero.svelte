<script>
  import TravelPageNav from '../components/TravelPageNav.svelte';
  import { destination } from '../routes/data.js';
  import { fade } from 'svelte/transition';
	let visible = true;
  export let destHead;
</script>

<style media="screen" lang="scss">
  @import "./style/theme.scss";
	h1 {
		font-family: 'Engagement', cursive;
		font-size: 8rem;
		text-align: center;
		color: white;
	}
	.hero {
		background: url('../images/morocco-thumb.jpg');
		background-position: center;
		background-size: cover;
		background-color: #5876A3;
	}
  .hero.is-link a.navbar-item:hover {
    background-color: red !important;
  }
  @media screen and (max-width: 1023px) {
    .hero-body h1 {
      font-size: 6rem;
      letter-spacing: -4px;
    }

  }
</style>

<section in:fade ="{{ duration: 500 }}" class="hero is-transparent is-fullheight">

	<TravelPageNav/>

  <div class="hero-body">
    <div class="container">
      <h1 in:fade="{{ duration: 2000 }}">{destHead}</h1>
    </div>
  </div>
</section>
