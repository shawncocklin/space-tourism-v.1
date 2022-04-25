<script>
	import Nav from '$lib/Nav.svelte'
</script>

<Nav />
<main class="container grid">
	<slot><!-- optional fallback --></slot>
</main>

<style>
	.grid {
		grid-template-columns: 1fr 450px 2fr 274px 1fr;
	}
</style>
