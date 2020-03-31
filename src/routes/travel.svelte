<script>
	import Bonkers from '../components/Bonkers.svelte';
  import Truman from '../components/Truman.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import { fade } from 'svelte/transition';
	// import images from '../static/images.json';
	let visible = true;
	let destination = 'Morocco';
	let mank = 'images/bbb.jpg';
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
		background-color: red;
  }
	.image-gallery figure img {
    margin-bottom: 30px;
  }
</style>


<!-- Page starts -->

<svelte:head>
	<title>{destination}</title>
</svelte:head>

<section in:fade ="{{ duration: 500 }}" class="hero is-link is-fullheight">

	<Truman/>

  <div class="hero-body">
    <div class="container">
      <h1 in:fade="{{ duration: 2000 }}">{destination}</h1>
    </div>
  </div>
</section>

<Blurb/>

<div class="container image-gallery">
  <figure><img src={mank} alt="man dances."></figure>
</div>

<ChapterHeader/>

<div class="container image-gallery">
  <figure><img alt='handsome man' src='images/aaa.jpg'></figure>
  <figure><img alt='handsome man' src='images/bbb.jpg'></figure>
  <figure><img alt='handsome man' src='images/ccc.jpg'></figure>
  <figure><img alt='handsome man' src='images/ddd.jpg'></figure>
</div>

<Bonkers/>
