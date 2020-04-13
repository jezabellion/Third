<script>
	import Hero from '../components/Hero.svelte';
	import Divider from '../components/Divider.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import ShoeHero from '../components/ShoeHero.svelte';
	import { fade } from 'svelte/transition';
	import { destination } from './data.js';
	import { copy, chapter, photos } from './istanbul.js';
	let visible = true;
</script>

<!-- Page starts -->

<svelte:head>
	<title>{destination.two}</title>
</svelte:head>

<div class="travelPage">
	<Hero current={'istanbul'} destHead={destination.two}/>

	<Blurb dateCopy={copy.date} TravlerCopy={copy.travelers} blurbCopy={copy.blurb}/>

		{#each photos.two as photo, i}
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

		{#each photos.one as photo, i}
			<div class="container image-gallery">
					<figure><img src={photo.src} alt={photo.alt}></figure>
			</div>
		{/each}

		<Divider/>

		{#each photos.three as photo, i}
			<div class="container image-gallery">
					<figure><img src={photo.src} alt={photo.alt}></figure>
			</div>
		{/each}

		<ChapterHeader title={copy.farewell}/>

		<ShoeHero/>
	</div>
