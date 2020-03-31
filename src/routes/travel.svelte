<script>
	import Bonkers from '../components/Bonkers.svelte';
	import Truman from '../components/Truman.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import { fade } from 'svelte/transition';
	// import photosOne from './test.js'
	import test from './test.js';
	// import morocco from './morocco.js';

	let visible = true;
	let destination = 'Morocco';
	let chapterOne = 'Aït Benhaddou';
	let chapterTwo = 	'Erg Chebbi';

	let photosOne = [
		{ src: 'images/aaa.jpg', alt: 'whatever' },
		{ src: 'images/bbb.jpg', alt: 'yup' },
		{ src: 'images/ccc.jpg', alt: 'new' }
	];
  let photosTwo = [
    { src: 'images/ddd.jpg', alt: 'stuff' },
    { src: 'images/eee.jpg', alt: 'shit' }
	];

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


<div class="container">
	<p>{test}</p>
</div>


<Blurb/>

{#each photosOne as photo, i}
	<div class="container image-gallery">
			<figure><img src={photo.src} alt={photo.alt}></figure>
	</div>
{/each}

<ChapterHeader/>

{#each photosTwo as photo, i}
	<div class="container image-gallery">
			<figure><img src={photo.src} alt={photo.alt}></figure>
	</div>
{/each}

<Bonkers/>
