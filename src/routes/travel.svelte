<script>
	import Bonkers from '../components/Bonkers.svelte';

	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import TravelHero from '../components/TravelHero.svelte';
	import { fade } from 'svelte/transition';

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
	.image-gallery figure img {
    margin-bottom: 30px;
  }
</style>


<!-- Page starts -->

<svelte:head>
	<title>{destination}</title>
</svelte:head>

<TravelHero/>

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
