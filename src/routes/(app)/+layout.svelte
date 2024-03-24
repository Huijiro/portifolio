<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { browser } from '$app/environment';
	import Footer from '$lib/footer/footer.svelte';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<Header />
<main class="h-full w-full overflow-scroll">
	<slot />
	<Footer />
</main>
