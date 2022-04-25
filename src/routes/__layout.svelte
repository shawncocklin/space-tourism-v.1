<script>
	import Nav from '$lib/Nav.svelte'
</script>

<Nav />
<main class="grid-container">
	<slot><!-- optional fallback --></slot>
</main>

<style>
	.grid-container {
		--container-gap: 3rem;
	}
</style>
