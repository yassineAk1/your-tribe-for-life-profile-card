<script>
	import profielfoto from '$lib/assets/profielfoto.jpg';
	import gym from '$lib/assets/gym2.jpg';
	import eldenRing from '$lib/assets/eldenring2.jpg';
	import kind from '$lib/assets/kind.jpg';
	import cookie from '$lib/assets/cookie.jpeg';
	import vidMarokko from '$lib/assets/vidmarokko.mp4';
	import vidSlovenie from '$lib/assets/vidslovenie.mp4';
	import vidBulgarije from '$lib/assets/vidbulgarije.mp4';
	import vidIjsland from '$lib/assets/vidijsland.mp4';

	let { data } = $props();

	function playVideo(event) {
		event.currentTarget.play().catch(() => {});
	}

	function pauseVideo(event) {
		event.currentTarget.pause();
	}
</script>

<main>

	<section class="profile-card">
		<figure>
			<img src={gym} alt="gym" />
			<figcaption class="card-content"><p>ik houd ervan om actief te zijn, momenteel met de sportschool, hiervoor met Judo en Kung Fu</p></figcaption>
		</figure>

		<figure>
			<video
				src="{vidMarokko}"
				muted
				loop
				playsinline
				preload="metadata"
				onmouseenter={playVideo}
				onmouseleave={pauseVideo}
			></video>
			<figcaption>Marokko</figcaption>
		</figure>

		<figure>
			<img src={eldenRing} alt="Elden Ring" />
			<figcaption class="card-content"><p>Elden Ring mijn favoriete game</p></figcaption>
		</figure>

		<figure>
			<video
				src="{vidSlovenie}"
				muted
				loop
				playsinline
				preload="metadata"
				onmouseenter={playVideo}
				onmouseleave={pauseVideo}
			></video>
			<figcaption>Slovenië</figcaption>
		</figure>

		<figure class="me">
			<img src={profielfoto} alt="profielfoto" />
				<figcaption class="card-content">
					<p class="name">{data.person.name}</p>
					<p class="bio">{data.person.bio}</p>
				</figcaption>
		</figure>

		<figure>
			<video
				src="{vidBulgarije}"
				muted
				loop
				playsinline
				preload="metadata"
				onmouseenter={playVideo}
				onmouseleave={pauseVideo}
			></video>
			<figcaption>Bulgarije</figcaption>
		</figure>

		<figure>
			<img src={kind} alt="foto als kind" />
			<figcaption class="card-content"><p>Een foto van mij als kind</p></figcaption>
		</figure>

		<figure>
			<video
				src="{vidIjsland}"
				muted
				loop
				playsinline
				preload="metadata"
				onmouseenter={playVideo}
				onmouseleave={pauseVideo}
			></video>
			<figcaption>IJsland</figcaption>
		</figure>

		<figure>
			<img src={cookie} alt="Mijn kat" />
			<figcaption class="card-content"><p>Mijn kat cookie die 3 jaar oud is en van slapen op de bank houdt</p></figcaption>
		</figure>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		background-color: #fffafa;
		background-image: url('$lib/assets/12.png');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	main {
		display: grid;
		place-items: center;
		min-height: 100dvh;
		padding: 1rem;
		box-sizing: border-box;
	}

	.profile-card {
		--zoom: 1.8;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: .25rem;
		width: 100%;
		max-width: 30rem;
		padding: 1.5rem;
		box-sizing: border-box;
		background-color: transparent;

		@media (min-width: 40em) {
			max-width: 30rem;
			padding: 2.5rem 1.75rem;
		}

		figure {
			position: relative;
			aspect-ratio: 4 / 5;
			margin: 0;
			background-color: #555;

			@media (prefers-reduced-motion: no-preference) {
				transition: scale .3s ease-out;
			}

			&:hover {
				z-index: 1;
				scale: var(--zoom);
				background-color: transparent;
				filter: drop-shadow(0 .1rem .5rem rgb(0 0 0 / .5));

				img {
					object-fit: contain;
				}
			}
		}

		img,
		video {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		figcaption {
			position: absolute;
			inset: 0 0 auto;
			padding: .25rem .5rem;
			color: #fff;
			pointer-events: none;
			font-family:'times new roman', 'Arial Narrow', Arial, sans-serif
		}

		figcaption.card-content {
			inset: 0;
			display: grid;
			align-content: center;
			gap: .5em;
			padding: 1em;
			background-color: rgb(0 0 0 / .7);
			font-size: calc(0.8rem / var(--zoom));
			opacity: 0;
			transition: opacity .25s ease-out;
		}

		figure:hover .card-content {
			opacity: 1;
		}

		.name,
		.bio {
			margin: 0;
		}

		.name {
			font-size: 1.1em;
			font-weight: 400;
		}

		.bio {
			line-height: 1.5;
			opacity: .8;
		}
	}
</style>
