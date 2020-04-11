<script>
  import TravelPageNav from '../components/TravelPageNav.svelte';
  import { destination } from '../routes/data.js';
  import { fade } from 'svelte/transition';
	let visible = true;
  // import {  } from '../routes/data.js';
  export let destHead;
  export let current;
  // let current = 'peru'
  // export let backgroundHero;
  // let backgroundHero = 'url(../images/morocco-thumb.jpg);'
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
		background-color: #5876A3;
	}

  .morocco { background-image: url(../images/morocco-thumb.jpg);}
  .peru { background-image: url(../images/peru-thumb.jpeg);}

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
        <h1 in:fade="{{ duration: 2000 }}">{destHead}</h1>
      </div>
    </div>

</section>
