<script>
	import { chapter } from '../routes/morocco.js';
	export let title;
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";

  h2 {
    font-family: 'Engagement', cursive;
    font-size: 4rem;
    text-align: center;
    color: $lightgrey;
  }
  .chapter-header p {
    font-size: 1.5rem;
    margin-top: 0px;
    text-align: center;
    color: $lightgrey;
  }
  .chapter-header {
    margin: 6rem 14rem;
  }

@media screen and (max-width: 1023px) {
	.chapter-header {
		margin: 5rem 1rem;
	}
	.chapter-header h2 {
		font-size: 3rem;
		line-height: 3rem;
	}
	.chapter-header p:nth-child(2) {
		font-size: 1.5rem;
	}
}
</style>

<div class="container">
  <div class="chapter-header">
    <h2>{title}</h2>
    <p>* * *</p>
  </div>
</div>
