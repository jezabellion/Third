<script>
	import Hero from '../components/Hero.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import ShoeHero from '../components/ShoeHero.svelte';
	import { fade } from 'svelte/transition';
	import { photosTwo } from './morocco.js';
	import { global, morocco } from './morocco.js';
	let visible = true;
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";

	figure img {
    margin-bottom: 3rem;
  }
	@media screen and (max-width: 1023px) {
	  .container {
	    margin: 1rem !important;
	   }
		 figure img {
	    margin-bottom: 0rem;
	   }
	 }
</style>


<!-- Page starts -->

<svelte:head>
	<title>{global.destination.one}</title>
</svelte:head>

<Hero destHead={global.destination.one}/>

<Blurb blurbCopy={global.blurb.morocco}/>

	{#each morocco.photosOne as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader title={morocco.chapter.one}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader title={morocco.chapter.two}/>

	{#each photosTwo as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

<ChapterHeader title={global.farewell.morocco}/>

<ShoeHero/>
