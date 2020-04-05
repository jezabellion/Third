<script>
	import Hero from '../components/Hero.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import { fade } from 'svelte/transition';
	import { photosOne, photosTwo } from './morocco.js';
	import { destination, chapter } from './morocco.js';
	let visible = true;
</script>

<style media="screen" lang="scss">
	figure img {
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

<ChapterHeader title={chapter.one}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader title={chapter.two}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}
