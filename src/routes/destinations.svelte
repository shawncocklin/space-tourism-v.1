<script>
	// TODO: get aria-selected toggling to work
	// TODO: get default display
	import { setBackground } from '../lib/utils'
	import data from '../data.json'

	setBackground("url('./src/assets/destination/background-destination-desktop.jpg')")

	const destinationData = data.destinations
	let displayedItem = ''
	let destination = []

	function updateData(e) {
		let tabSelected = e.target.closest('button').getAttribute('aria-selected')
		console.log(tabSelected)
		if (tabSelected === true) {
			e.target.closest('button').setAttribute('aria-selected', 'false')
		} else {
			e.target.closest('button').setAttribute('aria-selected', 'true')
		}
		displayedItem = e.target.dataset.image
		destination = destinationData
			.filter((item) => {
				return item.name === displayedItem
			})
			.reduce((item) => ({ [item.key]: item.value }))
		// console.log(destination)
	}
</script>

<h1 class="font-sans fs-800 uppercase letter-gap-lg">
	<span class="text-white-muted bold" style="margin-right: 1em;">01</span> pick your destination
</h1>

<img
	src={`../src/assets/destination/${destination.images}`}
	alt={`image of ${destination.images}`}
/>

<section class="destinations">
	<div class="tab-nav state-indicators flex" style="margin-bottom: 2rem;">
		<button
			on:click={updateData}
			aria-selected="true"
			data-image="Moon"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Moon</button
		>
		<button
			on:click={updateData}
			aria-selected="false"
			data-image="Mars"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Mars</button
		>
		<button
			on:click={updateData}
			aria-selected="false"
			data-image="Europa"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Europa</button
		>
		<button
			on:click={updateData}
			aria-selected="false"
			data-image="Titan"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Titan</button
		>
	</div>
	<article class="flow" style="--spacer: 2em;">
		<div class="text">
			<p class="font-serif fs-xl uppercase">{destination.name}</p>
			<p class="body-text fs-400 text-light">
				{destination.description}
			</p>
		</div>
		<div class="stats flex" style="--gap: 5em;">
			<p class="font-sans text-light fs-xs uppercase">
				avg. distance<span class="font-serif fs-800 text-white">{destination.distance}</span>
			</p>
			<p class="font-sans text-light fs-xs uppercase">
				est. travel time<span class="font-serif fs-800 text-white">{destination.travel}</span>
			</p>
		</div>
	</article>
</section>

<style>
	img {
		grid-column: 2 / span 1;
	}

	.destinations {
		max-width: 445px;
	}

	.stats span {
		display: block;
	}
</style>
