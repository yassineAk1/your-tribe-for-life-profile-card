<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
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
