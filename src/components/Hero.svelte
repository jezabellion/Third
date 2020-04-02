<script>
  import Truman from '../components/Truman.svelte';
  import { destination } from '../routes/morocco.js';
</script>

<style media="screen" lang="scss">
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
		background-color: red;
	}

	.image-gallery figure img {
    margin-bottom: 30px;
  }
</style>

<section in:fade ="{{ duration: 500 }}" class="hero is-link is-fullheight">

	<Truman/>

  <div class="hero-body">
    <div class="container">
      <h1 in:fade="{{ duration: 2000 }}">{destination}</h1>
    </div>
  </div>
</section>
