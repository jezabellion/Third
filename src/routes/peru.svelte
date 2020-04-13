<script>
	import Hero from '../components/Hero.svelte';
	import Divider from '../components/Divider.svelte';
	import Blurb from '../components/Blurb.svelte';
	import ChapterHeader from '../components/ChapterHeader.svelte';
	import ShoeHero from '../components/ShoeHero.svelte';
	import { fade } from 'svelte/transition';
	import { destination } from './data.js';
	import { copy, chapter, photos } from './peru.js';
	let visible = true;
</script>

<!-- Page starts -->

<svelte:head>
  <title>{destination.three} | {destination.home}</title>
  <meta property="og:title" content="{destination.three}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://rambling-man.netlify.com/peru" />
  <meta property="og:image" content="https://rambling-man.netlify.com/images/social-images/peru-og.jpg" />
  <meta property="og:description" content="{copy.blurb}" />
</svelte:head>

<div class="travelPage">
	<Hero current={'peru'} destHead={destination.three}/>

	<Blurb dateCopy={copy.date} TravlerCopy={copy.travelers} blurbCopy={copy.blurb}/>

		{#each photos.three as photo, i}
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

		{#each photos.one as photo, i}
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

		<ChapterHeader title={copy.farewell}/>

		<ShoeHero/>
	</div>
