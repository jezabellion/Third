<script>
  import TravelPageNav from '../components/TravelPageNav.svelte';
  import { destination } from '../routes/data.js';
  import { fade } from 'svelte/transition';
	let visible = true;
  export let destHead;
  export let current;
  // let current = 'peru'
</script>

<style media="screen" lang="scss">
  @import "./style/theme.scss";
	h1 {
		font-family: 'Engagement', cursive;
		font-size: 8rem;
		text-align: center;
		color: white;
	}
  .hero {
    background-position: center;
		background-size: cover;
	}

  .morocco { background-image: url(../images/morocco-thumb.jpg);}
  .peru { background-image: url(../images/peru-thumb.jpeg);}
  .istanbul { background-image: url(../images/istanbul-thumb.jpeg);}
  .russia { background-image: url(../images/russia/f-photo4.jpg);}

  @media screen and (max-width: 768px) {
    .morocco { background-image: url(../images/mobile/morocco-sm.jpg);}
    .peru { background-image: url(../images/mobile/peru-sm.jpg);}
    .istanbul { background-image: url(../images/mobile/istanbul-sm.jpg);}
    .russia { background-image: url(../images/mobile/russia-sm.jpg);}

  }

  @media screen and (max-width: 1023px) {
    .hero-body h1 {
      font-size: 6rem;
      letter-spacing: -4px;
    }
  }
</style>
<section class="{current} hero is-transparent is-fullheight" in:fade="{{ duration: 200 }}" >

  	<TravelPageNav/>

    <div class="hero-body">
      <div class="container">
        <h1 in:fade="{{ duration: 1000 }}">{destHead}</h1>
      </div>
    </div>

</section>
