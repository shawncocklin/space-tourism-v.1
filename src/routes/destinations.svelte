<h1 class="font-sans fs-800 uppercase letter-gap-lg">
	<span class="text-white-muted bold" style="margin-right: 1em;">01</span> pick your destination
</h1>

<img src="./src/assets/destination/image-moon.png" alt="the moon" />

<section class="destinations">
	<div class="tab-nav state-indicators flex" style="margin-bottom: 2rem;">
		<button
			aria-selected="true"
			data-image="moon"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Moon</button
		>
		<button
			aria-selected="false"
			data-image="mars"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Mars</button
		>
		<button
			aria-selected="false"
			data-image="europa"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Europa</button
		>
		<button
			aria-selected="false"
			data-image="titan"
			class="uppercase text-light font-sans fs-400 letter-gap-md">Titan</button
		>
	</div>
	<article class="flow" style="--spacer: 2em;">
		<div class="text">
			<p class="font-serif fs-xl uppercase">Moon</p>
			<p class="body-text fs-400 text-light">
				See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
				perspective and come back refreshed. While you’re there, take in some history by visiting
				the Luna 2 and Apollo 11 landing sites.
			</p>
		</div>
		<div class="stats flex" style="--gap: 5em;">
			<p class="font-sans text-light fs-xs uppercase">
				avg. distance<span class="font-serif fs-800 text-white">384,400 km</span>
			</p>
			<p class="font-sans text-light fs-xs uppercase">
				est. travel time<span class="font-serif fs-800 text-white">3days</span>
			</p>
		</div>
	</article>
</section>

<style>
	:global(body) {
		background-image: url('../assets/destination/background-destination-desktop.jpg');
	}
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
