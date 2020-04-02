<script>
	import Bonkers from '../components/Bonkers.svelte';
	import Hero from '../components/Hero.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import { fade } from 'svelte/transition';
	import { photosOne, photosTwo } from './morocco.js';
	import { destination, chapterOne, chapterTwo } from './morocco.js';
	let visible = true;
	let tester = 'horse';
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

<Hero/>

<Blurb/>

	{#each photosOne as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader tester={chapterOne}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader tester={chapterTwo}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<Bonkers/>
