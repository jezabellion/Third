<!-- <script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
	{#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
		{i + 1}: {cat.name}
	</a></li>
{/each}
</ul> -->

<script>
	let photos = [
		{ src: 'images/aaa.jpg', alt: 'whatever' },
		{ src: 'images/bbb.jpg', alt: 'this' }
	];
</script>

{#each photos as photo, i}
	<figure>
		<!-- {i + 1}: {photo.alt} -->
		<figure><img src={photo.src} alt={photo.alt}></figure>
	</figure>
{/each}
