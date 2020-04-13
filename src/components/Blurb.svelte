<script>
 export let blurbCopy;
 export let TravlerCopy;
 export let dateCopy;
</script>

<style media="screen" lang="scss">
	@import "./style/theme.scss";
  .blurb {
    margin: 6rem 14rem;
  }
  .blurb p {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    text-align: center;
    color: $lightgrey;

  }
  .blurb p:first-child {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

@media screen and (max-width: 1023px) {
	.blurb {
		margin: 4rem 1rem !important;
	}
	.blurb p:first-child {
		font-size: 1.5rem;
	}
}
</style>

<div class="container blurb">
  <p>{blurbCopy}</p>
  <p>* * *</p>
  <p>{TravlerCopy}</p>
  <p>{dateCopy}</p>
</div>
