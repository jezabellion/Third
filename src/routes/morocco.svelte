<script>
	import Hero from '../components/Hero.svelte';
	import Divider from '../components/Divider.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import ShoeHero from '../components/ShoeHero.svelte';
	import { fade } from 'svelte/transition';
	import { destination } from './data.js';
	import { copy, chapter, photos, backgroundHero } from './morocco.js';
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
	<title>{destination.one}</title>
</svelte:head>

<Hero backgroundHero={backgroundHero} destHead={destination.one}/>

<Blurb blurbCopy={copy.blurb}/>

	{#each photos.one as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<Divider/>

	{#each photos.two as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<Divider/>

	{#each photos.six as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<ChapterHeader title={chapter.one}/>

	{#each photos.three as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<Divider/>

	{#each photos.four as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<Divider/>

	{#each photos.five as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<Divider/>

	{#each photos.eight as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<ChapterHeader title={chapter.two}/>

	{#each photos.seven as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<ChapterHeader title={chapter.two}/>	

	{#each photos.nine as photo, i}
		<div class="container image-gallery">
				<figure><img src={photo.src} alt={photo.alt}></figure>
		</div>
	{/each}

	<ChapterHeader title={copy.farewell}/>

	<ShoeHero/>
