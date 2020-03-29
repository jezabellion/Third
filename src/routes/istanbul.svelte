<script>
	import Bonkers from '../components/Bonkers.svelte';
  import Truman from '../components/Truman.svelte';
</script>

<style media="screen">
  .image-gallery figure img {
    margin-bottom: 30px;
  }
  h1 {
    font-family: 'Engagement', cursive;
    font-size: 8rem;
    text-align: center;
  }
  h2 {
    font-family: 'Engagement', cursive;
    font-size: 4rem;
    text-align: center;
  }
  .blurb,
  .chapter-header {
    margin: 6rem 14rem;
  }
  .blurb p {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    text-align: center;
    color: pink;

  }
  .blurb p:first-child {
    font-size: 2rem;
    text-align: center;
  }
  .chapter-header p {
    font-size: 1.5rem;
    margin-top: 0px;
    text-align: center;
  }
  .hero {
    background: url('../images/istanbul-thumb.jpg');
    background-position: center;
    background-size: cover;
  }
</style>

<section class="hero is-link is-fullheight">

<Truman/>

  <div class="hero-body">
    <div class="container">
      <h1>Istanbul</h1>
    </div>
  </div>



</section>

<div class="container blurb">
  <p>Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition</p>
  <p>* * *</p>
  <p>Andrea & Jeremy</p>
</div>

<div class="container image-gallery">
  <figure><img alt='handsome man' src='images/bbb.jpg'></figure>
</div>

<div class="container">
  <div class="chapter-header">
    <h2>Aït Benhaddou</h2>
    <p>* * *</p>
  </div>
</div>

<div class="container image-gallery">
  <figure><img alt='handsome man' src='images/aaa.jpg'></figure>
  <figure><img alt='handsome man' src='images/bbb.jpg'></figure>
  <figure><img alt='handsome man' src='images/ccc.jpg'></figure>
  <figure><img alt='handsome man' src='images/ddd.jpg'></figure>
</div>

<Bonkers/>
