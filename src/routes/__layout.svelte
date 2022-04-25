<script>
	import Nav from '$lib/Nav.svelte'
</script>

<Nav />
<main class="container flex" style="--width: 100rem;">
	<slot><!-- optional fallback --></slot>
</main>

<style>
	.container {
		height: 100vh;
		justify-content: space-between;
		align-items: center;
	}
</style>
