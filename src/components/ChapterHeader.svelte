<script>
	import { chapterOne } from '../routes/morocco.js';
	import { chapterTwo } from '../routes/morocco.js';
	import { chapter } from '../routes/morocco.js';
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

</style>

<div class="container">
  <div class="chapter-header">
    <h2>{chapter.one}</h2>
    <p>* * *</p>
  </div>
</div>
