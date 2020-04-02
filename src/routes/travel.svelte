<script>
	import Bonkers from '../components/Bonkers.svelte';
	import Truman from '../components/Truman.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import { fade } from 'svelte/transition';
	import { photosOne, photosTwo } from './morocco.js';
	import { destination, chapterOne, chapterTwo } from './morocco.js';
	let visible = true;
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
