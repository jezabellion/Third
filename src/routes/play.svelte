<style>
.image-gallery figure img {
	margin-bottom: 30px;
}
</style>

<script>
	import Bonkers from '../components/Bonkers.svelte';
	let photosOne = [
		{ src: 'images/aaa.jpg', alt: 'whatever' },
		{ src: 'images/bbb.jpg', alt: 'yup' },
		{ src: 'images/ccc.jpg', alt: 'new' }
	];
  let photosTwo = [
    { src: 'images/ddd.jpg', alt: 'stuff' },
    { src: 'images/eee.jpg', alt: 'shit' }
	];
	let chapterOne = 'Aït Benhaddou';
	let chapterTwo = 	'Erg Chebbi';
	// let chapters = [
	// 	{ one: 'Aït Benhaddou' },
	// 	{ two: 'Erg Chebbi'}
	// ]
	// import test from 'test.js';

	import ChapterHeader from '../components/ChapterHeader.svelte';
</script>

<!-- <div class="container">
	<p>{test}</p>
</div> -->




{#each photosOne as photo, i}
	<div class="container image-gallery">
			<figure><img src={photo.src} alt={photo.alt}></figure>
	</div>
{/each}

<div class="container">
  <div class="chapter-header">
    <h2>{chapterOne}</h2>
    <p>* * *</p>
  </div>
</div>



{#each photosTwo as photo, i}
	<div class="container image-gallery">
			<figure><img src={photo.src} alt={photo.alt}></figure>
	</div>
{/each}

<div class="container">
  <div class="chapter-header">
    <h2>{chapterTwo}</h2>
    <p>* * *</p>
  </div>
</div>
