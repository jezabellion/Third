<style>
.image-gallery figure img {
	margin-bottom: 30px;
}
</style>

<script>
	let photos = [
		{ src: 'images/aaa.jpg', alt: 'whatever' },
		{ src: 'images/bbb.jpg', alt: 'yup' },
		{ src: 'images/ccc.jpg', alt: 'new' },
		{ src: 'images/ddd.jpg', alt: 'stuff' },
		{ src: 'images/eee.jpg', alt: 'shit' },
		{ src: 'images/fff.jpg', alt: 'nothing' }
	];
</script>

{#each photos as photo, i}
	<div class="container image-gallery">
			<figure><img src={photo.src} alt={photo.alt}></figure>
	</div>
{/each}
