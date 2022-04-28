<script>
	import { setBackground } from '../lib/utils'

	setBackground("url('./src/assets/home/background-home-desktop.jpg')")
</script>

<div class="landing-text flow" style="--spacer: 2em;">
	<h1 class="font-sans fs-800 text-light uppercase letter-gap-lg">
		so, you want to travel to <span class="font-serif text-white fs-xxl">space</span>
	</h1>
	<p class="text-light fs-400">
		Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
		hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
		this world experience!
	</p>
</div>
<div class="landing-btn">
	<a href="/destinations" class="btn-large link fs-900 font-serif uppercase bg-white text-dark"
		>explore</a
	>
</div>

<style>
	.landing-text {
		max-width: 450px;
		align-self: flex-end;
	}

	.landing-btn {
		align-self: flex-end;
		margin-left: auto;
	}

	span {
		display: block;
	}
</style>
